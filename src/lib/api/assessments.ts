import type { Database } from '../database.types';
import { supabase } from '../supabase';

export type Language = Database['public']['Tables']['languages']['Row'];
export type YearGroup = Database['public']['Tables']['year_groups']['Row'];
export type Assessment = Database['public']['Tables']['assessments']['Row'];
export type AssessmentSection = Database['public']['Tables']['assessment_sections']['Row'];
export type AssessmentItem = Database['public']['Tables']['assessment_items']['Row'];

export interface StudentCatalog {
  languages: Language[];
  yearGroups: YearGroup[];
  assessments: Assessment[];
  sections: AssessmentSection[];
  items: AssessmentItem[];
  labels: Record<string, Record<string, string>>;
  showAllYearsEnabled: boolean;
}

export async function getStudentCatalog(profileId: string): Promise<StudentCatalog> {
  if (!supabase) throw new Error('Supabase is not configured.');

  const { data: profileLanguages, error: profileLanguagesError } = await supabase
    .from('profile_languages')
    .select('language_id')
    .eq('profile_id', profileId);
  if (profileLanguagesError) throw profileLanguagesError;

  const languageIds = profileLanguages.map(({ language_id }) => language_id);
  const [languagesResult, yearsResult, assessmentsResult, settingResult] = await Promise.all([
    languageIds.length
      ? supabase.from('languages').select('*').in('id', languageIds).order('sort_order')
      : Promise.resolve({ data: [], error: null }),
    supabase.from('year_groups').select('*').order('sort_order'),
    supabase.from('assessments').select('*').eq('status', 'published').order('sort_order'),
    supabase.from('app_settings').select('show_all_years').eq('key', 'show_all_years').maybeSingle(),
  ]);
  if (languagesResult.error) throw languagesResult.error;
  if (yearsResult.error) throw yearsResult.error;
  if (assessmentsResult.error) throw assessmentsResult.error;
  if (settingResult.error) throw settingResult.error;

  const assessmentIds = assessmentsResult.data.map(({ id }) => id);
  const sectionsResult = assessmentIds.length
    ? await supabase.from('assessment_sections').select('*').in('assessment_id', assessmentIds).order('sort_order')
    : { data: [], error: null };
  if (sectionsResult.error) throw sectionsResult.error;

  const sectionIds = sectionsResult.data.map(({ id }) => id);
  const itemsResult = sectionIds.length
    ? await supabase.from('assessment_items').select('*').in('section_id', sectionIds).order('sort_order')
    : { data: [], error: null };
  if (itemsResult.error) throw itemsResult.error;

  const labelResult = languageIds.length
    ? await supabase.from('ui_labels').select('*').in('language_id', languageIds)
    : { data: [], error: null };
  if (labelResult.error) throw labelResult.error;

  const languageCodeById = new Map(languagesResult.data.map(language => [language.id, language.code]));
  const labels: StudentCatalog['labels'] = {};
  for (const label of labelResult.data) {
    const code = languageCodeById.get(label.language_id);
    if (code) (labels[code] ??= {})[label.key] = label.value;
  }

  return {
    languages: languagesResult.data,
    yearGroups: yearsResult.data,
    assessments: assessmentsResult.data,
    sections: sectionsResult.data,
    items: itemsResult.data,
    labels,
    showAllYearsEnabled: settingResult.data?.show_all_years ?? false,
  };
}

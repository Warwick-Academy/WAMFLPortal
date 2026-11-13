import type { Database } from '../database.types';
import { supabase } from '../supabase';

type Language = Database['public']['Tables']['languages']['Row'];
type YearGroup = Database['public']['Tables']['year_groups']['Row'];

export interface ProfileFormOptions {
  languages: Language[];
  yearGroups: YearGroup[];
  selectedLanguageIds: string[];
}

export async function getProfileFormOptions(profileId: string): Promise<ProfileFormOptions> {
  if (!supabase) throw new Error('Supabase is not configured.');

  const [languagesResult, yearsResult, profileLanguagesResult] = await Promise.all([
    supabase.from('languages').select('*').order('sort_order'),
    supabase.from('year_groups').select('*').eq('active', true).order('sort_order'),
    supabase.from('profile_languages').select('language_id').eq('profile_id', profileId),
  ]);
  if (languagesResult.error) throw languagesResult.error;
  if (yearsResult.error) throw yearsResult.error;
  if (profileLanguagesResult.error) throw profileLanguagesResult.error;

  return {
    languages: languagesResult.data,
    yearGroups: yearsResult.data,
    selectedLanguageIds: profileLanguagesResult.data.map(({ language_id }) => language_id),
  };
}

export async function saveProfile(
  profileId: string,
  values: { firstName: string; lastName: string; yearGroupId: string; languageIds: string[] },
): Promise<void> {
  if (!supabase) throw new Error('Supabase is not configured.');

  const { data: existingLinks, error: existingError } = await supabase
    .from('profile_languages')
    .select('language_id')
    .eq('profile_id', profileId);
  if (existingError) throw existingError;

  const links = values.languageIds.map(languageId => ({
    profile_id: profileId,
    language_id: languageId,
  }));
  const { error: saveLanguagesError } = await supabase
    .from('profile_languages')
    .upsert(links, { onConflict: 'profile_id,language_id' });
  if (saveLanguagesError) throw saveLanguagesError;

  for (const { language_id: existingLanguageId } of existingLinks) {
    if (values.languageIds.includes(existingLanguageId)) continue;
    const { error } = await supabase
      .from('profile_languages')
      .delete()
      .eq('profile_id', profileId)
      .eq('language_id', existingLanguageId);
    if (error) throw error;
  }

  const { error: profileError } = await supabase
    .from('profiles')
    .update({
      first_name: values.firstName,
      last_name: values.lastName,
      year_group_id: values.yearGroupId,
      profile_completed: true,
    })
    .eq('id', profileId);
  if (profileError) throw profileError;
}

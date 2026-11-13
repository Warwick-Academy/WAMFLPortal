import type { Database } from '../database.types';
import { supabase } from '../supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Language = Database['public']['Tables']['languages']['Row'];
type YearGroup = Database['public']['Tables']['year_groups']['Row'];
type Assessment = Database['public']['Tables']['assessments']['Row'];
type Section = Database['public']['Tables']['assessment_sections']['Row'];
type Item = Database['public']['Tables']['assessment_items']['Row'];
type AuditEntry = Database['public']['Tables']['audit_log']['Row'];

export interface AdminAuditEntry extends AuditEntry {
  actorName: string | null;
  actorEmail: string | null;
}

export type UserSortColumn = 'first_name' | 'last_name' | 'email' | 'year_group_id'
  | 'role' | 'profile_completed' | 'created_at' | 'last_login_at';

export interface AdminUserFilters {
  page: number;
  pageSize: number;
  search: string;
  yearGroupId: string;
  languageId: string;
  role: '' | 'student' | 'teacher_admin';
  incompleteOnly: boolean;
  sortBy: UserSortColumn;
  ascending: boolean;
}

export interface AdminUser extends Profile {
  yearName: string | null;
  languages: string[];
  languageIds: string[];
}

export interface AdminAssessment extends Assessment {
  sections: (Section & { items: Item[] })[];
}

export interface AdminDashboard {
  totalUsers: number;
  incompleteProfiles: number;
  usersByYear: { label: string; count: number }[];
  usersByLanguage: { label: string; count: number }[];
  assessmentsByStatus: { label: string; count: number }[];
  lastSignIns: Pick<Profile, 'id' | 'first_name' | 'last_name' | 'email' | 'last_login_at'>[];
}

export interface AdminReferences {
  languages: Language[];
  yearGroups: YearGroup[];
  allowlist: Database['public']['Tables']['admin_allowlist']['Row'][];
}

export interface DraftSection {
  id?: string;
  title: string;
  instructions: string;
  status: Section['status'];
  sort_order: number;
  items: DraftItem[];
}

export interface DraftItem {
  id?: string;
  prompt: string;
  hint: string;
  response_type: string;
  field_config: Database['public']['Tables']['assessment_items']['Row']['field_config'];
  sort_order: number;
}

export interface AssessmentDraft {
  id?: string;
  language_id: string;
  year_group_id: string;
  term: string;
  title: string;
  subtitle: string;
  sort_order: number;
  sections: DraftSection[];
}

function requireSupabase() {
  if (!supabase) throw new Error('Supabase is not configured.');
  return supabase;
}

export async function getAdminReferences(): Promise<AdminReferences> {
  const client = requireSupabase();
  const [languages, yearGroups, allowlist] = await Promise.all([
    client.from('languages').select('*').order('sort_order'),
    client.from('year_groups').select('*').order('sort_order'),
    client.from('admin_allowlist').select('*').order('email'),
  ]);
  if (languages.error) throw languages.error;
  if (yearGroups.error) throw yearGroups.error;
  if (allowlist.error) throw allowlist.error;
  return { languages: languages.data, yearGroups: yearGroups.data, allowlist: allowlist.data };
}

export async function getAdminDashboard(): Promise<AdminDashboard> {
  const client = requireSupabase();
  const [total, incomplete, languages, years, draft, published, archived, signIns] = await Promise.all([
    client.from('profiles').select('id', { count: 'exact', head: true }),
    client.from('profiles').select('id', { count: 'exact', head: true }).eq('profile_completed', false),
    client.from('languages').select('id, name').order('sort_order'),
    client.from('year_groups').select('id, name').order('sort_order'),
    client.from('assessments').select('id', { count: 'exact', head: true }).eq('status', 'draft'),
    client.from('assessments').select('id', { count: 'exact', head: true }).eq('status', 'published'),
    client.from('assessments').select('id', { count: 'exact', head: true }).eq('status', 'archived'),
    client.from('profiles').select('id, first_name, last_name, email, last_login_at')
      .not('last_login_at', 'is', null).order('last_login_at', { ascending: false }).limit(10),
  ]);
  for (const result of [total, incomplete, languages, years, draft, published, archived, signIns]) {
    if (result.error) throw result.error;
  }
  if (!years.data || !languages.data || !signIns.data) {
    throw new Error('Unable to load dashboard data.');
  }

  const yearCounts = await Promise.all(years.data.map(async year => {
    const result = await client.from('profiles').select('id', { count: 'exact', head: true }).eq('year_group_id', year.id);
    if (result.error) throw result.error;
    return { label: year.name, count: result.count ?? 0 };
  }));
  const languageCounts = await Promise.all(languages.data.map(async language => {
    const result = await client.from('profile_languages').select('profile_id', { count: 'exact', head: true })
      .eq('language_id', language.id);
    if (result.error) throw result.error;
    return { label: language.name, count: result.count ?? 0 };
  }));

  return {
    totalUsers: total.count ?? 0,
    incompleteProfiles: incomplete.count ?? 0,
    usersByYear: yearCounts,
    usersByLanguage: languageCounts,
    assessmentsByStatus: [
      { label: 'Draft', count: draft.count ?? 0 },
      { label: 'Published', count: published.count ?? 0 },
      { label: 'Archived', count: archived.count ?? 0 },
    ],
    lastSignIns: signIns.data,
  };
}

export async function getAdminUsers(filters: AdminUserFilters): Promise<{ users: AdminUser[]; total: number }> {
  const client = requireSupabase();
  let languageProfileIds: string[] | null = null;
  if (filters.languageId) {
    const links = await client.from('profile_languages').select('profile_id').eq('language_id', filters.languageId);
    if (links.error) throw links.error;
    languageProfileIds = links.data.map(({ profile_id }) => profile_id);
    if (!languageProfileIds.length) return { users: [], total: 0 };
  }

  let query = client.from('profiles').select('*', { count: 'exact' });
  if (filters.search.trim()) {
    const safeSearch = filters.search.trim().replace(/[^\p{L}\p{N}@._+' -]/gu, ' ').replace(/[%*]/gu, '');
    if (safeSearch) {
      const term = `%${safeSearch}%`;
      query = query.or(`first_name.ilike.${term},last_name.ilike.${term},email.ilike.${term}`);
    }
  }
  if (filters.yearGroupId) query = query.eq('year_group_id', filters.yearGroupId);
  if (filters.role) query = query.eq('role', filters.role);
  if (filters.incompleteOnly) query = query.eq('profile_completed', false);
  if (languageProfileIds) query = query.in('id', languageProfileIds);
  const result = await query.order(filters.sortBy, { ascending: filters.ascending, nullsFirst: false })
    .range(filters.page * filters.pageSize, (filters.page + 1) * filters.pageSize - 1);
  if (result.error) throw result.error;

  const profileIds = result.data.map(({ id }) => id);
  if (!profileIds.length) return { users: [], total: result.count ?? 0 };
  const links = await client.from('profile_languages').select('profile_id, language_id').in('profile_id', profileIds);
  if (links.error) throw links.error;
  const languageIds = [...new Set(links.data.map(({ language_id }) => language_id))];
  const languageRows = languageIds.length
    ? await client.from('languages').select('id, name').in('id', languageIds)
    : { data: [], error: null };
  if (languageRows.error) throw languageRows.error;

  const languageById = new Map(languageRows.data.map(language => [language.id, language.name]));
  const languageNamesByProfile = new Map<string, string[]>();
  for (const link of links.data) {
    const name = languageById.get(link.language_id);
    if (name) languageNamesByProfile.set(link.profile_id, [...(languageNamesByProfile.get(link.profile_id) ?? []), name]);
  }
  const yearRows = await client.from('year_groups').select('id, name');
  if (yearRows.error) throw yearRows.error;
  const yearById = new Map(yearRows.data.map(year => [year.id, year.name]));

  return {
    users: result.data.map(user => ({
      ...user,
      yearName: user.year_group_id ? yearById.get(user.year_group_id) ?? null : null,
      languages: languageNamesByProfile.get(user.id) ?? [],
      languageIds: links.data.filter(link => link.profile_id === user.id).map(link => link.language_id),
    })),
    total: result.count ?? 0,
  };
}

export async function changeUserRole(userId: string, role: Profile['role']): Promise<void> {
  const { error } = await requireSupabase().from('profiles').update({ role }).eq('id', userId);
  if (error) throw error;
}

export async function forceProfileReentry(userId: string): Promise<void> {
  const { error } = await requireSupabase().from('profiles')
    .update({ profile_completed: false }).eq('id', userId);
  if (error) throw error;
}

export async function setUsersYear(userIds: string[], yearGroupId: string): Promise<void> {
  if (!userIds.length) return;
  const { error } = await requireSupabase().from('profiles')
    .update({ year_group_id: yearGroupId }).in('id', userIds);
  if (error) throw error;
}

export async function deleteUser(userId: string, confirmationEmail: string): Promise<void> {
  const { error } = await requireSupabase().rpc('delete_auth_user', {
    target_user: userId,
    confirmation_email: confirmationEmail,
  });
  if (error) throw error;
}

export async function addAdminEmail(email: string): Promise<void> {
  const { error } = await requireSupabase().from('admin_allowlist').insert({ email: email.trim().toLowerCase() });
  if (error) throw error;
}

export async function removeAdminEmail(email: string): Promise<void> {
  const { error } = await requireSupabase().from('admin_allowlist').delete().eq('email', email);
  if (error) throw error;
}

export async function listAdminAssessments(): Promise<AdminAssessment[]> {
  const client = requireSupabase();
  const assessments = await client.from('assessments').select('*').order('updated_at', { ascending: false });
  if (assessments.error) throw assessments.error;
  if (!assessments.data.length) return [];
  const sections = await client.from('assessment_sections').select('*')
    .in('assessment_id', assessments.data.map(({ id }) => id)).order('sort_order');
  if (sections.error) throw sections.error;
  const sectionIds = sections.data.map(({ id }) => id);
  const items = sectionIds.length
    ? await client.from('assessment_items').select('*').in('section_id', sectionIds).order('sort_order')
    : { data: [], error: null };
  if (items.error) throw items.error;

  const itemsBySection = new Map<string, Item[]>();
  for (const item of items.data) {
    itemsBySection.set(item.section_id, [...(itemsBySection.get(item.section_id) ?? []), item]);
  }
  const sectionsByAssessment = new Map<string, (Section & { items: Item[] })[]>();
  for (const section of sections.data) {
    sectionsByAssessment.set(section.assessment_id, [
      ...(sectionsByAssessment.get(section.assessment_id) ?? []),
      { ...section, items: itemsBySection.get(section.id) ?? [] },
    ]);
  }
  return assessments.data.map(assessment => ({
    ...assessment,
    sections: sectionsByAssessment.get(assessment.id) ?? [],
  }));
}

export async function saveAssessmentDraft(draft: AssessmentDraft, createdBy: string): Promise<AssessmentDraft & { id: string }> {
  const client = requireSupabase();
  const assessmentId = draft.id ?? crypto.randomUUID();
  const metadata = {
    language_id: draft.language_id,
    year_group_id: draft.year_group_id,
    term: draft.term.trim(),
    title: draft.title.trim(),
    subtitle: draft.subtitle.trim() || null,
    status: 'draft' as const,
    sort_order: draft.sort_order,
  };
  const assessmentResult = draft.id
    ? await client.from('assessments').update(metadata).eq('id', assessmentId)
    : await client.from('assessments').insert({
      ...metadata,
      id: assessmentId,
      legacy_key: null,
      created_by: createdBy,
    });
  if (assessmentResult.error) throw assessmentResult.error;

  const oldSections = await client.from('assessment_sections').select('id').eq('assessment_id', assessmentId);
  if (oldSections.error) throw oldSections.error;
  const oldSectionIds = oldSections.data.map(({ id }) => id);
  const oldItems = oldSectionIds.length
    ? await client.from('assessment_items').select('id').in('section_id', oldSectionIds)
    : { data: [], error: null };
  if (oldItems.error) throw oldItems.error;

  const sections = draft.sections.map((section, index) => ({
    ...section,
    id: section.id ?? crypto.randomUUID(),
    assessment_id: assessmentId,
    instructions: section.instructions.trim() || null,
    sort_order: index,
  }));
  if (sections.length) {
    const { error } = await client.from('assessment_sections').upsert(sections.map(({
      id, assessment_id, title, instructions, status, sort_order,
    }) => ({ id, assessment_id, title: title.trim(), instructions, status, sort_order })));
    if (error) throw error;
  }

  const items = sections.flatMap(section => section.items.map((item, index) => ({
    id: item.id ?? crypto.randomUUID(),
    section_id: section.id,
    prompt: item.prompt.trim(),
    hint: item.hint.trim() || null,
    response_type: item.response_type,
    field_config: item.field_config,
    sort_order: index,
  })));
  if (items.length) {
    const { error } = await client.from('assessment_items').upsert(items);
    if (error) throw error;
  }

  const currentItemIds = new Set(items.map(({ id }) => id));
  const staleItemIds = oldItems.data.map(({ id }) => id).filter(id => !currentItemIds.has(id));
  if (staleItemIds.length) {
    const { error } = await client.from('assessment_items').delete().in('id', staleItemIds);
    if (error) throw error;
  }
  const currentSectionIds = new Set(sections.map(({ id }) => id));
  const staleSectionIds = oldSectionIds.filter(id => !currentSectionIds.has(id));
  if (staleSectionIds.length) {
    const { error } = await client.from('assessment_sections').delete().in('id', staleSectionIds);
    if (error) throw error;
  }

  return {
    ...draft,
    id: assessmentId,
    sections: sections.map(section => ({
      ...section,
      instructions: section.instructions ?? '',
      items: section.items.map((item, index) => ({ ...item, id: items.find(candidate =>
        candidate.section_id === section.id && candidate.sort_order === index)?.id })),
    })),
  };
}

export async function setAssessmentStatus(id: string, status: Assessment['status']): Promise<void> {
  const { error } = await requireSupabase().from('assessments').update({ status }).eq('id', id);
  if (error) throw error;
}

export async function deleteAssessment(id: string): Promise<void> {
  const { error } = await requireSupabase().from('assessments').delete().eq('id', id);
  if (error) throw error;
}

export async function saveLanguage(language: Pick<Language, 'id' | 'code' | 'name' | 'sort_order' | 'active'> | Omit<Language, 'id'>): Promise<void> {
  const client = requireSupabase();
  const result = 'id' in language
    ? await client.from('languages').update(language).eq('id', language.id)
    : await client.from('languages').insert(language);
  if (result.error) throw result.error;
}

export async function saveYearGroup(year: Pick<YearGroup, 'id' | 'name' | 'sort_order' | 'active'> | Omit<YearGroup, 'id'>): Promise<void> {
  const client = requireSupabase();
  const result = 'id' in year
    ? await client.from('year_groups').update(year).eq('id', year.id)
    : await client.from('year_groups').insert(year);
  if (result.error) throw result.error;
}

export async function getShowAllYearsSetting(): Promise<boolean> {
  const { data, error } = await requireSupabase().from('app_settings')
    .select('show_all_years').eq('key', 'show_all_years').maybeSingle();
  if (error) throw error;
  return data?.show_all_years ?? true;
}

export async function setShowAllYearsSetting(enabled: boolean): Promise<void> {
  const { error } = await requireSupabase().from('app_settings').upsert({
    key: 'show_all_years',
    show_all_years: enabled,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'key' });
  if (error) throw error;
}

export async function getAuditEntries(filters: {
  page: number;
  pageSize: number;
  entity: string;
  action: string;
}): Promise<{ entries: AdminAuditEntry[]; total: number }> {
  const client = requireSupabase();
  let query = client.from('audit_log').select('*', { count: 'exact' });
  if (filters.entity) query = query.eq('entity', filters.entity);
  if (filters.action) query = query.eq('action', filters.action);
  const result = await query.order('created_at', { ascending: false })
    .range(filters.page * filters.pageSize, (filters.page + 1) * filters.pageSize - 1);
  if (result.error) throw result.error;
  const actorIds = [...new Set(result.data.flatMap(entry => entry.actor_id ? [entry.actor_id] : []))];
  const actors = actorIds.length
    ? await client.from('profiles').select('id, first_name, last_name, email').in('id', actorIds)
    : { data: [], error: null };
  if (actors.error) throw actors.error;
  const actorById = new Map(actors.data.map(actor => [
    actor.id,
    {
      name: [actor.first_name, actor.last_name].filter(Boolean).join(' ') || null,
      email: actor.email,
    },
  ]));
  return {
    entries: result.data.map(entry => ({
      ...entry,
      actorName: entry.actor_id ? actorById.get(entry.actor_id)?.name ?? null : null,
      actorEmail: entry.actor_id ? actorById.get(entry.actor_id)?.email ?? null : null,
    })),
    total: result.count ?? 0,
  };
}

export async function exportAllUsers(filters: Omit<AdminUserFilters, 'page'>): Promise<AdminUser[]> {
  const users: AdminUser[] = [];
  let page = 0;
  while (true) {
    const result = await getAdminUsers({ ...filters, page, pageSize: 500 });
    users.push(...result.users);
    if (users.length >= result.total || result.users.length === 0) return users;
    page += 1;
  }
}

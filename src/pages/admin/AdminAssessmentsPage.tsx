import { useEffect, useMemo, useState } from 'react';
import {
  deleteAssessment,
  getAdminReferences,
  listAdminAssessments,
  saveAssessmentDraft,
  setAssessmentStatus,
  type AdminAssessment,
  type AdminReferences,
  type AssessmentDraft,
  type DraftSection,
} from '../../lib/api/admin';
import { useAuth } from '../../lib/auth/AuthProvider';

type StatusFilter = '' | 'draft' | 'published' | 'archived';

export function AdminAssessmentsPage() {
  const { user } = useAuth();
  const [assessments, setAssessments] = useState<AdminAssessment[]>([]);
  const [references, setReferences] = useState<AdminReferences | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [termFilter, setTermFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('');
  const [creating, setCreating] = useState(false);
  const [templateId, setTemplateId] = useState('');
  const [draft, setDraft] = useState<AssessmentDraft | null>(null);
  const [savedStatus, setSavedStatus] = useState<AdminAssessment['status']>('draft');
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const [assessmentRows, referenceRows] = await Promise.all([
        listAdminAssessments(),
        getAdminReferences(),
      ]);
      setAssessments(assessmentRows);
      setReferences(referenceRows);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to load assessments.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void reload(); }, []);

  useEffect(() => {
    if (!draft || !dirty || !draft.id) return;
    const timer = window.setTimeout(() => { void saveDraft(true); }, 1000);
    return () => window.clearTimeout(timer);
  }, [draft, dirty]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const filteredAssessments = useMemo(() => assessments.filter(assessment =>
    (!languageFilter || assessment.language_id === languageFilter)
    && (!yearFilter || assessment.year_group_id === yearFilter)
    && (!termFilter || assessment.term.toLowerCase().includes(termFilter.toLowerCase()))
    && (!statusFilter || assessment.status === statusFilter),
  ), [assessments, languageFilter, yearFilter, termFilter, statusFilter]);

  function startFromTemplate() {
    if (!references) return;
    const template = assessments.find(assessment => assessment.id === templateId);
    setCreating(false);
    setSavedStatus('draft');
    setDraft({
      language_id: template?.language_id ?? references.languages[0]?.id ?? '',
      year_group_id: template?.year_group_id ?? references.yearGroups[0]?.id ?? '',
      term: template?.term ?? '',
      title: template ? `${template.title} (copy)` : '',
      subtitle: template?.subtitle ?? '',
      sort_order: 0,
      sections: template ? cloneSections(template.sections) : [],
    });
    setDirty(true);
    setMessage(null);
  }

  function editAssessment(assessment: AdminAssessment) {
    if (dirty && !window.confirm('Discard unsaved changes?')) return;
    setDraft({
      id: assessment.id,
      language_id: assessment.language_id,
      year_group_id: assessment.year_group_id,
      term: assessment.term,
      title: assessment.title,
      subtitle: assessment.subtitle ?? '',
      sort_order: assessment.sort_order,
      sections: cloneSections(assessment.sections),
    });
    setSavedStatus(assessment.status);
    setDirty(false);
    setCreating(false);
    setMessage(null);
  }

  function updateDraft(patch: Partial<AssessmentDraft>) {
    setDraft(current => current ? { ...current, ...patch } : current);
    setDirty(true);
    setMessage(null);
  }

  function updateSection(index: number, patch: Partial<DraftSection>) {
    if (!draft) return;
    updateDraft({
      sections: draft.sections.map((section, sectionIndex) =>
        sectionIndex === index ? { ...section, ...patch } : section,
      ),
    });
  }

  function updateItem(sectionIndex: number, itemIndex: number, patch: Partial<DraftSection['items'][number]>) {
    if (!draft) return;
    updateSection(sectionIndex, {
      items: draft.sections[sectionIndex].items.map((item, index) =>
        index === itemIndex ? { ...item, ...patch } : item,
      ),
    });
  }

  async function saveDraft(automatic = false): Promise<AssessmentDraft | null> {
    if (!draft || !user || saving) return null;
    setSaving(true);
    setError(null);
    try {
      const saved = await saveAssessmentDraft(draft, user.id);
      setDraft(saved);
      setDirty(false);
      setSavedStatus('draft');
      setMessage(automatic ? 'Draft autosaved.' : 'Draft saved.');
      await reload();
      return saved;
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to save draft.');
      return null;
    } finally {
      setSaving(false);
    }
  }

  async function publishDraft() {
    if (!draft || !user) return;
    const validationMessage = validateForPublish(draft);
    if (validationMessage) {
      setError(validationMessage);
      return;
    }
    const saved = await saveDraft(false);
    if (!saved) return;
    setSaving(true);
    setError(null);
    try {
      await setAssessmentStatus(saved.id!, 'published');
      setSavedStatus('published');
      setMessage('Assessment published.');
      await reload();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to publish assessment.');
    } finally {
      setSaving(false);
    }
  }

  async function changeStatus(status: AdminAssessment['status']) {
    if (!draft?.id) return;
    setSaving(true);
    setError(null);
    try {
      await setAssessmentStatus(draft.id, status);
      setSavedStatus(status);
      setMessage(status === 'draft' ? 'Assessment unpublished.' : 'Assessment archived.');
      await reload();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to change assessment status.');
    } finally {
      setSaving(false);
    }
  }

  async function removeAssessment() {
    if (!draft?.id || !window.confirm('Delete this assessment and all of its sections and prompts? This cannot be undone.')) return;
    setSaving(true);
    setError(null);
    try {
      await deleteAssessment(draft.id);
      setDraft(null);
      setDirty(false);
      setMessage('Assessment deleted.');
      await reload();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to delete assessment.');
    } finally {
      setSaving(false);
    }
  }

  function exportAssessment() {
    if (!draft) return;
    const url = URL.createObjectURL(new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${draft.title.trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/gu, '') || 'assessment'}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }

  function closeEditor() {
    if (dirty && !window.confirm('Discard unsaved changes?')) return;
    setDraft(null);
    setDirty(false);
  }

  return (
    <section aria-labelledby="admin-assessments-heading">
      <p className="eyebrow">Learning content</p>
      <div className="admin-page-heading">
        <h1 id="admin-assessments-heading">Assessments</h1>
        <button type="button" className="primary-button compact-button" onClick={() => {
          if (dirty && !window.confirm('Discard unsaved changes?')) return;
          const defaultTemplate = assessments.find(item => item.legacy_key === 'fr-year-7-term-1-questions-orales');
          setTemplateId(defaultTemplate?.id ?? assessments[0]?.id ?? '');
          setCreating(true);
          setDraft(null);
          setDirty(false);
        }}>New assessment</button>
      </div>
      {message && <p className="success-message" role="status">{message}</p>}
      {error && <p className="error-message" role="alert">{error}</p>}
      {creating && references && (
        <section className="admin-panel template-wizard" aria-labelledby="template-heading">
          <h2 id="template-heading">Start an assessment</h2>
          <label>Start from
            <select value={templateId} onChange={event => setTemplateId(event.target.value)}>
              <option value="">Blank assessment</option>
              {assessments.map(assessment => (
                <option key={assessment.id} value={assessment.id}>
                  {assessment.title} · {languageName(assessment.language_id, references)} · {yearName(assessment.year_group_id, references)}
                </option>
              ))}
            </select>
          </label>
          <div className="template-actions">
            <button type="button" className="primary-button compact-button" onClick={startFromTemplate}>Continue</button>
            <button type="button" className="secondary-button" onClick={() => setCreating(false)}>Cancel</button>
          </div>
        </section>
      )}

      {!draft && (
        <>
          <div className="admin-filter-grid">
            <label>Language<select value={languageFilter} onChange={event => setLanguageFilter(event.target.value)}>
              <option value="">All languages</option>{references?.languages.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select></label>
            <label>Year<select value={yearFilter} onChange={event => setYearFilter(event.target.value)}>
              <option value="">All years</option>{references?.yearGroups.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
            </select></label>
            <label>Term<input value={termFilter} onChange={event => setTermFilter(event.target.value)} /></label>
            <label>Status<select value={statusFilter} onChange={event => setStatusFilter(event.target.value as StatusFilter)}>
              <option value="">All statuses</option><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option>
            </select></label>
          </div>
          <div className="table-scroll admin-panel">
            <table>
              <thead><tr><th>Assessment</th><th>Language</th><th>Year</th><th>Term</th><th>Status</th><th>Updated</th><th>Action</th></tr></thead>
              <tbody>
                {filteredAssessments.map(assessment => (
                  <tr key={assessment.id}>
                    <td>{assessment.title}</td>
                    <td>{languageName(assessment.language_id, references)}</td>
                    <td>{yearName(assessment.year_group_id, references)}</td>
                    <td>{assessment.term}</td>
                    <td>{assessment.status}</td>
                    <td>{new Date(assessment.updated_at).toLocaleDateString()}</td>
                    <td><button type="button" onClick={() => editAssessment(assessment)}>Edit</button></td>
                  </tr>
                ))}
                {!loading && filteredAssessments.length === 0 && <tr><td colSpan={7}>No assessments match these filters.</td></tr>}
              </tbody>
            </table>
            {loading && <p aria-live="polite">Loading assessments…</p>}
          </div>
        </>
      )}

      {draft && references && (
        <AssessmentEditor
          draft={draft}
          references={references}
          status={savedStatus}
          dirty={dirty}
          saving={saving}
          error={error}
          updateDraft={updateDraft}
          updateSection={updateSection}
          updateItem={updateItem}
          save={() => void saveDraft(false)}
          publish={() => void publishDraft()}
          unpublish={() => void changeStatus('draft')}
          archive={() => void changeStatus('archived')}
          remove={() => void removeAssessment()}
          close={closeEditor}
          exportJson={exportAssessment}
        />
      )}
    </section>
  );
}

function AssessmentEditor({
  draft,
  references,
  status,
  dirty,
  saving,
  error,
  updateDraft,
  updateSection,
  updateItem,
  save,
  publish,
  unpublish,
  archive,
  remove,
  close,
  exportJson,
}: {
  draft: AssessmentDraft;
  references: AdminReferences;
  status: AdminAssessment['status'];
  dirty: boolean;
  saving: boolean;
  error: string | null;
  updateDraft: (patch: Partial<AssessmentDraft>) => void;
  updateSection: (index: number, patch: Partial<DraftSection>) => void;
  updateItem: (sectionIndex: number, itemIndex: number, patch: Partial<DraftSection['items'][number]>) => void;
  save: () => void;
  publish: () => void;
  unpublish: () => void;
  archive: () => void;
  remove: () => void;
  close: () => void;
  exportJson: () => void;
}) {
  return (
    <section className="assessment-editor" aria-labelledby="assessment-editor-heading">
      <div className="admin-page-heading">
        <div><p className="eyebrow">{draft.id ? status : 'New draft'}{dirty ? ' · Unsaved changes' : ''}</p>
          <h2 id="assessment-editor-heading">Assessment editor</h2></div>
        <button type="button" className="secondary-button" onClick={close}>← Assessment list</button>
      </div>
      {error && <p className="error-message" role="alert">{error}</p>}
      <div className="editor-grid">
        <div className="editor-form">
          <div className="form-grid">
            <label>Language<select value={draft.language_id} onChange={event => updateDraft({ language_id: event.target.value })}>
              {references.languages.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select></label>
            <label>Year group<select value={draft.year_group_id} onChange={event => updateDraft({ year_group_id: event.target.value })}>
              {references.yearGroups.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select></label>
            <label>Term<input value={draft.term} onChange={event => updateDraft({ term: event.target.value })} /></label>
            <label>Title<input value={draft.title} onChange={event => updateDraft({ title: event.target.value })} /></label>
            <label className="full-width-field">Subtitle<input value={draft.subtitle} onChange={event => updateDraft({ subtitle: event.target.value })} /></label>
          </div>

          <div className="editor-sections">
            <div className="admin-page-heading"><h3>Sections</h3>
              <button type="button" className="secondary-button" onClick={() => updateDraft({
                sections: [...draft.sections, { title: '', instructions: '', status: 'open', sort_order: draft.sections.length, items: [] }],
              })}>Add section</button>
            </div>
            {draft.sections.map((section, sectionIndex) => (
              <article className="editor-section" key={section.id ?? `new-section-${sectionIndex}`}>
                <div className="section-title-row">
                  <h4>Section {sectionIndex + 1}</h4>
                  <div className="move-actions">
                    <button type="button" aria-label={`Move section ${sectionIndex + 1} up`} disabled={sectionIndex === 0}
                      onClick={() => moveSection(draft.sections, sectionIndex, -1, updateDraft)}>↑</button>
                    <button type="button" aria-label={`Move section ${sectionIndex + 1} down`} disabled={sectionIndex === draft.sections.length - 1}
                      onClick={() => moveSection(draft.sections, sectionIndex, 1, updateDraft)}>↓</button>
                    <button type="button" className="danger-text" onClick={() => updateDraft({
                      sections: draft.sections.filter((_, index) => index !== sectionIndex),
                    })}>Remove section</button>
                  </div>
                </div>
                <label>Title<input value={section.title} onChange={event => updateSection(sectionIndex, { title: event.target.value })} /></label>
                <label>Instructions<textarea rows={2} value={section.instructions}
                  onChange={event => updateSection(sectionIndex, { instructions: event.target.value })} /></label>
                <label>Status<select value={section.status}
                  onChange={event => updateSection(sectionIndex, { status: event.target.value as DraftSection['status'] })}>
                  <option value="open">Open</option><option value="coming_soon">Coming soon</option><option value="hidden">Hidden</option>
                </select></label>
                <div className="admin-page-heading"><h5>Prompts</h5>
                  <button type="button" className="secondary-button" onClick={() => updateSection(sectionIndex, {
                    items: [...section.items, { prompt: '', hint: '', response_type: 'text', field_config: [], sort_order: section.items.length }],
                  })}>Add prompt</button>
                </div>
                {section.items.map((item, itemIndex) => (
                  <div className="editor-item" key={item.id ?? `new-item-${itemIndex}`}>
                    <div className="move-actions">
                      <button type="button" aria-label={`Move prompt ${itemIndex + 1} up`} disabled={itemIndex === 0}
                        onClick={() => moveItem(section.items, itemIndex, -1, items => updateSection(sectionIndex, { items }))}>↑</button>
                      <button type="button" aria-label={`Move prompt ${itemIndex + 1} down`} disabled={itemIndex === section.items.length - 1}
                        onClick={() => moveItem(section.items, itemIndex, 1, items => updateSection(sectionIndex, { items }))}>↓</button>
                      <button type="button" className="danger-text" onClick={() => updateSection(sectionIndex, {
                        items: section.items.filter((_, index) => index !== itemIndex),
                      })}>Remove</button>
                    </div>
                    <label>Prompt<textarea rows={2} value={item.prompt}
                      onChange={event => updateItem(sectionIndex, itemIndex, { prompt: event.target.value })} /></label>
                    <label>Hint (optional)<input value={item.hint}
                      onChange={event => updateItem(sectionIndex, itemIndex, { hint: event.target.value })} /></label>
                  </div>
                ))}
              </article>
            ))}
          </div>
          <div className="editor-actions">
            <button type="button" className="primary-button compact-button" onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save draft'}</button>
            <button type="button" className="primary-button compact-button publish-button" onClick={publish} disabled={saving}>Publish</button>
            {status === 'published' && <button type="button" className="secondary-button" onClick={unpublish} disabled={saving}>Unpublish</button>}
            {status !== 'archived' && <button type="button" className="secondary-button" onClick={archive} disabled={saving}>Archive</button>}
            {draft.id && <button type="button" className="danger-button" onClick={remove} disabled={saving}>Delete</button>}
            <button type="button" className="secondary-button" onClick={exportJson}>Export JSON</button>
          </div>
          <p className="small-muted" role="status">{dirty ? 'Changes will autosave as a draft.' : 'All changes saved.'}</p>
        </div>
        <AssessmentPreview draft={draft} references={references} />
      </div>
    </section>
  );
}

function AssessmentPreview({ draft, references }: { draft: AssessmentDraft; references: AdminReferences }) {
  const language = references.languages.find(item => item.id === draft.language_id);
  const year = references.yearGroups.find(item => item.id === draft.year_group_id);
  return (
    <aside className="assessment-preview" aria-label="Live student preview">
      <p className="eyebrow">Student preview</p>
      <p className="crumb">{language?.name} / {year?.name} / {draft.term}</p>
      <h3>{draft.title || 'Assessment title'}</h3>
      {draft.subtitle && <p>{draft.subtitle}</p>}
      {draft.sections.map((section, index) => (
        <article className="student-assessment-section" key={section.id ?? `preview-section-${index}`}>
          <div className="section-title-row"><h4>{section.title || `Section ${index + 1}`}</h4>
            {section.status === 'coming_soon' && <span className="tag">Coming soon</span>}</div>
          {section.instructions && <p>{section.instructions}</p>}
          <ol className="student-question-list" lang={language?.code ?? 'en'}>
            {section.items.map((item, itemIndex) => <li key={item.id ?? `preview-prompt-${itemIndex}`}>
              <p>{item.prompt || 'Prompt text'}</p>{item.hint && <small>{item.hint}</small>}
            </li>)}
          </ol>
        </article>
      ))}
    </aside>
  );
}

function cloneSections(sections: AdminAssessment['sections']): DraftSection[] {
  return sections.map((section, sectionIndex) => ({
    title: section.title,
    instructions: section.instructions ?? '',
    status: section.status,
    sort_order: sectionIndex,
    items: section.items.map((item, itemIndex) => ({
      prompt: item.prompt,
      hint: item.hint ?? '',
      response_type: item.response_type,
      field_config: item.field_config,
      sort_order: itemIndex,
    })),
  }));
}

function languageName(id: string, references: AdminReferences | null) {
  return references?.languages.find(item => item.id === id)?.name ?? '—';
}

function yearName(id: string, references: AdminReferences | null) {
  return references?.yearGroups.find(item => item.id === id)?.name ?? '—';
}

function validateForPublish(draft: AssessmentDraft): string | null {
  if (!draft.title.trim()) return 'Add an assessment title before publishing.';
  if (!draft.language_id || !draft.year_group_id) return 'Choose a language and year group before publishing.';
  if (!draft.sections.some(section => section.status === 'open' && section.items.some(item => item.prompt.trim()))) {
    return 'Add at least one prompt to an open section before publishing.';
  }
  return null;
}

function moveSection(
  sections: DraftSection[],
  index: number,
  offset: number,
  update: (patch: Partial<AssessmentDraft>) => void,
) {
  const next = [...sections];
  const target = index + offset;
  [next[index], next[target]] = [next[target], next[index]];
  update({ sections: next });
}

function moveItem<T>(items: T[], index: number, offset: number, update: (next: T[]) => void) {
  const next = [...items];
  const target = index + offset;
  [next[index], next[target]] = [next[target], next[index]];
  update(next);
}

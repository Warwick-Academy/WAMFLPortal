import { useEffect, useState, type FormEvent } from 'react';
import {
  getAdminReferences,
  getShowAllYearsSetting,
  saveLanguage,
  saveYearGroup,
  setShowAllYearsSetting,
  type AdminReferences,
} from '../../lib/api/admin';

export function AdminLanguagesYearsPage() {
  const [references, setReferences] = useState<AdminReferences | null>(null);
  const [showAllEnabled, setShowAllEnabled] = useState(true);
  const [newLanguageCode, setNewLanguageCode] = useState('');
  const [newLanguageName, setNewLanguageName] = useState('');
  const [newYearName, setNewYearName] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const [referenceData, showAllSetting] = await Promise.all([
        getAdminReferences(),
        getShowAllYearsSetting(),
      ]);
      setReferences(referenceData);
      setShowAllEnabled(showAllSetting);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to load languages and years.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void reload(); }, []);

  async function runSave(save: () => Promise<void>, success: string) {
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      await save();
      setMessage(success);
      await reload();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to save changes.');
    } finally {
      setSaving(false);
    }
  }

  async function addLanguage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = newLanguageCode.trim().toLowerCase();
    if (!/^[a-z]{2,8}$/u.test(code) || !newLanguageName.trim()) {
      setError('Use a 2–8 letter language code and enter a language name.');
      return;
    }
    await runSave(async () => {
      await saveLanguage({ code, name: newLanguageName.trim(), sort_order: references?.languages.length ?? 0, active: true });
      setNewLanguageCode('');
      setNewLanguageName('');
    }, 'Language added.');
  }

  async function addYear(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = newYearName.trim();
    if (!name) {
      setError('Enter a year-group name.');
      return;
    }
    await runSave(async () => {
      await saveYearGroup({ name, sort_order: references?.yearGroups.length ?? 0, active: true });
      setNewYearName('');
    }, 'Year group added.');
  }

  if (loading && !references) return <p aria-live="polite">Loading language and year settings…</p>;

  return (
    <section aria-labelledby="admin-languages-heading">
      <p className="eyebrow">Portal settings</p>
      <h1 id="admin-languages-heading">Languages &amp; Years</h1>
      {message && <p className="success-message" role="status">{message}</p>}
      {error && <p className="error-message" role="alert">{error}</p>}

      <section className="admin-panel setting-panel">
        <h2>Student year browsing</h2>
        <label className="inline-checkbox">
          <input type="checkbox" checked={showAllEnabled} disabled={saving}
            onChange={event => {
              const nextValue = event.target.checked;
              setShowAllEnabled(nextValue);
              void runSave(() => setShowAllYearsSetting(nextValue), 'Student “Show all year groups” setting updated.');
            }} />
          Allow students to browse year groups other than their own (students still start on their current year)
        </label>
      </section>

      <div className="admin-management-grid">
        <section className="admin-panel" aria-labelledby="languages-heading">
          <h2 id="languages-heading">Languages</h2>
          <div className="table-scroll"><table>
            <thead><tr><th>Code</th><th>Name</th><th>Order</th><th>Active</th><th>Save</th></tr></thead>
            <tbody>{references?.languages.map(language => (
              <LanguageRow key={language.id} language={language} disabled={saving}
                save={async changes => runSave(() => saveLanguage({ ...language, ...changes }), 'Language saved.')} />
            ))}</tbody>
          </table></div>
          <form className="compact-add-form" onSubmit={addLanguage}>
            <label>Code<input value={newLanguageCode} maxLength={8} onChange={event => setNewLanguageCode(event.target.value)} required /></label>
            <label>Name<input value={newLanguageName} onChange={event => setNewLanguageName(event.target.value)} required /></label>
            <button type="submit" className="primary-button compact-button" disabled={saving}>Add language</button>
          </form>
        </section>

        <section className="admin-panel" aria-labelledby="years-heading">
          <h2 id="years-heading">Year groups</h2>
          <div className="table-scroll"><table>
            <thead><tr><th>Name</th><th>Order</th><th>Active</th><th>Save</th></tr></thead>
            <tbody>{references?.yearGroups.map(year => (
              <YearRow key={year.id} year={year} disabled={saving}
                save={async changes => runSave(() => saveYearGroup({ ...year, ...changes }), 'Year group saved.')} />
            ))}</tbody>
          </table></div>
          <form className="compact-add-form" onSubmit={addYear}>
            <label>Year-group name<input value={newYearName} onChange={event => setNewYearName(event.target.value)} placeholder="Year 14" required /></label>
            <button type="submit" className="primary-button compact-button" disabled={saving}>Add year</button>
          </form>
        </section>
      </div>
    </section>
  );
}

function LanguageRow({
  language,
  disabled,
  save,
}: {
  language: AdminReferences['languages'][number];
  disabled: boolean;
  save: (changes: Partial<AdminReferences['languages'][number]>) => Promise<void>;
}) {
  const [code, setCode] = useState(language.code);
  const [name, setName] = useState(language.name);
  const [sortOrder, setSortOrder] = useState(String(language.sort_order));
  const [active, setActive] = useState(language.active);
  return (
    <tr>
      <td><input aria-label={`${language.name} code`} value={code} onChange={event => setCode(event.target.value)} /></td>
      <td><input aria-label={`${language.name} name`} value={name} onChange={event => setName(event.target.value)} /></td>
      <td><input aria-label={`${language.name} order`} type="number" value={sortOrder} onChange={event => setSortOrder(event.target.value)} /></td>
      <td><input aria-label={`${language.name} active`} type="checkbox" checked={active} onChange={event => setActive(event.target.checked)} /></td>
      <td><button type="button" disabled={disabled} onClick={() => void save({
        code: code.trim().toLowerCase(), name: name.trim(), sort_order: Number(sortOrder), active,
      })}>Save</button></td>
    </tr>
  );
}

function YearRow({
  year,
  disabled,
  save,
}: {
  year: AdminReferences['yearGroups'][number];
  disabled: boolean;
  save: (changes: Partial<AdminReferences['yearGroups'][number]>) => Promise<void>;
}) {
  const [name, setName] = useState(year.name);
  const [sortOrder, setSortOrder] = useState(String(year.sort_order));
  const [active, setActive] = useState(year.active);
  return (
    <tr>
      <td><input aria-label={`${year.name} name`} value={name} onChange={event => setName(event.target.value)} /></td>
      <td><input aria-label={`${year.name} order`} type="number" value={sortOrder} onChange={event => setSortOrder(event.target.value)} /></td>
      <td><input aria-label={`${year.name} active`} type="checkbox" checked={active} onChange={event => setActive(event.target.checked)} /></td>
      <td><button type="button" disabled={disabled} onClick={() => void save({
        name: name.trim(), sort_order: Number(sortOrder), active,
      })}>Save</button></td>
    </tr>
  );
}

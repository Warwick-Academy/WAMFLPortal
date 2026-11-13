import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { getStudentCatalog, type AssessmentItem, type AssessmentSection, type StudentCatalog } from '../lib/api/assessments';
import { useAuth } from '../lib/auth/AuthProvider';
import schoolLogoUrl from '../../dist/assets/warwick-academy-logo.png';

const yearImageUrls = import.meta.glob('../../dist/assets/years/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

interface StudentCatalogContextValue {
  catalog: StudentCatalog;
  loading: boolean;
  error: string | null;
  showAllYears: boolean;
  setShowAllYears: (value: boolean) => void;
}

const StudentCatalogContext = createContext<StudentCatalogContextValue | null>(null);

function useStudentCatalog(): StudentCatalogContextValue {
  const value = useContext(StudentCatalogContext);
  if (!value) throw new Error('Student pages must be rendered inside StudentCatalogProvider.');
  return value;
}

export function StudentCatalogProvider() {
  const { profile } = useAuth();
  const [catalog, setCatalog] = useState<StudentCatalog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllYears, setShowAllYears] = useState(false);

  const loadCatalog = useCallback(async () => {
    if (!profile) return;
    setLoading(true);
    setError(null);
    try {
      setCatalog(await getStudentCatalog(profile.id));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to load activities. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [profile]);

  useEffect(() => {
    void loadCatalog();
  }, [loadCatalog]);

  if (loading) return <main className="page-shell" aria-live="polite">Loading activities…</main>;
  if (error || !catalog) {
    return (
      <main className="page-shell">
        <p className="error-message" role="alert">{error ?? 'No activities are available.'}</p>
        <button className="primary-button" type="button" onClick={() => void loadCatalog()}>Try again</button>
      </main>
    );
  }
  return (
    <StudentCatalogContext.Provider value={{ catalog, loading, error, showAllYears, setShowAllYears }}>
      <Outlet />
    </StudentCatalogContext.Provider>
  );
}

export function StudentLayout() {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [signOutError, setSignOutError] = useState<string | null>(null);

  async function handleSignOut() {
    setSignOutError(null);
    try {
      await signOut();
      navigate('/login', { replace: true });
    } catch (reason) {
      setSignOutError(reason instanceof Error ? reason.message : 'Unable to sign out.');
    }
  }

  return (
    <>
      <header className="school-header">
        <div className="header-inner student-header-inner">
          <div className="school-brand">
            <img className="school-logo" src={schoolLogoUrl} alt="Warwick Academy" />
            <div className="school-strapline">So much more than a place to learn</div>
          </div>
          <div className="student-account">
            <span>{profile?.first_name} {profile?.last_name}</span>
            <Link to="/profile">Profile</Link>
            <button type="button" onClick={() => void handleSignOut()}>Sign out</button>
          </div>
        </div>
      </header>
      {signOutError && <p className="page-shell error-message" role="alert">{signOutError}</p>}
      <main className="wrap student-wrap"><Outlet /></main>
    </>
  );
}

function useCatalogData() {
  const { catalog } = useStudentCatalog();
  const { profile } = useAuth();
  const selectedLanguageIds = useMemo(() => new Set(
    catalog.languages.map(language => language.id),
  ), [catalog.languages]);
  return { catalog, profile, selectedLanguageIds };
}

export function StudentHomePage() {
  const { catalog } = useStudentCatalog();

  return (
    <section aria-labelledby="student-home-heading">
      <p className="eyebrow">MFL Department</p>
      <h1 id="student-home-heading">Choose your language</h1>
      {catalog.languages.length ? (
        <div className="language-grid">
          {catalog.languages.map(language => (
            <Link className="language-tile" to={`/language/${language.id}`} key={language.id}>
              <span className={`big-flag ${language.code === 'fr' ? 'flag-fr' : 'flag-es'}`} aria-hidden="true">
                <i /><i /><i />
              </span>
              <span><strong>{language.name === 'French' ? 'Français' : language.name === 'Spanish' ? 'Español' : language.name}</strong>
                <small>{language.name}</small></span>
              <span className="tile-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      ) : <p>No languages are linked to your profile yet. <Link to="/profile">Edit your profile</Link>.</p>}
    </section>
  );
}

export function YearGroupsPage() {
  const { languageId = '' } = useParams();
  const { catalog, profile } = useCatalogData();
  const { showAllYears, setShowAllYears } = useStudentCatalog();
  const language = catalog.languages.find(item => item.id === languageId);
  if (!language) return <NotFound message="That language is not available in your profile." />;

  const years = catalog.yearGroups.filter(year =>
    year.active || year.id === profile?.year_group_id,
  ).filter(year => showAllYears || year.id === profile?.year_group_id);

  return (
    <section aria-labelledby="year-heading">
      <Link className="back" to="/">← Languages</Link>
      <p className="eyebrow">{language.name}</p>
      <h1 id="year-heading">Choose your year group</h1>
      {catalog.showAllYearsEnabled && (
        <label className="show-all-toggle">
          <input type="checkbox" checked={showAllYears} onChange={event => setShowAllYears(event.target.checked)} />
          <span>Show all year groups</span>
        </label>
      )}
      {years.length ? (
        <div className="year-grid">
          {years.map(year => {
            const courseName = courseLabel(language.code, year.name);
            return (
              <Link className={`year-tile year-${year.name.replace('Year ', '')}`} key={year.id}
                to={`/language/${language.id}/year/${year.id}`}>
                <span className="year-art" aria-hidden="true">
                  {Number(year.name.replace('Year ', '')) <= 13 && Number(year.name.replace('Year ', '')) >= 7
                    ? <img className="year-photo" src={yearImageUrls[`../../dist/assets/years/year-${year.name.replace('Year ', '')}.webp`]} alt="" />
                    : null}
                </span>
                <span className="year-label"><strong>{courseName}</strong></span>
                <span className="year-arrow" aria-hidden="true">↗</span>
              </Link>
            );
          })}
        </div>
      ) : <p>Your current year is not available. <Link to="/profile">Update your profile</Link>.</p>}
    </section>
  );
}

export function AssessmentsPage() {
  const { languageId = '', yearGroupId = '' } = useParams();
  const { catalog } = useCatalogData();
  const language = catalog.languages.find(item => item.id === languageId);
  const year = catalog.yearGroups.find(item => item.id === yearGroupId);
  if (!language || !year) return <NotFound message="That year group is not available." />;

  const assessments = catalog.assessments.filter(item =>
    item.language_id === language.id && item.year_group_id === year.id,
  );
  return (
    <section aria-labelledby="assessment-heading">
      <Link className="back" to={`/language/${language.id}`}>← Year groups</Link>
      <p className="eyebrow">{language.name} · {year.name}</p>
      <h1 id="assessment-heading">Choose your assessment</h1>
      {assessments.length ? (
        <div className="grid">
          {assessments.map(assessment => (
            <Link className="tile assessment" to={`/assessment/${assessment.id}`} key={assessment.id}>
              <span><strong>{assessment.term} · {assessment.title}</strong>
                {assessment.subtitle && <small>{assessment.subtitle}</small>}</span>
              <span className="tag">Open →</span>
            </Link>
          ))}
        </div>
      ) : <p>No practice activities are available for this year group.</p>}
    </section>
  );
}

export function AssessmentPage() {
  const { assessmentId = '' } = useParams();
  const { catalog } = useStudentCatalog();
  const { profile } = useAuth();
  const assessment = catalog.assessments.find(item => item.id === assessmentId);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [studentName, setStudentName] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [downloadMessage, setDownloadMessage] = useState('');

  useEffect(() => {
    if (!assessment || !profile) return;
    const key = `atelier-assessment-${assessment.id}`;
    setLoaded(false);
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved) as { answers?: Record<string, string>; studentName?: string };
        setAnswers(parsed.answers ?? {});
        setStudentName(parsed.studentName ?? `${profile.first_name ?? ''} ${profile.last_name ?? ''}`.trim());
      } else {
        setAnswers({});
        setStudentName(`${profile.first_name ?? ''} ${profile.last_name ?? ''}`.trim());
      }
      setStorageError(null);
    } catch {
      setStorageError('Saved answers could not be read from this device. They have not been overwritten.');
    } finally {
      setLoaded(true);
    }
  }, [assessment, profile]);

  useEffect(() => {
    if (!assessment || !loaded || storageError) return;
    try {
      localStorage.setItem(`atelier-assessment-${assessment.id}`, JSON.stringify({ answers, studentName }));
    } catch {
      setStorageError('Your answers could not be saved on this device. Check available storage and try again.');
    }
  }, [assessment, answers, studentName, loaded, storageError]);

  if (!assessment) return <NotFound message="This assessment is not available." />;
  const language = catalog.languages.find(item => item.id === assessment.language_id);
  const year = catalog.yearGroups.find(item => item.id === assessment.year_group_id);
  const sections = catalog.sections
    .filter(section => section.assessment_id === assessment.id && section.status !== 'hidden')
    .sort((left, right) => left.sort_order - right.sort_order);
  const itemsBySection = new Map<string, AssessmentItem[]>();
  for (const item of catalog.items) {
    if (!itemsBySection.has(item.section_id)) itemsBySection.set(item.section_id, []);
    itemsBySection.get(item.section_id)?.push(item);
  }
  for (const items of itemsBySection.values()) items.sort((left, right) => left.sort_order - right.sort_order);

  const languageLabels = catalog.labels[language?.code ?? ''] ?? {};
  const title = `${assessment.term} · ${assessment.title}`;
  const download = () => {
    if (!studentName.trim()) {
      setDownloadMessage(language?.code === 'es' ? 'Escribe tu nombre y apellido.' : 'Enter your name.');
      return;
    }
    const answeredItems = sections.flatMap(section => (itemsBySection.get(section.id) ?? [])
      .filter(item => answers[item.id]?.trim())
      .map(item => ({ section: section.title, prompt: item.prompt, answer: answers[item.id].trim() })));
    if (!answeredItems.length) {
      setDownloadMessage(language?.code === 'es'
        ? 'Escribe al menos una respuesta antes de descargarla.'
        : 'Write at least one answer before downloading.');
      return;
    }
    const escape = (text: string) => text.replace(/[&<>"]/gu, character =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[character] ?? character,
    );
    const html = `<!doctype html><html lang="${language?.code ?? 'en'}"><meta charset="utf-8"><title>${escape(title)}</title>
      <style>body{max-width:760px;margin:32px auto;padding:0 16px;font:16px/1.5 system-ui,sans-serif;color:#102a46}h1{font-size:24px}h2{font-size:18px;margin-top:24px}.answer{white-space:pre-wrap}@media print{body{margin:0}}</style>
      <body><h1>${escape(languageLabels.summary_title ?? title)}</h1><p>${escape(studentName.trim())}</p>
      ${answeredItems.map(item => `<section><h2>${escape(item.section)}</h2><p>${escape(item.prompt)}</p><p class="answer">${escape(item.answer)}</p></section>`).join('')}</body></html>`;
    const url = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
    const link = document.createElement('a');
    const filename = studentName.trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/gu, '') || 'student';
    link.href = url;
    link.download = `${language?.code === 'es' ? 'respuestas' : 'bilan'}-${filename}.html`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
    setDownloadMessage(languageLabels.downloaded ?? 'Downloaded. Open the file to print or save as PDF.');
  };

  return (
    <section aria-labelledby="assessment-page-heading">
      <Link className="back" to={`/language/${assessment.language_id}/year/${assessment.year_group_id}`}>← Assessments</Link>
      <p className="eyebrow">{language?.name} · {year?.name} · {assessment.term}</p>
      <h1 id="assessment-page-heading">{assessment.title}</h1>
      {assessment.subtitle && <p>{assessment.subtitle}</p>}
      <div className="assessment-sections">
        {sections.map(section => (
          <AssessmentSectionView
            key={section.id}
            section={section}
            items={itemsBySection.get(section.id) ?? []}
            answers={answers}
            setAnswer={(itemId, answer) => setAnswers(current => ({ ...current, [itemId]: answer }))}
            languageCode={language?.code ?? ''}
          />
        ))}
      </div>
      <section className="bilan-form" aria-labelledby="download-heading">
        <h2 id="download-heading">{languageLabels.summary_title ?? (language?.code === 'es' ? 'Mis respuestas' : 'Bilan')}</h2>
        <div className="bilan-controls">
          <label>{languageLabels.student_name ?? (language?.code === 'es' ? 'Nombre y apellido' : 'Nom et prénom')}
            <input value={studentName} maxLength={120} autoComplete="name" onChange={event => setStudentName(event.target.value)} />
          </label>
          <button type="button" onClick={download}>{languageLabels.download ?? (language?.code === 'es' ? 'Descargar' : 'Télécharger')}</button>
        </div>
        <p role="status">{storageError ?? downloadMessage}</p>
      </section>
    </section>
  );
}

function AssessmentSectionView({
  section,
  items,
  answers,
  setAnswer,
  languageCode,
}: {
  section: AssessmentSection;
  items: AssessmentItem[];
  answers: Record<string, string>;
  setAnswer: (itemId: string, value: string) => void;
  languageCode: string;
}) {
  const { catalog } = useStudentCatalog();
  const comingSoonLabel = catalog.labels[languageCode]?.coming_soon ?? 'Coming soon';
  return (
    <article className="student-assessment-section">
      <div className="section-title-row">
        <h2>{section.title}</h2>
        {section.status === 'coming_soon' && <span className="tag">{comingSoonLabel}</span>}
      </div>
      {section.instructions && <p>{section.instructions}</p>}
      {items.length > 0 && (
        <ol className="student-question-list" lang={languageCode}>
          {items.map(item => (
            <li key={item.id}>
              <label htmlFor={`answer-${item.id}`} lang={languageCode}>{item.prompt}</label>
              {item.hint && <small>{item.hint}</small>}
              <textarea id={`answer-${item.id}`} rows={3} value={answers[item.id] ?? ''}
                onChange={event => setAnswer(item.id, event.target.value)}
                aria-label={`Your response to: ${item.prompt}`} />
            </li>
          ))}
        </ol>
      )}
    </article>
  );
}

function NotFound({ message }: { message: string }) {
  return <section><p role="alert">{message}</p><Link className="back" to="/">← Languages</Link></section>;
}

function courseLabel(language: string, year: string) {
  const labels: Record<string, Record<string, string>> = {
    fr: { 'Year 10': 'GCSE French', 'Year 12': 'IB French B', 'Year 13': 'IB French Ab Initio' },
    es: { 'Year 10': 'IGCSE', 'Year 12': 'IB Spanish B', 'Year 13': 'IB Spanish Ab Initio' },
  };
  return labels[language]?.[year] ?? year;
}

import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getProfileFormOptions, saveProfile, type ProfileFormOptions } from '../lib/api/profiles';
import { useAuth } from '../lib/auth/AuthProvider';
import { profileSchema, type ProfileFormValues } from '../lib/validation/profile';
import schoolLogoUrl from '../../dist/assets/warwick-academy-logo.png';

function getNameClaim(value: unknown): { firstName: string; lastName: string } {
  if (typeof value !== 'string' || !value.trim()) return { firstName: '', lastName: '' };
  const [firstName, ...lastParts] = value.trim().split(/\s+/u);
  return { firstName, lastName: lastParts.join(' ') };
}

function getReturnPath(state: unknown): string {
  if (!state || typeof state !== 'object' || !('from' in state)) return '/';
  const from = (state as { from?: unknown }).from;
  if (typeof from === 'string') return from.startsWith('/') && !from.startsWith('//') ? from : '/';
  if (!from || typeof from !== 'object' || !('pathname' in from)) return '/';
  const location = from as { pathname?: unknown; search?: unknown; hash?: unknown };
  if (typeof location.pathname !== 'string' || !location.pathname.startsWith('/') || location.pathname.startsWith('//')) return '/';
  return `${location.pathname}${typeof location.search === 'string' ? location.search : ''}${typeof location.hash === 'string' ? location.hash : ''}`;
}

export function ProfilePage({ onboarding = false }: { onboarding?: boolean }) {
  const { user, profile, refreshProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isEditing = !onboarding;
  const [options, setOptions] = useState<ProfileFormOptions | null>(null);
  const [values, setValues] = useState<ProfileFormValues>({
    firstName: '',
    lastName: '',
    yearGroupId: '',
    languageIds: [],
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileFormValues, string>>>({});
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user || !profile) return;
    let active = true;
    void getProfileFormOptions(user.id).then(result => {
      if (!active) return;
      setOptions(result);
      const claimName = getNameClaim(user.user_metadata.name ?? user.user_metadata.full_name);
      setValues({
        firstName: profile.first_name ?? claimName.firstName,
        lastName: profile.last_name ?? claimName.lastName,
        yearGroupId: profile.year_group_id ?? '',
        languageIds: result.selectedLanguageIds,
      });
    }).catch(reason => {
      if (active) setLoadError(reason instanceof Error ? reason.message : 'Unable to load profile options.');
    });
    return () => { active = false; };
  }, [user, profile]);

  const selectedIds = useMemo(() => new Set(values.languageIds), [values.languageIds]);

  function update<K extends keyof ProfileFormValues>(key: K, value: ProfileFormValues[K]) {
    setValues(current => ({ ...current, [key]: value }));
    setErrors(current => ({ ...current, [key]: undefined }));
    setSaveError(null);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user) return;
    const parsed = profileSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof ProfileFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === 'string' && key in values) {
          nextErrors[key as keyof ProfileFormValues] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setSaving(true);
    setSaveError(null);
    try {
      await saveProfile(user.id, parsed.data);
      await refreshProfile();
      navigate(onboarding ? getReturnPath(location.state) : '/profile', { replace: true });
    } catch (reason) {
      setSaveError(reason instanceof Error ? reason.message : 'Unable to save your profile. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  if (!user || !profile) return <main className="page-shell" aria-live="polite">Loading your profile…</main>;
  if (loadError) return <main className="page-shell"><p className="error-message" role="alert">{loadError}</p></main>;
  if (!options) return <main className="page-shell" aria-live="polite">Loading profile options…</main>;

  const languagesToShow = options.languages.filter(language => language.active || selectedIds.has(language.id));
  const yearsToShow = options.yearGroups.filter(year => year.active || year.id === profile.year_group_id);

  return (
    <main className="page-shell profile-layout">
      <header className="app-header">
        <img className="school-logo" src={schoolLogoUrl} alt="Warwick Academy" />
        <span>MFL Department</span>
      </header>
      <section className="profile-card" aria-labelledby="profile-heading">
        <p className="eyebrow">{onboarding ? 'Welcome' : 'Your account'}</p>
        <h1 id="profile-heading">{onboarding ? 'Complete your profile' : 'Edit your profile'}</h1>
        {onboarding && <p>Tell us a little about yourself so we can show the right language activities.</p>}
        <form onSubmit={submit} noValidate>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" name="firstName" autoComplete="given-name" maxLength={50}
                value={values.firstName} onChange={event => update('firstName', event.target.value)}
                aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? 'firstName-error' : undefined} required />
              {errors.firstName && <span id="firstName-error" className="field-error">{errors.firstName}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" name="lastName" autoComplete="family-name" maxLength={50}
                value={values.lastName} onChange={event => update('lastName', event.target.value)}
                aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? 'lastName-error' : undefined} required />
              {errors.lastName && <span id="lastName-error" className="field-error">{errors.lastName}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="email">School email</label>
              <input id="email" type="email" value={profile.email} readOnly aria-readonly="true" />
            </div>
            <div className="form-field">
              <label htmlFor="yearGroup">Current year</label>
              <select id="yearGroup" name="yearGroupId" value={values.yearGroupId}
                onChange={event => update('yearGroupId', event.target.value)}
                aria-invalid={Boolean(errors.yearGroupId)} aria-describedby={errors.yearGroupId ? 'yearGroup-error' : undefined} required>
                <option value="">Choose your year</option>
                {yearsToShow.map(year => <option key={year.id} value={year.id}>
                  {year.name}{!year.active ? ' (no longer available)' : ''}
                </option>)}
              </select>
              {errors.yearGroupId && <span id="yearGroup-error" className="field-error">{errors.yearGroupId}</span>}
            </div>
          </div>

          <fieldset className="language-options" aria-describedby={errors.languageIds ? 'languageIds-error' : 'language-help'}>
            <legend>Languages I will be using</legend>
            <p id="language-help">Choose one or more languages.</p>
            {languagesToShow.map(language => (
              <label className="checkbox-option" key={language.id}>
                <input type="checkbox" checked={selectedIds.has(language.id)}
                  onChange={event => update('languageIds', event.target.checked
                    ? [...values.languageIds, language.id]
                    : values.languageIds.filter(id => id !== language.id))} />
                <span>{language.name}{!language.active ? ' (no longer available)' : ''}</span>
              </label>
            ))}
            {errors.languageIds && <span id="languageIds-error" className="field-error" role="alert">{errors.languageIds}</span>}
          </fieldset>

          {onboarding && <p className="privacy-note">We use your name, year and chosen languages to provide learning activities. Your practice answers stay on this device.</p>}
          {saveError && <p className="error-message" role="alert">{saveError}</p>}
          <button className="primary-button" type="submit" disabled={saving}>
            {saving ? 'Saving…' : onboarding ? 'Save and continue' : 'Save changes'}
          </button>
          {isEditing && <Link className="profile-back" to="/">Back to activities</Link>}
        </form>
      </section>
    </main>
  );
}

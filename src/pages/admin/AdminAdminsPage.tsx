import { useEffect, useState, type FormEvent } from 'react';
import { addAdminEmail, getAdminReferences, removeAdminEmail, type AdminReferences } from '../../lib/api/admin';
import { isWarwickEmail } from '../../lib/auth/email';

export function AdminAdminsPage() {
  const [references, setReferences] = useState<AdminReferences | null>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function reload() {
    setError(null);
    try {
      setReferences(await getAdminReferences());
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to load admin allowlist.');
    }
  }

  useEffect(() => { void reload(); }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isWarwickEmail(email)) {
      setError('Enter a Warwick Academy email address ending in @warwick.bm.');
      return;
    }
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      await addAdminEmail(email);
      setEmail('');
      setMessage('Admin allowlist updated. An existing account is promoted immediately; a new account is promoted when it signs in.');
      await reload();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to add this admin.');
    } finally {
      setSaving(false);
    }
  }

  async function remove(emailToRemove: string) {
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      await removeAdminEmail(emailToRemove);
      setMessage('Admin allowlist entry removed.');
      await reload();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to remove this admin.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <section aria-labelledby="admin-admins-heading">
      <p className="eyebrow">Access control</p>
      <h1 id="admin-admins-heading">Admins</h1>
      <p>Allowlisted accounts receive the teacher-admin role. Role changes are also available from the Users page.</p>
      {message && <p className="success-message" role="status">{message}</p>}
      {error && <p className="error-message" role="alert">{error}</p>}
      <form className="admin-panel admin-add-form" onSubmit={submit}>
        <label>Warwick Academy email
          <input type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} required />
        </label>
        <button type="submit" className="primary-button compact-button" disabled={saving}>Add admin</button>
      </form>
      <section className="admin-panel" aria-labelledby="allowlist-heading">
        <h2 id="allowlist-heading">Admin allowlist</h2>
        {!references && <p aria-live="polite">Loading admins…</p>}
        {references?.allowlist.length ? (
          <div className="table-scroll"><table>
            <thead><tr><th>Email</th><th>Added</th><th>Action</th></tr></thead>
            <tbody>{references.allowlist.map(entry => (
              <tr key={entry.email}>
                <td>{entry.email}</td>
                <td>{new Date(entry.created_at).toLocaleDateString()}</td>
                <td><button type="button" className="danger-text" disabled={saving}
                  onClick={() => void remove(entry.email)}>Remove</button></td>
              </tr>
            ))}</tbody>
          </table></div>
        ) : references ? <p>No allowlist entries.</p> : null}
      </section>
      <p className="small-muted">The database prevents removal or demotion of the last remaining admin.</p>
    </section>
  );
}

import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  changeUserRole,
  deleteUser,
  exportAllUsers,
  forceProfileReentry,
  getAdminReferences,
  getAdminUsers,
  setUsersYear,
  type AdminReferences,
  type AdminUser,
  type AdminUserFilters,
  type UserSortColumn,
} from '../../lib/api/admin';
import { saveProfile } from '../../lib/api/profiles';
import { useAuth } from '../../lib/auth/AuthProvider';
import { profileSchema, type ProfileFormValues } from '../../lib/validation/profile';

const pageSize = 25;

export function AdminUsersPage() {
  const { user: currentUser } = useAuth();
  const [references, setReferences] = useState<AdminReferences | null>(null);
  const [filters, setFilters] = useState<AdminUserFilters>({
    page: 0,
    pageSize,
    search: '',
    yearGroupId: '',
    languageId: '',
    role: '',
    incompleteOnly: false,
    sortBy: 'last_name',
    ascending: true,
  });
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkYearId, setBulkYearId] = useState('');
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [referenceData, pageData] = await Promise.all([
        getAdminReferences(),
        getAdminUsers(filters),
      ]);
      setReferences(referenceData);
      setUsers(pageData.users);
      setTotal(pageData.total);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to load users.');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => { void refresh(); }, [refresh]);

  function updateFilters(values: Partial<AdminUserFilters>) {
    setFilters(current => ({ ...current, ...values, page: values.page ?? 0 }));
    setSelectedIds([]);
  }

  async function handleForceReentry(target: AdminUser) {
    setMessage(null);
    setError(null);
    try {
      await forceProfileReentry(target.id);
      setMessage(`Profile re-entry required for ${target.email}.`);
      await refresh();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to update the profile.');
    }
  }

  async function handleBulkYear(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setMessage(null);
    try {
      await setUsersYear(selectedIds, bulkYearId);
      setMessage(`Updated the year group for ${selectedIds.length} selected users.`);
      setSelectedIds([]);
      await refresh();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to update selected users.');
    }
  }

  async function handleExport() {
    setError(null);
    try {
      const allUsers = await exportAllUsers({
        pageSize: filters.pageSize,
        search: filters.search,
        yearGroupId: filters.yearGroupId,
        languageId: filters.languageId,
        role: filters.role,
        incompleteOnly: filters.incompleteOnly,
        sortBy: filters.sortBy,
        ascending: filters.ascending,
      });
      const rows = [
        ['First name', 'Last name', 'Email', 'Year', 'Languages', 'Role', 'Profile completed', 'Created', 'Last login'],
        ...allUsers.map(user => [
          user.first_name ?? '',
          user.last_name ?? '',
          user.email,
          user.yearName ?? '',
          user.languages.join('; '),
          user.role,
          user.profile_completed ? 'Yes' : 'No',
          user.created_at,
          user.last_login_at ?? '',
        ]),
      ];
      const csv = rows.map(row => row.map(value => `"${value.replace(/"/gu, '""')}"`).join(',')).join('\r\n');
      const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'warwick-mfl-users.csv';
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to export users.');
    }
  }

  const allCurrentPageSelected = users.length > 0 && users.every(user => selectedIds.includes(user.id));
  const pages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <section aria-labelledby="admin-users-heading">
      <p className="eyebrow">People</p>
      <h1 id="admin-users-heading">Users</h1>
      {message && <p className="success-message" role="status">{message}</p>}
      {error && <p className="error-message" role="alert">{error}</p>}

      <div className="admin-filter-grid">
        <label>Search name or email
          <input value={filters.search} onChange={event => updateFilters({ search: event.target.value })} />
        </label>
        <label>Year
          <select value={filters.yearGroupId} onChange={event => updateFilters({ yearGroupId: event.target.value })}>
            <option value="">All years</option>
            {references?.yearGroups.map(year => <option key={year.id} value={year.id}>{year.name}</option>)}
          </select>
        </label>
        <label>Language
          <select value={filters.languageId} onChange={event => updateFilters({ languageId: event.target.value })}>
            <option value="">All languages</option>
            {references?.languages.map(language => <option key={language.id} value={language.id}>{language.name}</option>)}
          </select>
        </label>
        <label>Role
          <select value={filters.role} onChange={event => updateFilters({ role: event.target.value as AdminUserFilters['role'] })}>
            <option value="">All roles</option>
            <option value="student">Student</option>
            <option value="teacher_admin">Teacher admin</option>
          </select>
        </label>
        <label className="inline-checkbox">
          <input type="checkbox" checked={filters.incompleteOnly}
            onChange={event => updateFilters({ incompleteOnly: event.target.checked })} />
          Incomplete profiles
        </label>
      </div>

      <div className="admin-table-actions">
        <form className="bulk-year-form" onSubmit={handleBulkYear}>
          <label htmlFor="bulk-year">Set year for {selectedIds.length} selected</label>
          <select id="bulk-year" value={bulkYearId} onChange={event => setBulkYearId(event.target.value)} required>
            <option value="">Choose year</option>
            {references?.yearGroups.filter(year => year.active).map(year => (
              <option key={year.id} value={year.id}>{year.name}</option>
            ))}
          </select>
          <button type="submit" disabled={!selectedIds.length || !bulkYearId}>Apply</button>
        </form>
        <button type="button" className="secondary-button" onClick={() => void handleExport()}>Export CSV</button>
      </div>

      <div className="table-scroll admin-panel">
        <table>
          <thead><tr>
            <th><input type="checkbox" aria-label="Select all users on this page" checked={allCurrentPageSelected}
              onChange={event => setSelectedIds(event.target.checked ? users.map(user => user.id) : [])} /></th>
            <SortableHeading title="Name" column="last_name" filters={filters} setFilters={updateFilters} />
            <SortableHeading title="Email" column="email" filters={filters} setFilters={updateFilters} />
            <SortableHeading title="Year" column="year_group_id" filters={filters} setFilters={updateFilters} />
            <th>Languages</th>
            <SortableHeading title="Role" column="role" filters={filters} setFilters={updateFilters} />
            <SortableHeading title="Profile" column="profile_completed" filters={filters} setFilters={updateFilters} />
            <SortableHeading title="Created" column="created_at" filters={filters} setFilters={updateFilters} />
            <SortableHeading title="Last login" column="last_login_at" filters={filters} setFilters={updateFilters} />
            <th>Actions</th>
          </tr></thead>
          <tbody>
            {users.map(target => (
              <tr key={target.id}>
                <td><input type="checkbox" aria-label={`Select ${target.email}`}
                  checked={selectedIds.includes(target.id)}
                  onChange={event => setSelectedIds(current => event.target.checked
                    ? [...current, target.id] : current.filter(id => id !== target.id))} /></td>
                <td>{[target.first_name, target.last_name].filter(Boolean).join(' ') || '—'}</td>
                <td>{target.email}</td>
                <td>{target.yearName ?? '—'}</td>
                <td>{target.languages.join(', ') || '—'}</td>
                <td>{target.role === 'teacher_admin' ? 'Teacher admin' : 'Student'}</td>
                <td>{target.profile_completed ? 'Yes' : 'No'}</td>
                <td>{new Date(target.created_at).toLocaleDateString()}</td>
                <td>{target.last_login_at ? new Date(target.last_login_at).toLocaleString() : '—'}</td>
                <td className="row-actions">
                  <button type="button" onClick={() => setEditingUser(target)}>Edit</button>
                  <button type="button" onClick={() => void handleForceReentry(target)}>Force re-entry</button>
                </td>
              </tr>
            ))}
            {!loading && users.length === 0 && <tr><td colSpan={10}>No users match these filters.</td></tr>}
          </tbody>
        </table>
        {loading && <p aria-live="polite">Loading users…</p>}
      </div>

      <div className="pagination">
        <button type="button" disabled={filters.page === 0} onClick={() => updateFilters({ page: filters.page - 1 })}>Previous</button>
        <span>Page {filters.page + 1} of {pages} · {total} users</span>
        <button type="button" disabled={filters.page + 1 >= pages}
          onClick={() => updateFilters({ page: filters.page + 1 })}>Next</button>
      </div>

      {editingUser && references && (
        <EditUserDrawer user={editingUser} references={references} currentUserId={currentUser?.id ?? ''}
          close={() => setEditingUser(null)} saved={async () => { setEditingUser(null); setMessage('User updated.'); await refresh(); }} />
      )}
    </section>
  );
}

function SortableHeading({
  title,
  column,
  filters,
  setFilters,
}: {
  title: string;
  column: UserSortColumn;
  filters: AdminUserFilters;
  setFilters: (values: Partial<AdminUserFilters>) => void;
}) {
  const active = filters.sortBy === column;
  return <th><button type="button" className="sort-button" onClick={() => setFilters({
    sortBy: column,
    ascending: active ? !filters.ascending : true,
  })}>{title}{active ? (filters.ascending ? ' ↑' : ' ↓') : ''}</button></th>;
}

function EditUserDrawer({
  user,
  references,
  currentUserId,
  close,
  saved,
}: {
  user: AdminUser;
  references: AdminReferences;
  currentUserId: string;
  close: () => void;
  saved: () => Promise<void>;
}) {
  const [values, setValues] = useState<ProfileFormValues>({
    firstName: user.first_name ?? '',
    lastName: user.last_name ?? '',
    yearGroupId: user.year_group_id ?? '',
    languageIds: user.languageIds,
  });
  const [role, setRole] = useState(user.role);
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileFormValues, string>>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [confirmationEmail, setConfirmationEmail] = useState('');
  const selectedIds = useMemo(() => new Set(values.languageIds), [values.languageIds]);
  const availableLanguages = references.languages.filter(language => language.active || selectedIds.has(language.id));
  const availableYears = references.yearGroups.filter(year => year.active || year.id === user.year_group_id);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = profileSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof ProfileFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === 'string' && key in values) nextErrors[key as keyof ProfileFormValues] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }
    setSaving(true);
    setError(null);
    try {
      await saveProfile(user.id, parsed.data);
      await changeUserRole(user.id, role);
      setMessage('User updated.');
      await saved();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to save user changes.');
    } finally {
      setSaving(false);
    }
  }

  async function removeUser() {
    if (user.id === currentUserId) {
      setError('You cannot delete your own account.');
      return;
    }
    setError(null);
    try {
      await deleteUser(user.id, confirmationEmail);
      setMessage('User deleted.');
      await saved();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unable to delete user.');
    }
  }

  return (
    <div className="drawer-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) close(); }}>
      <section className="edit-drawer" role="dialog" aria-modal="true" aria-labelledby="edit-user-heading">
        <div className="drawer-heading">
          <div><p className="eyebrow">User account</p><h2 id="edit-user-heading">Edit user</h2></div>
          <button type="button" className="icon-button" aria-label="Close edit user" onClick={close}>×</button>
        </div>
        {error && <p className="error-message" role="alert">{error}</p>}
        {message && <p className="success-message" role="status">{message}</p>}
        <form className="drawer-form" onSubmit={submit} noValidate>
          <label>School email<input type="email" value={user.email} readOnly /></label>
          <label>First name<input value={values.firstName} maxLength={50}
            onChange={event => setValues(current => ({ ...current, firstName: event.target.value }))} /></label>
          {errors.firstName && <span className="field-error">{errors.firstName}</span>}
          <label>Last name<input value={values.lastName} maxLength={50}
            onChange={event => setValues(current => ({ ...current, lastName: event.target.value }))} /></label>
          {errors.lastName && <span className="field-error">{errors.lastName}</span>}
          <label>Current year<select value={values.yearGroupId}
            onChange={event => setValues(current => ({ ...current, yearGroupId: event.target.value }))}>
            <option value="">Choose year</option>
            {availableYears.map(year => <option key={year.id} value={year.id}>{year.name}</option>)}
          </select></label>
          {errors.yearGroupId && <span className="field-error">{errors.yearGroupId}</span>}
          <fieldset className="language-options">
            <legend>Languages</legend>
            {availableLanguages.map(language => (
              <label className="checkbox-option" key={language.id}>
                <input type="checkbox" checked={selectedIds.has(language.id)}
                  onChange={event => setValues(current => ({ ...current, languageIds: event.target.checked
                    ? [...current.languageIds, language.id]
                    : current.languageIds.filter(id => id !== language.id) }))} />
                {language.name}{!language.active ? ' (inactive)' : ''}
              </label>
            ))}
            {errors.languageIds && <span className="field-error">{errors.languageIds}</span>}
          </fieldset>
          <label>Role<select value={role} onChange={event => setRole(event.target.value as typeof role)}>
            <option value="student">Student</option><option value="teacher_admin">Teacher admin</option>
          </select></label>
          <button type="submit" className="primary-button" disabled={saving}>{saving ? 'Saving…' : 'Save user'}</button>
        </form>

        <section className="delete-user-section" aria-labelledby="delete-user-heading">
          <h3 id="delete-user-heading">Delete user</h3>
          {user.id === currentUserId
            ? <p>You cannot delete your own account.</p>
            : <>
              <label>Type {user.email} to confirm
                <input value={confirmationEmail} onChange={event => setConfirmationEmail(event.target.value)} />
              </label>
              <button type="button" className="danger-button" disabled={confirmationEmail !== user.email}
                onClick={() => void removeUser()}>Delete user</button>
            </>}
        </section>
      </section>
    </div>
  );
}

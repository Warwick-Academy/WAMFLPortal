import { useEffect, useState } from 'react';
import { getAuditEntries, type AdminAuditEntry } from '../../lib/api/admin';

const pageSize = 50;

export function AdminAuditPage() {
  const [entries, setEntries] = useState<AdminAuditEntry[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [entity, setEntity] = useState('');
  const [action, setAction] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    void getAuditEntries({ page, pageSize, entity, action }).then(result => {
      if (!active) return;
      setEntries(result.entries);
      setTotal(result.total);
    }).catch(reason => {
      if (active) setError(reason instanceof Error ? reason.message : 'Unable to load the audit log.');
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, [page, entity, action]);

  const pages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <section aria-labelledby="admin-audit-heading">
      <p className="eyebrow">Accountability</p>
      <h1 id="admin-audit-heading">Audit Log</h1>
      {error && <p className="error-message" role="alert">{error}</p>}
      <div className="admin-filter-grid audit-filters">
        <label>Record type<select value={entity} onChange={event => { setEntity(event.target.value); setPage(0); }}>
          <option value="">All record types</option>
          {['profiles', 'profile_languages', 'admin_allowlist', 'languages', 'year_groups', 'assessments', 'assessment_sections', 'assessment_items', 'ui_labels', 'app_settings']
            .map(value => <option value={value} key={value}>{value.replaceAll('_', ' ')}</option>)}
        </select></label>
        <label>Action<select value={action} onChange={event => { setAction(event.target.value); setPage(0); }}>
          <option value="">All actions</option><option value="insert">Create</option><option value="update">Update</option><option value="delete">Delete</option>
        </select></label>
      </div>
      <div className="table-scroll admin-panel">
        <table>
          <thead><tr><th>When</th><th>Who</th><th>Action</th><th>Record</th><th>Change details</th></tr></thead>
          <tbody>{entries.map(entry => (
            <AuditRow key={entry.id} entry={entry} />
          ))}
          {!loading && !entries.length && <tr><td colSpan={5}>No audit entries match these filters.</td></tr>}
          </tbody>
        </table>
        {loading && <p aria-live="polite">Loading audit log…</p>}
      </div>
      <div className="pagination">
        <button type="button" disabled={page === 0} onClick={() => setPage(current => current - 1)}>Previous</button>
        <span>Page {page + 1} of {pages} · {total} entries</span>
        <button type="button" disabled={page + 1 >= pages} onClick={() => setPage(current => current + 1)}>Next</button>
      </div>
    </section>
  );
}

function AuditRow({ entry }: { entry: AdminAuditEntry }) {
  let summary = '';
  if (entry.diff && typeof entry.diff === 'object' && !Array.isArray(entry.diff)) {
    const diff = entry.diff as Record<string, unknown>;
    const oldData = diff.old && typeof diff.old === 'object' ? diff.old as Record<string, unknown> : {};
    const newData = diff.new && typeof diff.new === 'object' ? diff.new as Record<string, unknown> : {};
    const changes = [...new Set([...Object.keys(oldData), ...Object.keys(newData)])]
      .filter(key => JSON.stringify(oldData[key]) !== JSON.stringify(newData[key]));
    summary = changes.join(', ');
  }
  return (
    <tr>
      <td>{new Date(entry.created_at).toLocaleString()}</td>
      <td>{entry.actorName || entry.actorEmail || entry.actor_id || 'System'}</td>
      <td>{entry.action}</td>
      <td>{entry.entity}{entry.entity_id ? ` · ${entry.entity_id}` : ''}</td>
      <td>{summary || '—'}</td>
    </tr>
  );
}

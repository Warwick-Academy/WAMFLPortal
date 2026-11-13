# Teacher administration guide

The admin portal is available at `/admin` to authenticated users with the `teacher_admin` role. Accounts must use a Warwick Academy address ending in `@warwick.bm`. See [SSO_SETUP.md](SSO_SETUP.md) for Microsoft sign-in and database setup.

## Dashboard

The dashboard summarizes registered and incomplete profiles, users by year and language, assessments by status, and recent sign-ins.

## Users

- Search by name or email, and filter by year, language, role, or incomplete profile status.
- Select users on the current page to assign them a year group. Export the filtered user set as CSV when needed.
- Edit a user's name, year group, languages, or role. Use **Force re-entry** to send a student through profile completion again.
- To delete a user, open **Edit**, type their exact email, and confirm. You cannot delete your own account, and the database protects the last admin.

## Assessments

- Create an assessment from scratch or copy an existing assessment. Changes autosave as a draft; **Save draft** is also available.
- Set its language, year group, term, title, and optional subtitle. Add, reorder, and remove sections and prompts; sections may be open, coming soon, or hidden. Prompts support optional hints.
- Review the live student preview before publishing. An assessment needs a title, language, year group, and at least one non-empty prompt in an open section.
- Published assessments appear in the student catalogue. **Unpublish** returns one to draft; **Archive** removes it from the active catalogue. Deleting an assessment also deletes its sections and prompts and cannot be undone.
- Use **Export JSON** to download an assessment copy before making substantial changes.

## Languages and years

Add or edit languages and year groups, change their display order, and mark them active or inactive. Inactive choices are not offered for new student profile selections. The **Show all year groups** setting controls whether students may browse other years; they still start at their own year.

## Admin access and audit

Add school email addresses to the admin allowlist to grant admin access, including for accounts that sign in later. Removing an entry does not demote an existing admin; change that account's role from **Users** if needed. The database prevents removing or demoting the last admin.

The audit log is filterable by record type and action, and records changes to profiles, assessment content, languages, year groups, settings, and the admin allowlist. Use it to review who changed a record and which fields changed.

## Student data and recovery

Profiles, language/year catalogues, assessments, and portal settings are stored in the configured Supabase project. Student practice responses remain in the browser's local storage and are not visible to teachers or synchronized across devices. Students should download or print work they want to keep. Keep the existing static site available until the portal has been deployed and verified.

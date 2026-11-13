CREATE OR REPLACE FUNCTION public.is_warwick_email(candidate text)
RETURNS boolean
LANGUAGE sql
IMMUTABLE
STRICT
SET search_path = public
AS $$
  SELECT lower(btrim(candidate)) ~ '^[^@[:space:]]+@warwick\.bm$';
$$;

CREATE TABLE public.languages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  name text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true
);

CREATE TABLE public.year_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  sort_order integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true
);

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL UNIQUE CHECK (public.is_warwick_email(email)),
  first_name text CHECK (first_name IS NULL OR char_length(btrim(first_name)) BETWEEN 1 AND 50),
  last_name text CHECK (last_name IS NULL OR char_length(btrim(last_name)) BETWEEN 1 AND 50),
  year_group_id uuid REFERENCES public.year_groups(id) ON DELETE SET NULL,
  role text NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'teacher_admin')),
  profile_completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz
);

CREATE TABLE public.admin_allowlist (
  email text PRIMARY KEY,
  added_by uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT admin_allowlist_email_domain CHECK (public.is_warwick_email(email))
);

CREATE TABLE public.profile_languages (
  profile_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  language_id uuid NOT NULL REFERENCES public.languages(id) ON DELETE RESTRICT,
  PRIMARY KEY (profile_id, language_id)
);

CREATE TABLE public.assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  language_id uuid NOT NULL REFERENCES public.languages(id) ON DELETE RESTRICT,
  year_group_id uuid NOT NULL REFERENCES public.year_groups(id) ON DELETE RESTRICT,
  term text NOT NULL,
  title text NOT NULL,
  subtitle text,
  legacy_key text UNIQUE,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  sort_order integer NOT NULL DEFAULT 0,
  created_by uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.assessment_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id uuid NOT NULL REFERENCES public.assessments(id) ON DELETE CASCADE,
  title text NOT NULL,
  instructions text,
  sort_order integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'coming_soon', 'hidden'))
);

CREATE TABLE public.assessment_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id uuid NOT NULL REFERENCES public.assessment_sections(id) ON DELETE CASCADE,
  prompt text NOT NULL,
  hint text,
  response_type text NOT NULL DEFAULT 'text',
  field_config jsonb NOT NULL DEFAULT '[]'::jsonb,
  sort_order integer NOT NULL DEFAULT 0
);

CREATE TABLE public.ui_labels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  language_id uuid NOT NULL REFERENCES public.languages(id) ON DELETE CASCADE,
  key text NOT NULL,
  value text NOT NULL,
  UNIQUE (language_id, key)
);

CREATE TABLE public.audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  action text NOT NULL,
  entity text NOT NULL,
  entity_id uuid,
  diff jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.app_settings (
  key text PRIMARY KEY,
  show_all_years boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX profiles_email_idx ON public.profiles (email);
CREATE INDEX profiles_year_group_id_idx ON public.profiles (year_group_id);
CREATE INDEX assessments_navigation_idx
  ON public.assessments (language_id, year_group_id, status);
CREATE INDEX assessment_sections_assessment_order_idx
  ON public.assessment_sections (assessment_id, sort_order);
CREATE INDEX assessment_items_section_order_idx
  ON public.assessment_items (section_id, sort_order);
CREATE INDEX audit_log_created_at_idx ON public.audit_log (created_at DESC);

INSERT INTO public.languages (code, name, sort_order) VALUES
  ('fr', 'French', 1),
  ('es', 'Spanish', 2);

INSERT INTO public.year_groups (name, sort_order)
SELECT 'Year ' || year_number, year_number
FROM generate_series(7, 13) AS year_number;

INSERT INTO public.app_settings (key, show_all_years)
VALUES ('show_all_years', true);

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = (SELECT auth.uid())
      AND role = 'teacher_admin'
  );
$$;

REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;

CREATE OR REPLACE FUNCTION public.validate_auth_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.email IS NULL OR NOT public.is_warwick_email(NEW.email) THEN
    RAISE EXCEPTION 'Only Warwick Academy (@warwick.bm) accounts may sign in';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_auth_user_domain
  BEFORE INSERT OR UPDATE OF email ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.validate_auth_user();

CREATE OR REPLACE FUNCTION public.create_profile_for_auth_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  assigned_role text := 'student';
BEGIN
  IF EXISTS (
    SELECT 1 FROM public.admin_allowlist
    WHERE email = lower(NEW.email)
  ) THEN
    assigned_role := 'teacher_admin';
  END IF;

  INSERT INTO public.profiles (id, email, role, profile_completed, created_at, last_login_at)
  VALUES (NEW.id, lower(NEW.email), assigned_role, false, COALESCE(NEW.created_at, now()), NEW.last_sign_in_at);
  RETURN NEW;
END;
$$;

CREATE TRIGGER create_profile_after_auth_user
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.create_profile_for_auth_user();

CREATE OR REPLACE FUNCTION public.sync_profile_last_login()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.last_sign_in_at IS DISTINCT FROM OLD.last_sign_in_at AND NEW.last_sign_in_at IS NOT NULL THEN
    UPDATE public.profiles
    SET last_login_at = NEW.last_sign_in_at,
        updated_at = now()
    WHERE id = NEW.id;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER sync_profile_last_login_after_auth
  AFTER UPDATE OF last_sign_in_at ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.sync_profile_last_login();

CREATE OR REPLACE FUNCTION public.normalize_allowlist_email()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.email := lower(btrim(NEW.email));
  NEW.added_by := COALESCE(NEW.added_by, auth.uid());
  RETURN NEW;
END;
$$;

CREATE TRIGGER normalize_admin_allowlist_email
  BEFORE INSERT OR UPDATE OF email ON public.admin_allowlist
  FOR EACH ROW EXECUTE FUNCTION public.normalize_allowlist_email();

CREATE OR REPLACE FUNCTION public.promote_allowlisted_profile()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.profiles
  SET role = 'teacher_admin',
      updated_at = now()
  WHERE email = NEW.email
    AND role <> 'teacher_admin';
  RETURN NEW;
END;
$$;

CREATE TRIGGER promote_allowlisted_profile_after_insert
  AFTER INSERT ON public.admin_allowlist
  FOR EACH ROW EXECUTE FUNCTION public.promote_allowlisted_profile();

CREATE OR REPLACE FUNCTION public.protect_profile_fields()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  admin_count integer;
BEGIN
  IF NEW.id IS DISTINCT FROM OLD.id OR NEW.email IS DISTINCT FROM OLD.email THEN
    RAISE EXCEPTION 'Profile id and email cannot be changed here';
  END IF;

  IF NEW.role IS DISTINCT FROM OLD.role AND NOT public.is_admin() THEN
    RAISE EXCEPTION 'Only an admin may change a user role';
  END IF;

  IF OLD.role = 'teacher_admin' AND NEW.role <> 'teacher_admin' THEN
    PERFORM pg_advisory_xact_lock(827364);
    SELECT count(*) INTO admin_count
    FROM public.profiles
    WHERE role = 'teacher_admin';
    IF admin_count <= 1 THEN
      RAISE EXCEPTION 'The last admin cannot be demoted';
    END IF;
  END IF;

  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER protect_profile_fields_before_update
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_profile_fields();

CREATE OR REPLACE FUNCTION public.validate_completed_profile()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.profile_completed AND (
    NEW.first_name IS NULL OR char_length(btrim(NEW.first_name)) NOT BETWEEN 1 AND 50
    OR NEW.last_name IS NULL OR char_length(btrim(NEW.last_name)) NOT BETWEEN 1 AND 50
    OR NEW.year_group_id IS NULL
  ) THEN
    RAISE EXCEPTION 'A completed profile needs a first name, last name, and year group';
  END IF;

  IF NEW.profile_completed AND NOT EXISTS (
    SELECT 1 FROM public.profile_languages WHERE profile_id = NEW.id
  ) THEN
    RAISE EXCEPTION 'A completed profile needs at least one language';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_completed_profile_before_write
  BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.validate_completed_profile();

CREATE OR REPLACE FUNCTION public.validate_profile_language_change()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  target_profile uuid;
BEGIN
  IF TG_OP = 'DELETE' THEN
    target_profile := OLD.profile_id;
  ELSE
    target_profile := NEW.profile_id;
  END IF;

  IF TG_OP <> 'DELETE' AND NOT public.is_admin() THEN
    IF NOT EXISTS (
      SELECT 1 FROM public.languages
      WHERE id = NEW.language_id AND active
    ) AND (TG_OP <> 'UPDATE' OR NEW.language_id IS DISTINCT FROM OLD.language_id) THEN
      RAISE EXCEPTION 'Only active languages can be selected';
    END IF;
  END IF;

  IF TG_OP = 'DELETE' AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = target_profile AND p.profile_completed
  ) AND (
    SELECT count(*) FROM public.profile_languages WHERE profile_id = target_profile
  ) <= 1 THEN
    RAISE EXCEPTION 'A completed profile must keep at least one language';
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE TRIGGER validate_profile_language_before_change
  BEFORE INSERT OR UPDATE OR DELETE ON public.profile_languages
  FOR EACH ROW EXECUTE FUNCTION public.validate_profile_language_change();

CREATE OR REPLACE FUNCTION public.prevent_last_admin_profile_delete()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF OLD.role = 'teacher_admin' THEN
    PERFORM pg_advisory_xact_lock(827364);
    IF (SELECT count(*) FROM public.profiles WHERE role = 'teacher_admin') <= 1 THEN
      RAISE EXCEPTION 'The last admin cannot be deleted';
    END IF;
  END IF;
  RETURN OLD;
END;
$$;

CREATE TRIGGER protect_last_admin_profile_delete
  BEFORE DELETE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.prevent_last_admin_profile_delete();

CREATE OR REPLACE FUNCTION public.prevent_last_admin_allowlist_removal()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  admin_count integer;
BEGIN
  PERFORM pg_advisory_xact_lock(827364);
  SELECT count(*) INTO admin_count
  FROM public.profiles
  WHERE role = 'teacher_admin'
    AND email = OLD.email;
  IF admin_count > 0 AND (
    SELECT count(*) FROM public.profiles WHERE role = 'teacher_admin'
  ) <= 1 THEN
    RAISE EXCEPTION 'The last admin cannot be removed from the allowlist';
  END IF;
  RETURN OLD;
END;
$$;

CREATE TRIGGER protect_last_admin_allowlist_removal
  BEFORE DELETE ON public.admin_allowlist
  FOR EACH ROW EXECUTE FUNCTION public.prevent_last_admin_allowlist_removal();

CREATE OR REPLACE FUNCTION public.validate_published_assessment()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  should_validate boolean;
BEGIN
  IF TG_OP = 'INSERT' THEN
    should_validate := NEW.status = 'published';
  ELSE
    should_validate := NEW.status = 'published' AND OLD.status IS DISTINCT FROM NEW.status;
  END IF;

  IF should_validate THEN
    IF char_length(btrim(NEW.title)) = 0 OR NOT EXISTS (
      SELECT 1
      FROM public.assessment_sections s
      JOIN public.assessment_items i ON i.section_id = s.id
      WHERE s.assessment_id = NEW.id
        AND s.status = 'open'
        AND char_length(btrim(i.prompt)) > 0
    ) THEN
      RAISE EXCEPTION 'A published assessment needs a title and an open section with at least one prompt';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_assessment_before_publish
  BEFORE INSERT OR UPDATE OF status ON public.assessments
  FOR EACH ROW EXECUTE FUNCTION public.validate_published_assessment();

CREATE OR REPLACE FUNCTION public.delete_auth_user(target_user uuid, confirmation_email text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
  target_email text;
  target_role text;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Only an admin may delete a user';
  END IF;
  IF target_user = (SELECT auth.uid()) THEN
    RAISE EXCEPTION 'You cannot delete your own account';
  END IF;

  SELECT email, role INTO target_email, target_role
  FROM public.profiles
  WHERE id = target_user;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'User profile not found';
  END IF;
  IF lower(btrim(confirmation_email)) <> target_email THEN
    RAISE EXCEPTION 'The confirmation email does not match';
  END IF;
  IF target_role = 'teacher_admin' THEN
    PERFORM pg_advisory_xact_lock(827364);
    IF (SELECT count(*) FROM public.profiles WHERE role = 'teacher_admin') <= 1 THEN
      RAISE EXCEPTION 'The last admin cannot be deleted';
    END IF;
  END IF;

  DELETE FROM auth.users WHERE id = target_user;
END;
$$;

REVOKE ALL ON FUNCTION public.delete_auth_user(uuid, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.delete_auth_user(uuid, text) TO authenticated;

CREATE OR REPLACE FUNCTION public.audit_row_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  old_record jsonb;
  new_record jsonb;
  record_id uuid;
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN COALESCE(NEW, OLD);
  END IF;

  IF TG_OP <> 'INSERT' THEN old_record := to_jsonb(OLD); END IF;
  IF TG_OP <> 'DELETE' THEN new_record := to_jsonb(NEW); END IF;
  record_id := COALESCE(new_record ->> 'id', old_record ->> 'id')::uuid;

  INSERT INTO public.audit_log (actor_id, action, entity, entity_id, diff)
  VALUES (
    auth.uid(),
    lower(TG_OP),
    TG_TABLE_NAME,
    record_id,
    jsonb_build_object('old', old_record, 'new', new_record)
  );
  RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE TRIGGER audit_profiles_change
  AFTER INSERT OR UPDATE OR DELETE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_profile_languages_change
  AFTER INSERT OR UPDATE OR DELETE ON public.profile_languages
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_allowlist_change
  AFTER INSERT OR UPDATE OR DELETE ON public.admin_allowlist
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_languages_change
  AFTER INSERT OR UPDATE OR DELETE ON public.languages
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_year_groups_change
  AFTER INSERT OR UPDATE OR DELETE ON public.year_groups
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_assessments_change
  AFTER INSERT OR UPDATE OR DELETE ON public.assessments
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_sections_change
  AFTER INSERT OR UPDATE OR DELETE ON public.assessment_sections
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_items_change
  AFTER INSERT OR UPDATE OR DELETE ON public.assessment_items
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_labels_change
  AFTER INSERT OR UPDATE OR DELETE ON public.ui_labels
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();
CREATE TRIGGER audit_settings_change
  AFTER INSERT OR UPDATE OR DELETE ON public.app_settings
  FOR EACH ROW EXECUTE FUNCTION public.audit_row_change();

ALTER TABLE public.languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.year_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_allowlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile_languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ui_labels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY languages_read_authenticated ON public.languages
  FOR SELECT TO authenticated USING (true);
CREATE POLICY languages_admin_write ON public.languages
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY year_groups_read_authenticated ON public.year_groups
  FOR SELECT TO authenticated USING (true);
CREATE POLICY year_groups_admin_write ON public.year_groups
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY profiles_read_self_or_admin ON public.profiles
  FOR SELECT TO authenticated USING (id = (SELECT auth.uid()) OR public.is_admin());
CREATE POLICY profiles_update_self ON public.profiles
  FOR UPDATE TO authenticated USING (id = (SELECT auth.uid()))
  WITH CHECK (id = (SELECT auth.uid()));
CREATE POLICY profiles_admin_update ON public.profiles
  FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY profile_languages_read_own_or_admin ON public.profile_languages
  FOR SELECT TO authenticated USING (profile_id = (SELECT auth.uid()) OR public.is_admin());
CREATE POLICY profile_languages_insert_own_or_admin ON public.profile_languages
  FOR INSERT TO authenticated WITH CHECK (profile_id = (SELECT auth.uid()) OR public.is_admin());
CREATE POLICY profile_languages_update_own_or_admin ON public.profile_languages
  FOR UPDATE TO authenticated USING (profile_id = (SELECT auth.uid()) OR public.is_admin())
  WITH CHECK (profile_id = (SELECT auth.uid()) OR public.is_admin());
CREATE POLICY profile_languages_delete_own_or_admin ON public.profile_languages
  FOR DELETE TO authenticated USING (profile_id = (SELECT auth.uid()) OR public.is_admin());

CREATE POLICY admin_allowlist_admin_only ON public.admin_allowlist
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY assessments_published_or_admin ON public.assessments
  FOR SELECT TO authenticated USING (status = 'published' OR public.is_admin());
CREATE POLICY assessments_admin_write ON public.assessments
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY assessment_sections_published_or_admin ON public.assessment_sections
  FOR SELECT TO authenticated USING (
    public.is_admin() OR EXISTS (
      SELECT 1 FROM public.assessments a
      WHERE a.id = assessment_id AND a.status = 'published'
    )
  );
CREATE POLICY assessment_sections_admin_write ON public.assessment_sections
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY assessment_items_published_or_admin ON public.assessment_items
  FOR SELECT TO authenticated USING (
    public.is_admin() OR EXISTS (
      SELECT 1
      FROM public.assessment_sections s
      JOIN public.assessments a ON a.id = s.assessment_id
      WHERE s.id = section_id AND a.status = 'published'
    )
  );
CREATE POLICY assessment_items_admin_write ON public.assessment_items
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY ui_labels_read_authenticated ON public.ui_labels
  FOR SELECT TO authenticated USING (true);
CREATE POLICY ui_labels_admin_write ON public.ui_labels
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY audit_log_admin_read ON public.audit_log
  FOR SELECT TO authenticated USING (public.is_admin());

CREATE POLICY app_settings_read_authenticated ON public.app_settings
  FOR SELECT TO authenticated USING (true);
CREATE POLICY app_settings_admin_write ON public.app_settings
  FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

REVOKE ALL ON TABLE public.languages, public.year_groups, public.profiles,
  public.admin_allowlist, public.profile_languages, public.assessments,
  public.assessment_sections, public.assessment_items, public.ui_labels,
  public.audit_log, public.app_settings
  FROM anon, authenticated, PUBLIC;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.languages, public.year_groups TO authenticated;
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.admin_allowlist TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profile_languages TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.assessments, public.assessment_sections,
  public.assessment_items TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ui_labels, public.app_settings TO authenticated;
GRANT SELECT ON public.audit_log TO authenticated;

-- TODO: add my @warwick.bm email before enabling the Azure provider.
INSERT INTO public.admin_allowlist (email)
VALUES ('REPLACE_ME@warwick.bm')
ON CONFLICT (email) DO NOTHING;

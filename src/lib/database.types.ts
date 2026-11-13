export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type ProfileRole = 'student' | 'teacher_admin';

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          first_name: string | null;
          last_name: string | null;
          year_group_id: string | null;
          role: ProfileRole;
          profile_completed: boolean;
          created_at: string;
          updated_at: string;
          last_login_at: string | null;
        };
        Insert: Partial<Database['public']['Tables']['profiles']['Row']> & {
          id: string;
          email: string;
        };
        Update: Partial<Database['public']['Tables']['profiles']['Row']>;
        Relationships: [{
          foreignKeyName: 'profiles_year_group_id_fkey';
          columns: ['year_group_id'];
          isOneToOne: false;
          referencedRelation: 'year_groups';
          referencedColumns: ['id'];
        }];
      };
      languages: {
        Row: { id: string; code: string; name: string; sort_order: number; active: boolean };
        Insert: Partial<Database['public']['Tables']['languages']['Row']> & { code: string; name: string };
        Update: Partial<Database['public']['Tables']['languages']['Row']>;
        Relationships: [];
      };
      year_groups: {
        Row: { id: string; name: string; sort_order: number; active: boolean };
        Insert: Partial<Database['public']['Tables']['year_groups']['Row']> & { name: string };
        Update: Partial<Database['public']['Tables']['year_groups']['Row']>;
        Relationships: [];
      };
      profile_languages: {
        Row: { profile_id: string; language_id: string };
        Insert: { profile_id: string; language_id: string };
        Update: Partial<Database['public']['Tables']['profile_languages']['Row']>;
        Relationships: [];
      };
      admin_allowlist: {
        Row: { email: string; added_by: string | null; created_at: string };
        Insert: { email: string; added_by?: string | null; created_at?: string };
        Update: Partial<Database['public']['Tables']['admin_allowlist']['Row']>;
        Relationships: [];
      };
      assessments: {
        Row: {
          id: string;
          language_id: string;
          year_group_id: string;
          term: string;
          title: string;
          subtitle: string | null;
          legacy_key: string | null;
          status: 'draft' | 'published' | 'archived';
          sort_order: number;
          created_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database['public']['Tables']['assessments']['Row']> & {
          language_id: string;
          year_group_id: string;
          term: string;
          title: string;
        };
        Update: Partial<Database['public']['Tables']['assessments']['Row']>;
        Relationships: [];
      };
      assessment_sections: {
        Row: {
          id: string;
          assessment_id: string;
          title: string;
          instructions: string | null;
          sort_order: number;
          status: 'open' | 'coming_soon' | 'hidden';
        };
        Insert: Partial<Database['public']['Tables']['assessment_sections']['Row']> & {
          assessment_id: string;
          title: string;
        };
        Update: Partial<Database['public']['Tables']['assessment_sections']['Row']>;
        Relationships: [];
      };
      assessment_items: {
        Row: {
          id: string;
          section_id: string;
          prompt: string;
          hint: string | null;
          response_type: string;
          field_config: Json;
          sort_order: number;
        };
        Insert: Partial<Database['public']['Tables']['assessment_items']['Row']> & {
          section_id: string;
          prompt: string;
        };
        Update: Partial<Database['public']['Tables']['assessment_items']['Row']>;
        Relationships: [];
      };
      ui_labels: {
        Row: { id: string; language_id: string; key: string; value: string };
        Insert: Partial<Database['public']['Tables']['ui_labels']['Row']> & {
          language_id: string;
          key: string;
          value: string;
        };
        Update: Partial<Database['public']['Tables']['ui_labels']['Row']>;
        Relationships: [];
      };
      audit_log: {
        Row: {
          id: string;
          actor_id: string | null;
          action: string;
          entity: string;
          entity_id: string | null;
          diff: Json;
          created_at: string;
        };
        Insert: never;
        Update: never;
        Relationships: [];
      };
      app_settings: {
        Row: { key: string; show_all_years: boolean; updated_at: string };
        Insert: { key: string; show_all_years?: boolean; updated_at?: string };
        Update: Partial<Database['public']['Tables']['app_settings']['Row']>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_admin: { Args: Record<PropertyKey, never>; Returns: boolean };
      delete_auth_user: { Args: { target_user: string; confirmation_email: string }; Returns: undefined };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

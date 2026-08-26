// lib/types.ts
// ============================================
// SINGLE SOURCE OF TRUTH — semua content shape
// PRD Section 12
// ============================================

// ---- Shared base shape (12.1) ----
export interface Link {
  label: string;
  url: string;
}

export interface BaseEntry {
  id: string;
  title: string;
  description: string;
  startDate: string; // ISO format
  endDate?: string | null; // null/absent = ongoing
  links?: Link[];
  featured?: boolean;
  tags?: string[];
}

// ---- Experience (12.2) ----
export type EmploymentType =
  | 'full-time'
  | 'internship'
  | 'freelance'
  | 'contract'
  | 'organization'
  | 'other';

export interface Experience extends BaseEntry {
  company: string;
  role: string;
  employmentType: EmploymentType;
  location?: string;
  achievements?: string[];
}

// ---- Project (12.3) ----
export type ProjectStatus = 'in-progress' | 'completed' | 'archived' | 'experiment';
export type ProjectCategory =
  | 'personal'
  | 'professional'
  | 'open-source'
  | 'academic'
  | 'experiment'
  | 'side-project'
  | 'competition';  // <--- TAMBAHKAN competition

export interface Project extends BaseEntry {
  slug: string; // required, unique
  shortDescription: string; // untuk card/preview
  fullDescription: string; // detail page
  image?: string;
  role?: string;
  status: ProjectStatus;
  highlights?: string[];
  category: ProjectCategory;
}

// ---- Activity (12.4) ----
export type ActivityType =
  | 'organization'
  | 'community'
  | 'volunteering'
  | 'event'
  | 'competition'
  | 'committee'
  | 'campus'
  | 'mentoring'
  | 'conference'
  | 'workshop'
  | 'other';

export interface Activity extends BaseEntry {
  organization: string;
  role?: string;
  type: ActivityType;
  location?: string;
  achievements?: string[];
}

// ============================================
// EDUCATION — TAMBAHAN BARU
// ============================================
export interface Education extends BaseEntry {
  school: string;          // Nama institusi
  degree: string;          // Jurusan/program
  logo?: string;           // Path ke file logo di public/images/logos/
  gpa?: string;            // IPK (opsional)
  location?: string;       // Lokasi institusi
  achievements?: string[]; // Prestasi selama pendidikan
  link?: string;           // URL website institusi (opsional)
}

// ---- Profile (12.5) ----
export interface Profile {
  name: string;
  positioning: string; // one-line
  introShort: string; // Home hero/intro
  aboutLong: string; // About page
  email: string;
  socialLinks: Link[];
  resumeUrl?: string;
}
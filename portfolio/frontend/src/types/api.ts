export interface Project {
  id: number;
  title: string;
  description: string;
  image_url?: string;
  github_url?: string;
  live_url?: string;
  technologies: string[];
  featured: boolean;
  order: number;
  created_at: string;
  updated_at?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  icon?: string;
  order: number;
  created_at: string;
  updated_at?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issue_date: string;
  credential_url?: string;
  image_url?: string;
  description?: string;
  created_at: string;
  updated_at?: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
  updated_at?: string;
}

export interface ContactCreate {
  name: string;
  email: string;
  subject: string;
  message: string;
}

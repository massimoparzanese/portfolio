// Tipos básicos para el portfolio

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  impact?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubLinks?: { label: string; url: string }[];
  showCode?: boolean;
  period: string;
  image: string;
  category: string;
  academic?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}
export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
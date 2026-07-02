export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteData {
  name: string;
  role: string;
  tagline: string;
  quote: string;
  about: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  cvUrl?: string;
  stats: Stat[];
  nav: NavLink[];
  /** Chemin vers la photo dans /public — ex. '/photo.jpg'. Laisser undefined pour afficher les initiales. */
  photo?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Diploma {
  degree: string;
  school: string;
  location: string;
  year: string;
  description: string;
}

export interface Certification {
  label: string;
  href?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export interface SkillItem {
  name: string;
  desc?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  period: string;
  role: string;
  description: string;
  bullets: string[];
  transferableSkills: string;
}

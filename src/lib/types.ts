export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Language {
  name: string;
  level: string;
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
  languages: Language[];
  nav: NavLink[];
  /** Chemin vers la photo dans /public — ex. '/photo.jpg'. Laisser undefined pour afficher les initiales. */
  photo?: string;
}

export interface ServicePoint {
  label: string;
  tech?: string;
}

/** Une étape du cycle d'un projet (Cadrer → Construire → Augmenter → Livrer) */
export interface Service {
  id: string;
  step: string;
  title: string;
  pitch: string;
  description: string;
  /** Clés de SKILL_ICONS, affichées dans le bandeau de la carte */
  logos: string[];
  points: ServicePoint[];
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
  problem: string;
  solution: string;
  result: string;
  /** 3 à 4 technos principales, affichées avec leur logo (clés de SKILL_ICONS) */
  tags: string[];
  href?: string;
}

/** Contexte d'usage : en production, en projet, ou en veille / formation */
export type SkillLevel = 'production' | 'project' | 'learning';

export interface SkillItem {
  name: string;
  level: SkillLevel;
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
  /** Technos du poste, affichées avec leur logo (clés de SKILL_ICONS) */
  stack: string[];
  /** Routine au quotidien sur ce poste */
  routine: string[];
}

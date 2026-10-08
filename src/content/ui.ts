import type { Localized } from '@/lib/i18n';
import type { SkillLevel } from '@/lib/types';

interface UiStrings {
  header: {
    mainNav: string;
    openMenu: string;
    closeMenu: string;
    mobileNav: string;
    toggleLanguage: string;
  };
  footer: {
    socialLinks: string;
    rightsReserved: string;
  };
  hero: {
    intro: string;
    ctaProjects: string;
    ctaContact: string;
    downloadCv: string;
    photoAlt: (name: string) => string;
    keyFigures: string;
  };
  services: {
    title: string;
    subtitle: string;
    stepsAria: string;
  };
  projects: {
    title: string;
    subtitle: string;
    techAria: string;
    listAria: string;
    problem: string;
    solution: string;
    result: string;
    viewGithub: string;
  };
  skills: {
    title: string;
    subtitle: string;
    tabsAria: string;
    levels: Record<SkillLevel, string>;
    hint: string;
    moreTabs: string;
  };
  experiences: {
    title: string;
    subtitle: string;
    transferableSkills: string;
    additions: string;
    stack: string;
    routine: string;
  };
  education: {
    title: string;
    subtitle: string;
    diplomas: string;
    certifications: string;
    viewCertificate: (label: string) => string;
  };
  about: {
    title: string;
    languages: string;
  };
  contact: {
    title: string;
    lead: string;
    sub: string;
    ariaMeans: string;
  };
}

export const ui: Localized<UiStrings> = {
  fr: {
    header: {
      mainNav: 'Navigation principale',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      mobileNav: 'Navigation mobile',
      toggleLanguage: 'Changer de langue',
    },
    footer: {
      socialLinks: 'Liens de contact et réseaux',
      rightsReserved: 'Tous droits réservés',
    },
    hero: {
      intro: 'Introduction',
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      downloadCv: 'Télécharger mon CV',
      photoAlt: (name) => `Photo de ${name}`,
      keyFigures: 'Chiffres clés',
    },
    services: {
      title: 'Expertises',
      subtitle: 'De l\'idée à la production : comment je mène un projet.',
      stepsAria: 'Les étapes d\'un projet',
    },
    projects: {
      title: 'Projets',
      subtitle: 'Quelques réalisations récentes : automatisation, IA appliquée et intégrations sur mesure.',
      techAria: 'Technologies utilisées',
      listAria: 'Liste des projets',
      problem: 'Problème',
      solution: 'Solution',
      result: 'Résultat',
      viewGithub: 'Voir mon GitHub',
    },
    skills: {
      title: 'Compétences & Stack',
      subtitle: 'Mes outils, classés selon l\'usage que j\'en fais.',
      tabsAria: 'Catégories de compétences',
      levels: { production: 'En production', project: 'En projet', learning: 'En veille / formation' },
      hint: 'Survolez ou touchez une techno pour voir comment je l\'utilise.',
      moreTabs: 'Voir les catégories suivantes',
    },
    experiences: {
      title: 'Expériences',
      subtitle: "Mon parcours professionnel, de l'automatisation des processus à l'ingénierie IA.",
      transferableSkills: 'Compétences transférables :',
      additions: 'ajouts',
      stack: 'Stack',
      routine: 'Au quotidien',
    },
    education: {
      title: 'Formation',
      subtitle: 'Diplômes et certifications techniques.',
      diplomas: 'Diplômes',
      certifications: 'Certifications techniques',
      viewCertificate: (label) => `Voir l'attestation ${label}`,
    },
    about: {
      title: 'À propos',
      languages: 'Langues',
    },
    contact: {
      title: 'Contact',
      lead: 'Un projet, une question, ou juste envie d’échanger ?',
      sub: 'Les coordonnées sont juste en dessous.',
      ariaMeans: 'Moyens de contact',
    },
  },
  en: {
    header: {
      mainNav: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mobileNav: 'Mobile navigation',
      toggleLanguage: 'Switch language',
    },
    footer: {
      socialLinks: 'Contact and social links',
      rightsReserved: 'All rights reserved',
    },
    hero: {
      intro: 'Introduction',
      ctaProjects: 'View my projects',
      ctaContact: 'Contact me',
      downloadCv: 'Download my CV',
      photoAlt: (name) => `Photo of ${name}`,
      keyFigures: 'Key figures',
    },
    services: {
      title: 'Expertise',
      subtitle: 'From idea to production: how I run a project.',
      stepsAria: 'The stages of a project',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A few recent projects: automation, applied AI and custom integrations.',
      techAria: 'Technologies used',
      listAria: 'Project list',
      problem: 'Problem',
      solution: 'Solution',
      result: 'Result',
      viewGithub: 'View my GitHub',
    },
    skills: {
      title: 'Skills & Stack',
      subtitle: 'My tools, sorted by how I use them.',
      tabsAria: 'Skill categories',
      levels: { production: 'In production', project: 'In projects', learning: 'Learning / exploring' },
      hint: 'Hover or tap a technology to see how I use it.',
      moreTabs: 'See more categories',
    },
    experiences: {
      title: 'Experience',
      subtitle: 'My professional path, from process automation to AI engineering.',
      transferableSkills: 'Transferable skills:',
      additions: 'additions',
      stack: 'Stack',
      routine: 'Day to day',
    },
    education: {
      title: 'Education',
      subtitle: 'Degrees and technical certifications.',
      diplomas: 'Degrees',
      certifications: 'Technical certifications',
      viewCertificate: (label) => `View the ${label} certificate`,
    },
    about: {
      title: 'About',
      languages: 'Languages',
    },
    contact: {
      title: 'Contact',
      lead: 'A project, a question, or just want to say hi?',
      sub: 'My contact details are right below.',
      ariaMeans: 'Ways to get in touch',
    },
  },
};

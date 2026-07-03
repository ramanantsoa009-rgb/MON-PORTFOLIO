import type { Localized } from '@/lib/i18n';

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
    techAria: string;
  };
  projects: {
    title: string;
    subtitle: string;
    techAria: string;
    viewProject: string;
  };
  skills: {
    title: string;
  };
  experiences: {
    title: string;
    subtitle: string;
    transferableSkills: string;
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
  };
  contact: {
    title: string;
    lead: string;
    sub: string;
    ariaMeans: string;
  };
  projectModal: {
    close: string;
    privateTitle: string;
    privateBodyBefore: string;
    privateBodyAfter: string;
    emailCta: string;
    mailSubject: (title: string) => string;
    mailBody: (title: string) => string;
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
      subtitle: 'Les domaines que je maîtrise et dans lesquels j\'interviens au quotidien.',
      techAria: 'Technologies',
    },
    projects: {
      title: 'Projets',
      subtitle: 'Quelques réalisations récentes — automatisation, IA appliquée et intégrations sur mesure.',
      techAria: 'Technologies utilisées',
      viewProject: 'Voir le projet',
    },
    skills: {
      title: 'Compétences & Stack',
    },
    experiences: {
      title: 'Expériences',
      subtitle: "Mon parcours professionnel, de l'automatisation des processus à l'ingénierie IA.",
      transferableSkills: 'Compétences transférables :',
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
    },
    contact: {
      title: 'Contact',
      lead: 'Un projet, une question, ou juste envie d’échanger ?',
      sub: 'Les coordonnées sont juste en dessous.',
      ariaMeans: 'Moyens de contact',
    },
    projectModal: {
      close: 'Fermer',
      privateTitle: 'Code source privé',
      privateBodyBefore: 'Le dépôt de ',
      privateBodyAfter:
        ' reste privé, pour des raisons de confidentialité liées au projet ou au client. Contactez-moi directement et je vous propose un accès ou une démonstration.',
      emailCta: 'M’envoyer un email',
      mailSubject: (title) => `Accès au projet — ${title}`,
      mailBody: (title) =>
        `Bonjour Adrien,\n\nJ'aimerais en savoir plus sur le projet "${title}" et, si possible, obtenir un accès à son code source.\n\nMerci d'avance.`,
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
      title: 'Expertises',
      subtitle: 'The areas I master and work in day to day.',
      techAria: 'Technologies',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A few recent projects — automation, applied AI and custom integrations.',
      techAria: 'Technologies used',
      viewProject: 'View project',
    },
    skills: {
      title: 'Skills & Stack',
    },
    experiences: {
      title: 'Experience',
      subtitle: 'My professional path, from process automation to AI engineering.',
      transferableSkills: 'Transferable skills:',
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
    },
    contact: {
      title: 'Contact',
      lead: 'A project, a question, or just want to say hi?',
      sub: 'My contact details are right below.',
      ariaMeans: 'Ways to get in touch',
    },
    projectModal: {
      close: 'Close',
      privateTitle: 'Private source code',
      privateBodyBefore: 'The ',
      privateBodyAfter:
        " repository stays private, for confidentiality reasons related to the project or the client. Contact me directly and I'll set you up with access or a demo.",
      emailCta: 'Email me',
      mailSubject: (title) => `Access to project — ${title}`,
      mailBody: (title) =>
        `Hi Adrien,\n\nI'd like to know more about the "${title}" project and, if possible, get access to its source code.\n\nThanks in advance.`,
    },
  },
};

import type { SiteData } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const site: Localized<SiteData> = {
  fr: {
    name: 'Adrien Ainanirina Ramanantsoa',
    role: 'Ingénieur Fullstack & IA',
    tagline:
      'Développeur Fullstack et Lead technique : je pilote des projets web, d\'automatisation et DevOps, de l\'architecture au déploiement, avec un fort intérêt pour l\'IA appliquée (LLM, RAG, agents).',
    quote: 'Logique, curieux, et en perpétuel apprentissage.',
    about:
      "Je suis quelqu'un de logique, curieux, et qui n'arrête pas d'apprendre. Ce qui me motive, ce n'est pas la technologie en elle-même, mais ce qu'elle permet de résoudre concrètement.\n\nJ'ai commencé par le développement logiciel, et au fil des projets, j'ai glissé naturellement vers l'IA, parce que c'est là que les problèmes deviennent vraiment intéressants. Aujourd'hui je me retrouve à la croisée du code, des données et de l'automatisation, ce qui me convient parfaitement.\n\nEn dehors du travail, j'aime comprendre comment les choses fonctionnent, qu'il s'agisse d'un système, d'un processus ou d'une idée. Cette curiosité, c'est ce qui me pousse à toujours aller un peu plus loin.",
    email: 'Ramanantsoa009@gmail.com',
    phone: '+230 57 51 37 26',
    whatsapp: 'https://wa.me/261321238754',
    github: 'https://github.com/ramanantsoa009-rgb',
    linkedin: 'https://www.linkedin.com/in/adrien-rmnt',
    cvUrl: '/cv/Resume - R. Adrien Ainanirina 2026.pdf',
    stats: [
      { value: '4 ans', label: "d'expérience" },
      { value: '100–200', label: 'demandes / jour' },
      { value: '3', label: 'entreprises B2B' },
    ],
    languages: [
      { name: 'Malgache', level: 'Langue maternelle' },
      { name: 'Français', level: 'Courant' },
      { name: 'Anglais', level: 'Intermédiaire' },
    ],
    photo: '/pdp.png',
    nav: [
      { label: 'Accueil', href: '#accueil' },
      { label: 'Expertises', href: '#services' },
      { label: 'Projets', href: '#projets' },
      { label: 'Compétences', href: '#competences' },
      { label: 'Expériences', href: '#experiences' },
      { label: 'Formation', href: '#formation' },
      { label: 'À propos', href: '#a-propos' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  en: {
    name: 'Adrien Ainanirina Ramanantsoa',
    role: 'Fullstack & AI Engineer',
    tagline:
      'Fullstack Developer and Technical Lead: I run web, automation and DevOps projects from architecture to deployment, with a strong interest in applied AI (LLMs, RAG, agents).',
    quote: 'Logical, curious, and constantly learning.',
    about:
      "I'm someone logical, curious, and always learning. What drives me isn't technology for its own sake, but what it lets me actually solve.\n\nI started in software development, and over the course of various projects I naturally drifted toward AI, because that's where problems really get interesting. Today I find myself at the intersection of code, data and automation, which suits me perfectly.\n\nOutside of work, I enjoy understanding how things work, whether it's a system, a process or an idea. That curiosity is what keeps pushing me a little further.",
    email: 'Ramanantsoa009@gmail.com',
    phone: '+230 57 51 37 26',
    whatsapp: 'https://wa.me/261321238754',
    github: 'https://github.com/ramanantsoa009-rgb',
    linkedin: 'https://www.linkedin.com/in/adrien-rmnt',
    cvUrl: '/cv/Resume - R. Adrien Ainanirina 2026.pdf',
    stats: [
      { value: '4 years', label: 'of experience' },
      { value: '100–200', label: 'requests / day' },
      { value: '3', label: 'B2B companies' },
    ],
    languages: [
      { name: 'Malagasy', level: 'Native language' },
      { name: 'French', level: 'Fluent' },
      { name: 'English', level: 'Intermediate' },
    ],
    photo: '/pdp.png',
    nav: [
      { label: 'Home', href: '#accueil' },
      { label: 'Expertise', href: '#services' },
      { label: 'Projects', href: '#projets' },
      { label: 'Skills', href: '#competences' },
      { label: 'Experience', href: '#experiences' },
      { label: 'Education', href: '#formation' },
      { label: 'About', href: '#a-propos' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};

import type { Diploma, Certification } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const diplomas: Localized<Diploma[]> = {
  fr: [
    {
      degree: 'Master 2 en Génie Logiciel',
      school: 'Athénée Saint Joseph Antsirabe',
      location: 'Madagascar',
      year: '2017',
      description: 'BACC + 5 en ingénierie logiciel',
    },
    {
      degree: "Licence professionnelle en développement d'application informatique",
      school: 'Athénée Saint Joseph Antsirabe (BACC + 3)',
      location: 'Madagascar',
      year: '2014',
      description: 'BACC + 3 en informatique appliquée',
    },
  ],
  en: [
    {
      degree: "Master's Degree in Software Engineering",
      school: 'Athénée Saint Joseph Antsirabe',
      location: 'Madagascar',
      year: '2017',
      description: '5-year degree in software engineering',
    },
    {
      degree: 'Professional Bachelor\'s in Software Application Development',
      school: 'Athénée Saint Joseph Antsirabe (3-year degree)',
      location: 'Madagascar',
      year: '2014',
      description: '3-year degree in applied computer science',
    },
  ],
};

export const certifications: Localized<Certification[]> = {
  fr: [
    { label: 'LLAMA & Mistral AI',        href: '#' },
    { label: 'Master LangChain V1 & Ollama', href: '#' },
  ],
  en: [
    { label: 'LLAMA & Mistral AI',        href: '#' },
    { label: 'Master LangChain V1 & Ollama', href: '#' },
  ],
};

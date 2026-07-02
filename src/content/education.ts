import type { Diploma, Certification } from '@/lib/types';

export const diplomas: Diploma[] = [
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
];

export const certifications: Certification[] = [
  { label: 'LLAMA & Mistral AI',        href: '#' },
  { label: 'Master LangChain V1 & Ollama', href: '#' },
];

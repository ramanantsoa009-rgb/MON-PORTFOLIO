import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    id: 'dev-frontend',
    title: 'Développement Frontend',
    description:
      'Conception d\'interfaces web modernes et réactives avec Vue.js et Next.js. Du composant isolé à l\'application complète, je construis des UIs fluides, accessibles et connectées à des APIs.',
    tags: ['Vue.js', 'Next.js', 'TypeScript', 'API REST'],
  },
  {
    id: 'dev-backend',
    title: 'Développement Backend',
    description:
      'Conception et développement d\'APIs robustes et scalables avec FastAPI et Python. Modélisation de bases de données, gestion des accès et intégration avec des services tiers via REST.',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'API REST'],
  },
  {
    id: 'gestion-bdd',
    title: 'Gestion de bases de données',
    description:
      'Modélisation, optimisation et administration de bases de données relationnelles. Écriture de requêtes complexes, gestion des migrations et mise en place de structures adaptées aux besoins métiers.',
    tags: ['PostgreSQL', 'Supabase', 'SQL', 'Docker'],
  },
  {
    id: 'devops',
    title: 'DevOps & Déploiement',
    description:
      'Containerisation avec Docker, déploiement sur VPS via Dokploy et mise en place de pipelines CI/CD. Je m\'assure que les applications passent de la machine locale à la production de façon fiable et automatisée.',
    tags: ['Docker', 'VPS', 'Dokploy', 'CI/CD', 'GitHub Actions', 'Linux'],
  },
  {
    id: 'management-tech',
    title: 'Management tech & Gestion de projet',
    description:
      'Pilotage de projets informatiques de A à Z : cadrage du besoin, rédaction de spécifications, coordination des équipes techniques et suivi des livraisons. J\'assure le lien entre les enjeux métiers et les choix techniques.',
    tags: ['Agile / Scrum', 'Documentation', 'Cahier des charges', 'Coordination équipe'],
  },
  {
    id: 'integration-ia',
    title: 'Intégration IA dans les projets',
    description:
      'J\'intègre des briques IA (LLM, RAG, agents) dans des projets existants ou en cours de développement — frontend, backend ou workflow. L\'IA vient augmenter le produit sans tout reconstruire.',
    tags: ['LangChain', 'FastAPI', 'API REST', 'RAG', 'Agents IA', 'n8n'],
  },
];

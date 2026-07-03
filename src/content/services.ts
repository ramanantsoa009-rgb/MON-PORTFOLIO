import type { Service } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const services: Localized<Service[]> = {
  fr: [
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
  ],
  en: [
    {
      id: 'dev-frontend',
      title: 'Frontend Development',
      description:
        'Designing modern, responsive web interfaces with Vue.js and Next.js. From a single component to a full application, I build smooth, accessible UIs connected to APIs.',
      tags: ['Vue.js', 'Next.js', 'TypeScript', 'REST API'],
    },
    {
      id: 'dev-backend',
      title: 'Backend Development',
      description:
        'Designing and building robust, scalable APIs with FastAPI and Python. Database modeling, access management and integration with third-party services via REST.',
      tags: ['FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'REST API'],
    },
    {
      id: 'gestion-bdd',
      title: 'Database Management',
      description:
        'Modeling, optimizing and administering relational databases. Writing complex queries, managing migrations and setting up structures tailored to business needs.',
      tags: ['PostgreSQL', 'Supabase', 'SQL', 'Docker'],
    },
    {
      id: 'devops',
      title: 'DevOps & Deployment',
      description:
        'Containerization with Docker, VPS deployment via Dokploy and setting up CI/CD pipelines. I make sure applications move from local machine to production reliably and automatically.',
      tags: ['Docker', 'VPS', 'Dokploy', 'CI/CD', 'GitHub Actions', 'Linux'],
    },
    {
      id: 'management-tech',
      title: 'Tech Management & Project Management',
      description:
        'End-to-end management of IT projects: scoping requirements, writing specifications, coordinating technical teams and tracking deliveries. I bridge business needs and technical choices.',
      tags: ['Agile / Scrum', 'Documentation', 'Specifications', 'Team coordination'],
    },
    {
      id: 'integration-ia',
      title: 'AI Integration into Projects',
      description:
        'I integrate AI building blocks (LLM, RAG, agents) into existing or in-development projects — frontend, backend or workflow. AI enhances the product without rebuilding everything.',
      tags: ['LangChain', 'FastAPI', 'REST API', 'RAG', 'AI Agents', 'n8n'],
    },
  ],
};

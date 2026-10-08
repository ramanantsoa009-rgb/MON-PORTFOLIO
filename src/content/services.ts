import type { Service } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const services: Localized<Service[]> = {
  fr: [
    {
      id: 'cadrer',
      step: 'Cadrer',
      title: 'Management tech & gestion de projet',
      pitch: 'Je traduis un besoin métier en plan d\'action clair, puis je coordonne l\'équipe jusqu\'à la livraison.',
      description: 'Pilotage de projets informatiques de A à Z : cadrage du besoin, rédaction de spécifications, coordination des équipes techniques et suivi des livraisons. J\'assure le lien entre les enjeux métiers et les choix techniques.',
      logos: ['Cahier des charges', 'Agile / Scrum', 'Coordination', 'Suivi des livraisons'],
      points: [
        { label: 'Cadrage du besoin', tech: 'Cahier des charges' },
        { label: 'Coordination des équipes', tech: 'Agile / Scrum' },
        { label: 'Suivi des livraisons', tech: 'Documentation' },
      ],
    },
    {
      id: 'construire',
      step: 'Construire',
      title: 'Frontend, backend & bases de données',
      pitch: 'Des applications complètes, de l\'interface jusqu\'à la base de données.',
      description: 'Interfaces web modernes et réactives avec Vue.js et Next.js, APIs robustes et scalables avec FastAPI, bases de données modélisées et optimisées pour les besoins métiers. Du composant isolé à l\'application complète, connectée à des services tiers.',
      logos: ['Vue.js', 'Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Supabase'],
      points: [
        { label: 'Interfaces web', tech: 'Vue.js · Next.js' },
        { label: 'APIs robustes', tech: 'FastAPI · Python' },
        { label: 'Bases de données', tech: 'PostgreSQL · Supabase' },
      ],
    },
    {
      id: 'augmenter',
      step: 'Augmenter',
      title: 'Intégration IA',
      pitch: 'J\'ajoute des briques IA à un produit existant, sans tout reconstruire.',
      description: 'J\'intègre des briques IA (LLM, RAG, agents) dans des projets existants ou en cours de développement : frontend, backend ou workflow. L\'IA vient augmenter le produit sans tout reconstruire.',
      logos: ['LangChain', 'n8n', 'Qdrant', 'Ollama', 'RAG & embeddings'],
      points: [
        { label: 'Agents autonomes', tech: 'LangChain · n8n' },
        { label: 'Recherche dans vos documents', tech: 'RAG · Qdrant' },
        { label: 'Automatisation de workflows', tech: 'n8n · API REST' },
      ],
    },
    {
      id: 'livrer',
      step: 'Livrer',
      title: 'DevOps & déploiement',
      pitch: 'Du poste local à la production, de façon fiable et automatisée.',
      description: 'Conteneurisation avec Docker, déploiement sur VPS via Dokploy et mise en place de pipelines CI/CD. Je m\'assure que les applications passent de la machine locale à la production de façon fiable et automatisée.',
      logos: ['Docker', 'Linux', 'VPS', 'Dokploy', 'CI/CD', 'Git'],
      points: [
        { label: 'Conteneurisation', tech: 'Docker' },
        { label: 'Déploiement sur VPS', tech: 'Dokploy · Linux' },
        { label: 'Intégration continue', tech: 'GitHub Actions' },
      ],
    },
  ],
  en: [
    {
      id: 'cadrer',
      step: 'Plan',
      title: 'Tech & project management',
      pitch: 'I turn a business need into a clear action plan, then coordinate the team through delivery.',
      description: 'End-to-end management of IT projects: scoping requirements, writing specifications, coordinating technical teams and tracking deliveries. I bridge business needs and technical choices.',
      logos: ['Specifications', 'Agile / Scrum', 'Coordination', 'Delivery tracking'],
      points: [
        { label: 'Scoping the need', tech: 'Specifications' },
        { label: 'Team coordination', tech: 'Agile / Scrum' },
        { label: 'Delivery tracking', tech: 'Documentation' },
      ],
    },
    {
      id: 'construire',
      step: 'Build',
      title: 'Frontend, backend & databases',
      pitch: 'Complete applications, from the interface down to the database.',
      description: 'Modern, responsive web interfaces with Vue.js and Next.js, robust and scalable APIs with FastAPI, databases modeled and optimized for business needs. From a single component to a full application, connected to third-party services.',
      logos: ['Vue.js', 'Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Supabase'],
      points: [
        { label: 'Web interfaces', tech: 'Vue.js · Next.js' },
        { label: 'Robust APIs', tech: 'FastAPI · Python' },
        { label: 'Databases', tech: 'PostgreSQL · Supabase' },
      ],
    },
    {
      id: 'augmenter',
      step: 'Augment',
      title: 'AI integration',
      pitch: 'I add AI building blocks to an existing product, without rebuilding everything.',
      description: 'I integrate AI building blocks (LLM, RAG, agents) into existing or in-development projects: frontend, backend or workflow. AI enhances the product without rebuilding everything.',
      logos: ['LangChain', 'n8n', 'Qdrant', 'Ollama', 'RAG & embeddings'],
      points: [
        { label: 'Autonomous agents', tech: 'LangChain · n8n' },
        { label: 'Search across your documents', tech: 'RAG · Qdrant' },
        { label: 'Workflow automation', tech: 'n8n · REST API' },
      ],
    },
    {
      id: 'livrer',
      step: 'Ship',
      title: 'DevOps & deployment',
      pitch: 'From local machine to production, reliably and automatically.',
      description: 'Containerization with Docker, VPS deployment via Dokploy and CI/CD pipelines. I make sure applications move from local machine to production reliably and automatically.',
      logos: ['Docker', 'Linux', 'VPS', 'Dokploy', 'CI/CD', 'Git'],
      points: [
        { label: 'Containerization', tech: 'Docker' },
        { label: 'VPS deployment', tech: 'Dokploy · Linux' },
        { label: 'Continuous integration', tech: 'GitHub Actions' },
      ],
    },
  ],
};

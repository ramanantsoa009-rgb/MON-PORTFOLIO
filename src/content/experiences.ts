import type { Experience } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const experiences: Localized<Experience[]> = {
  fr: [
    {
      id: 'beforma-b4ai',
      company: 'BEFORMA-B4AI',
      location: 'St Denis, La Réunion | Grand Baie, Maurice',
      period: '2025 — Aujourd\'hui',
      role: 'Dev. IA & Automatisation',
      description:
        'Entreprise à taille humaine spécialisée dans la certification professionnelle et les solutions en intelligence artificielle et automatisation.',
      bullets: [
        'Création de solutions IA et automatisations pour services RH et commerciaux.',
        'Développement de pipelines personnalisés (API, LLM, agents IA, RAG).',
        'Rédaction de cahiers des charges et documentation technique complète.',
        'Formation et conception de programmes de montée en compétences IA.',
      ],
      transferableSkills: 'IA appliquée, automatisation, gestion de projet agile, communication technique.',
    },
    {
      id: 'orange-business',
      company: 'Orange Business',
      location: 'Madagascar | France',
      period: '2023 — 2025',
      role: 'Responsable Automatisation',
      description: 'Fournisseur de solutions digitales pour les entreprises.',
      bullets: [
        "Responsable de la conception de solutions digitales visant à optimiser le travail des équipes au sein d'un pôle dédié.",
        "Création de scénarios automatisés (workflows) visant à éliminer les tâches répétitives et optimiser les processus.",
        'Déploiement en masse de 100 à 200 demandes de production par jour, pour la création ou la modification de solutions existantes chez les clients.',
        "Transfert de compétences vers les autres pôles afin de favoriser la montée en compétences et l'autonomie des équipes.",
        'Rédaction de la documentation des solutions déployées pour garantir leur bonne utilisation et faciliter leur maintenance.',
      ],
      transferableSkills:
        'Gestion des flux de production, Maîtrise des solutions logicielles, Apprentissage rapide, Expérience sectorielle (B2B), Vision transversale des métiers.',
    },
    {
      id: 'webhelp',
      company: 'Webhelp',
      location: 'Madagascar | France métropole',
      period: '2022 — 2023',
      role: 'Technicien Helpdesk',
      description: 'Société BPO (Business Process Outsourcing) spécialisée en gestion de centres d\'appels.',
      bullets: [
        'Accompagnement des clients dans la résolution de problèmes techniques, incluant la configuration des routeurs et le diagnostic des lignes FTTH et xDSL.',
        'Diagnostic des problématiques en équipe afin de proposer des solutions adaptées.',
        'Responsable de la satisfaction client via le suivi de KPIs clairement définis.',
        "Gestion des conflits grâce à l'intelligence émotionnelle et à l'adaptation situationnelle.",
      ],
      transferableSkills:
        'Diagnostic équipe collaboratif, Gestion conflits, Adaptation situationnelle, Support BPO multi-tâches, Autonomie priorités, Collaboration inter-équipes.',
    },
  ],
  en: [
    {
      id: 'beforma-b4ai',
      company: 'BEFORMA-B4AI',
      location: 'Saint-Denis, Réunion | Grand Baie, Mauritius',
      period: '2025 — Present',
      role: 'AI & Automation Developer',
      description:
        'A human-scale company specialized in professional certification and AI & automation solutions.',
      bullets: [
        'Building AI solutions and automations for HR and sales departments.',
        'Developing custom pipelines (APIs, LLMs, AI agents, RAG).',
        'Writing specifications and complete technical documentation.',
        'Training and designing AI upskilling programs.',
      ],
      transferableSkills: 'Applied AI, automation, agile project management, technical communication.',
    },
    {
      id: 'orange-business',
      company: 'Orange Business',
      location: 'Madagascar | France',
      period: '2023 — 2025',
      role: 'Automation Lead',
      description: 'Provider of digital solutions for businesses.',
      bullets: [
        "Led the design of digital solutions to optimize team workflows within a dedicated unit.",
        "Created automated scenarios (workflows) to eliminate repetitive tasks and optimize processes.",
        'Mass deployment of 100 to 200 production requests per day, for creating or modifying existing client solutions.',
        "Transferred skills to other units to foster upskilling and team autonomy.",
        'Wrote documentation for deployed solutions to ensure proper use and easier maintenance.',
      ],
      transferableSkills:
        'Production flow management, software solution proficiency, fast learning, B2B sector experience, cross-functional business vision.',
    },
    {
      id: 'webhelp',
      company: 'Webhelp',
      location: 'Madagascar | Mainland France',
      period: '2022 — 2023',
      role: 'Helpdesk Technician',
      description: 'BPO (Business Process Outsourcing) company specialized in call center management.',
      bullets: [
        'Supported clients in resolving technical issues, including router configuration and FTTH/xDSL line diagnostics.',
        'Diagnosed issues collaboratively within the team to propose suitable solutions.',
        'Responsible for customer satisfaction by tracking clearly defined KPIs.',
        "Managed conflicts through emotional intelligence and situational adaptation.",
      ],
      transferableSkills:
        'Collaborative team diagnostics, conflict management, situational adaptation, multi-tasking BPO support, priority autonomy, cross-team collaboration.',
    },
  ],
};

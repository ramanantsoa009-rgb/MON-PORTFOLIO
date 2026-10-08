import type { Experience } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const experiences: Localized<Experience[]> = {
  fr: [
    {
      id: 'beforma-b4ai',
      company: 'BEFORMA-B4AI',
      location: 'St Denis, La Réunion | Grand Baie, Maurice',
      period: 'Oct 2025 - Aujourd\'hui',
      role: 'Responsable IA & Automatisation · Fullstack Dev.',
      description:
        'Entreprise à taille humaine spécialisée dans la certification professionnelle et les solutions en intelligence artificielle et automatisation.',
      bullets: [
        'Développement de solutions web et d\'automatisation pour l\'interne et les clients, avec mise en place des pipelines CI/CD et validation des architectures.',
        'Développement de pipelines IA personnalisés (API, LLM, agents IA, RAG) pour les services RH et commerciaux.',
        'Lead technique et gestion du cycle de vie des projets : répartition des tâches et encadrement de l\'équipe.',
        'Référent technique en cas de blocage ou de panne serveur.',
        'Responsable formation IA au sein de l\'entreprise (conception et jury).',
        'Rédaction de cahiers des charges et documentation technique complète.',
      ],
      transferableSkills:
        'IA appliquée, automatisation, DevOps, lead technique, gestion de projet agile, communication technique.',
      stack: ['Python', 'LangChain', 'n8n', 'Docker', 'GitHub Actions'],
      routine: [
        'Répartition des tâches et suivi de l\'équipe.',
        'Développement et revue des solutions web, automatisations et pipelines IA.',
        'Suivi des déploiements et intervention en cas de panne.',
        'Préparation des formations IA et des jurys.',
      ],
    },
    {
      id: 'orange-business',
      company: 'Orange Business',
      location: 'Madagascar | France',
      period: 'Oct 2023 - Oct 2025',
      role: 'Technical Operations Advisor · Automation Manager',
      description: 'Fournisseur de solutions digitales pour les entreprises.',
      bullets: [
        'Conception de solutions digitales pour optimiser le travail des équipes au sein d\'un pôle dédié.',
        'Création de scénarios automatisés (workflows) pour éliminer les tâches répétitives et accroître la productivité.',
        'Responsable du build et de l\'évolution de la production client : déploiement de 100 à 200 demandes par jour (créations et mises à jour).',
        'Transfert de compétences vers les autres pôles pour renforcer l\'autonomie des équipes.',
        'Rédaction de la documentation des solutions déployées pour garantir leur bonne utilisation et faciliter leur maintenance.',
      ],
      transferableSkills:
        'Gestion des flux de production, Maîtrise des solutions logicielles, Apprentissage rapide, Expérience sectorielle (B2B), Vision transversale des métiers.',
      stack: ['n8n', 'API REST', 'Python', 'SQL'],
      routine: [
        'Traitement des demandes de production du jour (100 à 200).',
        'Conception et amélioration des workflows automatisés.',
        'Accompagnement des autres pôles sur les solutions.',
        'Mise à jour de la documentation des solutions déployées.',
      ],
    },
    {
      id: 'webhelp',
      company: 'Webhelp',
      location: 'Madagascar | France métropolitaine',
      period: 'Oct 2022 - Sept 2023',
      role: 'Technicien Helpdesk',
      description: 'Société BPO (Business Process Outsourcing) spécialisée en gestion de centres d\'appels.',
      bullets: [
        'Assistance technique aux clients : configuration de routeurs et diagnostic des lignes FTTH et xDSL.',
        'Diagnostic des problématiques en équipe afin de proposer des solutions adaptées.',
        'Suivi de la satisfaction client à travers des KPIs définis.',
        'Gestion des situations conflictuelles avec écoute et adaptation.',
      ],
      transferableSkills:
        'Diagnostic collaboratif en équipe, Gestion des conflits, Adaptation situationnelle, Support BPO multitâche, Autonomie dans les priorités, Collaboration inter-équipes.',
      stack: ['Support client', 'FTTH / xDSL', 'Routeurs', 'KPIs'],
      routine: [
        'Prise en charge des appels et diagnostic des lignes FTTH / xDSL.',
        'Configuration de routeurs avec les clients.',
        'Analyse des incidents en équipe.',
        'Suivi des KPIs de satisfaction.',
      ],
    },
  ],
  en: [
    {
      id: 'beforma-b4ai',
      company: 'BEFORMA-B4AI',
      location: 'Saint-Denis, Réunion | Grand Baie, Mauritius',
      period: 'Oct 2025 - Present',
      role: 'AI & Automation Lead · Fullstack Dev.',
      description:
        'A human-scale company specializing in professional certification and AI & automation solutions.',
      bullets: [
        'Developing web and automation solutions for internal teams and clients, setting up CI/CD pipelines and validating architectures.',
        'Developing custom AI pipelines (APIs, LLMs, AI agents, RAG) for HR and sales departments.',
        'Technical lead and project lifecycle management: task allocation and team supervision.',
        'Technical point of contact for blockers and server outages.',
        'Head of AI training within the company (program design and jury).',
        'Writing specifications and complete technical documentation.',
      ],
      transferableSkills:
        'Applied AI, automation, DevOps, technical leadership, agile project management, technical communication.',
      stack: ['Python', 'LangChain', 'n8n', 'Docker', 'GitHub Actions'],
      routine: [
        'Assigning tasks and following up with the team.',
        'Building and reviewing web solutions, automations and AI pipelines.',
        'Monitoring deployments and stepping in on outages.',
        'Preparing AI training sessions and juries.',
      ],
    },
    {
      id: 'orange-business',
      company: 'Orange Business',
      location: 'Madagascar | France',
      period: 'Oct 2023 - Oct 2025',
      role: 'Technical Operations Advisor · Automation Manager',
      description: 'Provider of digital solutions for businesses.',
      bullets: [
        'Designed digital solutions to optimize team workflows within a dedicated unit.',
        'Created automated scenarios (workflows) to eliminate repetitive tasks and increase productivity.',
        'Owned the build and evolution of client production: deployment of 100 to 200 requests per day (creations and updates).',
        'Transferred skills to other units to strengthen team autonomy.',
        'Wrote documentation for deployed solutions to ensure proper use and easier maintenance.',
      ],
      transferableSkills:
        'Production flow management, software solution proficiency, fast learning, B2B sector experience, cross-functional business vision.',
      stack: ['n8n', 'REST API', 'Python', 'SQL'],
      routine: [
        'Processing the day\'s production requests (100 to 200).',
        'Designing and improving automated workflows.',
        'Supporting other teams on the solutions.',
        'Updating the documentation of deployed solutions.',
      ],
    },
    {
      id: 'webhelp',
      company: 'Webhelp',
      location: 'Madagascar | Mainland France',
      period: 'Oct 2022 - Sep 2023',
      role: 'Helpdesk Technician',
      description: 'BPO (Business Process Outsourcing) company specialized in call center management.',
      bullets: [
        'Technical support for customers: router configuration and FTTH/xDSL line diagnostics.',
        'Diagnosed issues collaboratively within the team to propose suitable solutions.',
        'Tracked customer satisfaction through defined KPIs.',
        'Handled conflict situations with active listening and adaptability.',
      ],
      transferableSkills:
        'Collaborative team diagnostics, conflict management, situational adaptation, multitasking BPO support, autonomy in setting priorities, cross-team collaboration.',
      stack: ['Customer support', 'FTTH / xDSL', 'Routers', 'KPIs'],
      routine: [
        'Handling calls and diagnosing FTTH / xDSL lines.',
        'Configuring routers with customers.',
        'Analyzing incidents as a team.',
        'Tracking satisfaction KPIs.',
      ],
    },
  ],
};

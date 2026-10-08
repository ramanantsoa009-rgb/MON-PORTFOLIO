import type { Project } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const projects: Localized<Project[]> = {
  fr: [
    {
      id: 'weather-vibes',
      title: 'Weather Vibes : déploiement GitOps sur Kubernetes',
      description:
        'Une application météo qui adapte son thème visuel au temps qu\'il fait. L\'application est volontairement simple : le cœur du projet, c\'est sa chaîne de déploiement sur Kubernetes.',
      problem: 'Déployer une application de façon fiable et traçable, sans intervenir à la main sur le cluster.',
      solution:
        'Tekton construit l\'image avec Kaniko et met à jour le manifest dans Git. Argo CD synchronise ensuite le cluster k3s à partir de Git, et les secrets sont chiffrés avec Sealed Secrets.',
      result: 'Chaque version déployée correspond exactement à un commit, et une démo est en ligne.',
      tags: ['FastAPI', 'Kubernetes', 'Argo CD', 'Tekton'],
      href: 'https://github.com/ramanantsoa009-rgb/weather-vibes',
    },
    {
      id: 'langchain-rag-pdf',
      title: 'RAG sur PDF avec LangChain',
      description:
        'Une API qui permet d\'interroger des documents PDF en langage naturel. Les réponses s\'appuient uniquement sur le contenu des fichiers fournis.',
      problem: 'Retrouver une information précise dans de longs PDF prend du temps.',
      solution:
        'Les documents sont découpés, vectorisés et stockés dans ChromaDB. Un agent LangChain retrouve les passages utiles et formule la réponse, exposée via FastAPI.',
      result: 'On pose une question et on obtient une réponse fondée sur les documents, sans avoir à les relire.',
      tags: ['Python', 'LangChain', 'FastAPI', 'ChromaDB'],
      href: 'https://github.com/ramanantsoa009-rgb/langchain-rag-pdf',
    },
    {
      id: 'mga-mur-bot',
      title: 'Bot de suivi du taux MGA → MUR',
      description:
        'Un bot qui surveille le taux de change ariary → roupie mauricienne et envoie une notification Telegram à chaque variation.',
      problem: 'Suivre l\'évolution d\'un taux de change oblige à le vérifier soi-même, chaque jour.',
      solution:
        'Un script Python, lancé chaque jour par GitHub Actions, compare le taux au dernier connu. Un Cloudflare Worker permet aussi de lancer une vérification depuis Telegram.',
      result: 'Une alerte automatique à chaque variation, sans serveur à maintenir et sans coût.',
      tags: ['Python', 'GitHub Actions', 'Telegram', 'Cloudflare Workers'],
      href: 'https://github.com/ramanantsoa009-rgb/MGA-MUR-BOT',
    },
    {
      id: 'dispatch-automatise-n8n',
      title: 'Dispatch automatisé des tâches collaborateurs',
      description:
        'Un workflow n8n qui répartit chaque jour les dossiers entre les collaborateurs, à partir d\'un fichier Excel.',
      problem:
        'La répartition quotidienne des dossiers se faisait à la main, avec le risque d\'écraser un travail en cours.',
      solution:
        'Le workflow importe le fichier de dispatch, le compare à l\'historique, conserve les dossiers non traités de la veille et n\'attribue que les nouveaux.',
      result: 'Une répartition automatique chaque jour, sans écraser le travail en cours.',
      tags: ['n8n', 'Excel', 'Automatisation'],
      href: 'https://github.com/ramanantsoa009-rgb/dispatch-automatise-n8n',
    },
    {
      id: 'agent-ia-consignes-gmail',
      title: 'Agent IA : consignes clients & Gmail',
      description:
        'Un agent conversationnel qui consulte les consignes propres à chaque client et peut agir dans Gmail.',
      problem: 'Les consignes clients sont rangées dans un fichier Excel qu\'il faut consulter avant chaque échange.',
      solution:
        'Un agent LangChain lit les consignes et interagit avec Gmail. Un workflow n8n secondaire lui donne accès aux fichiers de référence, à la demande.',
      result: 'Les consignes sont accessibles en conversation, directement depuis l\'agent.',
      tags: ['LangChain', 'n8n', 'Gmail', 'Python'],
      href: 'https://github.com/ramanantsoa009-rgb/agent-ia-consignes-gmail',
    },
    {
      id: 'assistant-ia-createurs-contenu',
      title: 'Assistant IA pour créateurs de contenu',
      description:
        'Un assistant conversationnel local qui aide les créateurs à répondre à leur audience et à trouver des idées de scripts.',
      problem: 'Répondre à son audience et trouver des idées dans son propre ton demande du temps.',
      solution:
        'Un agent local combine Gemini et un modèle open-source, guidé par un prompt système adapté au ton et à l\'audience du créateur.',
      result: 'Des propositions de réponses et d\'idées de scripts personnalisées, prêtes à être retravaillées.',
      tags: ['Gemini', 'LLM open-source', 'n8n', 'Prompt engineering'],
      href: 'https://github.com/ramanantsoa009-rgb/assistant-ia-createurs-contenu',
    },
    {
      id: 'kubernetes-manifests',
      title: 'Kubernetes : parcours de TP',
      description:
        'Huit TP progressifs réalisés pendant ma formation Kubernetes. Chaque manifest est écrit à la main, déployé sur un cluster local et documenté.',
      problem: 'Comprendre les briques de Kubernetes en les manipulant, plutôt qu\'en passant par des générateurs.',
      solution:
        'Pods, Deployments, Services, Ingress avec Traefik et volumes persistants, puis un WordPress avec MySQL, déployé à la main puis avec Helm.',
      result: 'Une base solide sur Kubernetes, réutilisée ensuite dans le projet Weather Vibes.',
      tags: ['Kubernetes', 'Helm', 'Traefik'],
      href: 'https://github.com/ramanantsoa009-rgb/kubernetes-manifests',
    },
  ],
  en: [
    {
      id: 'weather-vibes',
      title: 'Weather Vibes: GitOps Deployment on Kubernetes',
      description:
        'A weather app that adapts its visual theme to the current weather. The app is deliberately simple: the heart of the project is its deployment pipeline on Kubernetes.',
      problem: 'Deploying an application reliably and traceably, without manual changes on the cluster.',
      solution:
        'Tekton builds the image with Kaniko and updates the manifest in Git. Argo CD then syncs the k3s cluster from Git, and secrets are encrypted with Sealed Secrets.',
      result: 'Every deployed version maps exactly to a commit, and a live demo is online.',
      tags: ['FastAPI', 'Kubernetes', 'Argo CD', 'Tekton'],
      href: 'https://github.com/ramanantsoa009-rgb/weather-vibes',
    },
    {
      id: 'langchain-rag-pdf',
      title: 'RAG on PDFs with LangChain',
      description:
        'An API for querying PDF documents in natural language. Answers rely solely on the content of the provided files.',
      problem: 'Finding a specific piece of information in long PDFs takes time.',
      solution:
        'Documents are split, vectorized and stored in ChromaDB. A LangChain agent retrieves the relevant passages and writes the answer, exposed through FastAPI.',
      result: 'You ask a question and get an answer grounded in the documents, without rereading them.',
      tags: ['Python', 'LangChain', 'FastAPI', 'ChromaDB'],
      href: 'https://github.com/ramanantsoa009-rgb/langchain-rag-pdf',
    },
    {
      id: 'mga-mur-bot',
      title: 'MGA → MUR Exchange Rate Bot',
      description:
        'A bot that monitors the Malagasy ariary to Mauritian rupee exchange rate and sends a Telegram notification on every change.',
      problem: 'Following an exchange rate means checking it yourself, every day.',
      solution:
        'A Python script, run daily by GitHub Actions, compares the rate with the last known one. A Cloudflare Worker also lets you trigger a check from Telegram.',
      result: 'An automatic alert on every change, with no server to maintain and no cost.',
      tags: ['Python', 'GitHub Actions', 'Telegram', 'Cloudflare Workers'],
      href: 'https://github.com/ramanantsoa009-rgb/MGA-MUR-BOT',
    },
    {
      id: 'dispatch-automatise-n8n',
      title: 'Automated Task Dispatch for Staff',
      description: 'An n8n workflow that distributes files among staff every day, based on an Excel file.',
      problem: 'The daily distribution of files was done by hand, with the risk of overwriting work in progress.',
      solution:
        'The workflow imports the dispatch file, compares it with the history, keeps yesterday\'s unprocessed files and only assigns the new ones.',
      result: 'An automatic distribution every day, without overwriting work in progress.',
      tags: ['n8n', 'Excel', 'Automation'],
      href: 'https://github.com/ramanantsoa009-rgb/dispatch-automatise-n8n',
    },
    {
      id: 'agent-ia-consignes-gmail',
      title: 'AI Agent: Client Instructions & Gmail',
      description: 'A conversational agent that looks up each client\'s instructions and can act in Gmail.',
      problem: 'Client instructions live in an Excel file that has to be checked before every exchange.',
      solution:
        'A LangChain agent reads the instructions and interacts with Gmail. A secondary n8n workflow gives it on-demand access to the reference files.',
      result: 'Instructions are available in conversation, straight from the agent.',
      tags: ['LangChain', 'n8n', 'Gmail', 'Python'],
      href: 'https://github.com/ramanantsoa009-rgb/agent-ia-consignes-gmail',
    },
    {
      id: 'assistant-ia-createurs-contenu',
      title: 'AI Assistant for Content Creators',
      description:
        'A local conversational assistant that helps creators reply to their audience and find script ideas.',
      problem: 'Replying to your audience and finding ideas in your own voice takes time.',
      solution:
        'A local agent combines Gemini and an open-source model, guided by a system prompt tailored to the creator\'s tone and audience.',
      result: 'Personalized reply suggestions and script ideas, ready to be refined.',
      tags: ['Gemini', 'Open-source LLM', 'n8n', 'Prompt engineering'],
      href: 'https://github.com/ramanantsoa009-rgb/assistant-ia-createurs-contenu',
    },
    {
      id: 'kubernetes-manifests',
      title: 'Kubernetes: Hands-on Labs',
      description:
        'Eight progressive labs completed during my Kubernetes training. Each manifest is written by hand, deployed on a local cluster and documented.',
      problem: 'Understanding Kubernetes building blocks by working with them, rather than through generators.',
      solution:
        'Pods, Deployments, Services, Ingress with Traefik and persistent volumes, then WordPress with MySQL, deployed by hand and then with Helm.',
      result: 'A solid Kubernetes foundation, later reused in the Weather Vibes project.',
      tags: ['Kubernetes', 'Helm', 'Traefik'],
      href: 'https://github.com/ramanantsoa009-rgb/kubernetes-manifests',
    },
  ],
};

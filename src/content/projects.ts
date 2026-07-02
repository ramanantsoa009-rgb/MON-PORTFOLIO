import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'langchain-rag-pdf',
    title: 'RAG sur PDF avec LangChain',
    description:
      'API FastAPI permettant d\'interroger des PDFs en langage naturel via RAG. Les documents sont vectorisés et stockés dans ChromaDB, puis un agent LangChain répond aux questions en se basant uniquement sur leur contenu.',
    tags: ['Python', 'LangChain', 'FastAPI', 'ChromaDB', 'RAG', 'Embeddings'],
    href: 'https://github.com/ramanantsoa009-rgb/langchain-rag-pdf',
  },
  {
    id: 'dispatch-automatise-n8n',
    title: 'Dispatch automatisé des tâches collaborateurs',
    description:
      'Workflow n8n qui automatise la répartition quotidienne des dossiers entre collaborateurs. Il importe un fichier Excel de dispatch, le compare à l\'historique existant, conserve les dossiers non traités de la veille et attribue les nouveaux — sans jamais écraser le travail en cours.',
    tags: ['n8n', 'Excel / XLSX', 'Automatisation', 'Gestion de fichiers', 'Workflows'],
    href: 'https://github.com/ramanantsoa009-rgb/dispatch-automatise-n8n',
  },
  {
    id: 'agent-ia-consignes-gmail',
    title: 'Agent IA — Consignes clients & Gmail',
    description:
      'Agent conversationnel capable de consulter les consignes clients stockées dans un fichier Excel et d\'interagir avec Gmail. Un workflow secondaire se déclenche à la demande pour donner à l\'agent un accès dynamique aux fichiers de référence.',
    tags: ['LangChain', 'n8n', 'Gmail API', 'Excel', 'Agents IA', 'Python'],
    href: 'https://github.com/ramanantsoa009-rgb/agent-ia-consignes-gmail',
  },
  {
    id: 'assistant-ia-createurs-contenu',
    title: 'Assistant IA pour créateurs de contenu',
    description:
      'Agent conversationnel local combinant Gemini et un modèle open-source, configuré avec un prompt système sur mesure. Aide les créateurs à générer des réponses personnalisées et des inspirations de scripts adaptés à leur ton et leur audience.',
    tags: ['Gemini', 'LLM open-source', 'Prompt engineering', 'n8n', 'Agents IA'],
    href: 'https://github.com/ramanantsoa009-rgb/assistant-ia-createurs-contenu',
  },
];

import type { SkillGroup } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const skills: Localized<SkillGroup[]> = {
  fr: [
    {
      category: 'Frameworks & Web',
      items: [
        { name: 'Vue.js',    level: 'production', desc: 'Interfaces web réactives et SPAs pour des projets clients et internes.' },
        { name: 'Next.js',   level: 'production', desc: 'Applications web SSR/SSG, dont ce portfolio.' },
        { name: 'FastAPI',   level: 'project', desc: 'APIs Python hautes performances pour exposer des services IA et métiers.' },
      ],
    },
    {
      category: 'Données & Infra',
      items: [
        { name: 'Supabase',    level: 'production', desc: 'Backend PostgreSQL managé pour apps et stockage de données IA.' },
        { name: 'PostgreSQL',  level: 'production', desc: 'Base relationnelle principale, utilisée standalone et via Supabase.' },
        { name: 'Docker',      level: 'production', desc: 'Conteneurisation des apps pour des déploiements reproductibles.' },
        { name: 'Git',         level: 'production', desc: 'Gestion de versions, branches features et revues de code en équipe.' },
        { name: 'Linux',       level: 'production', desc: 'Environnement quotidien pour dev et administration serveur.' },
        { name: 'VPS',         level: 'production', desc: 'Configuration et maintenance de serveurs distants (Hetzner, OVH).' },
        { name: 'Dokploy',     level: 'production', desc: 'Plateforme self-hosted pour gérer et déployer des apps sur VPS.' },
        { name: 'GitHub Actions', level: 'production', desc: 'Pipelines CI/CD pour tests automatiques et déploiement continu.' },
        { name: 'Kubernetes',  level: 'project', desc: 'Orchestration de conteneurs pour des déploiements à l\'échelle.' },
        { name: 'Argo CD',     level: 'project', desc: 'Déploiement GitOps : le cluster se synchronise sur Git (projet Weather Vibes). Contrôle des bonnes pratiques avec Polaris.' },
        { name: 'Tekton',      level: 'project', desc: 'Pipeline CI sur Kubernetes : build de l\'image avec Kaniko et mise à jour des manifests.' },
        { name: 'Helm',        level: 'project', desc: 'Déploiement d\'applications sur Kubernetes à partir de charts (WordPress avec MySQL).' },
        { name: 'Cloudflare Workers', level: 'project', desc: 'Fonctions serverless pour relier un bot Telegram à GitHub Actions.' },
      ],
    },
    {
      category: 'Langages',
      items: [
        { name: 'Python',      level: 'production', desc: 'Langage principal pour APIs, scripts d\'automatisation et pipelines IA.' },
        { name: 'JavaScript',  level: 'production', desc: 'Langage front et scripting, utilisé avec Vue.js et Next.js.' },
        { name: 'Java SE/EE',  level: 'learning', desc: 'Développement backend entreprise (cours ingénieur + projets académiques).' },
        { name: 'SQL',         level: 'production', desc: 'Requêtes, vues et modélisation relationnelle sur PostgreSQL et Supabase.' },
        { name: 'Bash',        level: 'production', desc: 'Scripts système, déploiements automatisés et tâches planifiées (cron).' },
      ],
    },
    {
      category: 'IA & LLM',
      items: [
        { name: 'LangChain',        level: 'production', desc: 'Orchestration de chaînes LLM, mémoire et outils pour agents autonomes.' },
        { name: 'Ollama',           level: 'project', desc: 'Exécution locale de modèles open-source pour dev et tests offline.' },
        { name: 'RAG & embeddings', level: 'production', desc: 'Recherche sémantique sur documents clients (PDF, textes, bases de connaissances).' },
        { name: 'Qdrant',           level: 'project', desc: 'Base vectorielle pour stocker et requêter les embeddings métiers.' },
        { name: 'Llama',            level: 'project', desc: 'Prototypage d\'agents en local avec des modèles open-source.' },
        { name: 'Mistral AI',       level: 'project', desc: 'Modèles Mistral pour la génération et l\'analyse de texte dans les agents.' },
      ],
    },
    {
      category: 'Automatisation',
      items: [
        { name: 'n8n',          level: 'production', desc: 'Orchestration de workflows entre APIs, SaaS et bases de données, jusqu\'à 100–200 demandes de production par jour.' },
        { name: 'API REST',     level: 'production', desc: 'Conception et consommation d\'APIs pour intégrer des services tiers.' },
        { name: 'Agents IA',    level: 'production', desc: 'Agents autonomes capables de décider et d\'agir sur des systèmes externes.' },
        { name: 'Pipelines LLM', level: 'production', desc: 'Chaînes multi-étapes combinant LLM, outils, mémoire et validation.' },
      ],
    },
    {
      category: 'Gestion de projet',
      items: [
        { name: 'Agile / Scrum', level: 'production', desc: 'Organisation en sprints, répartition des tâches et suivi de l\'équipe.' },
        { name: 'Notion',        level: 'production', desc: 'Documentation, cahiers des charges et suivi des projets.' },
        { name: 'Monday',        level: 'production', desc: 'Planification et suivi de l\'avancement des tâches en équipe.' },
      ],
    },
  ],
  en: [
    {
      category: 'Frameworks & Web',
      items: [
        { name: 'Vue.js',    level: 'production', desc: 'Reactive web interfaces and SPAs for client and internal projects.' },
        { name: 'Next.js',   level: 'production', desc: 'SSR/SSG web applications, including this portfolio.' },
        { name: 'FastAPI',   level: 'project', desc: 'High-performance Python APIs powering AI and business services.' },
      ],
    },
    {
      category: 'Data & Infra',
      items: [
        { name: 'Supabase',    level: 'production', desc: 'Managed PostgreSQL backend for apps and AI data storage.' },
        { name: 'PostgreSQL',  level: 'production', desc: 'Main relational database, used standalone and via Supabase.' },
        { name: 'Docker',      level: 'production', desc: 'Containerizing apps for reproducible deployments.' },
        { name: 'Git',         level: 'production', desc: 'Version control, feature branches and team code reviews.' },
        { name: 'Linux',       level: 'production', desc: 'Daily environment for dev and server administration.' },
        { name: 'VPS',         level: 'production', desc: 'Configuring and maintaining remote servers (Hetzner, OVH).' },
        { name: 'Dokploy',     level: 'production', desc: 'Self-hosted platform to manage and deploy apps on VPS.' },
        { name: 'GitHub Actions', level: 'production', desc: 'CI/CD pipelines for automated tests and continuous deployment.' },
        { name: 'Kubernetes',  level: 'project', desc: 'Container orchestration for deployments at scale.' },
        { name: 'Argo CD',     level: 'project', desc: 'GitOps deployment: the cluster syncs from Git (Weather Vibes project). Best-practice checks with Polaris.' },
        { name: 'Tekton',      level: 'project', desc: 'CI pipeline on Kubernetes: image build with Kaniko and manifest updates.' },
        { name: 'Helm',        level: 'project', desc: 'Deploying applications on Kubernetes from charts (WordPress with MySQL).' },
        { name: 'Cloudflare Workers', level: 'project', desc: 'Serverless functions linking a Telegram bot to GitHub Actions.' },
      ],
    },
    {
      category: 'Languages',
      items: [
        { name: 'Python',      level: 'production', desc: 'Primary language for APIs, automation scripts and AI pipelines.' },
        { name: 'JavaScript',  level: 'production', desc: 'Frontend and scripting language, used with Vue.js and Next.js.' },
        { name: 'Java SE/EE',  level: 'learning', desc: 'Enterprise backend development (engineering courses + academic projects).' },
        { name: 'SQL',         level: 'production', desc: 'Queries, views and relational modeling on PostgreSQL and Supabase.' },
        { name: 'Bash',        level: 'production', desc: 'System scripts, automated deployments and scheduled tasks (cron).' },
      ],
    },
    {
      category: 'AI & LLM',
      items: [
        { name: 'LangChain',        level: 'production', desc: 'Orchestrating LLM chains, memory and tools for autonomous agents.' },
        { name: 'Ollama',           level: 'project', desc: 'Running open-source models locally for dev and offline testing.' },
        { name: 'RAG & embeddings', level: 'production', desc: 'Semantic search over client documents (PDFs, text, knowledge bases).' },
        { name: 'Qdrant',           level: 'project', desc: 'Vector database for storing and querying business embeddings.' },
        { name: 'Llama',            level: 'project', desc: 'Prototyping agents locally with open-source models.' },
        { name: 'Mistral AI',       level: 'project', desc: 'Mistral models for text generation and analysis in agents.' },
      ],
    },
    {
      category: 'Automation',
      items: [
        { name: 'n8n',          level: 'production', desc: 'Orchestrating workflows across APIs, SaaS and databases, up to 100–200 production requests per day.' },
        { name: 'REST API',     level: 'production', desc: 'Designing and consuming APIs to integrate third-party services.' },
        { name: 'AI Agents',    level: 'production', desc: 'Autonomous agents able to decide and act on external systems.' },
        { name: 'LLM Pipelines', level: 'production', desc: 'Multi-step chains combining LLMs, tools, memory and validation.' },
      ],
    },
    {
      category: 'Project management',
      items: [
        { name: 'Agile / Scrum', level: 'production', desc: 'Sprint planning, task allocation and team follow-up.' },
        { name: 'Notion',        level: 'production', desc: 'Documentation, specifications and project tracking.' },
        { name: 'Monday',        level: 'production', desc: 'Planning and tracking task progress as a team.' },
      ],
    },
  ],
};

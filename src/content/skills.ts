import type { SkillGroup } from '@/lib/types';
import type { Localized } from '@/lib/i18n';

export const skills: Localized<SkillGroup[]> = {
  fr: [
    {
      category: 'IA & LLM',
      items: [
        { name: 'LangChain',        desc: 'Orchestration de chaînes LLM, mémoire et outils pour agents autonomes.' },
        { name: 'Ollama',           desc: 'Exécution locale de modèles open-source pour dev et tests offline.' },
        { name: 'RAG & embeddings', desc: 'Recherche sémantique sur documents clients (PDF, textes, bases de connaissances).' },
        { name: 'Qdrant',           desc: 'Base vectorielle pour stocker et requêter les embeddings métiers.' },
        { name: 'LLAMA',            desc: 'Prototypage d\'agents en local avec des modèles open-source.' },
      ],
    },
    {
      category: 'Automatisation',
      items: [
        { name: 'n8n',          desc: 'Orchestration de 200+ workflows/jour entre APIs, SaaS et bases de données.' },
        { name: 'API REST',     desc: 'Conception et consommation d\'APIs pour intégrer des services tiers.' },
        { name: 'Agents IA',    desc: 'Agents autonomes capables de décider et d\'agir sur des systèmes externes.' },
        { name: 'Pipelines LLM', desc: 'Chaînes multi-étapes combinant LLM, outils, mémoire et validation.' },
      ],
    },
    {
      category: 'Frameworks & Web',
      items: [
        { name: 'Vue.js',    desc: 'Interfaces web réactives et SPAs pour des projets clients et internes.' },
        { name: 'Next.js',   desc: 'Applications web SSR/SSG — dont ce portfolio.' },
        { name: 'FastAPI',   desc: 'APIs Python hautes performances pour exposer des services IA et métiers.' },
      ],
    },
    {
      category: 'Langages',
      items: [
        { name: 'Python',      desc: 'Langage principal pour APIs, scripts d\'automatisation et pipelines IA.' },
        { name: 'JavaScript',  desc: 'Langage front et scripting — utilisé avec Vue.js et Next.js.' },
        { name: 'Java SE/EE',  desc: 'Développement backend entreprise (cours ingénieur + projets académiques).' },
        { name: 'SQL',         desc: 'Requêtes, vues et modélisation relationnelle sur PostgreSQL et Supabase.' },
        { name: 'Bash',        desc: 'Scripts système, déploiements automatisés et tâches planifiées (cron).' },
      ],
    },
    {
      category: 'Données & Infra',
      items: [
        { name: 'Supabase',    desc: 'Backend PostgreSQL managé pour apps et stockage de données IA.' },
        { name: 'PostgreSQL',  desc: 'Base relationnelle principale, utilisée standalone et via Supabase.' },
        { name: 'Docker',      desc: 'Containerisation des apps pour des déploiements reproductibles.' },
        { name: 'Git',         desc: 'Gestion de versions, branches features et revues de code en équipe.' },
        { name: 'Linux',       desc: 'Environnement quotidien pour dev et administration serveur.' },
        { name: 'VPS',         desc: 'Configuration et maintenance de serveurs distants (Hetzner, OVH).' },
        { name: 'Dokploy',     desc: 'Plateforme self-hosted pour gérer et déployer des apps sur VPS.' },
        { name: 'CI/CD',       desc: 'Pipelines GitHub Actions pour tests automatiques et déploiement continu.' },
      ],
    },
    {
      category: 'Langues & Environnements',
      items: [
        { name: 'Français (courant)', desc: 'Niveau professionnel.' },
        { name: 'Anglais Pro',        desc: 'Documentation technique, échanges clients et emails B2B.' },
        { name: 'Windows',            desc: 'Environnement utilisé en contexte client et en bureau.' },
        { name: 'macOS',              desc: 'Environnement de développement principal au quotidien.' },
      ],
    },
  ],
  en: [
    {
      category: 'AI & LLM',
      items: [
        { name: 'LangChain',        desc: 'Orchestrating LLM chains, memory and tools for autonomous agents.' },
        { name: 'Ollama',           desc: 'Running open-source models locally for dev and offline testing.' },
        { name: 'RAG & embeddings', desc: 'Semantic search over client documents (PDFs, text, knowledge bases).' },
        { name: 'Qdrant',           desc: 'Vector database for storing and querying business embeddings.' },
        { name: 'LLAMA',            desc: 'Prototyping agents locally with open-source models.' },
      ],
    },
    {
      category: 'Automation',
      items: [
        { name: 'n8n',          desc: 'Orchestrating 200+ workflows/day across APIs, SaaS and databases.' },
        { name: 'REST API',     desc: 'Designing and consuming APIs to integrate third-party services.' },
        { name: 'AI Agents',    desc: 'Autonomous agents able to decide and act on external systems.' },
        { name: 'LLM Pipelines', desc: 'Multi-step chains combining LLMs, tools, memory and validation.' },
      ],
    },
    {
      category: 'Frameworks & Web',
      items: [
        { name: 'Vue.js',    desc: 'Reactive web interfaces and SPAs for client and internal projects.' },
        { name: 'Next.js',   desc: 'SSR/SSG web applications — including this portfolio.' },
        { name: 'FastAPI',   desc: 'High-performance Python APIs powering AI and business services.' },
      ],
    },
    {
      category: 'Languages',
      items: [
        { name: 'Python',      desc: 'Primary language for APIs, automation scripts and AI pipelines.' },
        { name: 'JavaScript',  desc: 'Frontend and scripting language — used with Vue.js and Next.js.' },
        { name: 'Java SE/EE',  desc: 'Enterprise backend development (engineering courses + academic projects).' },
        { name: 'SQL',         desc: 'Queries, views and relational modeling on PostgreSQL and Supabase.' },
        { name: 'Bash',        desc: 'System scripts, automated deployments and scheduled tasks (cron).' },
      ],
    },
    {
      category: 'Data & Infra',
      items: [
        { name: 'Supabase',    desc: 'Managed PostgreSQL backend for apps and AI data storage.' },
        { name: 'PostgreSQL',  desc: 'Main relational database, used standalone and via Supabase.' },
        { name: 'Docker',      desc: 'Containerizing apps for reproducible deployments.' },
        { name: 'Git',         desc: 'Version control, feature branches and team code reviews.' },
        { name: 'Linux',       desc: 'Daily environment for dev and server administration.' },
        { name: 'VPS',         desc: 'Configuring and maintaining remote servers (Hetzner, OVH).' },
        { name: 'Dokploy',     desc: 'Self-hosted platform to manage and deploy apps on VPS.' },
        { name: 'CI/CD',       desc: 'GitHub Actions pipelines for automated tests and continuous deployment.' },
      ],
    },
    {
      category: 'Languages & Environments',
      items: [
        { name: 'French (fluent)', desc: 'Professional level.' },
        { name: 'Professional English', desc: 'Technical documentation, client exchanges and B2B emails.' },
        { name: 'Windows',            desc: 'Used in client and office contexts.' },
        { name: 'macOS',              desc: 'Main day-to-day development environment.' },
      ],
    },
  ],
};

import type { IconType } from "react-icons";
import {
  SiVuedotjs,
  SiFastapi,
  SiNextdotjs,
  SiPython,
  SiDocker,
  SiSupabase,
  SiPostgresql,
  SiN8N,
  SiLangchain,
  SiJavascript,
  SiGit,
  SiLinux,
  SiGnubash,
  SiApple,
  SiOllama,
  SiQdrant,
  SiGithubactions,
  SiGmail,
  SiGooglegemini,
  SiKubernetes,
  SiArgo,
  SiNotion,
  SiMistralai,
  SiTelegram,
  SiCloudflareworkers,
  SiTekton,
  SiHelm,
  SiTraefikproxy,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  LuServer,
  LuBot,
  LuDatabase,
  LuGlobe,
  LuGitBranch,
  LuPackage,
  LuSearch,
  LuBrain,
  LuLanguages,
  LuMonitor,
  LuFileText,
  LuKanban,
  LuUsers,
  LuCalendarCheck,
  LuSheet,
  LuWorkflow,
  LuMessageSquareText,
  LuRouter,
  LuGauge,
  LuHeadset,
  LuNetwork,
  LuCalendarRange,
} from "react-icons/lu";

export interface SkillIconEntry {
  icon: IconType;
  color: string;
}

export const SKILL_ICONS: Record<string, SkillIconEntry> = {
  // Frameworks & Web
  "Vue.js":  { icon: SiVuedotjs,  color: "#4FC08D" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  FastAPI:   { icon: SiFastapi,   color: "#009688" },

  // IA & LLM
  LangChain:          { icon: SiLangchain, color: "#1C3C3C" },
  Ollama:             { icon: SiOllama,    color: "#000000" },
  Qdrant:             { icon: SiQdrant,    color: "#DC244C" },
  Llama:              { icon: LuBrain,     color: "#6b7f5c" },
  "RAG & embeddings": { icon: LuSearch,    color: "#6b7f5c" },

  // Automatisation
  n8n:            { icon: SiN8N,       color: "#EA4B71" },
  "API REST":     { icon: LuGlobe,     color: "#6b7f5c" },
  "Agents IA":    { icon: LuBot,       color: "#6b7f5c" },
  "Pipelines LLM":{ icon: LuGitBranch, color: "#6b7f5c" },
  "REST API":     { icon: LuGlobe,     color: "#6b7f5c" },
  "AI Agents":    { icon: LuBot,       color: "#6b7f5c" },
  "LLM Pipelines":{ icon: LuGitBranch, color: "#6b7f5c" },

  // Langages
  Python:      { icon: SiPython,     color: "#3776AB" },
  JavaScript:  { icon: SiJavascript, color: "#F7DF1E" },
  "Java SE/EE":{ icon: FaJava,       color: "#ED8B00" },
  SQL:         { icon: LuDatabase,   color: "#6b7f5c" },
  Bash:        { icon: SiGnubash,    color: "#4EAA25" },

  // Données & Infra
  Supabase:   { icon: SiSupabase,       color: "#3ECF8E" },
  PostgreSQL: { icon: SiPostgresql,     color: "#4169E1" },
  Docker:     { icon: SiDocker,         color: "#2496ED" },
  Git:        { icon: SiGit,            color: "#F05032" },
  Linux:      { icon: SiLinux,          color: "#FCC624" },
  VPS:        { icon: LuServer,         color: "#6b7f5c" },
  Dokploy:    { icon: LuPackage,        color: "#6b7f5c" },
  "CI/CD":    { icon: SiGithubactions,  color: "#2088FF" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Kubernetes: { icon: SiKubernetes,     color: "#326CE5" },
  GitOps:     { icon: SiArgo,           color: "#EF7B4D" },
  "Argo CD":  { icon: SiArgo,           color: "#EF7B4D" },
  Tekton:     { icon: SiTekton,         color: "#FD495C" },
  Helm:       { icon: SiHelm,           color: "#0F1689" },
  Traefik:    { icon: SiTraefikproxy,   color: "#24A1C1" },
  Telegram:   { icon: SiTelegram,       color: "#26A5E4" },
  "Cloudflare Workers": { icon: SiCloudflareworkers, color: "#F38020" },
  "Mistral AI": { icon: SiMistralai,    color: "#FA520F" },
  Notion:     { icon: SiNotion,         color: "#000000" },
  Monday:     { icon: LuCalendarRange,  color: "#6b7f5c" },

  // Langues & Environnements
  "Français (courant)": { icon: LuLanguages, color: "#6b7f5c" },
  "Anglais Pro":        { icon: LuLanguages, color: "#6b7f5c" },
  Windows:              { icon: LuMonitor,   color: "#0078D4" },
  macOS:                { icon: SiApple,     color: "#000000" },

  // Gestion de projet (logos de l'étape « Cadrer », FR + EN)
  "Cahier des charges":   { icon: LuFileText,      color: "#6b7f5c" },
  Specifications:         { icon: LuFileText,      color: "#6b7f5c" },
  "Agile / Scrum":        { icon: LuKanban,        color: "#6b7f5c" },
  Coordination:           { icon: LuUsers,         color: "#6b7f5c" },
  "Suivi des livraisons": { icon: LuCalendarCheck, color: "#6b7f5c" },
  "Delivery tracking":    { icon: LuCalendarCheck, color: "#6b7f5c" },

  // Technos des projets
  ChromaDB:             { icon: LuDatabase,          color: "#6b7f5c" },
  Excel:                { icon: LuSheet,             color: "#217346" },
  Gmail:                { icon: SiGmail,             color: "#EA4335" },
  Gemini:               { icon: SiGooglegemini,      color: "#8E75B2" },
  "LLM open-source":    { icon: LuBrain,             color: "#6b7f5c" },
  "Open-source LLM":    { icon: LuBrain,             color: "#6b7f5c" },
  Automatisation:       { icon: LuWorkflow,          color: "#6b7f5c" },
  Automation:           { icon: LuWorkflow,          color: "#6b7f5c" },
  "Prompt engineering": { icon: LuMessageSquareText, color: "#6b7f5c" },

  // Outils du support (Webhelp)
  "FTTH / xDSL":        { icon: LuNetwork,           color: "#6b7f5c" },
  Routeurs:             { icon: LuRouter,            color: "#6b7f5c" },
  Routers:              { icon: LuRouter,            color: "#6b7f5c" },
  KPIs:                 { icon: LuGauge,             color: "#6b7f5c" },
  "Support client":     { icon: LuHeadset,           color: "#6b7f5c" },
  "Customer support":   { icon: LuHeadset,           color: "#6b7f5c" },
};

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
  LLAMA:              { icon: LuBrain,     color: "#6b7f5c" },
  "RAG & embeddings": { icon: LuSearch,    color: "#6b7f5c" },

  // Automatisation
  n8n:            { icon: SiN8N,       color: "#EA4B71" },
  "API REST":     { icon: LuGlobe,     color: "#6b7f5c" },
  "Agents IA":    { icon: LuBot,       color: "#6b7f5c" },
  "Pipelines LLM":{ icon: LuGitBranch, color: "#6b7f5c" },

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

  // Langues & Environnements
  "Français (courant)": { icon: LuLanguages, color: "#6b7f5c" },
  "Anglais Pro":        { icon: LuLanguages, color: "#6b7f5c" },
  Windows:              { icon: LuMonitor,   color: "#0078D4" },
  macOS:                { icon: SiApple,     color: "#000000" },
};

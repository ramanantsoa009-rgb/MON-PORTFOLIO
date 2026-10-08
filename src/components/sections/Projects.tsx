"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { GLASS } from "@/lib/glass";
import { SKILL_ICONS } from "@/lib/skillIcons";
import type { Project } from "@/lib/types";

type ProjectLabels = (typeof ui)["fr"]["projects"];

function projectNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

function TechTag({ name }: { name: string }) {
  const entry = SKILL_ICONS[name];
  const Icon = entry?.icon;

  return (
    <li className="flex items-center gap-1.5 rounded-xs border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium text-ink/80">
      {Icon && <Icon size={14} color={entry.color} aria-hidden="true" />}
      {name}
    </li>
  );
}

function ProjectDetail({
  project,
  index,
  labels,
  github,
  showTitle = true,
}: {
  project: Project;
  index: number;
  labels: ProjectLabels;
  github: string;
  showTitle?: boolean;
}) {
  const caseStudy = [
    { label: labels.problem, text: project.problem },
    { label: labels.solution, text: project.solution },
    { label: labels.result, text: project.result },
  ];

  return (
    <div>
      {showTitle && (
        <>
          <p className="text-sm font-bold tabular-nums text-sage-deep">{projectNumber(index)}</p>
          <h3 className="mt-2 text-2xl font-bold text-ink md:text-3xl">{project.title}</h3>
        </>
      )}
      <p className={`leading-relaxed text-ink/75 ${showTitle ? "mt-3" : ""}`}>{project.description}</p>

      <dl className="mt-6 divide-y divide-sage-light border-y border-sage-light">
        {caseStudy.map(({ label, text }) => (
          <div key={label} className="grid gap-1 py-3 sm:grid-cols-[7rem_1fr] sm:gap-4">
            <dt className="text-xs font-medium uppercase tracking-widest text-sage-deep sm:pt-0.5">{label}</dt>
            <dd className="text-sm leading-relaxed text-ink/80">{text}</dd>
          </div>
        ))}
      </dl>

      <ul aria-label={labels.techAria} className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechTag key={tag} name={tag} />
        ))}
      </ul>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xs bg-sage-deep px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink"
      >
        <FaGithub size={16} aria-hidden="true" />
        {labels.viewGithub}
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </div>
  );
}

export function Projects() {
  const { locale } = useLocale();
  const t = ui[locale];
  const s = site[locale];
  const localizedProjects = projects[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = localizedProjects[activeIndex];

  // Flèches haut/bas pour passer d'un projet à l'autre au clavier
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const count = localizedProjects.length;
    const next = (activeIndex + (event.key === "ArrowDown" ? 1 : -1) + count) % count;
    setActiveIndex(next);
    buttonRefs.current[next]?.focus();
  }

  return (
    <section id="projets" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
        </FadeIn>

        <FadeIn>
          <div className="md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start md:gap-8">
            {/* Liste des projets — sur mobile, le détail s'ouvre sous le projet choisi */}
            <ul aria-label={t.projects.listAria} className="space-y-2">
              {localizedProjects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <li key={project.id}>
                    <button
                      ref={(el) => {
                        buttonRefs.current[index] = el;
                      }}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={handleKeyDown}
                      aria-current={isActive}
                      aria-expanded={isActive}
                      aria-controls="project-detail"
                      className="group relative flex w-full items-center gap-4 rounded-sm px-5 py-4 text-left"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="project-active"
                          className={`absolute inset-0 rounded-sm border border-white/70 bg-white/60 ${GLASS}`}
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                      )}
                      <span className="relative self-start pt-0.5 text-sm font-bold tabular-nums text-sage-deep">
                        {projectNumber(index)}
                      </span>
                      <span className="relative flex-1">
                        <span
                          className={`block font-bold transition-colors ${
                            isActive ? "text-ink" : "text-ink/60 group-hover:text-ink"
                          }`}
                        >
                          {project.title}
                        </span>
                        <span className="mt-1 block text-xs text-ink/50">{project.tags.slice(0, 3).join(" · ")}</span>
                      </span>
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className={`relative hidden shrink-0 text-sage-deep transition-all md:block ${
                          isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-50"
                        }`}
                      />
                      {/* Mobile : chevron qui indique que le détail se déroule */}
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`relative shrink-0 text-sage-deep transition-transform duration-300 md:hidden ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          className="overflow-hidden md:hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="mt-2 rounded-sm bg-white/50 px-5 pb-6 pt-4 backdrop-blur-md">
                            <ProjectDetail
                              project={project}
                              index={index}
                              labels={t.projects}
                              github={s.github}
                              showTitle={false}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* Panneau de détail (ordinateur) */}
            <div
              id="project-detail"
              aria-live="polite"
              className={`hidden rounded-sm border border-white/70 bg-white/60 p-8 md:block md:min-h-120 ${GLASS}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ProjectDetail project={active} index={activeIndex} labels={t.projects} github={s.github} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

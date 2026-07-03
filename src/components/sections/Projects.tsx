"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Project } from "@/lib/types";

function ProjectCard({
  project,
  index,
  onSelect,
  techAria,
  viewProjectLabel,
}: {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  techAria: string;
  viewProjectLabel: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group flex flex-col rounded-xl border border-sage-light bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Ligne d'accent */}
      <motion.div
        className="mb-4 h-0.5 w-8 rounded-full bg-sage"
        whileHover={{ width: 48 }}
        transition={{ duration: 0.3 }}
      />

      <h3 className="font-bold text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={techAria}>
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-sage-deep"
          >
            {tag}
          </li>
        ))}
      </ul>

      <motion.button
        onClick={() => onSelect(project)}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        className="mt-4 flex w-fit items-center gap-1.5 rounded-full border border-sage bg-sage-light px-3.5 py-1.5 text-sm font-medium text-sage-deep transition-colors hover:bg-sage hover:text-white"
      >
        {viewProjectLabel}
        <Lock size={12} />
      </motion.button>
    </motion.article>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { locale } = useLocale();
  const t = ui[locale];
  const localizedProjects = projects[locale];

  return (
    <section id="projets" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {localizedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelected}
              techAria={t.projects.techAria}
              viewProjectLabel={t.projects.viewProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

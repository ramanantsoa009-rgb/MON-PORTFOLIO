"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { projects } from "@/content/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Project } from "@/lib/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
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

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies utilisées">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-sage-deep"
          >
            {tag}
          </li>
        ))}
      </ul>

      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-1.5 text-sm font-medium text-sage-deep transition-colors hover:text-ink"
        >
          Voir le projet
          <ExternalLink size={13} />
        </a>
      ) : (
        <span className="mt-4 flex items-center gap-1.5 text-xs text-ink/35">
          <Lock size={11} />
          Repo privé
        </span>
      )}
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projets" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle
            title="Projets"
            subtitle="Quelques réalisations récentes — automatisation, IA appliquée et intégrations sur mesure."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

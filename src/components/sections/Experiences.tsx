"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { experiences } from "@/content/experiences";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { GLASS } from "@/lib/glass";
import { SKILL_ICONS } from "@/lib/skillIcons";
import type { Experience } from "@/lib/types";

type ExperienceLabels = (typeof ui)["fr"]["experiences"];

/** Hash court et stable (FNV-1a), pour un faux identifiant de commit */
function shortHash(id: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

function StackChip({ name }: { name: string }) {
  const entry = SKILL_ICONS[name];
  const Icon = entry?.icon;

  return (
    <li className="flex items-center gap-1.5 rounded-xs border border-white/70 bg-white/70 px-2.5 py-1 text-xs font-medium text-ink/80">
      {Icon && <Icon size={13} color={entry.color} aria-hidden="true" />}
      {name}
    </li>
  );
}

function Commit({
  exp,
  version,
  isHead,
  isLast,
  labels,
}: {
  exp: Experience;
  version: number;
  isHead: boolean;
  isLast: boolean;
  labels: ExperienceLabels;
}) {
  const itemRef = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();
  // Le segment de la branche « main » se trace pendant qu'on fait défiler ce commit
  const { scrollYProgress } = useScroll({ target: itemRef, offset: ["start 60%", "end 60%"] });

  return (
    <li ref={itemRef} className={`relative pl-10 md:pl-14 ${isLast ? "" : "pb-14"}`}>
      {!isLast && (
        <>
          <span aria-hidden="true" className="absolute bottom-0 left-2.75 top-7 w-0.5 bg-sage-light" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
            className="absolute bottom-0 left-2.75 top-7 w-0.5 origin-top bg-sage-deep"
          />
        </>
      )}

      {/* Nœud du commit : s'allume quand on l'atteint */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-sage-deep bg-bg"
      >
        <motion.span
          className="h-2.5 w-2.5 rounded-full bg-sage-deep"
          initial={reduceMotion ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -40% 0px" }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />
      </span>

      {/* En-tête façon git log */}
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
        <span className="font-medium text-sage-deep">{shortHash(exp.id)}</span>
        {isHead && <span className="rounded-xs bg-sage-deep px-1.5 py-0.5 text-white">HEAD -&gt; main</span>}
        <span className="rounded-xs border border-sage px-1.5 py-0.5 text-sage-deep">tag: v{version}.0</span>
      </p>
      <h3 className="mt-2 text-xl font-bold text-ink md:text-2xl">{exp.role}</h3>
      <p className="mt-1 text-sm text-ink/70">
        <span className="font-bold text-ink">{exp.company}</span> · {exp.location}
      </p>
      <p className="mt-1 font-mono text-xs text-ink/50">Date: {exp.period}</p>

      {/* Détail façon diff */}
      <div className={`mt-4 overflow-hidden rounded-sm border border-white/70 bg-white/60 ${GLASS}`}>
        <div className="flex items-center justify-between gap-4 border-b border-sage-light bg-sage-light/30 px-4 py-2 font-mono text-xs">
          <span className="truncate text-ink/60">{exp.id}.md</span>
          <span className="shrink-0 text-sage-deep">
            +{exp.bullets.length} <span className="text-ink/40">{labels.additions}</span>
          </span>
        </div>

        <div className="py-2 text-sm leading-relaxed">
          {/* Ligne de contexte (non modifiée) */}
          <div className="grid grid-cols-[2.25rem_1fr]">
            <span aria-hidden="true" />
            <p className="py-1.5 pr-4 italic text-ink/60">{exp.description}</p>
          </div>
          {/* Lignes ajoutées */}
          <ul>
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="grid grid-cols-[2.25rem_1fr]">
                <span
                  aria-hidden="true"
                  className="bg-sage/15 pt-1.5 text-center font-mono text-sage-deep select-none"
                >
                  +
                </span>
                <span className="bg-sage-light/20 px-3 py-1.5 text-ink/80">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vue d'ensemble : technos du poste + routine */}
        <div className="grid gap-5 border-t border-sage-light px-4 py-4 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs text-sage-deep"># {labels.stack}</p>
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={labels.stack}>
              {exp.stack.map((name) => (
                <StackChip key={name} name={name} />
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs text-sage-deep"># {labels.routine}</p>
            <ul className="mt-2 space-y-1">
              {exp.routine.map((task) => (
                <li key={task} className="flex gap-2 text-sm leading-relaxed text-ink/75">
                  <span aria-hidden="true" className="font-mono text-sage">›</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="border-t border-sage-light px-4 py-3 text-xs italic text-ink/55">
          <span className="font-semibold not-italic text-sage-deep">{labels.transferableSkills}</span>{" "}
          {exp.transferableSkills}
        </p>
      </div>
    </li>
  );
}

export function Experiences() {
  const { locale } = useLocale();
  const t = ui[locale];
  const localizedExperiences = experiences[locale];
  const total = localizedExperiences.length;

  return (
    <section id="experiences" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title={t.experiences.title} subtitle={t.experiences.subtitle} />
        </FadeIn>
        {/* Historique du plus récent au plus ancien, comme un git log */}
        <ol>
          {localizedExperiences.map((exp, index) => (
            <Commit
              key={exp.id}
              exp={exp}
              version={total - index}
              isHead={index === 0}
              isLast={index === total - 1}
              labels={t.experiences}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

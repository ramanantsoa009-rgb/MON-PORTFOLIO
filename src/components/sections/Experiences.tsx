"use client";

import { motion } from "framer-motion";
import { experiences } from "@/content/experiences";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Experience } from "@/lib/types";

function ExperienceCard({
  exp,
  index,
  transferableSkillsLabel,
}: {
  exp: Experience;
  index: number;
  transferableSkillsLabel: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="relative pl-8 before:absolute before:left-0 before:top-1 before:h-full before:w-px before:bg-sage-light last:before:hidden"
    >
      {/* Dot sur la timeline */}
      <span className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-sage bg-white" />

      <div className="rounded-xl border border-sage-light bg-white p-6 shadow-sm">
        {/* En-tête */}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-ink">{exp.company}</h3>
            <p className="text-sm text-sage-deep">{exp.location}</p>
          </div>
          <div className="text-right">
            <span className="inline-block rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-sage-deep">
              {exp.role}
            </span>
            <p className="mt-1 text-xs text-ink/50">{exp.period}</p>
          </div>
        </div>

        <p className="mt-3 text-sm italic text-ink/60">{exp.description}</p>

        <ul className="mt-4 space-y-2">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
              {bullet}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs italic text-ink/50">
          <span className="font-semibold not-italic text-sage-deep">{transferableSkillsLabel}</span>{" "}
          {exp.transferableSkills}
        </p>
      </div>
    </motion.article>
  );
}

export function Experiences() {
  const { locale } = useLocale();
  const t = ui[locale];
  const localizedExperiences = experiences[locale];

  return (
    <section id="experiences" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title={t.experiences.title} subtitle={t.experiences.subtitle} />
        </FadeIn>
        <div className="flex flex-col gap-6">
          {localizedExperiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              transferableSkillsLabel={t.experiences.transferableSkills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

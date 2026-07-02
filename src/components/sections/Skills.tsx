"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { SKILL_ICONS } from "@/lib/skillIcons";
import type { SkillGroup } from "@/lib/types";

/** Icône tech ou badge textuel en fallback */
function SkillIcon({ name }: { name: string }) {
  const entry = SKILL_ICONS[name];

  if (entry) {
    const Icon = entry.icon;
    return <Icon size={15} color={entry.color} aria-hidden="true" className="mt-0.5 shrink-0" />;
  }

  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-sm bg-sage-light text-[8px] font-bold text-sage-deep"
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="rounded-xl bg-bg p-6 shadow-sm"
    >
      <h3 className="mb-4 font-bold text-ink">{group.category}</h3>
      <ul className="divide-y divide-sage-light/70">
        {group.items.map((item, i) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.1 + i * 0.06, ease: "easeOut" }}
            className="py-2.5"
          >
            <div className="flex items-center gap-2">
              <SkillIcon name={item.name} />
              <span className="text-sm font-medium text-ink/85">{item.name}</span>
            </div>
            {item.desc && (
              <p className="mt-1 pl-5 text-xs leading-relaxed text-ink/55">{item.desc}</p>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="competences" className="bg-sage-light px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title="Compétences & Stack" />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <SkillCard key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

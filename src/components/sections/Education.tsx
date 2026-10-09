"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ArrowUpRight, ShieldCheck } from "lucide-react";
import { diplomas, certifications } from "@/content/education";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { GLASS } from "@/lib/glass";
import type { Certification, CertificationGroup } from "@/lib/types";

const GROUPS: CertificationGroup[] = ["tech", "soft"];
type EducationLabels = (typeof ui)["fr"]["education"];

/** Mini-carte « document » : coin plié, se soulève au survol, s'ouvre dans un nouvel onglet */
function CertificationCard({
  cert,
  index,
  labels,
}: {
  cert: Certification;
  index: number;
  labels: EducationLabels;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col rounded-sm border border-white/70 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sage focus-within:-translate-y-1 focus-within:border-sage ${GLASS}`}
    >
      {/* Coin plié, qui se déplie au survol */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 h-5 w-5 bg-[linear-gradient(225deg,var(--color-bg)_50%,var(--color-sage-light)_50%)] shadow-[-1px_1px_2px_rgb(47_58_42/0.12)] transition-all duration-300 group-hover:h-7 group-hover:w-7"
      />

      <div className="flex items-center justify-between gap-3 pr-5 text-xs text-sage-deep">
        <span className="flex items-center gap-1.5">
          <Award size={14} aria-hidden="true" />
          {cert.issuer} · {cert.date}
        </span>
        <span className="flex items-center gap-1 font-medium">
          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-12 group-hover:opacity-100">
            {labels.view}
          </span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>

      <h4 className="mt-3 font-bold leading-snug text-ink">
        {/* Le lien couvre toute la carte */}
        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.viewCertificate(cert.title)}
          className="outline-none after:absolute after:inset-0 after:rounded-sm focus-visible:after:ring-2 focus-visible:after:ring-sage-deep"
        >
          {cert.title}
        </a>
      </h4>
      {cert.subtitle && <p className="mt-0.5 text-sm text-ink/65">{cert.subtitle}</p>}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-1 pt-4 text-xs text-ink/55">
        <span>
          {cert.duration} · {cert.instructor}
        </span>
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex items-center gap-1 text-sage-deep underline-offset-2 hover:underline"
        >
          <ShieldCheck size={12} aria-hidden="true" />
          {labels.verify}
        </a>
      </div>
    </motion.li>
  );
}

export function Education() {
  const { locale } = useLocale();
  const t = ui[locale];
  const localizedDiplomas = diplomas[locale];
  const localizedCertifications = certifications[locale];

  return (
    <section id="formation" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title={t.education.title} subtitle={t.education.subtitle} />
        </FadeIn>

        {/* Diplômes */}
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sage-deep">
          <GraduationCap size={16} />
          {t.education.diplomas}
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {localizedDiplomas.map((d, i) => (
            <motion.li
              key={d.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-sm border border-sage-light bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-ink">{d.degree}</h3>
                <span className="shrink-0 rounded-xs bg-sage-light px-2.5 py-0.5 text-xs font-medium text-sage-deep">
                  {d.year}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-sage-deep">{d.school}</p>
              <p className="mt-0.5 text-xs text-ink/50">{d.location}</p>
              <p className="mt-2 text-sm italic text-ink/70">{d.description}</p>
            </motion.li>
          ))}
        </ul>

        {/* Certifications, par groupe */}
        <div className="mb-6 mt-14 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sage-deep">
          <Award size={16} />
          {t.education.certifications}
        </div>
        <div className="space-y-8">
          {GROUPS.map((group) => {
            const items = localizedCertifications.filter((c) => c.group === group);
            if (items.length === 0) return null;

            return (
              <div key={group}>
                <h3 className="mb-3 font-mono text-xs text-ink/50"># {t.education.groups[group]}</h3>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((cert, i) => (
                    <CertificationCard key={cert.file} cert={cert} index={i} labels={t.education} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

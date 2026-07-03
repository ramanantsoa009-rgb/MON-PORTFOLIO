"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { diplomas, certifications } from "@/content/education";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";

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

        <div className="grid gap-10 md:grid-cols-2">
          {/* Diplômes */}
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sage-deep">
              <GraduationCap size={16} />
              {t.education.diplomas}
            </div>
            <ul className="space-y-4">
              {localizedDiplomas.map((d, i) => (
                <motion.li
                  key={d.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-xl border border-sage-light bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-ink">{d.degree}</h3>
                    <span className="shrink-0 rounded-full bg-sage-light px-2.5 py-0.5 text-xs font-medium text-sage-deep">
                      {d.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-sage-deep">{d.school}</p>
                  <p className="mt-0.5 text-xs text-ink/50">{d.location}</p>
                  <p className="mt-2 text-sm italic text-ink/70">{d.description}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-sage-deep">
              <Award size={16} />
              {t.education.certifications}
            </div>
            <ul className="space-y-3">
              {localizedCertifications.map((c, i) => (
                <motion.li
                  key={c.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between gap-3 rounded-xl border border-sage-light bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-sage" />
                    <span className="text-sm font-medium text-ink">{c.label}</span>
                  </div>
                  {c.href && (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.education.viewCertificate(c.label)}
                      className="shrink-0 text-ink/30 transition-colors hover:text-sage-deep"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

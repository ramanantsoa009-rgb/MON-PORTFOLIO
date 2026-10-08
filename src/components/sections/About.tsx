"use client";

import { LuLanguages } from "react-icons/lu";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  const { locale } = useLocale();
  const s = site[locale];
  const t = ui[locale];

  return (
    <section id="a-propos" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title={t.about.title} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-2xl space-y-4">
            {s.about.split("\n\n").map((para, i) => (
              <p key={i} className="leading-relaxed text-ink/80">{para}</p>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10 max-w-2xl">
            <h3 className="text-xs font-medium uppercase tracking-widest text-sage-deep">{t.about.languages}</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {s.languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-center gap-3 rounded-sm border border-sage-light bg-white/60 px-4 py-3 backdrop-blur-md"
                >
                  <LuLanguages size={18} aria-hidden="true" className="shrink-0 text-sage-deep" />
                  <span>
                    <span className="block text-sm font-bold text-ink">{language.name}</span>
                    <span className="block text-xs text-ink/60">{language.level}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

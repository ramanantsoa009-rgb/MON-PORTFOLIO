"use client";

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
      </div>
    </section>
  );
}

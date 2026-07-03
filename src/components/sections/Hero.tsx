"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function entry(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  };
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-sage-deep) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-sage-deep) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-sage opacity-20 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.28, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-sage-deep opacity-15 blur-[100px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

function ProfilePhoto({ photo, name, photoAlt }: { photo?: string; name: string; photoAlt: string }) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt={photoAlt}
        width={320}
        height={320}
        priority
        className="h-64 w-64 rounded-full object-cover object-top shadow-xl ring-4 ring-sage/30 md:h-80 md:w-80"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="flex h-64 w-64 items-center justify-center rounded-full bg-sage text-5xl font-bold text-white shadow-xl ring-4 ring-sage/30 md:h-80 md:w-80"
    >
      {getInitials(name)}
    </div>
  );
}

export function Hero() {
  const { locale } = useLocale();
  const s = site[locale];
  const t = ui[locale];

  return (
    <section
      id="accueil"
      aria-label={t.hero.intro}
      className="relative overflow-hidden bg-sage-light px-6 py-24 md:py-32"
    >
      <HeroBackground />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
        {/* Texte */}
        <div className="flex-1 text-center md:text-left">
          <motion.p {...entry(0)} className="mb-2 text-sm font-medium uppercase tracking-widest text-sage-deep">
            {s.role}
          </motion.p>

          <motion.h1 {...entry(0.12)} className="text-4xl font-bold text-ink md:text-6xl">
            {s.name}
          </motion.h1>

          <motion.p {...entry(0.24)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
            {s.tagline}
          </motion.p>

          <motion.p {...entry(0.32)} className="mt-3 max-w-xl text-sm italic text-sage-deep">
            &ldquo;{s.quote}&rdquo;
          </motion.p>

          {/* Stats */}
          <motion.ul
            {...entry(0.4)}
            className="mt-8 flex flex-wrap justify-center gap-6 md:justify-start"
            aria-label={t.hero.keyFigures}
          >
            {s.stats.map((stat) => (
              <li key={stat.label} className="text-center">
                <span className="block text-2xl font-bold text-sage-deep">{stat.value}</span>
                <span className="text-xs text-ink/60">{stat.label}</span>
              </li>
            ))}
          </motion.ul>

          {/* Boutons */}
          <motion.div
            {...entry(0.5)}
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <Button href="#projets">{t.hero.ctaProjects}</Button>
            <Button href="#contact" variant="outline">{t.hero.ctaContact}</Button>
            {s.cvUrl && (
              <a
                href={s.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-sage-deep px-5 py-2.5 text-sm font-medium text-sage-deep transition-colors hover:bg-sage-deep hover:text-white"
              >
                <Download size={15} />
                {t.hero.downloadCv}
              </a>
            )}
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="flex shrink-0 justify-center"
        >
          <ProfilePhoto photo={s.photo} name={s.name} photoAlt={t.hero.photoAlt(s.name)} />
        </motion.div>
      </div>
    </section>
  );
}

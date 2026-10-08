"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { services } from "@/content/services";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { GLASS } from "@/lib/glass";
import { SKILL_ICONS } from "@/lib/skillIcons";
import type { Service } from "@/lib/types";

// Décalage vertical entre les cartes empilées : on voit le haut des précédentes
const STACK_OFFSET_REM = 1.5;
// Hauteur du titre réduit + respiration : les cartes se fixent juste en dessous
const COMPACT_TITLE_REM = 5.5;
const SCALE_STEP = 0.04;

/** Bandeau de logos reliés par un fil, parcouru par un signal (rappel du fond neurones) */
function LogoBanner({ logos }: { logos: string[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative hidden h-40 items-center justify-around rounded-sm bg-sage-light/30 px-10 pb-6 md:flex"
    >
      <div className="absolute inset-x-10 top-[calc(50%-0.75rem)]">
        <div className="h-px w-full bg-sage/50" />
        {!reduceMotion && (
          <motion.span
            className="absolute top-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-sage-deep"
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      {logos.map((name, i) => {
        const entry = SKILL_ICONS[name];
        if (!entry) return null;
        const Icon = entry.icon;

        return (
          <motion.div
            key={name}
            className="relative"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sage-light bg-white shadow-sm">
              <Icon size={26} color={entry.color} />
            </span>
            <span
              className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-xs text-ink/60"
            >
              {name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function StackCard({
  service,
  index,
  total,
  progress,
  exitProgress,
  headerHeight,
}: {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
  exitProgress: MotionValue<number>;
  headerHeight: number;
}) {
  const reduceMotion = useReducedMotion();
  // Chaque carte recule légèrement quand les suivantes viennent se poser dessus
  const targetScale = reduceMotion ? 1 : 1 - (total - 1 - index) * SCALE_STEP;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const isLast = index === total - 1;
  // En sortie de section, les cartes de dessous s'effacent : seule la dernière part avec le scroll
  const opacity = useTransform(exitProgress, [0, 0.4], [1, isLast ? 1 : 0]);

  return (
    <li
      className={`sticky ${isLast ? "" : "mb-[25vh]"}`}
      style={{ top: `calc(${headerHeight}px + ${COMPACT_TITLE_REM + index * STACK_OFFSET_REM}rem)` }}
    >
      <motion.article
        style={{ scale, opacity, transformOrigin: "top center" }}
        className={`flex flex-col gap-8 rounded-sm border p-7 md:min-h-[36rem] md:p-10 ${GLASS} border-white/60 bg-[#e4ebdf]/60 text-ink`}
      >
        <LogoBanner logos={service.logos} />

        <div className="grid flex-1 gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className={`flex items-baseline gap-3 text-xs font-medium uppercase tracking-widest text-sage-deep`}>
              <span className="text-sm font-bold tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              {service.title}
            </p>
            <h3 className="mt-3 text-4xl font-bold md:text-5xl">{service.step}</h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed opacity-90">{service.pitch}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed opacity-70">{service.description}</p>
          </div>

          <ul className={`divide-y divide-sage/40`}>
            {service.points.map((point) => (
              <li
                key={point.label}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
              >
                <span className="font-medium">{point.label}</span>
                {point.tech && <span className={`text-sm text-sage-deep`}>{point.tech}</span>}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </li>
  );
}

export function Services() {
  const { locale } = useLocale();
  const t = ui[locale];
  const localizedServices = services[locale];
  const stackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });
  // Sortie : de l'arrivée de la dernière carte jusqu'à ce que la pile ait bien remonté
  const { scrollYProgress: exitProgress } = useScroll({ target: stackRef, offset: ["end 95%", "end 40%"] });
  const barOpacity = useTransform(exitProgress, [0.3, 0.8], [1, 0]);
  const barY = useTransform(exitProgress, [0.3, 0.8], [0, -16]);

  // Barre de titre compacte, fixée sous le menu tant que les cartes défilent
  const titleRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64);

  useEffect(() => {
    function update() {
      const header = document.querySelector<HTMLElement>("header")?.offsetHeight ?? 64;
      setHeaderHeight(header);
      setStuck((titleRef.current?.getBoundingClientRect().top ?? 0) < header);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="services" className="bg-sage-light/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Hauteur nulle : la barre ne prend aucune place dans la page, donc rien ne saute */}
        <motion.div
          aria-hidden="true"
          className="sticky z-20 h-0"
          style={{ top: headerHeight, opacity: barOpacity, y: barY }}
        >
          <motion.div
            initial={false}
            animate={stuck ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`absolute inset-x-0 top-0 border-b border-sage-light bg-[color-mix(in_srgb,var(--color-sage-light)_60%,var(--color-bg))] py-3 ${
              stuck ? "" : "pointer-events-none"
            }`}
          >
            <SectionTitle title={t.services.title} subtitle={t.services.subtitle} compact />
          </motion.div>
        </motion.div>

        <div ref={titleRef}>
          <FadeIn>
            <SectionTitle title={t.services.title} subtitle={t.services.subtitle} />
          </FadeIn>
        </div>
        <ol ref={stackRef} aria-label={t.services.stepsAria}>
          {localizedServices.map((service, index) => (
            <StackCard
              key={service.id}
              service={service}
              index={index}
              total={localizedServices.length}
              progress={scrollYProgress}
              exitProgress={exitProgress}
              headerHeight={headerHeight}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

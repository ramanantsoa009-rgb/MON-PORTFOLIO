"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { skills } from "@/content/skills";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import { GLASS } from "@/lib/glass";
import { SKILL_ICONS } from "@/lib/skillIcons";
import type { SkillItem, SkillLevel } from "@/lib/types";

const LEVELS: SkillLevel[] = ["production", "project", "learning"];
const LEVEL_DOTS: Record<SkillLevel, number> = { production: 3, project: 2, learning: 1 };

/** Icône tech ou badge textuel en fallback */
function SkillIcon({ name }: { name: string }) {
  const entry = SKILL_ICONS[name];

  if (entry) {
    const Icon = entry.icon;
    return <Icon size={16} color={entry.color} aria-hidden="true" className="shrink-0" />;
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-sage-light text-[8px] font-bold text-sage-deep"
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function LevelDots({ level }: { level: SkillLevel }) {
  return (
    <span aria-hidden="true" className="flex gap-1">
      {[1, 2, 3].map((dot) => (
        <span
          key={dot}
          className={`h-1.5 w-1.5 rounded-full ${dot <= LEVEL_DOTS[level] ? "bg-sage-deep" : "bg-sage/30"}`}
        />
      ))}
    </span>
  );
}

export function Skills() {
  const { locale } = useLocale();
  const t = ui[locale];
  const localizedSkills = skills[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<SkillItem | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabListRef = useRef<HTMLDivElement>(null);
  // Mobile : indique qu'il reste des onglets à gauche ou à droite
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const group = localizedSkills[activeIndex];

  function updateScrollHints() {
    const list = tabListRef.current;
    if (!list) return;
    setCanScrollLeft(list.scrollLeft > 4);
    setCanScrollRight(list.scrollLeft + list.clientWidth < list.scrollWidth - 4);
  }

  useEffect(() => {
    updateScrollHints();
    window.addEventListener("resize", updateScrollHints);
    return () => window.removeEventListener("resize", updateScrollHints);
  }, [locale]);

  function selectTab(index: number) {
    setActiveIndex(index);
    setSelected(null);
    // L'onglet choisi est ramené dans la zone visible
    tabRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }

  function scrollTabsRight() {
    const list = tabListRef.current;
    list?.scrollBy({ left: list.clientWidth * 0.6, behavior: "smooth" });
  }

  // Flèches gauche/droite pour passer d'une catégorie à l'autre au clavier
  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const count = localizedSkills.length;
    const next = (activeIndex + (event.key === "ArrowRight" ? 1 : -1) + count) % count;
    selectTab(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="competences" className="bg-sage-light/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />
        </FadeIn>

        <FadeIn>
          {/* Onglets par catégorie, défilables horizontalement sur mobile */}
          <div className="relative -mx-6 mb-4 md:mx-0">
            <div
              ref={tabListRef}
              role="tablist"
              aria-label={t.skills.tabsAria}
              onScroll={updateScrollHints}
              className="flex gap-1 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:flex-wrap md:px-0"
            >
              {localizedSkills.map((g, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={g.category}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    id={`skills-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls="skills-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => selectTab(index)}
                    onKeyDown={handleTabKeyDown}
                    className={`relative shrink-0 rounded-xs px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skills-tab"
                        className={`absolute inset-0 rounded-xs border border-white/70 bg-white/70 ${GLASS}`}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative">{g.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Fondus sur les bords + flèche : il reste des onglets à voir */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-[color-mix(in_srgb,var(--color-sage-light)_60%,var(--color-bg))] to-transparent transition-opacity duration-300 md:hidden ${
                canScrollLeft ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`absolute inset-y-0 right-0 flex items-center bg-linear-to-l from-[color-mix(in_srgb,var(--color-sage-light)_60%,var(--color-bg))] from-40% to-transparent pl-10 pr-3 transition-opacity duration-300 md:hidden ${
                canScrollRight ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <button
                type="button"
                onClick={scrollTabsRight}
                aria-label={t.skills.moreTabs}
                tabIndex={-1}
                className="flex h-7 w-7 items-center justify-center rounded-xs border border-white/70 bg-white/70 text-sage-deep shadow-sm"
              >
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex"
                >
                  <ChevronRight size={16} aria-hidden="true" />
                </motion.span>
              </button>
            </div>
          </div>

          <div
            role="tabpanel"
            id="skills-panel"
            aria-labelledby={`skills-tab-${activeIndex}`}
            className={`rounded-sm border border-white/70 bg-white/50 p-6 md:p-8 ${GLASS}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {LEVELS.map((level) => {
                  const items = group.items.filter((item) => item.level === level);
                  if (items.length === 0) return null;

                  return (
                    <div
                      key={level}
                      className="grid gap-3 border-b border-sage-light/70 py-4 first:pt-0 md:grid-cols-[12rem_1fr] md:items-center"
                    >
                      <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-widest text-sage-deep">
                        <LevelDots level={level} />
                        {t.skills.levels[level]}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {items.map((item) => {
                          const isSelected = selected?.name === item.name;

                          return (
                            <li key={item.name}>
                              <button
                                type="button"
                                onMouseEnter={() => setSelected(item)}
                                onFocus={() => setSelected(item)}
                                onClick={() => setSelected(item)}
                                aria-describedby="skills-detail"
                                className={`flex items-center gap-2 rounded-xs border px-3.5 py-2 text-sm font-medium transition-colors ${
                                  isSelected
                                    ? "border-sage-deep bg-white text-ink"
                                    : "border-white/70 bg-white/60 text-ink/85 hover:border-sage"
                                }`}
                              >
                                <SkillIcon name={item.name} />
                                {item.name}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Détail de la techno survolée / touchée — hauteur réservée pour éviter les sauts */}
            <div
              id="skills-detail"
              aria-live="polite"
              className="mt-5 flex min-h-14 items-center rounded-sm bg-sage-light/40 px-4 py-3 text-sm leading-relaxed"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={selected?.name ?? "hint"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className={selected ? "text-ink/80" : "italic text-ink/50"}
                >
                  {selected ? (
                    <>
                      <span className="font-bold text-ink">{selected.name}</span>{locale === "fr" ? " : " : ": "}{selected.desc}
                    </>
                  ) : (
                    t.skills.hint
                  )}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

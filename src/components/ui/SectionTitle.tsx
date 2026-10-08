"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  /** Version réduite, pour une barre de titre fixée en haut de l'écran */
  compact?: boolean;
}

export function SectionTitle({ title, subtitle, compact = false }: SectionTitleProps) {
  return (
    <div className={compact ? "" : "mb-10 md:mb-14"}>
      <h2 className={`font-bold text-ink ${compact ? "text-lg md:text-xl" : "text-2xl md:text-3xl"}`}>{title}</h2>
      {/* Underline animé qui s'étire à l'entrée dans la vue */}
      <motion.div
        className={`mt-2 h-0.5 rounded-full bg-sage ${compact ? "hidden" : ""}`}
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
      {subtitle && (
        <p className={`text-sage-deep ${compact ? "mt-0.5 truncate text-sm" : "mt-3"}`}>{subtitle}</p>
      )}
    </div>
  );
}

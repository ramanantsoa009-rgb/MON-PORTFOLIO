"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 className="text-2xl font-bold text-ink md:text-3xl">{title}</h2>
      {/* Underline animé qui s'étire à l'entrée dans la vue */}
      <motion.div
        className="mt-2 h-0.5 rounded-full bg-sage"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
      {subtitle && <p className="mt-3 text-sage-deep">{subtitle}</p>}
    </div>
  );
}

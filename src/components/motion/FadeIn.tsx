"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** Direction depuis laquelle l'élément entre */
  from?: "bottom" | "left" | "right" | "none";
}

const offsets = {
  bottom: { y: 32, x: 0 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  from = "bottom",
}: FadeInProps) {
  const { x, y } = offsets[from];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

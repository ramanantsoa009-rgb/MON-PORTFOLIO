"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, Mail, X } from "lucide-react";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import type { Project } from "@/lib/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { locale } = useLocale();
  const s = site[locale];
  const t = ui[locale];

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const mailtoHref = project
    ? `mailto:${s.email}?subject=${encodeURIComponent(
        t.projectModal.mailSubject(project.title)
      )}&body=${encodeURIComponent(t.projectModal.mailBody(project.title))}`
    : "";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md rounded-xl bg-white p-7 shadow-xl"
          >
            <button
              onClick={onClose}
              aria-label={t.projectModal.close}
              className="absolute right-4 top-4 rounded-full p-1 text-ink/40 transition-colors hover:bg-sage-light hover:text-ink"
            >
              <X size={18} />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light text-sage-deep">
              <Lock size={18} />
            </div>

            <h3 id="project-modal-title" className="mt-4 font-bold text-ink">
              {t.projectModal.privateTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {t.projectModal.privateBodyBefore}
              <span className="font-medium text-ink">{project?.title}</span>
              {t.projectModal.privateBodyAfter}
            </p>

            <a
              href={mailtoHref}
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-deep"
            >
              <Mail size={15} />
              {t.projectModal.emailCta}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

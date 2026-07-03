"use client";

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";

export function Footer() {
  const { locale } = useLocale();
  const s = site[locale];
  const t = ui[locale];

  return (
    <footer className="border-t border-sage-light bg-bg px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Identité */}
          <div>
            <p className="font-bold text-ink">{s.name}</p>
            <p className="mt-0.5 text-sm text-ink/50">{s.role}</p>
          </div>

          {/* Liens */}
          <nav aria-label={t.footer.socialLinks}>
            <ul className="flex flex-wrap gap-4">
              <li>
                <a
                  href={`mailto:${s.email}`}
                  aria-label="Email"
                  className="flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-sage-deep"
                >
                  <Mail size={14} />
                  {s.email}
                </a>
              </li>
              <li>
                <a href={s.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink/60 transition-colors hover:text-sage-deep">
                  <FaGithub size={18} />
                </a>
              </li>
              <li>
                <a href={s.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink/60 transition-colors hover:text-sage-deep">
                  <FaLinkedinIn size={18} />
                </a>
              </li>
              <li>
                <a href={s.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-ink/60 transition-colors hover:text-sage-deep">
                  <FaWhatsapp size={18} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-xs text-ink/30">© {new Date().getFullYear()} {s.name} — {t.footer.rightsReserved}.</p>
      </div>
    </footer>
  );
}

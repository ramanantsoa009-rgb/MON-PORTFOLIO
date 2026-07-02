import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-sage-light bg-bg px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Identité */}
          <div>
            <p className="font-bold text-ink">{site.name}</p>
            <p className="mt-0.5 text-sm text-ink/50">{site.role}</p>
          </div>

          {/* Liens */}
          <nav aria-label="Liens de contact et réseaux">
            <ul className="flex flex-wrap gap-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Email"
                  className="flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-sage-deep"
                >
                  <Mail size={14} />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink/60 transition-colors hover:text-sage-deep">
                  <FaGithub size={18} />
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink/60 transition-colors hover:text-sage-deep">
                  <FaLinkedinIn size={18} />
                </a>
              </li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-ink/60 transition-colors hover:text-sage-deep">
                  <FaWhatsapp size={18} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-xs text-ink/30">© {new Date().getFullYear()} {site.name} — Tous droits réservés.</p>
      </div>
    </footer>
  );
}

import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { site } from "@/content/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="bg-sage-light px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title="Contact" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10 max-w-xl space-y-2">
            <p className="text-lg font-medium text-ink">
              Un projet, une question, ou juste envie d&rsquo;échanger ?
            </p>
            <p className="leading-relaxed text-ink/70">
              Les coordonnées sont juste en dessous.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <nav aria-label="Moyens de contact">
            <ul className="flex flex-wrap gap-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 rounded-lg border border-sage bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-sage-deep hover:text-sage-deep"
                >
                  <Mail size={16} className="shrink-0 text-sage-deep" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 rounded-lg border border-sage bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-sage-deep hover:text-sage-deep"
                >
                  <Phone size={16} className="shrink-0 text-sage-deep" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg border border-sage bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-sage-deep hover:text-sage-deep"
                >
                  <FaGithub size={16} className="shrink-0 text-sage-deep" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg border border-sage bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-sage-deep hover:text-sage-deep"
                >
                  <FaWhatsapp size={16} className="shrink-0 text-sage-deep" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg border border-sage bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-sage-deep hover:text-sage-deep"
                >
                  <FaLinkedinIn size={16} className="shrink-0 text-sage-deep" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </FadeIn>
      </div>
    </section>
  );
}

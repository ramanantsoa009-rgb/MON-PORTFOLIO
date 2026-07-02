import { site } from "@/content/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  return (
    <section id="a-propos" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title="À propos" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-2xl space-y-4">
            {site.about.split("\n\n").map((para, i) => (
              <p key={i} className="leading-relaxed text-ink/80">{para}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

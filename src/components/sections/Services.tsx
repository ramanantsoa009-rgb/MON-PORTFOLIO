"use client";

import { motion } from "framer-motion";
import { services } from "@/content/services";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Service } from "@/lib/types";

function ServiceCard({ service, index, techAria }: { service: Service; index: number; techAria: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="flex flex-col rounded-xl border border-sage-light bg-white p-6 shadow-sm"
    >
      <motion.div
        className="mb-4 h-0.5 w-8 rounded-full bg-sage"
        whileHover={{ width: 48 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="font-bold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{service.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={techAria}>
        {service.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-sage-deep"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function Services() {
  const { locale } = useLocale();
  const t = ui[locale];
  const localizedServices = services[locale];

  return (
    <section id="services" className="bg-sage-light px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle title={t.services.title} subtitle={t.services.subtitle} />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {localizedServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} techAria={t.services.techAria} />
          ))}
        </div>
      </div>
    </section>
  );
}

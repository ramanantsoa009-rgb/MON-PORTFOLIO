"use client";

import { motion } from "framer-motion";
import { services } from "@/content/services";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Service } from "@/lib/types";

function ServiceCard({ service, index }: { service: Service; index: number }) {
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
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
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
  return (
    <section id="services" className="bg-sage-light px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <SectionTitle
            title="Expertises"
            subtitle="Les domaines que je maîtrise et dans lesquels j'interviens au quotidien."
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

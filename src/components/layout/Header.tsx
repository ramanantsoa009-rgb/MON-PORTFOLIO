"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState(hrefs[0] ?? "");

  useEffect(() => {
    const ids = hrefs.map((h) => h.replace("#", "")).filter(Boolean);

    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(site.nav.map((l) => l.href));

  return (
    <header className="sticky top-0 z-50 border-b border-sage-light bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#accueil"
          onClick={() => setMenuOpen(false)}
          className="font-bold text-ink transition-colors hover:text-sage-deep"
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex gap-6">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm transition-colors hover:text-sage-deep ${
                    active === link.href ? "font-semibold text-sage-deep" : "text-ink/70"
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-sage"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Burger (mobile) */}
        <button
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center justify-center rounded-md p-2 text-ink transition-colors hover:text-sage-deep md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-sage-light bg-bg md:hidden"
            aria-label="Navigation mobile"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-sage-light hover:text-sage-deep ${
                      active === link.href
                        ? "bg-sage-light font-semibold text-sage-deep"
                        : "text-ink/80"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

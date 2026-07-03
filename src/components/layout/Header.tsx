"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLocale } from "@/context/LanguageContext";

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

function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLocale();
  const t = ui[locale];

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.header.toggleLanguage}
      className={`flex items-center gap-1 rounded-md border border-sage-light px-2.5 py-1 text-xs font-semibold transition-colors hover:border-sage ${className ?? ""}`}
    >
      <span className={locale === "fr" ? "text-sage-deep" : "text-ink/40"}>FR</span>
      <span className="text-ink/30">/</span>
      <span className={locale === "en" ? "text-sage-deep" : "text-ink/40"}>EN</span>
    </button>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale } = useLocale();
  const t = ui[locale];
  const s = site[locale];
  const active = useActiveSection(s.nav.map((l) => l.href));

  return (
    <header className="sticky top-0 z-50 border-b border-sage-light bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#accueil"
          onClick={() => setMenuOpen(false)}
          className="font-bold text-ink transition-colors hover:text-sage-deep"
        >
          {s.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label={t.header.mainNav}>
            <ul className="flex gap-6">
              {s.nav.map((link) => (
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
          <LanguageToggle />
        </div>

        {/* Burger (mobile) */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center justify-center rounded-md p-2 text-ink transition-colors hover:text-sage-deep"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
            aria-label={t.header.mobileNav}
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {s.nav.map((link) => (
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

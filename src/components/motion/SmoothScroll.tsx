"use client";

import { useEffect } from "react";

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(target: HTMLElement, onDone?: () => void) {
  const header = document.querySelector<HTMLElement>("header");
  const headerHeight = header ? header.offsetHeight : 80;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - headerHeight - 8;
  const distance = targetY - startY;
  const duration = Math.min(900, 300 + Math.abs(distance) * 0.3);
  let startTime: number | null = null;

  function step(ts: number) {
    if (startTime === null) startTime = ts;
    const elapsed = ts - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onDone?.();
    }
  }

  requestAnimationFrame(step);
}

export function SmoothScroll() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;

      e.preventDefault();

      smoothScrollTo(target, () => {
        history.pushState(null, "", href);
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

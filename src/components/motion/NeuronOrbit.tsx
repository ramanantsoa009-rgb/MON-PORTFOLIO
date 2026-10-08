"use client";

import { useEffect, useRef } from "react";

interface Orbiter {
  ring: number;
  angle: number;
  speed: number; // radians par frame (à 60 fps), le signe donne le sens
  r: number;
  wobblePhase: number;
  wobbleAmp: number; // en fraction du rayon de la photo
  wobbleSpeed: number;
  glow: number;
}

interface Pulse {
  neuron: number;
  toPhoto: boolean;
  t: number;
  speed: number;
}

// Rayons des orbites, en multiples du rayon de la photo
const RINGS = [1.2, 1.45, 1.7];
// Taille du canvas par rapport à la photo : laisse la place à l'orbite extérieure
export const ORBIT_CANVAS_SCALE = 2;
// Par orbite : nombre de neurones, rayon (px), vitesse. Gros et lents près de la photo, petits et rapides au loin.
const RING_SETUP = [
  { count: 4, size: [5.5, 8], speed: 0.0022 },
  { count: 4, size: [3.5, 5], speed: -0.0034 },
  { count: 5, size: [1.8, 3], speed: 0.0048 },
];
const NEURON_LINK = 0.75; // distance max entre deux neurones reliés (× rayon photo)
const PHOTO_LINK = 0.42; // distance max entre un neurone et le bord de la photo (× rayon photo)

function readRgb(name: string, fallback: string): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const hex = /^#([0-9a-f]{6})$/i.test(value) ? value.slice(1) : fallback;
  const n = parseInt(hex, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

function createOrbiters(): Orbiter[] {
  return RING_SETUP.flatMap((setup, ring) =>
    Array.from({ length: setup.count }, (_, i) => ({
      ring,
      angle: (i / setup.count) * Math.PI * 2 + Math.random() * 0.8,
      speed: setup.speed * (0.85 + Math.random() * 0.3),
      r: setup.size[0] + Math.random() * (setup.size[1] - setup.size[0]),
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleAmp: 0.03 + Math.random() * 0.05,
      wobbleSpeed: 0.01 + Math.random() * 0.015,
      glow: 0,
    }))
  );
}

/** Neurones en orbite autour de la photo, qui reste le nœud principal du réseau */
export function NeuronOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const photo = canvas?.parentElement;
    if (!canvas || !ctx || !photo) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodeRgb = readRgb("--color-sage", "9caf88");
    const linkRgb = readRgb("--color-sage-deep", "6b7f5c");
    const orbiters = createOrbiters();
    const px = new Float32Array(orbiters.length);
    const py = new Float32Array(orbiters.length);
    let pulses: Pulse[] = [];
    let size = 0;
    let raf = 0;
    let last = performance.now();
    let time = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = photo!.offsetWidth * ORBIT_CANVAS_SCALE;
      canvas!.width = size * dpr;
      canvas!.height = size * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(dt: number, animate: boolean) {
      const c = size / 2;
      const R = size / ORBIT_CANVAS_SCALE / 2;
      time += dt;
      ctx!.clearRect(0, 0, size, size);

      // Orbites : à peine visibles, elles donnent la structure
      ctx!.lineWidth = 1;
      ctx!.strokeStyle = `rgba(${linkRgb}, 0.07)`;
      for (const ring of RINGS) {
        ctx!.beginPath();
        ctx!.arc(c, c, R * ring, 0, Math.PI * 2);
        ctx!.stroke();
      }

      // Positions : rotation + petits mouvements aléatoires (radiaux et tangentiels)
      for (let i = 0; i < orbiters.length; i++) {
        const o = orbiters[i];
        if (animate) {
          o.angle += o.speed * dt;
          o.glow *= 0.96;
        }
        const wobble = Math.sin(time * o.wobbleSpeed + o.wobblePhase);
        const radius = R * (RINGS[o.ring] + wobble * o.wobbleAmp);
        const angle = o.angle + Math.cos(time * o.wobbleSpeed * 0.7 + o.wobblePhase) * 0.04;
        px[i] = c + Math.cos(angle) * radius;
        py[i] = c + Math.sin(angle) * radius;
      }

      // Liaisons neurone ↔ photo (vers le bord de la photo, nœud principal)
      const photoLinked: boolean[] = [];
      for (let i = 0; i < orbiters.length; i++) {
        const dx = px[i] - c;
        const dy = py[i] - c;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const gap = dist - R;
        const linked = gap < R * PHOTO_LINK;
        photoLinked.push(linked);
        if (!linked) continue;

        const strength = 1 - gap / (R * PHOTO_LINK);
        ctx!.strokeStyle = `rgba(${linkRgb}, ${0.12 + strength * 0.28 + orbiters[i].glow * 0.3})`;
        ctx!.lineWidth = 0.8 + strength * 0.8;
        ctx!.beginPath();
        ctx!.moveTo(px[i], py[i]);
        ctx!.lineTo(c + (dx / dist) * R, c + (dy / dist) * R);
        ctx!.stroke();
      }

      // Liaisons entre neurones proches
      const maxDist = R * NEURON_LINK;
      for (let i = 0; i < orbiters.length; i++) {
        for (let j = i + 1; j < orbiters.length; j++) {
          const dx = px[i] - px[j];
          const dy = py[i] - py[j];
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > maxDist) continue;
          const strength = 1 - d / maxDist;
          ctx!.strokeStyle = `rgba(${linkRgb}, ${strength * 0.3})`;
          ctx!.lineWidth = 0.6 + strength * 0.6;
          ctx!.beginPath();
          ctx!.moveTo(px[i], py[i]);
          ctx!.lineTo(px[j], py[j]);
          ctx!.stroke();
        }
      }

      // Signaux entre la photo et les neurones reliés
      if (animate) {
        if (Math.random() < 0.02 * dt && pulses.length < 4) {
          const candidates = orbiters.map((_, i) => i).filter((i) => photoLinked[i]);
          if (candidates.length > 0) {
            pulses.push({
              neuron: candidates[Math.floor(Math.random() * candidates.length)],
              toPhoto: Math.random() < 0.5,
              t: 0,
              speed: 0.025 + Math.random() * 0.015,
            });
          }
        }

        pulses = pulses.filter((p) => {
          p.t += p.speed * dt;
          if (!photoLinked[p.neuron]) return false;
          if (p.t >= 1) {
            if (!p.toPhoto) orbiters[p.neuron].glow = 1;
            return false;
          }
          return true;
        });

        for (const p of pulses) {
          const dx = px[p.neuron] - c;
          const dy = py[p.neuron] - c;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ex = c + (dx / dist) * R;
          const ey = c + (dy / dist) * R;
          const t = p.toPhoto ? p.t : 1 - p.t;
          ctx!.fillStyle = `rgba(${linkRgb}, 0.9)`;
          ctx!.beginPath();
          ctx!.arc(px[p.neuron] + (ex - px[p.neuron]) * t, py[p.neuron] + (ey - py[p.neuron]) * t, 2, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // Neurones : halo doux pour les gros, puis le point
      for (let i = 0; i < orbiters.length; i++) {
        const o = orbiters[i];
        if (o.r > 5) {
          ctx!.fillStyle = `rgba(${nodeRgb}, ${0.18 + o.glow * 0.2})`;
          ctx!.beginPath();
          ctx!.arc(px[i], py[i], o.r * 2, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.fillStyle = o.r > 5 ? `rgba(${linkRgb}, ${0.75 + o.glow * 0.25})` : `rgba(${nodeRgb}, ${0.8 + o.glow * 0.2})`;
        ctx!.beginPath();
        ctx!.arc(px[i], py[i], o.r * (1 + o.glow * 0.4), 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function tick(now: number) {
      const dt = Math.min(now - last, 50) / (1000 / 60);
      last = now;
      draw(dt, true);
      raf = requestAnimationFrame(tick);
    }

    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0, false);
    });
    observer.observe(photo);
    resize();

    if (reduceMotion) {
      draw(0, false);
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ width: `${ORBIT_CANVAS_SCALE * 100}%`, height: `${ORBIT_CANVAS_SCALE * 100}%` }}
    />
  );
}

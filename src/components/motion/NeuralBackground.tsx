"use client";

import { useEffect, useRef } from "react";

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number; // vitesse de parallaxe : 0 = fixe, 1 = suit le scroll
  r: number;
  glow: number;
}

interface Pulse {
  from: number;
  to: number;
  t: number;
  speed: number;
  hops: number;
}

const AREA_PER_NODE = 15000;
const MIN_NODES = 18;
const MAX_NODES = 90;
const MARGIN = 120;
const BASE_LINK = 135; // distance de liaison en haut de page
const EXTRA_LINK = 80; // ajoutée au cœur de la page (le réseau se densifie)
const POINTER_SHARP = 130; // en deçà : liaison nette vers le curseur
const POINTER_FAR = 340; // jusque-là : liaison diffuse et pâle ; au-delà : rien
const MAX_PULSES = 36;
const MAX_HOPS = 4;

function readRgb(name: string, fallback: string): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const hex = /^#([0-9a-f]{6})$/i.test(value) ? value.slice(1) : fallback;
  const n = parseInt(hex, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

// Hiérarchie : beaucoup de petits neurones, quelques moyens, de rares gros
function nodeRadius(): number {
  const roll = Math.random();
  if (roll < 0.7) return 1.5 + Math.random();
  if (roll < 0.93) return 3 + Math.random() * 1.5;
  return 5.5 + Math.random() * 1.5;
}

// Poids stable d'une liaison (i < j), dans [0, 1) : la même paire garde
// toujours le même poids, même quand la liaison se fait et se défait.
function linkWeight(i: number, j: number): number {
  let h = Math.imul(i, 73856093) ^ Math.imul(j, 19349663);
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

function seed(width: number, height: number): NeuralNode[] {
  const count = Math.max(MIN_NODES, Math.min(MAX_NODES, Math.round((width * height) / AREA_PER_NODE)));
  const span = height + MARGIN * 2;

  return Array.from({ length: count }, () => ({
    x: Math.random() * (width + MARGIN * 2) - MARGIN,
    y: Math.random() * span,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    depth: 0.12 + Math.random() * 0.45,
    r: nodeRadius(),
    glow: 0,
  }));
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodeRgb = readRgb("--color-sage", "9caf88");
    const linkRgb = readRgb("--color-sage-deep", "6b7f5c");

    let width = 0;
    let height = 0;
    let nodes: NeuralNode[] = [];
    let pulses: Pulse[] = [];
    let px: Float32Array = new Float32Array(0);
    let py: Float32Array = new Float32Array(0);
    let neighbors: number[][] = [];

    let raf = 0;
    let last = performance.now();
    let lastScroll = window.scrollY;
    let velocity = 0;
    const pointer = { x: -9999, y: -9999 };

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const nextWidth = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = nextWidth * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Sur mobile, la barre d'adresse change la hauteur en scrollant :
      // on ne régénère le réseau que si la largeur change.
      if (nextWidth !== width) {
        width = nextWidth;
        nodes = seed(width, height);
        pulses = [];
        px = new Float32Array(nodes.length);
        py = new Float32Array(nodes.length);
      }
    }

    function linkDistance(scrollY: number): number {
      const maxScroll = document.documentElement.scrollHeight - height;
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
      return BASE_LINK + EXTRA_LINK * Math.sin(progress * Math.PI);
    }

    function spawnPulse(from: number, hops: number, exclude = -1) {
      const options = neighbors[from].filter((j) => j !== exclude);
      if (options.length === 0 || pulses.length >= MAX_PULSES) return;
      const to = options[Math.floor(Math.random() * options.length)];
      pulses.push({ from, to, t: 0, speed: 0.018 + Math.random() * 0.02, hops });
    }

    function draw(dt: number, animate: boolean) {
      const scrollY = window.scrollY;
      const span = height + MARGIN * 2;
      const maxDist = linkDistance(scrollY);
      const maxDist2 = maxDist * maxDist;

      // Positions écran (parallaxe par profondeur, bouclage vertical)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (animate) {
          n.x += n.vx * dt;
          n.y += n.vy * dt;
          if (n.x < -MARGIN) n.x += width + MARGIN * 2;
          else if (n.x > width + MARGIN) n.x -= width + MARGIN * 2;
          n.glow *= 0.95;
        }
        px[i] = n.x;
        py[i] = mod(n.y - scrollY * n.depth, span) - MARGIN;
      }

      ctx!.clearRect(0, 0, width, height);
      ctx!.lineWidth = 1;

      // Liaisons
      neighbors = nodes.map(() => []);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = px[i] - px[j];
          const dy = py[i] - py[j];
          const d2 = dx * dx + dy * dy;
          if (d2 > maxDist2) continue;

          neighbors[i].push(j);
          neighbors[j].push(i);

          const strength = 1 - Math.sqrt(d2) / maxDist;
          // Poids au cube : la plupart des liaisons restent fines, quelques-unes marquées
          const weight = linkWeight(i, j) ** 3;
          const alpha =
            strength * (0.18 + weight * 0.14) + Math.max(nodes[i].glow, nodes[j].glow) * strength * 0.3;
          ctx!.strokeStyle = `rgba(${linkRgb}, ${alpha})`;
          ctx!.lineWidth = 0.6 + weight * 2.4;
          ctx!.beginPath();
          ctx!.moveTo(px[i], py[i]);
          ctx!.lineTo(px[j], py[j]);
          ctx!.stroke();
        }
      }

      // Liaisons vers le pointeur : nettes de près, diffuses de loin, absentes au-delà
      for (let i = 0; i < nodes.length; i++) {
        const dx = px[i] - pointer.x;
        const dy = py[i] - pointer.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > POINTER_FAR) continue;

        if (d <= POINTER_SHARP) {
          const strength = 1 - d / POINTER_SHARP;
          nodes[i].glow = Math.max(nodes[i].glow, strength * 0.6);
          ctx!.strokeStyle = `rgba(${linkRgb}, ${0.3 + strength * 0.2})`;
          ctx!.lineWidth = 1;
        } else {
          const fade = 1 - (d - POINTER_SHARP) / (POINTER_FAR - POINTER_SHARP);
          ctx!.strokeStyle = `rgba(${linkRgb}, ${fade * 0.16})`;
          ctx!.lineWidth = 2.5;
          ctx!.shadowColor = `rgba(${linkRgb}, ${fade * 0.5})`;
          ctx!.shadowBlur = 8;
        }

        ctx!.beginPath();
        ctx!.moveTo(px[i], py[i]);
        ctx!.lineTo(pointer.x, pointer.y);
        ctx!.stroke();
        ctx!.shadowBlur = 0;
      }
      ctx!.lineWidth = 1;

      // Signaux : plus on scrolle vite, plus le réseau s'active
      if (animate) {
        const spawnChance = 0.015 + Math.min(velocity, 40) * 0.012;
        if (Math.random() < spawnChance * dt) {
          spawnPulse(Math.floor(Math.random() * nodes.length), 0);
        }

        const arrived: Pulse[] = [];
        pulses = pulses.filter((p) => {
          p.t += p.speed * dt;
          // La liaison a disparu (nœuds trop éloignés) : le signal s'éteint
          if (!neighbors[p.from].includes(p.to)) return false;
          if (p.t < 1) return true;
          arrived.push(p);
          return false;
        });

        // À l'arrivée, le nœud s'allume et transmet parfois le signal plus loin
        for (const p of arrived) {
          nodes[p.to].glow = 1;
          if (p.hops < MAX_HOPS && Math.random() < 0.7) {
            spawnPulse(p.to, p.hops + 1, p.from);
          }
        }

        for (const p of pulses) {
          const x = px[p.from] + (px[p.to] - px[p.from]) * p.t;
          const y = py[p.from] + (py[p.to] - py[p.from]) * p.t;
          const tail = Math.max(0, p.t - 0.18);
          const tx = px[p.from] + (px[p.to] - px[p.from]) * tail;
          const ty = py[p.from] + (py[p.to] - py[p.from]) * tail;

          const gradient = ctx!.createLinearGradient(tx, ty, x, y);
          gradient.addColorStop(0, `rgba(${linkRgb}, 0)`);
          gradient.addColorStop(1, `rgba(${linkRgb}, 0.7)`);
          ctx!.strokeStyle = gradient;
          ctx!.lineWidth = 1.5;
          ctx!.beginPath();
          ctx!.moveTo(tx, ty);
          ctx!.lineTo(x, y);
          ctx!.stroke();

          ctx!.fillStyle = `rgba(${linkRgb}, 0.85)`;
          ctx!.beginPath();
          ctx!.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // Nœuds
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx!.fillStyle = `rgba(${nodeRgb}, ${0.45 + n.glow * 0.5})`;
        ctx!.beginPath();
        ctx!.arc(px[i], py[i], n.r * (1 + n.glow * 0.8), 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function tick(now: number) {
      const dt = Math.min(now - last, 50) / (1000 / 60);
      last = now;

      const scrollY = window.scrollY;
      velocity += (Math.abs(scrollY - lastScroll) - velocity) * 0.15;
      lastScroll = scrollY;

      draw(dt, true);
      raf = requestAnimationFrame(tick);
    }

    function onPointerMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    }

    function onPointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    function onResize() {
      resize();
      if (reduceMotion) draw(0, false);
    }

    resize();
    window.addEventListener("resize", onResize);

    if (reduceMotion) {
      // Rendu statique : pas de dérive, pas de signaux, pas de parallaxe.
      draw(0, false);
    } else {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}

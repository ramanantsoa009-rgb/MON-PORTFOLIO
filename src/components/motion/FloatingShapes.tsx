"use client";

import { useEffect, useRef } from "react";

type ShapeType = "circle" | "ring" | "triangle" | "diamond";

interface Shape {
  type: ShapeType;
  left: string;
  top: string;
  size: number;
  color: string;
  opacity: number;
  depth: number;
  rotation?: number;
  animation?: string;
}

const SHAPES: Shape[] = [
  // Coins — grandes formes
  { type: "circle",   left:  "8%", top:  "8%", size: 420, color: "#6b7f5c", opacity: 0.55, depth: 0.018 },
  { type: "ring",     left: "90%", top:  "8%", size: 440, color: "#9caf88", opacity: 0.60, depth: 0.030 },
  { type: "ring",     left:  "8%", top: "88%", size: 380, color: "#9caf88", opacity: 0.50, depth: 0.024 },
  { type: "diamond",  left: "90%", top: "88%", size: 360, color: "#6b7f5c", opacity: 0.55, depth: 0.038, rotation: 20 },
  // Flancs centraux — animées
  { type: "diamond",  left: "25%", top: "50%", size: 240, color: "#9caf88", opacity: 0.50, depth: 0.040, animation: "fs-float 7s ease-in-out infinite" },
  { type: "ring",     left: "75%", top: "50%", size: 240, color: "#6b7f5c", opacity: 0.45, depth: 0.026, animation: "fs-drift 9s ease-in-out infinite" },
  // Gaps
  { type: "diamond",  left: "36%", top: "26%", size: 160, color: "#6b7f5c", opacity: 0.50, depth: 0.044, rotation: 10 },
  { type: "triangle", left: "50%", top: "50%", size: 260, color: "#6b7f5c", opacity: 0.45, depth: 0.020, animation: "fs-spin 22s linear infinite" },
  { type: "circle",   left: "64%", top: "26%", size: 150, color: "#9caf88", opacity: 0.50, depth: 0.032 },
];

function innerStyle(s: Shape): React.CSSProperties {
  const base: React.CSSProperties = {
    width: "100%",
    height: "100%",
    animation: s.animation,
  };

  switch (s.type) {
    case "circle":
      return { ...base, borderRadius: "50%", background: s.color };
    case "ring":
      return { ...base, borderRadius: "50%", border: `3px solid ${s.color}`, background: "transparent" };
    case "triangle":
      return {
        ...base,
        width: 0,
        height: 0,
        borderLeft: `${s.size / 2}px solid transparent`,
        borderRight: `${s.size / 2}px solid transparent`,
        borderBottom: `${s.size * 0.87}px solid ${s.color}`,
        background: "transparent",
      };
    case "diamond":
      return {
        ...base,
        background: s.color,
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        transform: `rotate(${s.rotation ?? 0}deg)`,
      };
    default:
      return base;
  }
}

export function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wrappers = Array.from(container.querySelectorAll<HTMLElement>("[data-depth]"));

    let raf = 0;
    let targetY = 0;
    let currentY = 0;

    function onScroll() {
      targetY = window.scrollY;
    }

    function tick() {
      currentY += (targetY - currentY) * 0.07;

      wrappers.forEach((el) => {
        const depth = parseFloat(el.dataset.depth ?? "0");
        const rotateSpeed = parseFloat(el.dataset.rotateSpeed ?? "0");
        const dy = currentY * depth;
        const rotate = currentY * rotateSpeed;
        el.style.transform = `translate(-50%, calc(-50% - ${dy}px)) rotate(${rotate}deg)`;
      });

      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fs-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fs-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-28px) rotate(20deg); }
        }
        @keyframes fs-drift {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50%       { transform: translateX(24px) rotate(180deg); }
        }
      `}</style>

      <div
        ref={containerRef}
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 25,
          pointerEvents: "none",
        }}
      >
        {SHAPES.map((s, i) => (
          <div
            key={i}
            data-depth={s.depth}
            data-rotate-speed={
              s.type === "diamond" ? 0.015 :
              s.type === "triangle" ? 0.008 :
              s.type === "ring" ? 0.004 :
              0
            }
            style={{
              position: "absolute",
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
              transform: "translate(-50%, -50%)",
              filter: "blur(40px)",
              mixBlendMode: "multiply",
            }}
          >
            <div style={innerStyle(s)} />
          </div>
        ))}
      </div>
    </>
  );
}

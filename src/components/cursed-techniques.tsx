"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Cursed technique decorative animations — Blue (Cursed Technique Lapse: Blue),
 * Red (Cursed Technique Reversal: Red), and Purple (Hollow Purple).
 * Floating orbs placed as decorative elements between sections.
 */

type Technique = {
  name: string;
  kanji: string;
  color: string;
  colorRgb: string;
  description: string;
};

const TECHNIQUES: Technique[] = [
  {
    name: "Blue",
    kanji: "蒼",
    color: "#00D4FF",
    colorRgb: "0, 212, 255",
    description: "Attraction",
  },
  {
    name: "Red",
    kanji: "赫",
    color: "#FF3366",
    colorRgb: "255, 51, 102",
    description: "Repulsion",
  },
  {
    name: "Purple",
    kanji: "虚",
    color: "#9B59F0",
    colorRgb: "155, 89, 240",
    description: "Annihilation",
  },
];

function TechniqueOrb({
  technique,
  size = 60,
  delay = 0,
}: {
  technique: Technique;
  size?: number;
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: size,
        height: size,
        animation: `technique-float 5s ease-in-out ${delay}s infinite`,
      }}
    >
      {/* Outer energy ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid rgba(${technique.colorRgb}, ${isHovered ? 0.6 : 0.2})`,
          animation: "technique-ring-spin 8s linear infinite",
          transition: "border-color 0.3s ease",
        }}
      />

      {/* Pulsing glow */}
      <div
        className="absolute rounded-full"
        style={{
          inset: -size * 0.3,
          background: `radial-gradient(circle, rgba(${technique.colorRgb}, ${isHovered ? 0.3 : 0.1}) 0%, transparent 70%)`,
          filter: `blur(${isHovered ? 15 : 10}px)`,
          transition: "all 0.3s ease",
          animation: "technique-pulse 3s ease-in-out infinite",
        }}
      />

      {/* Core orb */}
      <div
        className="absolute rounded-full"
        style={{
          inset: "25%",
          background: `radial-gradient(circle, ${technique.color} 0%, rgba(${technique.colorRgb}, 0.3) 60%, transparent 100%)`,
          boxShadow: isHovered
            ? `0 0 ${size * 0.4}px rgba(${technique.colorRgb}, 0.6), 0 0 ${size * 0.8}px rgba(${technique.colorRgb}, 0.3)`
            : `0 0 ${size * 0.2}px rgba(${technique.colorRgb}, 0.3)`,
          transition: "box-shadow 0.3s ease",
        }}
      />

      {/* Kanji label */}
      <div
        className="absolute text-center pointer-events-none"
        style={{
          bottom: -24,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: technique.color,
          opacity: isHovered ? 1 : 0.5,
          transition: "opacity 0.3s ease",
          fontWeight: 600,
        }}
      >
        <span style={{ fontSize: 14, display: "block", marginBottom: 1 }}>
          {technique.kanji}
        </span>
        {technique.name}
      </div>
    </div>
  );
}

/**
 * Floating cursed technique orbs placed in the hero background.
 */
export function CursedTechniques() {
  const [isMobile, setIsMobile] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* Blue — top left */}
      <div
        className="absolute pointer-events-auto"
        style={{ top: "20%", left: "5%", opacity: 0.7 }}
      >
        <TechniqueOrb technique={TECHNIQUES[0]} size={50} delay={0} />
      </div>

      {/* Red — bottom right */}
      <div
        className="absolute pointer-events-auto"
        style={{ bottom: "25%", right: "3%", opacity: 0.6 }}
      >
        <TechniqueOrb technique={TECHNIQUES[1]} size={45} delay={1.5} />
      </div>

      {/* Purple — top right (smaller, more distant) */}
      <div
        className="absolute pointer-events-auto"
        style={{ top: "35%", right: "12%", opacity: 0.4 }}
      >
        <TechniqueOrb technique={TECHNIQUES[2]} size={35} delay={3} />
      </div>
    </div>
  );
}

/**
 * Section divider with a cursed technique name — used between major sections.
 */
export function TechniqueDivider({ technique }: { technique: Technique }) {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${technique.colorRgb}, 0.3), transparent)`,
        }}
      />
      <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase opacity-30">
        <span style={{ color: technique.color, fontSize: 14 }}>
          {technique.kanji}
        </span>
        <span style={{ color: technique.color }}>{technique.name}</span>
        <span style={{ color: technique.color }}>—</span>
        <span className="text-slate-500">{technique.description}</span>
      </div>
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${technique.colorRgb}, 0.3), transparent)`,
        }}
      />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const DESKTOP_PLANETS = [
  {
    name: "Mercury",
    size: 5,
    orbitR: 110,
    duration: 30,
    gradient: "radial-gradient(circle at 35% 35%, #b5b5b5, #7a7a7a, #555)",
    glow: "rgba(180,180,180,0.2)",
  },
  {
    name: "Venus",
    size: 8,
    orbitR: 170,
    duration: 45,
    gradient: "radial-gradient(circle at 35% 35%, #ffe4a0, #dba040, #b07820)",
    glow: "rgba(255,200,80,0.25)",
  },
  {
    name: "Earth",
    size: 9,
    orbitR: 240,
    duration: 60,
    gradient: "radial-gradient(circle at 35% 35%, #7ec8e3, #3b82f6, #1e40af)",
    glow: "rgba(59,130,246,0.25)",
  },
  {
    name: "Mars",
    size: 7,
    orbitR: 320,
    duration: 80,
    gradient: "radial-gradient(circle at 35% 35%, #f09070, #c1440e, #8b2500)",
    glow: "rgba(220,80,40,0.2)",
  },
  {
    name: "Jupiter",
    size: 18,
    orbitR: 420,
    duration: 120,
    gradient: "radial-gradient(circle at 35% 35%, #f0c888, #d4944a, #b07030)",
    glow: "rgba(220,160,80,0.2)",
    hasBands: true,
  },
  {
    name: "Saturn",
    size: 15,
    orbitR: 530,
    duration: 180,
    gradient: "radial-gradient(circle at 35% 35%, #f5e6a8, #d4b868, #a08030)",
    glow: "rgba(220,190,100,0.2)",
    hasRing: true,
  },
  {
    name: "Uranus",
    size: 12,
    orbitR: 640,
    duration: 240,
    gradient: "radial-gradient(circle at 35% 35%, #a8e8e8, #60c8c8, #308888)",
    glow: "rgba(96,200,200,0.15)",
  },
];

const MOBILE_PLANETS = DESKTOP_PLANETS.slice(0, 4).map((p) => ({
  ...p,
  size: Math.max(4, p.size - 2),
  orbitR: Math.round(p.orbitR * 0.45),
  duration: Math.round(p.duration * 1.5),
}));

export function SolarSystem() {
  const isMobile = useIsMobile();
  const planets = isMobile ? MOBILE_PLANETS : DESKTOP_PLANETS;

  // Generate CSS keyframes as a string
  const keyframesCSS = planets
    .map(
      (p, i) => `
    @keyframes orbit-${i} {
      0%   { transform: translate(${p.orbitR}px, 0); }
      25%  { transform: translate(0, -${p.orbitR}px); }
      50%  { transform: translate(-${p.orbitR}px, 0); }
      75%  { transform: translate(0, ${p.orbitR}px); }
      100% { transform: translate(${p.orbitR}px, 0); }
    }
  `
    )
    .join("\n");

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: keyframesCSS }} />

      {/* Orbit rings */}
      {planets.map((planet, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute rounded-full"
          style={{
            width: planet.orbitR * 2,
            height: planet.orbitR * 2,
            top: `calc(50% - ${planet.orbitR}px)`,
            left: `calc(50% - ${planet.orbitR}px)`,
            border: "1px solid rgba(255,255,255,0.03)",
          }}
        />
      ))}

      {/* Planets */}
      {planets.map((planet, i) => (
        <div
          key={planet.name}
          className="absolute"
          style={{
            width: planet.size,
            height: planet.size,
            top: `calc(50% - ${planet.size / 2}px)`,
            left: `calc(50% - ${planet.size / 2}px)`,
            animation: `orbit-${i} ${planet.duration}s linear infinite`,
            willChange: "transform",
          }}
        >
          <div
            className="w-full h-full rounded-full relative overflow-hidden"
            style={{
              background: planet.gradient,
              boxShadow: `0 0 ${planet.size}px ${planet.glow}, inset -${planet.size / 4}px -${planet.size / 4}px ${planet.size / 2}px rgba(0,0,0,0.6)`,
            }}
          >
            {planet.hasBands && (
              <>
                <div
                  className="absolute w-full"
                  style={{
                    top: "30%",
                    height: "8%",
                    background: "rgba(180,120,60,0.3)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  className="absolute w-full"
                  style={{
                    top: "50%",
                    height: "10%",
                    background: "rgba(200,140,60,0.25)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  className="absolute w-full"
                  style={{
                    top: "68%",
                    height: "6%",
                    background: "rgba(160,100,50,0.3)",
                    borderRadius: "50%",
                  }}
                />
              </>
            )}
          </div>

          {planet.hasRing && (
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: planet.size * 2.4,
                height: planet.size * 0.6,
                transform: "translate(-50%, -50%) rotateX(75deg)",
                borderRadius: "50%",
                border: "2px solid rgba(210,180,100,0.25)",
                boxShadow: "0 0 8px rgba(210,180,100,0.1)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

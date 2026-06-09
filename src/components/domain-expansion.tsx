"use client";

import { useState, useCallback } from "react";

/**
 * "Domain Expansion" — Gojo portrait fills entire screen with transparent bg.
 * Cosmic energy overlay, particles, and "Unlimited Void" text.
 */
export function DomainExpansion() {
  const [isActive, setIsActive] = useState(false);

  const triggerDomain = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    setTimeout(() => setIsActive(false), 4500);
  }, [isActive]);

  return (
    <>
      {/* Floating button */}
      <button
        className="domain-btn"
        onClick={triggerDomain}
        aria-label="Domain Expansion"
      >
        <span className="infinity-icon">∞</span>
        Domain Expansion
      </button>

      {/* Full-screen overlay */}
      {isActive && (
        <div className="domain-expansion-overlay" key={Date.now()} style={{ background: "rgba(3, 0, 20, 0.92)" }}>
          
          {/* Cosmic energy particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => {
              const x = ((i * 47 + 13) % 100);
              const y = ((i * 73 + 31) % 100);
              const size = 2 + (i % 5);
              const delay = (i * 0.1);
              return (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: size,
                    height: size,
                    background: i % 4 === 0 ? "#1F5AFF" : i % 4 === 1 ? "#8A2BE2" : i % 4 === 2 ? "#D1E6FF" : "#FFFFFF",
                    boxShadow: `0 0 ${size * 6}px ${i % 4 === 0 ? "rgba(31,90,255,0.8)" : i % 4 === 1 ? "rgba(138,43,226,0.8)" : "rgba(209,230,255,0.6)"}`,
                    animation: `cursed-float ${2 + (i % 3)}s ease-in-out ${delay}s infinite`,
                    ["--drift" as string]: `${(i % 2 === 0 ? 1 : -1) * (25 + i * 3)}px`,
                    ["--particle-opacity" as string]: "0.9",
                  }}
                />
              );
            })}
          </div>

          {/* Gojo portrait — fills entire screen, transparent bg */}
          <div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            style={{
              opacity: 0,
              animation: "gojo-fullscreen-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
            }}
          >
            <img
              src="/gojo-domain.png"
              alt="Gojo Satoru — Domain Expansion"
              className="w-full h-full object-contain"
              style={{
                maxWidth: "100vw",
                maxHeight: "100vh",
                filter: "drop-shadow(0 0 40px rgba(31, 90, 255, 0.5)) drop-shadow(0 0 80px rgba(138, 43, 226, 0.4)) drop-shadow(0 0 120px rgba(209, 230, 255, 0.2))",
              }}
            />
          </div>

          {/* Text overlay — bottom left */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "5%",
              bottom: "8%",
              zIndex: 20,
              opacity: 0,
              animation: "fadeIn 0.6s ease 0.6s forwards",
            }}
          >
            <div
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                background: "linear-gradient(135deg, #D1E6FF, #1F5AFF, #8A2BE2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
                letterSpacing: "0.05em",
                filter: "drop-shadow(0 0 20px rgba(31, 90, 255, 0.4))",
                animation: "domain-text-glow 2s ease-in-out infinite",
              }}
            >
              無量空処
            </div>
            <div
              className="text-xl md:text-2xl font-bold tracking-[0.15em] uppercase mt-2"
              style={{
                color: "rgba(209, 230, 255, 0.7)",
                textShadow: "0 0 15px rgba(31, 90, 255, 0.3)",
              }}
            >
              Unlimited Void
            </div>
            <div
              className="text-xs tracking-[0.2em] uppercase mt-4"
              style={{
                color: "rgba(138, 43, 226, 0.5)",
                opacity: 0,
                animation: "fadeIn 0.5s ease 1.2s forwards",
              }}
            >
              Domain Expansion
            </div>
          </div>
        </div>
      )}
    </>
  );
}

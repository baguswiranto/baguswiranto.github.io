"use client";

import { useState, useCallback } from "react";

/**
 * "Domain Expansion" floating button that triggers a full-screen
 * purple void overlay with "Unlimited Void" text for ~3 seconds.
 */
export function DomainExpansion() {
  const [isActive, setIsActive] = useState(false);

  const triggerDomain = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    // Auto-dismiss after animation duration
    setTimeout(() => setIsActive(false), 3200);
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
        <div className="domain-expansion-overlay" key={Date.now()}>
          {/* Infinity particles inside domain */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => {
              const x = ((i * 47 + 13) % 100);
              const y = ((i * 73 + 31) % 100);
              const size = 2 + (i % 4);
              const delay = (i * 0.15);
              return (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: size,
                    height: size,
                    background: i % 2 === 0 ? "#00D4FF" : "#7B2FBE",
                    boxShadow: `0 0 ${size * 4}px ${i % 2 === 0 ? "rgba(0,212,255,0.6)" : "rgba(123,47,190,0.6)"}`,
                    animation: `cursed-float ${2 + (i % 3)}s ease-in-out ${delay}s infinite`,
                    ["--drift" as string]: `${(i % 2 === 0 ? 1 : -1) * (20 + i * 3)}px`,
                    ["--particle-opacity" as string]: "0.8",
                  }}
                />
              );
            })}
          </div>

          {/* Center text */}
          <div className="relative z-10 text-center">
            <div className="infinity-symbol text-center mb-4">∞</div>
            <div className="domain-expansion-text">
              Unlimited Void
            </div>
            <div className="mt-4 text-sm tracking-[0.3em] text-purple-300/60 uppercase">
              閭墟空回り
            </div>
          </div>
        </div>
      )}
    </>
  );
}

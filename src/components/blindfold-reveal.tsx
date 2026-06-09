"use client";

import { useState } from "react";

/**
 * Blindfold reveal effect — when hovering over the profile photo,
 * a blindfold overlay slides away to reveal Gojo's glowing six eyes.
 * Pure CSS/React, no external images.
 */
export function BlindfoldReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className="relative cursor-default"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      style={{ width: 128, height: 128 }}
    >
      {/* Profile photo */}
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500/50">
        <img
          src="/profile.jpg"
          alt="Bagus Wiranto Wicaksono"
          className="w-full h-full object-cover transition-all duration-500"
          style={{
            filter: isRevealed ? "brightness(1.1) contrast(1.05)" : "brightness(0.9)",
          }}
        />
      </div>

      {/* Blindfold overlay */}
      <div
        className="absolute rounded-full overflow-hidden pointer-events-none"
        style={{
          top: "40%",
          left: "8%",
          right: "8%",
          height: "16%",
          background: isRevealed
            ? "linear-gradient(90deg, rgba(0, 212, 255, 0.9) 0%, rgba(0, 212, 255, 0.7) 100%)"
            : "linear-gradient(90deg, rgba(3, 0, 20, 0.95) 0%, rgba(3, 0, 20, 0.85) 100%)",
          borderRadius: "50%",
          transform: isRevealed ? "translateX(120%)" : "translateX(0)",
          transition: "transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          zIndex: 10,
          border: "1px solid rgba(0, 212, 255, 0.3)",
          boxShadow: isRevealed ? "0 0 20px rgba(0, 212, 255, 0.6)" : "none",
        }}
      >
        {/* Blindfold texture */}
        <div
          className="w-full h-full"
          style={{
            background: isRevealed
              ? "transparent"
              : "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(123, 47, 190, 0.1) 2px, rgba(123, 47, 190, 0.1) 4px)",
          }}
        />
      </div>

      {/* Glowing eyes (visible when blindfold is removed) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "43%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 22,
          opacity: isRevealed ? 1 : 0,
          transition: "opacity 0.3s ease 0.2s",
          zIndex: 5,
        }}
      >
        {/* Left eye */}
        <div
          className="rounded-full"
          style={{
            width: 10,
            height: 10,
            background: "radial-gradient(circle, #00D4FF 0%, rgba(0, 212, 255, 0.4) 60%, transparent 100%)",
            boxShadow: "0 0 12px rgba(0, 212, 255, 0.8), 0 0 24px rgba(0, 212, 255, 0.4)",
            animation: "six-eyes-blink 3s ease-in-out infinite",
          }}
        />
        {/* Right eye */}
        <div
          className="rounded-full"
          style={{
            width: 10,
            height: 10,
            background: "radial-gradient(circle, #00D4FF 0%, rgba(0, 212, 255, 0.4) 60%, transparent 100%)",
            boxShadow: "0 0 12px rgba(0, 212, 255, 0.8), 0 0 24px rgba(0, 212, 255, 0.4)",
            animation: "six-eyes-blink 3s ease-in-out 0.15s infinite",
          }}
        />
      </div>

      {/* Pulsing energy ring when revealed */}
      {isRevealed && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: -8,
            border: "1px solid rgba(0, 212, 255, 0.4)",
            animation: "blindfold-pulse 1s ease-out forwards",
          }}
        />
      )}
    </div>
  );
}

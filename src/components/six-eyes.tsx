"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Six Eyes glow effect — animated blue eyes that appear on scroll.
 * Two glowing eye orbs that track scroll position and pulse.
 * Positioned in the center of viewport, appears when user scrolls past hero.
 */
export function SixEyes() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setScrollProgress(progress);

      // Show after scrolling past hero
      setIsVisible(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isMobile) return null;

  // Dynamic glow intensity based on scroll
  const glowIntensity = Math.min(scrollProgress * 3, 1);
  const eyeSize = 8 + glowIntensity * 12;
  const outerGlow = 30 + glowIntensity * 40;

  return (
    <div
      ref={eyesRef}
      className="fixed pointer-events-none"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? glowIntensity * 0.4 : 0,
        transition: "opacity 0.8s ease",
        zIndex: 5,
      }}
    >
      <div className="flex gap-12">
        {/* Left eye */}
        <div
          className="relative"
          style={{
            width: eyeSize,
            height: eyeSize,
            animation: "six-eyes-blink 4s ease-in-out infinite",
          }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: -outerGlow / 2,
              background: `radial-gradient(circle, rgba(0, 212, 255, ${glowIntensity * 0.3}) 0%, transparent 70%)`,
              filter: `blur(${10 + glowIntensity * 15}px)`,
            }}
          />
          {/* Core eye */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, #00D4FF 0%, rgba(0, 212, 255, 0.6) 40%, transparent 70%)`,
              boxShadow: `0 0 ${eyeSize}px rgba(0, 212, 255, ${glowIntensity * 0.8}), 0 0 ${eyeSize * 2}px rgba(123, 47, 190, ${glowIntensity * 0.4})`,
            }}
          />
        </div>

        {/* Right eye */}
        <div
          className="relative"
          style={{
            width: eyeSize,
            height: eyeSize,
            animation: "six-eyes-blink 4s ease-in-out 0.1s infinite",
          }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: -outerGlow / 2,
              background: `radial-gradient(circle, rgba(0, 212, 255, ${glowIntensity * 0.3}) 0%, transparent 70%)`,
              filter: `blur(${10 + glowIntensity * 15}px)`,
            }}
          />
          {/* Core eye */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, #00D4FF 0%, rgba(0, 212, 255, 0.6) 40%, transparent 70%)`,
              boxShadow: `0 0 ${eyeSize}px rgba(0, 212, 255, ${glowIntensity * 0.8}), 0 0 ${eyeSize * 2}px rgba(123, 47, 190, ${glowIntensity * 0.4})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

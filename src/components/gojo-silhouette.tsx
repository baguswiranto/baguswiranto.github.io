"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Gojo silhouette SVG floating in the hero section.
 * An ethereal outline that pulses with cursed energy.
 * Only renders on desktop (>= 768px) to avoid clutter on mobile.
 */
export function GojoSilhouette() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Fade in after mount
    const timer = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none"
      style={{
        right: "-4%",
        top: "10%",
        width: "380px",
        height: "520px",
        opacity: isVisible ? 0.08 : 0,
        transition: "opacity 2s ease-in",
        filter: "blur(0.5px)",
      }}
    >
      <svg
        viewBox="0 0 300 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ animation: "gojo-float 8s ease-in-out infinite" }}
      >
        {/* Hair - spiky silhouette */}
        <path
          d="M150 20 C130 10, 100 5, 95 30 C90 50, 85 60, 80 55 C70 45, 55 50, 60 70 C65 85, 75 95, 90 100"
          stroke="url(#gojoGrad)"
          strokeWidth="1.5"
          fill="none"
          className="gojo-hair"
        />
        <path
          d="M150 20 C170 10, 200 5, 205 30 C210 50, 215 60, 220 55 C230 45, 245 50, 240 70 C235 85, 225 95, 210 100"
          stroke="url(#gojoGrad)"
          strokeWidth="1.5"
          fill="none"
          className="gojo-hair"
        />

        {/* Head outline */}
        <ellipse
          cx="150"
          cy="120"
          rx="60"
          ry="65"
          stroke="url(#gojoGrad)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Blindfold - covers eyes */}
        <rect
          x="95"
          y="105"
          width="110"
          height="22"
          rx="11"
          stroke="#00D4FF"
          strokeWidth="1"
          fill="rgba(0, 212, 255, 0.05)"
          className="gojo-blindfold"
        />

        {/* Neck */}
        <path
          d="M135 180 L135 210 Q135 220, 140 225"
          stroke="url(#gojoGrad)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M165 180 L165 210 Q165 220, 160 225"
          stroke="url(#gojoGrad)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Shoulders and collar */}
        <path
          d="M140 225 Q120 230, 80 250 Q50 265, 35 290"
          stroke="url(#gojoGrad)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M160 225 Q180 230, 220 250 Q250 265, 265 290"
          stroke="url(#gojoGrad)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Uniform collar V-shape */}
        <path
          d="M130 230 L150 270 L170 230"
          stroke="#00D4FF"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />

        {/* Body/uniform outline */}
        <path
          d="M35 290 Q30 350, 40 420 Q50 480, 100 500"
          stroke="url(#gojoGrad)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M265 290 Q270 350, 260 420 Q250 480, 200 500"
          stroke="url(#gojoGrad)"
          strokeWidth="1"
          fill="none"
        />

        {/* Left arm - hand raised in technique pose */}
        <path
          d="M80 250 Q50 270, 30 300 Q20 320, 25 340 Q30 355, 45 350 Q55 345, 60 335"
          stroke="url(#gojoGrad)"
          strokeWidth="1"
          fill="none"
        />

        {/* Fingers - two raised (infinity technique) */}
        <path
          d="M45 350 L35 375"
          stroke="#00D4FF"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M50 348 L42 378"
          stroke="#00D4FF"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Infinity symbol between fingers */}
        <text
          x="25"
          y="400"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="0.5"
          fontSize="24"
          className="gojo-infinity-hand"
        >
          ∞
        </text>

        {/* Six Eyes glow dots (behind blindfold) */}
        <circle cx="125" cy="116" r="2" fill="#00D4FF" className="gojo-eye-left" />
        <circle cx="175" cy="116" r="2" fill="#00D4FF" className="gojo-eye-right" />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gojoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FBE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

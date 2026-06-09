"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Gojo silhouette SVG — accurate character design.
 * Snow-white spiky hair (向上 like duri), black blindfold,
 * tall lean athletic posture, Jujutsu High uniform.
 */
export function GojoSilhouette() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        right: "-2%",
        top: "5%",
        width: "340px",
        height: "580px",
        opacity: isVisible ? 0.1 : 0,
        transition: "opacity 2.5s ease-in",
      }}
    >
      <svg
        viewBox="0 0 280 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ animation: "gojo-float 8s ease-in-out infinite" }}
      >
        {/* === RAMBUT PUTIH SPiky ke atas === */}
        {/* Hair spikes - white/snow colored */}
        <path
          d="M140 15 L125 8 L115 25 L105 12 L100 35 L90 22 L88 48"
          stroke="#E8E8E8"
          strokeWidth="2"
          fill="none"
          className="gojo-hair"
          strokeLinecap="round"
        />
        <path
          d="M140 15 L155 8 L165 25 L175 12 L180 35 L190 22 L192 48"
          stroke="#E8E8E8"
          strokeWidth="2"
          fill="none"
          className="gojo-hair"
          strokeLinecap="round"
        />
        {/* Center spikes */}
        <path
          d="M140 15 L138 5 L140 0 L142 5 L140 15"
          stroke="#F5F5F5"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M130 20 L128 8"
          stroke="#E0E0E0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M150 20 L152 8"
          stroke="#E0E0E0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Hair base volume */}
        <ellipse
          cx="140"
          cy="65"
          rx="55"
          ry="50"
          stroke="#D8D8D8"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />

        {/* === KEPALA === */}
        <ellipse
          cx="140"
          cy="100"
          rx="42"
          ry="48"
          stroke="url(#gojoOutline)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* === PENUTUP MATA HITAM (Black Blindfold) === */}
        <rect
          x="100"
          y="88"
          width="80"
          height="18"
          rx="9"
          fill="#1A1A1A"
          stroke="#333"
          strokeWidth="0.8"
          opacity="0.9"
          className="gojo-blindfold"
        />
        {/* Blindfold wrap detail */}
        <path
          d="M100 97 Q100 92, 105 89"
          stroke="#333"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M180 97 Q180 92, 175 89"
          stroke="#333"
          strokeWidth="0.5"
          fill="none"
        />

        {/* === MULUT (slight smirk - playful personality) === */}
        <path
          d="M132 128 Q140 132, 148 128"
          stroke="url(#gojoOutline)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />

        {/* === LEHER JANGKUNG === */}
        <path
          d="M128 145 L128 175 Q128 182, 132 186"
          stroke="url(#gojoOutline)"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M152 145 L152 175 Q152 182, 148 186"
          stroke="url(#gojoOutline)"
          strokeWidth="1.3"
          fill="none"
        />

        {/* === BAHU & SERAGAM HITAM === */}
        {/* Left shoulder */}
        <path
          d="M132 186 Q110 192, 75 210 Q50 225, 35 250"
          stroke="url(#gojoOutline)"
          strokeWidth="1.3"
          fill="none"
        />
        {/* Right shoulder */}
        <path
          d="M148 186 Q170 192, 205 210 Q230 225, 245 250"
          stroke="url(#gojoOutline)"
          strokeWidth="1.3"
          fill="none"
        />

        {/* Collar V-neck (Jujutsu High uniform) */}
        <path
          d="M125 188 L140 225 L155 188"
          stroke="#444"
          strokeWidth="0.8"
          fill="none"
        />
        {/* Inner collar line */}
        <path
          d="M130 190 L140 218 L150 190"
          stroke="#333"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />

        {/* === BADAN (Tall, lean athletic) === */}
        {/* Torso - left */}
        <path
          d="M35 250 Q30 320, 38 400 Q45 470, 90 520"
          stroke="url(#gojoOutline)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Torso - right */}
        <path
          d="M245 250 Q250 320, 242 400 Q235 470, 190 520"
          stroke="url(#gojoOutline)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Waist taper (lean body) */}
        <path
          d="M75 350 Q140 340, 205 350"
          stroke="url(#gojoOutline)"
          strokeWidth="0.6"
          fill="none"
          opacity="0.3"
        />

        {/* === LENGAN KIRI (relaxed, casual pose) === */}
        <path
          d="M75 210 Q55 230, 45 260 Q38 285, 42 310 Q45 330, 55 340"
          stroke="url(#gojoOutline)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Left hand */}
        <path
          d="M55 340 Q58 348, 62 352"
          stroke="url(#gojoOutline)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* === LENGAN KANAN (hand in pocket / relaxed) === */}
        <path
          d="M205 210 Q225 230, 235 260 Q242 285, 238 310 Q235 330, 225 340"
          stroke="url(#gojoOutline)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Right hand - two fingers up (Infinity technique) */}
        <path
          d="M225 340 L218 365"
          stroke="#00D4FF"
          strokeWidth="0.8"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M228 340 L222 368"
          stroke="#00D4FF"
          strokeWidth="0.8"
          fill="none"
          opacity="0.7"
        />

        {/* === INFINITY SYMBOL (floating near hand) === */}
        <text
          x="205"
          y="385"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="0.6"
          fontSize="18"
          className="gojo-infinity-hand"
          opacity="0.5"
        >
          ∞
        </text>

        {/* === KAKI (long legs - tall posture) === */}
        <path
          d="M90 520 Q88 535, 85 555"
          stroke="url(#gojoOutline)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M190 520 Q192 535, 195 555"
          stroke="url(#gojoOutline)"
          strokeWidth="1"
          fill="none"
        />

        {/* === SIX EYES GLOW (behind blindfold - subtle hint) === */}
        <circle cx="125" cy="96" r="2" fill="#00D4FF" className="gojo-eye-left" opacity="0.6" />
        <circle cx="155" cy="96" r="2" fill="#00D4FF" className="gojo-eye-right" opacity="0.6" />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gojoOutline" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FBE" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

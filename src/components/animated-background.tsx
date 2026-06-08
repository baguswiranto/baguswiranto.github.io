"use client";

import { useEffect, useRef, useState } from "react";

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

// Fewer stars on mobile
const DESKTOP_STARS = Array.from({ length: 80 }, (_, i) => {
  const h1 = ((i * 157 + 31) % 100) / 100;
  const h2 = ((i * 89 + 17) % 100) / 100;
  const h3 = ((i * 233 + 7) % 100) / 100;
  const h4 = ((i * 67 + 43) % 100) / 100;
  return {
    top: `${h1 * 100}%`,
    left: `${h2 * 100}%`,
    size: 0.5 + h3 * 2,
    opacity: 0.15 + h4 * 0.5,
    duration: 3 + h3 * 5,
    delay: h4 * 4,
    color:
      i % 5 === 0 ? "#22d3ee" : i % 7 === 0 ? "#818cf8" : "#fff",
  };
});

const MOBILE_STARS = Array.from({ length: 30 }, (_, i) => {
  const src = DESKTOP_STARS[i * 2] || DESKTOP_STARS[i];
  return src;
});

function ShootingStar() {
  const style = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 50}%`,
    animationDuration: `${0.6 + Math.random() * 0.8}s`,
    animationDelay: `${Math.random() * 0.3}s`,
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...style,
        width: "120px",
        height: "1px",
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(168,85,247,0.6), transparent)",
        transform: `rotate(${20 + Math.random() * 30}deg)`,
        animation: `shoot ${style.animationDuration} ease-out ${style.animationDelay} forwards`,
        borderRadius: "50%",
        boxShadow: "0 0 6px 1px rgba(168,85,247,0.4)",
        willChange: "transform, opacity",
      }}
    />
  );
}

function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }>
  >([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#a855f7", "#22d3ee", "#818cf8", "#ffffff"];

    const handleMouse = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          life: 1,
          maxLife: 30 + Math.random() * 20,
          size: Math.random() * 2.5 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.life -= 1 / p.maxLife;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.02;

        if (p.life <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;

        return true;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}

export function AnimatedBackground() {
  const [shootingStars, setShootingStars] = useState<number[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const isMobile = useIsMobile();

  // Shooting stars — desktop only
  useEffect(() => {
    if (isMobile) return;
    const spawn = () => {
      const id = Date.now() + Math.random();
      setShootingStars((prev) => [...prev.slice(-3), id]);
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s !== id));
      }, 2000);
      setTimeout(spawn, 2000 + Math.random() * 4000);
    };
    const initial = setTimeout(spawn, 3000);
    return () => clearTimeout(initial);
  }, [isMobile]);

  // Mouse parallax — desktop only
  useEffect(() => {
    if (isMobile) return;
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [isMobile]);

  const nebulaOffset1 = {
    x: (mousePos.x - 0.5) * 40,
    y: (mousePos.y - 0.5) * 40,
  };
  const nebulaOffset2 = {
    x: (mousePos.x - 0.5) * -30,
    y: (mousePos.y - 0.5) * -30,
  };

  const stars = isMobile ? MOBILE_STARS : DESKTOP_STARS;
  const blurClass = isMobile ? "blur-[60px]" : "blur-[120px]";

  return (
    <>
      {/* Cursor trail — desktop only */}
      {!isMobile && <CursorTrail />}

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Nebula glow 1 */}
        <div
          className={`absolute rounded-full ${blurClass} opacity-15 pointer-events-none`}
          style={{
            top: "10%",
            left: "20%",
            width: isMobile ? 300 : 500,
            height: isMobile ? 300 : 500,
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            transform: isMobile
              ? "none"
              : `translate(${nebulaOffset1.x}px, ${nebulaOffset1.y}px)`,
            transition: isMobile ? "none" : "transform 2s ease-out",
            willChange: isMobile ? "auto" : "transform",
          }}
        />
        {/* Nebula glow 2 */}
        <div
          className={`absolute rounded-full ${blurClass} opacity-10 pointer-events-none`}
          style={{
            top: "60%",
            right: "10%",
            width: isMobile ? 250 : 400,
            height: isMobile ? 250 : 400,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)",
            transform: isMobile
              ? "none"
              : `translate(${nebulaOffset2.x}px, ${nebulaOffset2.y}px)`,
            transition: isMobile ? "none" : "transform 2s ease-out",
            willChange: isMobile ? "auto" : "transform",
          }}
        />

        {/* Stars */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              backgroundColor: star.color,
              ["--star-opacity" as string]: star.opacity,
              ["--duration" as string]: `${star.duration}s`,
              ["--delay" as string]: `${star.delay}s`,
              willChange: "opacity",
            }}
          />
        ))}

        {/* Shooting stars — desktop only */}
        {shootingStars.map((id) => (
          <ShootingStar key={id} />
        ))}
      </div>
    </>
  );
}

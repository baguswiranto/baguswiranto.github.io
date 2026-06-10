"use client";

import { AnimatedBackground } from "@/components/animated-background";
import { CosmicGlow } from "@/components/cosmic-glow";
import { CustomCursor } from "@/components/custom-cursor";

import { TypingEffect } from "@/components/typing-effect";
import { ProjectCard } from "@/components/project-card";
import { CosmicEnergy } from "@/components/cosmic-energy";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  GitFork,
  Mail,
  Send,
  ExternalLink,
  Code2,
  Database,
  Server,
  Globe,
  Terminal,
  Zap,
  Layers,
  Briefcase,
  ChevronUp,
} from "lucide-react";

const SKILLS = [
  { name: "Self-taught", icon: Zap },
  { name: "Next.js", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Terminal },
  { name: "FastAPI", icon: Server },
  { name: "Docker", icon: Layers },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind CSS", icon: Globe },
  { name: "Vercel", icon: Zap },
];

const PROJECTS = [
  {
    title: "8Agents",
    desc: "AI Agent SaaS platform. 15+ autonomous agents with real-time task delegation, multi-provider AI integration (OpenAI, Anthropic, local models), and production monitoring via Telegram.",
    tech: ["Next.js", "FastAPI", "Docker", "PostgreSQL", "Redis", "Telegram Bot API"],
    url: "https://8agents.xyz",
    logo: "/logos/8agents.svg",
    accent: "#f97316",
    accentRgb: "249,115,22",
    status: "LIVE",
  },
  {
    title: "RakuSaku",
    desc: "Game top-up & digital services marketplace. Payment gateway integration (QRIS, e-wallets, bank transfer), automated supplier fulfillment via Digiflazz API, and admin dashboard.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Digiflazz API", "Duitku"],
    url: "https://rakusaku.com",
    logo: "/logos/rakusaku.svg",
    accent: "#ec4899",
    accentRgb: "236,72,153",
    status: "LIVE",
  },
];

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
        <h2 className="text-3xl font-bold">
          {children}
        </h2>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
      </div>
    </Reveal>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #7B2FBE, #00D4FF, #7B2FBE)",
      }}
    />
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full border border-purple-500/40 backdrop-blur-sm flex items-center justify-center hover:border-blue-400/60 transition-all"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ pointerEvents: visible ? "auto" : "none", background: "rgba(123, 47, 190, 0.15)" }}
    >
      <ChevronUp className="w-5 h-5 text-blue-400" />
    </motion.button>
  );
}

/**
 * Animated infinity symbol as a background decoration element
 */
function InfinityDecor({ className, size = "8rem" }: { className?: string; size?: string }) {
  return (
    <span
      className={`infinity-symbol inline-block select-none pointer-events-none ${className || ""}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      ∞
    </span>
  );
}

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <CustomCursor />

      <BackToTop />

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Parallax background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y: heroBgY,
            scale: heroScale,
          }}
        >
          <CosmicGlow />
          <CosmicEnergy />
        </motion.div>

        {/* Cosmic energy effects matching Gojo image */}
        <CosmicEnergy />

        {/* Floating infinity symbols in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>

          <div className="absolute top-[15%] left-[10%] opacity-[0.07]">
            <InfinityDecor size="12rem" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] opacity-[0.05]">
            <InfinityDecor size="10rem" />
          </div>
          <div className="absolute top-[60%] left-[70%] opacity-[0.04]">
            <InfinityDecor size="6rem" />
          </div>
        </div>

        <motion.div
          className="text-center max-w-3xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="text-sm tracking-[0.3em] uppercase mb-6 text-blue-400/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <TypingEffect />
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6 hero-name leading-tight"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Bagus Wiranto
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Wicaksono
            </motion.span>
          </motion.h1>
          <Reveal>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-[1.8]">
              Full-stack developer who rapidly masters new technologies to ship AI-powered platforms.
              <br />
              Founder of{" "}
              <a href="https://8agents.xyz" target="_blank" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">
                8Agents
              </a>{" "}
              &{" "}
              <a href="https://rakusaku.com" target="_blank" className="text-pink-400 hover:text-pink-300 underline underline-offset-4">
                RakuSaku
              </a>
              .
            </p>
          </Reveal>
          <Reveal>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#projects" className="btn-primary px-6 py-3 rounded-xl text-white font-medium">
                <span>View Projects</span>
              </a>
              <a href="#contact" className="btn-outline px-6 py-3 rounded-xl text-white font-medium">
                Contact Me
              </a>
            </div>
          </Reveal>
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* About */}
      <section id="about" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            About <span className="gradient-text">Me</span>
          </SectionHeader>
          <Reveal>
            <div className="infinity-border">
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/50">
                      <img
                        src="/profile.jpg"
                        alt="Bagus Wiranto Wicaksono"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Pulsing glow ring */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "2px solid transparent",
                        background: "linear-gradient(135deg, rgba(123, 47, 190, 0.3), rgba(0, 212, 255, 0.3)) border-box",
                        WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        animation: "profile-glow 3s ease-in-out infinite",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-slate-300 leading-[1.8] mb-4">
                      I&apos;m a self-taught full-stack developer and entrepreneur based in Japan, driven by curiosity and a hunger to learn. I thrive on rapidly acquiring new skills and technologies — then turning them into production-ready products that solve real problems.
                    </p>
                    <p className="text-slate-300 leading-[1.8] mb-4">
                      From zero to production in months: I mastered Next.js, FastAPI, Docker, and Telegram Bot API to build <strong className="text-orange-400">8Agents</strong> (AI Agent marketplace) and <strong className="text-pink-400">RakuSaku</strong> (digital services marketplace) — two SaaS platforms now live and serving users.
                    </p>
                    <p className="text-slate-400 text-sm flex items-center gap-2">
                      Based in Japan 🇯🇵 · Open to collaboration
                      <InfinityDecor size="1.2rem" className="opacity-30" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Skills */}
      <section id="skills" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            Tech <span className="gradient-text">Stack</span>
          </SectionHeader>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass-card rounded-xl px-5 py-3 flex items-center gap-2 cursor-default spatial-hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  style={{
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  <skill.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Projects */}
      <section id="projects" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            Featured <span className="gradient-text">Projects</span>
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard
                  title={project.title}
                  desc={project.desc}
                  tech={project.tech}
                  url={project.url}
                  logo={project.logo}
                  accent={project.accent}
                  accentRgb={project.accentRgb}
                  status={project.status}
                  hovered={hoveredProject === project.title}
                  onHover={(h) => setHoveredProject(h ? project.title : null)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Experience */}
      <section id="experience" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            <span className="gradient-text">Experience</span>
          </SectionHeader>
          <Reveal>
            <div className="infinity-border">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(123, 47, 190, 0.15)" }}>
                      <ExternalLink className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Founder & Developer</h3>
                      <p className="text-orange-400 text-sm">8Agents · 2026 - Present</p>
                      <p className="text-slate-400 text-sm mt-1">AI Agent SaaS platform for real work via Telegram</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0, 212, 255, 0.1)" }}>
                      <ExternalLink className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Founder & Developer</h3>
                      <p className="text-pink-400 text-sm">RakuSaku · 2026 - Present</p>
                      <p className="text-slate-400 text-sm mt-1">Game top-up & digital services marketplace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Contact */}
      <section id="contact" className="py-28 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader>
            Get in <span className="gradient-text">Touch</span>
          </SectionHeader>
          <Reveal>
            <p className="text-slate-300 mb-8 leading-[1.8]">
              Open to remote opportunities. Let&apos;s build something great together.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:baguswirantowicaksono@gmail.com"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://github.com/baguswiranto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <GitFork className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://t.me/kaikazukii"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a
                href="https://x.com/Kiminoheroo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <ExternalLink className="w-4 h-4" />
                X
              </a>
              <a
                href="https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <Briefcase className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm" style={{ borderTop: "1px solid rgba(123, 47, 190, 0.1)" }}>
        <div className="flex items-center justify-center gap-2">
          <span className="text-purple-500/40 text-lg">∞</span>
          <p>© 2026 Bagus Wiranto Wicaksono. All rights reserved.</p>
          <span className="text-blue-400/40 text-lg">∞</span>
        </div>
      </footer>
    </>
  );
}

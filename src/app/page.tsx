"use client";

import { AnimatedBackground } from "@/components/animated-background";
import { SolarSystem } from "@/components/solar-system";
import { TypingEffect } from "@/components/typing-effect";
import { FloatingParticles } from "@/components/floating-particles";
import { CosmicGlow } from "@/components/cosmic-glow";
import { ProjectCard } from "@/components/project-card";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
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
  FileText,
  ChevronUp,
} from "lucide-react";

const SKILLS = [
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
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500/50" />
        <h2 className="text-3xl font-bold">
          {children}
        </h2>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500/50" />
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
        background: "linear-gradient(90deg, #a855f7, #22d3ee, #818cf8)",
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
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 backdrop-blur-sm flex items-center justify-center hover:bg-orange-500/30 hover:border-orange-400/60 transition-all"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <ChevronUp className="w-5 h-5 text-orange-400" />
    </motion.button>
  );
}

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <BackToTop />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <CosmicGlow />
        <SolarSystem />
        <div className="text-center max-w-3xl relative z-10">
          <Reveal>
            <p className="text-sm tracking-widest uppercase mb-4 text-slate-400">
              <TypingEffect />
            </p>
          </Reveal>
          <Reveal>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              style={{
                textShadow: "0 0 40px rgba(34,211,238,0.3), 0 0 80px rgba(56,189,248,0.15)",
              }}
            >
              Bagus Wiranto Wicaksono
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-[1.8]">
              Full-stack developer building AI-powered platforms.
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
                View Projects
              </a>
              <a href="#contact" className="btn-outline px-6 py-3 rounded-xl text-white font-medium">
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* About */}
      <section id="about" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            About <span className="gradient-text">Me</span>
          </SectionHeader>
          <Reveal>
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-orange-500/50">
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
                    background: "linear-gradient(135deg, rgba(249,115,22,0.3), rgba(236,72,153,0.3)) border-box",
                      WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      animation: "profile-glow 3s ease-in-out infinite",
                    }}
                  />
                </div>
                <div>
                  <p className="text-slate-300 leading-[1.8] mb-4">
                    I&apos;m a full-stack developer and entrepreneur based in Japan, passionate about building products that solve real problems. My focus is on AI-powered platforms and automation — turning complex workflows into simple, user-friendly experiences.
                  </p>
                  <p className="text-slate-300 leading-[1.8] mb-4">
                    Currently running two SaaS platforms: <strong className="text-orange-400">8Agents</strong> (AI Agent marketplace) and <strong className="text-pink-400">RakuSaku</strong> (digital services marketplace). Both built with Next.js, FastAPI, and Docker.
                  </p>
                  <p className="text-slate-400 text-sm">
                    Based in Japan 🇯🇵 · Open to collaboration
                  </p>
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
                  className="glass-card rounded-xl px-5 py-3 flex items-center gap-2 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <skill.icon className="w-4 h-4 text-orange-400" />
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
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Founder & Developer</h3>
                    <p className="text-orange-400 text-sm">8Agents · 2026 - Present</p>
                    <p className="text-slate-400 text-sm mt-1">AI Agent SaaS platform for real work via Telegram</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center shrink-0">
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
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://github.com/baguswiranto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2"
              >
                <GitFork className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://t.me/kaikazukii"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a
                href="https://x.com/Kiminoheroo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                X
              </a>
              <a
                href="https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                LinkedIn
              </a>

            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5">
        <p>© 2026 Bagus Wiranto Wicaksono. All rights reserved.</p>
      </footer>
    </>
  );
}

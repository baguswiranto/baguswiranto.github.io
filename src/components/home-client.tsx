"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
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
  MapPin,
  FileText,
  CheckCircle2,
  Rocket,
  Menu,
  X,
} from "lucide-react";

/* ─── Data ─── */

const SKILLS = [
  { name: "AI Agents", icon: Rocket, num: "01" },
  { name: "Next.js", icon: Code2, num: "02" },
  { name: "TypeScript", icon: Code2, num: "03" },
  { name: "Python", icon: Terminal, num: "04" },
  { name: "FastAPI", icon: Server, num: "05" },
  { name: "Docker", icon: Layers, num: "06" },
  { name: "PostgreSQL", icon: Database, num: "07" },
  { name: "Tailwind CSS", icon: Globe, num: "08" },
  { name: "Vercel", icon: Zap, num: "09" },
  { name: "Telegram Bot API", icon: Send, num: "10" },
];

const PROJECTS = [
  {
    title: "8Agents",
    desc: "AI-agent SaaS platform for businesses. Custom autonomous agent workflows with multi-provider AI, real-time task delegation, and Telegram-based monitoring.",
    tech: ["Next.js", "FastAPI", "Docker", "PostgreSQL", "Redis", "Telegram Bot API"],
    url: "https://8agents.xyz",
    logo: "/logos/8agents-64.webp",
    accent: "#f97316",
    status: "LIVE",
    impact: ["Autonomous agents", "Multi-provider AI", "Production SaaS"],
  },
  {
    title: "RakuSaku",
    desc: "Digital marketplace with automated payments, supplier fulfillment, and admin workflows.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Digiflazz API", "Duitku"],
    url: "https://rakusaku.com",
    logo: "/logos/rakusaku-64.webp",
    accent: "#ec4899",
    status: "LIVE",
    impact: ["Auto payments", "Supplier API", "Admin tools"],
  },
];

const HIRE_SIGNALS = [
  "Full product ownership: UI → backend → database → deploy",
  "AI automation with multi-provider LLMs, Telegram bots, production monitoring",
  "Turn vague ideas into working MVPs — minimal code, maximum impact",
];

/* ─── Hooks ─── */

function useScrollReveal() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll("[data-reveal]");
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return revealed;
}

function useNavVisible() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return visible;
}

/* ─── Components ─── */

function Navigation() {
  const visible = useNavVisible();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold font-serif tracking-tight text-foreground">
            KAI<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="btn-primary px-4 py-2 rounded-lg text-sm font-medium text-foreground">
              <span>Contact</span>
            </a>
          </div>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary/10 px-6 py-4 space-y-3">
            <a href="#about" className="block nav-link" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#skills" className="block nav-link" onClick={() => setMobileOpen(false)}>Skills</a>
            <a href="#projects" className="block nav-link" onClick={() => setMobileOpen(false)}>Projects</a>
            <a href="#experience" className="block nav-link" onClick={() => setMobileOpen(false)}>Experience</a>
            <a href="#contact" className="block nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
          </div>
        )}
      </nav>
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-all"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5 text-primary" />
    </button>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function SectionHeader({ children, eyebrow }: { children: ReactNode; eyebrow?: string }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <span className="text-[11px] tracking-[0.3em] uppercase text-primary font-semibold mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground">
        {children}
      </h2>
    </div>
  );
}

/* ─── Main Component ─── */

import { BackgroundPaths } from "@/components/ui/background-paths";
import { LetterReveal } from "@/components/ui/letter-reveal";
import { motion } from "framer-motion";

export default function HomeClient() {
  const revealed = useScrollReveal();
  const isRevealed = (id: string) => revealed.has(id);

  const sectionClass = (id: string, base = "") =>
    `section-hidden ${isRevealed(id) ? "section-revealed" : ""} ${base}`;

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <BackToTop />

      {/* ─── Hero ─── */}
      <section className="min-h-[92vh] py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(126,200,227,0.4) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
        </div>
        <BackgroundPaths />
        
        {/* Split layout container */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 pt-16">
          {/* Left side - Text */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-sm text-primary font-medium">Available for collaboration</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] mb-6 hero-name tracking-tight"
            >
              I AM
              <br />
              <span className="text-primary">KAI</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-foreground/80 leading-[1.6] mb-4 font-medium"
            >
              Full-stack developer building AI-powered web apps and SaaS products. I ship from idea to production — frontend, backend, and everything in between.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base text-muted leading-[1.8] mb-8"
            >
              Founder of{" "}
              <a href="https://8agents.xyz" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 font-medium">8Agents</a>
              {" "}and{" "}
              <a href="https://rakusaku.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 font-medium">RakuSaku</a>.
              Based in Japan, open to remote roles.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <a href="#projects" className="btn-primary px-6 py-3 rounded-xl text-foreground font-medium">
                <span>View Projects</span>
              </a>
              <a href="#contact" className="btn-outline px-6 py-3 rounded-xl text-foreground font-medium">
                Contact Me
              </a>
            </motion.div>
          </div>
          
          {/* Right side - Photo + floating text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            {/* Glow behind photo */}
            <div className="absolute -inset-8 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, rgba(126,200,227,0.6) 0%, transparent 70%)", filter: "blur(40px)" }}
            />
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Kai"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-primary/10">
              <span className="text-sm font-bold text-primary">FULL-STACK DEV</span>
            </div>
          </motion.div>
        </div>
        
        {/* Right side vertical text */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <span className="text-4xl font-bold uppercase tracking-widest text-foreground/10">
            DEVELOPER & ENTREPRENEUR
          </span>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── About ─── */}
      <section id="about" data-reveal className={sectionClass("about", "py-28 px-4")}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="02 — Biography">
            About <span className="gradient-text">Me</span>
          </SectionHeader>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30">
                  <img
                    src="/profile.jpg"
                    alt="Kai"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-full">
                  OPEN
                </div>
              </div>
              <div>
                <p className="text-foreground/80 leading-[1.8] mb-4">
                  Full-stack developer based in Japan. I build products that combine polished UX with reliable backend systems and AI automation — from prototype to production.
                </p>
                <p className="text-foreground/80 leading-[1.8] mb-5">
                  Founder of <strong className="text-orange-500">8Agents</strong> (AI-agent SaaS platform) and <strong className="text-pink-500">RakuSaku</strong> (digital marketplace with payments & supplier integrations). I like small teams, clear outcomes, and production-minded engineering.
                </p>
                <div className="grid gap-3 mb-5">
                  {HIRE_SIGNALS.map((signal) => (
                    <div key={signal} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Based in Japan (JST) · Open to remote USD opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── Skills ─── */}
      <section id="skills" data-reveal className={sectionClass("skills", "py-28 px-4")} style={{ background: "linear-gradient(180deg, #0F1729 0%, #162033 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle, #7EC8E3 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-[11px] tracking-[0.3em] uppercase text-sky-400 font-semibold mb-2 block">
              03 — Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
              Tech Stack
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="skill-card rounded-2xl p-5 text-center backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-400/30 transition-all"
              >
                <span className="text-xs text-sky-300/50 font-bold mb-2 block">{skill.num}</span>
                <skill.icon className="w-5 h-5 text-sky-400 mx-auto mb-2" />
                <span className="text-sm font-medium text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── Projects ─── */}
      <section id="projects" data-reveal className={sectionClass("projects", "py-28 px-4")}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="04 — Portfolio">
            Featured <span className="gradient-text">Projects</span>
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card glass-card rounded-2xl p-6 block group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: project.accent + "15" }}>
                    {project.logo && <img src={project.logo} alt="" className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg" style={{ color: project.accent }}>{project.title}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: project.accent + "15", color: project.accent }}>{project.status}</span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-lg bg-foreground/5 text-muted font-medium">{t}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {project.impact.map((item) => (
                    <span key={item} className="text-[10px] text-center rounded-lg px-2 py-2 font-medium" style={{ background: project.accent + "10", color: project.accent }}>
                      {item}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── Experience ─── */}
      <section id="experience" data-reveal className={sectionClass("experience", "py-28 px-4")} style={{ background: "linear-gradient(180deg, #162033 0%, #0F1729 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle, #7EC8E3 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-[11px] tracking-[0.3em] uppercase text-sky-400 font-semibold mb-2 block">
              05 — Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
              Experience
            </h2>
          </div>
          <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-white/5 border border-white/10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(249,115,22,0.1)" }}>
                  <ExternalLink className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Founder & Developer</h3>
                  <p className="text-orange-500 text-sm">8Agents · 2026 - Present</p>
                  <p className="text-muted text-sm mt-1">AI Agent SaaS platform for real work via Telegram</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(236,72,153,0.1)" }}>
                  <ExternalLink className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Founder & Developer</h3>
                  <p className="text-pink-500 text-sm">RakuSaku · 2026 - Present</p>
                  <p className="text-muted text-sm mt-1">Digital marketplace with automated fulfillment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── Contact ─── */}
      <section id="contact" data-reveal className={sectionClass("contact", "py-28 px-4")}>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader eyebrow="06 — Networking">
            Ready to <span className="gradient-text">collaborate?</span>
          </SectionHeader>
          <p className="text-foreground/70 mb-8 leading-[1.8]">
            Open to remote full-stack, product engineer, and AI automation roles. Best fit: teams shipping SaaS, internal tools, automation, or AI-enabled products.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-3 rounded-xl text-foreground font-medium flex items-center gap-2">
              <FileText className="w-4 h-4" /> Resume
            </a>
            <a href="mailto:baguswirantowicaksono@gmail.com" className="btn-outline px-5 py-3 rounded-xl text-foreground font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </a>
              <a href="https://github.com/kaidev-pro" target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-3 rounded-xl text-foreground font-medium flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> GitHub
            </a>
            <a href="https://t.me/kaikazukii" target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-3 rounded-xl text-foreground font-medium flex items-center gap-2">
              <Send className="w-4 h-4" /> Telegram
            </a>
            <a href="https://x.com/Kiminoheroo" target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-3 rounded-xl text-foreground font-medium flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> X
            </a>
            <a href="https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301" target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-3 rounded-xl text-foreground font-medium flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 text-center text-muted text-sm" style={{ borderTop: "1px solid rgba(126, 200, 227, 0.15)" }}>
        <p>&copy; 2026 Kai. All rights reserved.</p>
      </footer>
    </>
  );
}

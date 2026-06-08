"use client";

import { AnimatedBackground } from "@/components/animated-background";
import { motion } from "framer-motion";
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
  Layers,
  Zap,
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
    desc: "AI Agent SaaS platform. Rent specialist AI agents for real work via Telegram — language teachers, content creators, business consultants.",
    tech: ["Next.js", "FastAPI", "Docker", "PostgreSQL", "Telegram Bot API"],
    url: "https://8agents.xyz",
    color: "purple",
  },
  {
    title: "RakuSaku",
    desc: "Game top-up platform with automated supplier integration. Supports Roblox, Mobile Legends, and 100+ digital products.",
    tech: ["FastAPI", "PostgreSQL", "Digiflazz API", "Midtrans"],
    url: "https://rakusaku.com",
    color: "cyan",
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

export default function Home() {
  return (
    <>
      <AnimatedBackground />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <Reveal>
            <p className="text-sm tracking-widest uppercase mb-4 text-purple-400">
              Developer &amp; Entrepreneur
            </p>
          </Reveal>
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Bagus Wiranto Wicaksono
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Full-stack developer building AI-powered platforms.
              <br />
              Founder of{" "}
              <a href="https://8agents.xyz" target="_blank" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">
                8Agents
              </a>{" "}
              &amp;{" "}
              <a href="https://rakusaku.com" target="_blank" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
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
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 text-center">
              About <span className="gradient-text">Me</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/50 shrink-0">
                  <img
                    src="/profile.jpg"
                    alt="Bagus Wiranto Wicaksono"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    I&apos;m a full-stack developer and entrepreneur based in Japan, passionate about building products that solve real problems. My focus is on AI-powered platforms and automation — turning complex workflows into simple, user-friendly experiences.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Currently running two SaaS platforms: <strong className="text-purple-400">8Agents</strong> (AI Agent marketplace) and <strong className="text-cyan-400">RakuSaku</strong> (digital services marketplace). Both built with Next.js, FastAPI, and Docker.
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
      <section id="skills" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </Reveal>
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
                  <skill.icon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Projects */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <Reveal key={project.title}>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-6 block group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2 py-1 rounded-md ${
                          project.color === "purple"
                            ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Experience */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="gradient-text">Experience</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Founder & Developer</h3>
                    <p className="text-purple-400 text-sm">8Agents · 2024 - Present</p>
                    <p className="text-slate-400 text-sm mt-1">AI Agent SaaS platform for real work via Telegram</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">Founder & Developer</h3>
                    <p className="text-cyan-400 text-sm">RakuSaku · 2023 - Present</p>
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
      <section id="contact" className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-slate-300 mb-8">
              Interested in collaborating or have a project in mind? Let&apos;s talk.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:baguswiranto38@gmail.com"
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
                href="https://t.me/kaikazuki"
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
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://instagram.com/bagus.wiranto.wicaksono"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Instagram
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

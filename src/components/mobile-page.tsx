"use client";

import { useEffect, useState } from "react";

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

export default function MobilePage() {
  const revealed = useScrollReveal();
  const isRevealed = (id: string) => revealed.has(id);

  const sectionClass = (id: string, base = "") =>
    `section-hidden ${isRevealed(id) ? "section-revealed" : ""} ${base}`;

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="min-h-[90vh] py-20 flex items-center px-5 relative overflow-hidden">
        {/* Background paths animation */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full text-primary" viewBox="0 0 696 316" fill="none">
            {Array.from({ length: 12 }, (_, i) => (
              <path
                key={i}
                d={`M-${380 - i * 30} -${189 + i * 20}C-${380 - i * 30} -${189 + i * 20} -${312 - i * 30} ${216 - i * 20} ${152 - i * 30} ${343 - i * 20}`}
                stroke="currentColor"
                strokeWidth={0.3 + i * 0.05}
                strokeOpacity={0.15}
              />
            ))}
          </svg>
        </div>

        <div className="w-full max-w-xl relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-foreground/80">
              Available for collaboration
            </span>
          </div>

          {/* Name */}
          <h1 className="text-[4.5rem] leading-[0.9] font-bold mb-4 font-serif tracking-tight hero-name">
            I AM
            <br />
            KAI
          </h1>

          {/* Description */}
          <p className="text-base text-foreground/70 mb-3 leading-relaxed max-w-md">
            Full-stack developer building AI-powered web apps and SaaS products. I ship from idea to production — frontend, backend, and everything in between.
          </p>
          <p className="text-sm text-muted mb-8">
            Founder of <span className="text-orange-500 font-medium">8Agents</span> & <span className="text-pink-500 font-medium">RakuSaku</span>. Based in Japan.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 mb-10">
            <a href="#projects" className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold">
              View Projects
            </a>
            <a href="#contact" className="btn-outline px-6 py-3 rounded-xl text-sm font-medium">
              Contact Me
            </a>
          </div>

          {/* Photo + Stats */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30">
                <img src="/profile.jpg" alt="Kai" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-foreground text-[9px] font-bold px-2 py-0.5 rounded-full">
                FULL-STACK DEV
              </div>
            </div>
            <div className="flex gap-4">
              {[
                ["2", "Live products"],
                ["15+", "AI agents"],
                ["JST", "Timezone"],
                ["Remote", "Available"],
              ].map(([value, label]) => (
                <div key={label} className="text-center">
                  <p className="text-lg font-bold gradient-text">{value}</p>
                  <p className="text-[9px] uppercase tracking-[0.12em] text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── About ─── */}
      <section id="about" data-reveal className={sectionClass("about", "py-16 px-5")}>
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold">02 — Biography</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mt-1">
              ABOUT <span className="gradient-text">ME</span>
            </h2>
          </div>
          <div className="rounded-2xl p-6 glass-card">
            <p className="text-foreground/80 leading-[1.8] mb-4 text-sm">
              Full-stack developer based in Japan. I build products that combine polished UX with reliable backend systems and AI automation — from prototype to production.
            </p>
            <p className="text-foreground/80 leading-[1.8] mb-4 text-sm">
              Founder of <strong className="text-orange-500">8Agents</strong> (AI-agent SaaS platform) and <strong className="text-pink-500">RakuSaku</strong> (digital marketplace with payments & supplier integrations).
            </p>
            <p className="text-muted text-xs">
              Based in Japan (JST) · Open to remote USD opportunities
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── Skills ─── */}
      <section id="skills" data-reveal className={sectionClass("skills", "py-16 px-5")} style={{ background: "rgba(126, 200, 227, 0.04)" }}>
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold">03 — Expertise</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mt-1">
              TECH <span className="gradient-text">STACK</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["AI Agents", "Next.js", "TypeScript", "Python", "FastAPI", "Docker", "PostgreSQL", "Tailwind CSS", "Vercel", "Telegram Bot API"].map((skill, i) => (
              <div key={skill} className="glass-card rounded-xl px-3 py-2">
                <span className="text-[10px] text-muted font-bold mr-1.5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xs font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── Projects ─── */}
      <section id="projects" data-reveal className={sectionClass("projects", "py-16 px-5")}>
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold">04 — Portfolio</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mt-1">
              FEATURED <span className="gradient-text">PROJECTS</span>
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              { title: "8Agents", desc: "AI-agent SaaS platform for businesses. Custom autonomous agent workflows with multi-provider AI, real-time task delegation, and Telegram-based monitoring.", url: "https://8agents.xyz", accent: "#f97316", status: "LIVE", logo: "/logos/8agents-64.webp", impact: ["Autonomous agents", "Multi-provider AI", "Production SaaS"] },
              { title: "RakuSaku", desc: "Digital marketplace with automated payments, supplier fulfillment, and admin workflows.", url: "https://rakusaku.com", accent: "#ec4899", status: "LIVE", logo: "/logos/rakusaku-64.webp", impact: ["Auto payments", "Supplier API", "Admin tools"] },
            ].map((project) => (
              <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" className="project-card glass-card rounded-2xl p-5 block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: project.accent + "15" }}>
                    {project.logo && <img src={project.logo} alt="" className="w-5 h-5" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base" style={{ color: project.accent }}>{project.title}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: project.accent + "20", color: project.accent }}>{project.status}</span>
                  </div>
                </div>
                <p className="text-foreground/70 text-xs leading-relaxed mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.impact.map((item) => (
                    <span key={item} className="text-[9px] text-center rounded-lg px-2 py-1.5 font-medium" style={{ background: project.accent + "14", color: project.accent }}>
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
      <section id="experience" data-reveal className={sectionClass("experience", "py-16 px-5")} style={{ background: "rgba(126, 200, 227, 0.04)" }}>
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold">05 — Experience</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mt-1">
              <span className="gradient-text">EXPERIENCE</span>
            </h2>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(249,115,22,0.1)" }}>
                  <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Founder & Developer</h3>
                  <p className="text-orange-500 text-xs">8Agents · 2026 - Present</p>
                  <p className="text-muted text-xs mt-1">AI Agent SaaS platform for real work via Telegram</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(236,72,153,0.1)" }}>
                  <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Founder & Developer</h3>
                  <p className="text-pink-500 text-xs">RakuSaku · 2026 - Present</p>
                  <p className="text-muted text-xs mt-1">Digital marketplace with automated fulfillment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ─── Contact ─── */}
      <section id="contact" data-reveal className={sectionClass("contact", "py-16 px-5")}>
        <div className="max-w-xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold">06 — Networking</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mt-1">
              READY TO <span className="gradient-text">COLLABORATE?</span>
            </h2>
          </div>
          <p className="text-foreground/70 mb-6 leading-[1.8] text-sm">
            Open to remote full-stack, product engineer, and AI automation roles. Best fit: SaaS, internal tools, automation, or AI-enabled products.
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {[
              { label: "Resume", href: "/resume.pdf" },
              { label: "Email", href: "mailto:baguswirantowicaksono@gmail.com" },
              { label: "GitHub", href: "https://github.com/kaidev-pro" },
              { label: "Telegram", href: "https://t.me/kaikazukii" },
              { label: "X", href: "https://x.com/Kiminoheroo" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2.5 rounded-xl text-xs font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-muted text-xs" style={{ borderTop: "1px solid rgba(126, 200, 227, 0.15)" }}>
        <p>&copy; 2026 Kai. All rights reserved.</p>
      </footer>
    </>
  );
}

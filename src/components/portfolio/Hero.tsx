import { Github, Linkedin, Mail, MessageCircle, Download, ArrowRight, Code2, Award, Rocket, CheckCircle2 } from "lucide-react";

const stats = [
  { v: "3+", l: "Projects Completed", icon: Rocket },
  { v: "10+", l: "Technologies", icon: Code2 },
  { v: "3", l: "Cisco Certifications", icon: Award },
  { v: "✓", l: "Open to Work", icon: CheckCircle2 },
];

const floatBadges = [
  { label: "React.js", style: "top-4 -left-6", delay: "0s" },
  { label: "Node.js", style: "top-1/3 -right-6", delay: "1.2s" },
  { label: "MongoDB", style: "bottom-16 -left-4", delay: "2.4s" },
  { label: "React Native", style: "-bottom-4 right-8", delay: "3.6s" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 px-5 sm:px-8 overflow-hidden flex items-center">
      {/* Animated background orbs */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="orb orb-1 w-[480px] h-[480px] -top-32 -left-32" />
      <div className="orb orb-2 w-[420px] h-[420px] top-1/3 -right-32" />
      <div className="orb orb-3 w-[360px] h-[360px] bottom-0 left-1/3" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span>👋</span>
            <span className="text-foreground/90">Open to Internship & Junior Roles</span>
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
            <span className="block text-foreground">Syed Muhammad</span>
            <span className="block gradient-text">Anas</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-semibold flex items-center min-h-[1.75rem]">
            <span className="caret" />
            <span className="typed gradient-text font-mono" />
          </p>

          <p className="mt-5 text-muted-foreground leading-[1.8] max-w-xl">
            Full Stack Web Application Developer. I build clean, scalable web and mobile
            applications. Currently advancing into Agentic AI Engineering. Actively seeking
            internship or junior developer opportunities to grow in a professional environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-lift inline-flex items-center gap-2 rounded-lg gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)]"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a
              href="/Anas_CV.pdf"
              download
              className="btn-lift gradient-border inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-foreground"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
              { Icon: Mail, href: "mailto:anas@email.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass glow-hover h-10 w-10 grid place-items-center rounded-lg text-muted-foreground hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Visual: floating code card */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto max-w-md glass-strong rounded-2xl p-5 shadow-[0_30px_80px_-20px_rgba(99,102,241,0.4)]">
            <div className="flex items-center gap-1.5 pb-3 border-b border-primary/20">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">Developer.tsx</span>
            </div>
            <pre className="mt-4 text-[12.5px] leading-relaxed font-mono whitespace-pre-wrap">
<span className="text-[#8b5cf6]">const</span>{" "}<span className="text-[#06b6d4]">developer</span>{" = {"}{"\n"}
{"  "}<span className="text-[#94a3b8]">name</span>{": "}<span className="text-[#10b981]">"Syed M. Anas"</span>{","}{"\n"}
{"  "}<span className="text-[#94a3b8]">role</span>{": "}<span className="text-[#10b981]">"Full Stack Dev"</span>{","}{"\n"}
{"  "}<span className="text-[#94a3b8]">stack</span>{": ["}<span className="text-[#10b981]">"React"</span>{", "}<span className="text-[#10b981]">"Node"</span>{", "}<span className="text-[#10b981]">"Mongo"</span>{"],"}{"\n"}
{"  "}<span className="text-[#94a3b8]">learning</span>{": "}<span className="text-[#10b981]">"Agentic AI"</span>{","}{"\n"}
{"  "}<span className="text-[#94a3b8]">openToWork</span>{": "}<span className="text-[#f59e0b]">true</span>{","}{"\n"}
{"};"}
            </pre>
          </div>
          {floatBadges.map((b) => (
            <span
              key={b.label}
              style={{ animationDelay: b.delay }}
              className={`absolute ${b.style} float-y glass rounded-full px-3 py-1.5 text-xs font-mono font-medium text-foreground/90 shadow-[0_0_20px_rgba(99,102,241,0.25)]`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="absolute left-0 right-0 bottom-6 px-5 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
          {stats.map(({ v, l, icon: Icon }) => (
            <div key={l} className="glass glow-hover rounded-xl p-4 flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-lg gradient-bg shadow-[0_0_18px_rgba(99,102,241,0.5)]">
                <Icon size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-extrabold gradient-text">{v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

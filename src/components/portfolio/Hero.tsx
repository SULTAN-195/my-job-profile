import { Github, Linkedin, Mail, MessageCircle, Download, ArrowRight } from "lucide-react";

const stats = [
  { v: "3+", l: "Projects Completed" },
  { v: "10+", l: "Technologies" },
  { v: "3", l: "Cisco Certifications" },
  { v: "✓", l: "Open to Work" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-accent-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
            Available for Internship & Junior Roles
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Syed Muhammad <span className="text-primary">Anas</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/90 font-medium">
            Full Stack Developer
            <span className="text-muted-foreground"> | Next.js • React.js • Node.js • Express.js</span>
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
            Full Stack Web Application Developer. I build clean, scalable web and mobile
            applications. Currently advancing into Agentic AI Engineering. Actively seeking
            internship or junior developer opportunities to grow in a professional environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-card"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a
              href="/Anas_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground hover:border-primary/60 hover:text-accent-soft transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><Github size={20} /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><Linkedin size={20} /></a>
            <a aria-label="WhatsApp" href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors"><MessageCircle size={20} /></a>
            <a aria-label="Email" href="mailto:anas@email.com" className="hover:text-foreground transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-border bg-card/60 p-6 shadow-card hover:border-primary/40 transition-colors"
            >
              <div className="text-3xl font-bold text-primary">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

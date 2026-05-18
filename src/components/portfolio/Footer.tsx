import { Github, Linkedin, MessageCircle, Mail, MapPin, Download, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Full Stack Web Development",
  "Mobile App Development (React Native)",
  "REST API Development",
  "Database Design & Management",
  "Agentic AI Integration (Learning)",
];

const socials = [
  { Icon: Github, href: "https://github.com/alihassan", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/alihassan", label: "LinkedIn" },
  { Icon: MessageCircle, href: "https://wa.me/923000000000", label: "WhatsApp" },
  { Icon: Mail, href: "mailto:ali.hassan@email.com", label: "Email" },
];

export function Footer() {
  return (
    <>
      <footer className="relative border-t border-hairline bg-[#101010] pb-32">
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60" />
        <div
          className="pointer-events-none absolute inset-x-0 -top-24 h-24 opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse at top, var(--primary), transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {/* COLUMN 1 — Brand */}
            <div className="space-y-5">
              <a
                href="#home"
                className="inline-block font-serif text-6xl leading-none bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--primary) 0%, #f5f5f0 100%)",
                }}
              >
                A.H
              </a>
              <p className="label-mono">
                Full Stack Developer — Karachi, Pakistan
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
                Building modern web & mobile applications. Currently learning
                Agentic AI Engineering.
              </p>
              <ul className="flex items-center gap-3 pt-2">
                {socials.map(({ Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="group flex h-10 w-10 items-center justify-center border border-hairline transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 hover:shadow-[0_0_20px_var(--primary)]"
                    >
                      <Icon size={16} className="text-foreground/70 group-hover:text-[var(--primary)] transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2 — Navigation */}
            <div>
              <h4 className="label-mono mb-6">[ Navigation ]</h4>
              <ul className="space-y-3">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-[var(--primary)] transition-colors"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 — Services */}
            <div>
              <h4 className="label-mono mb-6">[ What I Do ]</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-foreground/80 flex gap-3 leading-relaxed"
                  >
                    <span className="text-[var(--primary)] mt-1.5 h-1 w-1 rounded-full bg-[var(--primary)] shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4 — Contact */}
            <div className="space-y-5">
              <h4 className="label-mono">[ Get In Touch ]</h4>

              <div className="border border-hairline bg-white/[0.02] backdrop-blur-md p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)] pulse-dot" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em] accent">
                    Open to Work
                  </span>
                </div>
                <p className="mt-2 text-xs text-foreground/70 leading-relaxed">
                  Available for Internship & Junior Roles
                </p>
              </div>

              <ul className="space-y-3 text-sm">
                <ContactLine Icon={Mail} href="mailto:ali.hassan@email.com" text="ali.hassan@email.com" />
                <ContactLine Icon={MapPin} text="Karachi, Pakistan" />
                <ContactLine Icon={Linkedin} href="https://linkedin.com/in/alihassan" text="linkedin.com/in/alihassan" />
                <ContactLine Icon={Github} href="https://github.com/alihassan" text="github.com/alihassan" />
              </ul>

              <a
                href="#"
                className="group flex w-full items-center justify-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-[0.18em] text-[var(--primary-foreground)] transition-all hover:shadow-[0_0_30px_var(--primary)]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--primary) 0%, #c7e23a 100%)",
                }}
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>

          <div className="mt-16 border-t border-hairline" />

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-foreground/60 text-center">
            <span>© 2025 Ali Hassan. All rights reserved.</span>
            <span>Built with Next.js & Tailwind CSS</span>
            <span>Designed & Developed by Ali Hassan</span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 px-4 flex justify-center pointer-events-none">
        <a
          href="#contact"
          className="pointer-events-auto group inline-flex items-center gap-2 sm:gap-3 border border-[var(--primary)]/40 bg-background/80 backdrop-blur-xl pl-3 pr-2 sm:pl-4 sm:pr-3 py-2 sm:py-2.5 shadow-[0_10px_40px_-10px_var(--primary)] hover:border-[var(--primary)] hover:shadow-[0_10px_50px_-5px_var(--primary)] transition-all"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-60 animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-[var(--primary)]" />
          </span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] accent">
            Open to Work
          </span>
          <span className="hidden sm:inline h-3 w-px bg-[var(--border)]" />
          <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
            Internship & Junior Roles
          </span>
          <span className="ml-1 inline-flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 bg-[var(--primary)] text-[var(--primary-foreground)] transition-transform group-hover:translate-x-0.5">
            <ArrowUpRight size={14} />
          </span>
        </a>
      </div>
    </>
  );
}

function ContactLine({
  Icon,
  href,
  text,
}: {
  Icon: typeof Mail;
  href?: string;
  text: string;
}) {
  const content = (
    <span className="flex items-center gap-3 text-foreground/80 hover:text-[var(--primary)] transition-colors">
      <Icon size={14} className="text-[var(--primary)] shrink-0" />
      <span className="break-all">{text}</span>
    </span>
  );
  return <li>{href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : content}</li>;
}

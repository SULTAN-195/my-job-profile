import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
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
      <footer className="relative border-t border-hairline bg-background pb-28">
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <a href="#home" className="font-serif text-5xl leading-none">
                A<span className="accent">.</span>H
              </a>
              <p className="mt-3 label-mono">
                Full Stack Developer — Karachi, Pakistan
              </p>
            </div>

            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="underline-anim font-mono text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group flex h-10 w-10 items-center justify-center border border-hairline transition-colors hover:border-[var(--primary)]"
                  >
                    <Icon size={15} className="text-foreground/70 group-hover:text-[var(--primary)] transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-foreground/60">
            <span>© 2025 Ali Hassan. All rights reserved.</span>
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-hairline bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-center gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em]">
          <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
          <span className="accent">Open to Work</span>
          <span className="text-foreground/80">— Available for Internship & Junior Roles</span>
        </div>
      </div>
    </>
  );
}

import { Github, Linkedin, MessageCircle, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="relative border-t-0 px-5 sm:px-8 py-12 pb-28 bg-surface">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-8 items-start">
          <div>
            <a href="#home" className="flex items-center gap-1.5 text-2xl font-extrabold">
              <span className="gradient-text">Anas</span>
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#6366f1] pulse-dot" />
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Open to Internship & Developer Roles — Karachi, Pakistan
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-foreground transition-colors underline-anim inline-block">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Connect</h4>
            <div className="flex gap-2">
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
                  className="glass glow-hover h-10 w-10 rounded-lg grid place-items-center text-muted-foreground hover:text-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground flex items-center gap-1.5">
              © 2026 Syed Muhammad Anas. Built with
              <Heart size={12} className="text-primary fill-primary" />
              Next.js & Tailwind
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 inset-x-0 z-40 glass-strong border-t border-success/30">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-success to-transparent" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2.5 flex items-center justify-center gap-2 text-xs sm:text-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-success pulse-dot shadow-[0_0_12px_#10b981]" />
          <span className="font-bold gradient-text">🟢 Open to Work</span>
          <span className="text-muted-foreground">— Available for Internship & Junior Roles</span>
        </div>
      </div>
    </>
  );
}

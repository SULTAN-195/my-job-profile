const social = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "WhatsApp", href: "https://wa.me/" },
  { label: "Email", href: "mailto:anas@email.com" },
];

export function Footer() {
  return (
    <>
      <footer className="border-t border-hairline px-6 sm:px-10 lg:px-16 py-12 pb-28">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <div>
            <a href="#home" className="font-serif text-4xl">
              Anas<span className="accent">.</span>
            </a>
            <p className="mt-3 label-mono">
              © 2026 — Built with Next.js & Tailwind CSS
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-anim font-mono text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-hairline bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-center gap-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em]">
          <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
          <span className="accent">Open to Work</span>
          <span className="text-foreground/60">— Available for Internship & Junior Roles</span>
        </div>
      </div>
    </>
  );
}

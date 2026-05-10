import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-background/60 border-b border-primary/20 shadow-[0_4px_30px_rgba(99,102,241,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight">
          <span className="gradient-text">A.H</span>
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#6366f1] pulse-dot" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="underline-anim text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-success">
            <span className="w-2 h-2 rounded-full bg-success pulse-dot shadow-[0_0_10px_#10b981]" />
            Open to Work
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md glass text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 glass-strong">
          <ul className="flex flex-col px-6 py-8 gap-2">
            {links.map((l, i) => (
              <li
                key={l.href}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-in fade-in slide-in-from-right-4 duration-500"
              >
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-3 text-lg font-semibold text-foreground/90 hover:gradient-text transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

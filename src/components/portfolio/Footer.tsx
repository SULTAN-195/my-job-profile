import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="border-t border-border bg-surface px-5 sm:px-8 py-10 pb-24">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6 items-center">
          <div>
            <a href="#home" className="text-xl font-bold">Anas<span className="text-primary">.</span></a>
            <p className="mt-2 text-xs text-muted-foreground">
              Open to Internship & Developer Roles — Karachi, Pakistan
            </p>
          </div>
          <div className="flex sm:justify-center gap-4 text-muted-foreground">
            <a aria-label="GitHub" href="https://github.com" className="hover:text-foreground transition-colors"><Github size={18} /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com" className="hover:text-foreground transition-colors"><Linkedin size={18} /></a>
            <a aria-label="WhatsApp" href="https://wa.me/" className="hover:text-foreground transition-colors"><MessageCircle size={18} /></a>
            <a aria-label="Email" href="mailto:anas@email.com" className="hover:text-foreground transition-colors"><Mail size={18} /></a>
          </div>
          <p className="text-xs text-muted-foreground sm:text-right">
            © 2026 Syed Muhammad Anas. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>

      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-success/30 bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2.5 flex items-center justify-center gap-2 text-xs sm:text-sm text-foreground">
          <span className="inline-flex h-2 w-2 rounded-full bg-success pulse-dot" />
          <span className="font-medium text-success">Open to Work</span>
          <span className="text-muted-foreground">— Available for Internship & Junior Roles</span>
        </div>
      </div>
    </>
  );
}

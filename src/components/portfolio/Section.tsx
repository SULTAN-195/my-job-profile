import { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function Section({
  id,
  label,
  heading,
  children,
  className = "",
}: {
  id: string;
  label: string;
  heading?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`relative py-24 px-5 sm:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
            {label}
          </span>
          {heading && (
            <div className="mt-4 flex items-center gap-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight gradient-text">
                {heading}
              </h2>
              <span className="hidden sm:block h-px flex-1 bg-gradient-to-r from-primary/40 via-violet/30 to-transparent" />
            </div>
          )}
        </div>
        <div className="reveal">{children}</div>
      </div>
    </section>
  );
}

import { ReactNode } from "react";

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
  return (
    <section id={id} className={`py-20 px-5 sm:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {label}
          </span>
          {heading && (
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h2>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

import { Github, ExternalLink, Star } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

const projects = [
  {
    n: "01",
    title: "E-Commerce Platform",
    year: "2025",
    cat: "Web",
    desc: "Full-featured online store with product management, shopping cart, Stripe payment integration, and admin dashboard with real-time sales analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT Auth"],
    grad: "from-indigo-500 via-violet-500 to-fuchsia-500",
  },
  {
    n: "02",
    title: "Social Media Website",
    year: "2025",
    cat: "Web",
    desc: "Practice project — a complete social platform with user authentication, post creation, likes, comments, follow/unfollow system, and user profile pages.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    grad: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    n: "03",
    title: "Task Manager Mobile App",
    year: "2024",
    cat: "Mobile",
    desc: "Cross-platform mobile application for daily task management with push notifications, category filters, offline support, and Firebase real-time sync.",
    tech: ["React Native", "Expo", "Firebase", "Redux", "AsyncStorage"],
    grad: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

const filters = ["All", "Web", "Mobile"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.cat === filter);

  return (
    <Section id="projects" label="Featured Projects" heading="Things I've Built">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              filter === f
                ? "gradient-bg text-white shadow-[0_0_18px_rgba(99,102,241,0.5)]"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p, idx) => (
          <article
            key={p.n}
            className="group relative glass glow-hover rounded-2xl overflow-hidden flex flex-col"
          >
            {idx === 0 && filter === "All" && (
              <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full gradient-bg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                <Star size={10} fill="white" /> Featured
              </span>
            )}
            <div className={`relative h-32 bg-gradient-to-br ${p.grad} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <span className="relative text-7xl font-extrabold text-white/30 font-mono">{p.n}</span>
              <span className="absolute top-3 left-4 text-[11px] font-mono text-white/80">{p.year}</span>
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-xl font-extrabold group-hover:gradient-text transition-all">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full glass px-2.5 py-1 text-[11px] font-mono text-foreground/80 hover:text-primary hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="glass btn-lift inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href="#"
                  className="btn-lift gradient-bg inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-white"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

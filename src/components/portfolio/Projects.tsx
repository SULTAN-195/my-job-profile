import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    n: "01",
    title: "E-Commerce Platform",
    year: "2025",
    desc: "Full-featured online store with product management, shopping cart, Stripe payment integration, and admin dashboard with real-time sales analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT Auth"],
  },
  {
    n: "02",
    title: "Social Media Website",
    year: "2025",
    desc: "Practice project — a complete social platform with user authentication, post creation, likes, comments, follow/unfollow system, and user profile pages.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
  },
  {
    n: "03",
    title: "Task Manager Mobile App",
    year: "2024",
    desc: "Cross-platform mobile application for daily task management with push notifications, category filters, offline support, and Firebase real-time sync.",
    tech: ["React Native", "Expo", "Firebase", "Redux", "AsyncStorage"],
  },
];

export function Projects() {
  return (
    <Section id="projects" label="Featured Projects" heading="Things I've Built">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.n}
            className="group rounded-xl border border-border bg-card/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/50"
          >
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary/15 text-primary font-bold">
                {p.n}
              </span>
              <span className="text-xs text-muted-foreground">{p.year}</span>
            </div>
            <h3 className="mt-5 text-xl font-bold group-hover:text-accent-soft transition-colors">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
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
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-xs font-medium hover:border-primary/50 hover:text-accent-soft transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

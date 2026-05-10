import { Section } from "./Section";
import { Code2, Server, Smartphone, Database, Wrench, Sparkles } from "lucide-react";

const radial = [
  { name: "React.js", p: 90 },
  { name: "JavaScript", p: 90 },
  { name: "Node.js", p: 85 },
  { name: "MongoDB", p: 80 },
  { name: "React Native", p: 75 },
  { name: "Next.js", p: 70 },
];

const groups = [
  { icon: Code2, title: "Frontend Development", items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"] },
  { icon: Server, title: "Backend Development", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Python"] },
  { icon: Smartphone, title: "Mobile Development", items: ["React Native", "Expo", "Android", "iOS"] },
  { icon: Database, title: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Mongoose"] },
  { icon: Wrench, title: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "VS Code", "Postman"] },
  { icon: Sparkles, title: "Currently Learning", items: ["Agentic AI", "LLM Integration", "AI Agents", "RAG Pipelines"] },
];

export function Skills() {
  return (
    <Section id="skills" label="Technical Skills" heading="Tools I Work With" className="bg-surface">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="grid grid-cols-3 gap-4">
          {radial.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="radial"
                style={{ ["--p" as string]: r.p, ["--size" as string]: "112px" } as React.CSSProperties}
              >
                <span className="relative font-mono font-bold text-sm gradient-text">{r.p}%</span>
              </div>
              <span className="text-xs font-semibold text-foreground/80">{r.name}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {groups.map(({ icon: Icon, title, items }) => (
            <div key={title} className="glass glow-hover rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg gradient-bg grid place-items-center shadow-[0_0_16px_rgba(99,102,241,0.4)]">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-bold">{title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md glass px-2.5 py-1 text-[11px] font-mono text-foreground/80 hover:text-primary hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

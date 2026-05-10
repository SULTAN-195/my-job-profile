import { Section } from "./Section";
import { Code2, Server, Smartphone, Database, Wrench, Sparkles } from "lucide-react";

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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card/60 p-6 shadow-card hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((i) => (
                <li
                  key={i}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

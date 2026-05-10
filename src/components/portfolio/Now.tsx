import { BookOpen, Hammer, Send, TrendingUp } from "lucide-react";
import { Section } from "./Section";

const items = [
  { n: "01", icon: BookOpen, title: "LEARNING", body: "Certified Agentic AI Architect — building intelligent agents, RAG pipelines, and LLM-powered applications." },
  { n: "02", icon: Hammer, title: "BUILDING", body: "Adding production-quality full-stack and AI projects to portfolio — focusing on clean architecture and real impact." },
  { n: "03", icon: Send, title: "APPLYING", body: "Actively applying for internship and developer roles in Karachi and remotely worldwide." },
  { n: "04", icon: TrendingUp, title: "GROWING", body: "Sharpening DSA fundamentals, JavaScript core concepts, and system design basics every day." },
];

export function Now() {
  return (
    <Section id="now" label="What I'm Doing Right Now" heading="Current Focus">
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map(({ n, icon: Icon, title, body }) => (
          <div
            key={n}
            className="group relative glass glow-hover rounded-2xl p-7 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-violet/20 transition-colors" />
            <div className="relative flex items-start gap-4">
              <span className="text-5xl font-extrabold gradient-text font-mono leading-none">{n}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Icon size={16} className="text-primary" />
                  <h3 className="font-extrabold tracking-wider text-sm">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "./Section";

const items = [
  { n: "01", title: "LEARNING", body: "Certified Agentic AI Architect — building intelligent agents, RAG pipelines, and LLM-powered applications." },
  { n: "02", title: "BUILDING", body: "Adding production-quality full-stack and AI projects to portfolio — focusing on clean architecture and real impact." },
  { n: "03", title: "APPLYING", body: "Actively applying for internship and developer roles in Karachi and remotely worldwide." },
  { n: "04", title: "GROWING", body: "Sharpening DSA fundamentals, JavaScript core concepts, and system design basics every day." },
];

export function Now() {
  return (
    <Section id="now" label="What I'm Doing Right Now" heading="Current Focus" className="bg-surface">
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((i) => (
          <div
            key={i.n}
            className="rounded-xl border border-border bg-card/60 p-6 shadow-card hover:border-primary/40 transition-colors"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-mono text-primary">{i.n}.</span>
              <h3 className="font-bold tracking-wide">{i.title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{i.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

import headshot from "@/assets/anas-headshot.jpg";
import { Section } from "./Section";

const highlights = [
  { icon: "🎯", label: "Goal-Oriented" },
  { icon: "💡", label: "Quick Learner" },
  { icon: "🤝", label: "Team Player" },
  { icon: "🔨", label: "Builder" },
];

export function About() {
  return (
    <Section id="about" label="About Me" className="bg-surface">
      <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />
            <img
              src={headshot}
              alt="Syed Muhammad Anas"
              width={320}
              height={320}
              loading="lazy"
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover ring-4 ring-primary/60 ring-offset-4 ring-offset-surface"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold">
            Passionate Developer. Lifelong Learner.
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I'm Anas, a Full Stack Developer. I recently completed an intensive Full Stack
            Web & Mobile Application Development course and I'm currently learning Certified
            Agentic AI Architect. I love building real-world applications that solve actual
            problems. I'm actively looking for my first professional opportunity where I can
            contribute, learn from experienced developers, and grow into a senior role over time.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-lg border border-border bg-card/60 p-4 text-center shadow-card hover:border-primary/40 transition-colors"
              >
                <div className="text-2xl">{h.icon}</div>
                <div className="mt-2 text-sm font-medium">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

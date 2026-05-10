import headshot from "@/assets/anas-headshot.jpg";
import { Section } from "./Section";

const highlights = [
  { icon: "🎯", label: "Goal-Oriented" },
  { icon: "💡", label: "Quick Learner" },
  { icon: "🤝", label: "Team Player" },
  { icon: "🔨", label: "Builder" },
];

const ticker = [
  "React.js", "Node.js", "MongoDB", "React Native",
  "Next.js", "PostgreSQL", "Agentic AI", "Cisco Certified",
];

export function About() {
  return (
    <>
      <Section id="about" label="About Me" heading="Passionate Developer. Lifelong Learner.">
        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 rounded-full ring-spin"
                   style={{
                     background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
                     padding: "3px",
                     WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                     WebkitMaskComposite: "xor",
                     maskComposite: "exclude",
                   }} />
              <div className="absolute inset-2 rounded-full bg-primary/20 blur-2xl" />
              <img
                src={headshot}
                alt="Syed Muhammad Anas"
                width={320}
                height={320}
                loading="lazy"
                className="relative h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-muted-foreground leading-[1.85] text-base sm:text-lg">
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
                  className="glass glow-hover rounded-xl p-4 text-center"
                >
                  <div className="text-2xl">{h.icon}</div>
                  <div className="mt-2 text-sm font-semibold">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Marquee ticker */}
      <div className="relative overflow-hidden border-y border-primary/20 bg-surface py-5">
        <div className="flex marquee-track whitespace-nowrap gap-10 text-lg font-bold">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10 text-foreground/80">
              {t}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

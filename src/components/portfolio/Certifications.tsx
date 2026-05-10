import { BadgeCheck, Trophy } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { title: "Cisco Networking Academy — JavaScript Essentials", meta: "Verified Badge + Certificate + Completion Statement | 2024-2025" },
  { title: "Cisco Networking Academy — HTML Essentials", meta: "Verified Badge + Certificate + Completion Statement | 2024-2025" },
  { title: "Cisco Networking Academy — CSS Essentials", meta: "Verified Badge + Certificate + Completion Statement | 2024-2025" },
  { title: "Full Stack Web & Mobile Application Development", meta: "[Institute Name], Karachi | 2023–2025" },
  { title: "Certified Agentic AI Architect", meta: "In Progress" },
];

export function Certifications() {
  return (
    <Section id="certifications" label="Certifications & Courses" heading="Credentials">
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((c) => (
          <div
            key={c.title}
            className="flex items-start gap-4 rounded-xl border border-border bg-card/60 p-5 shadow-card hover:border-primary/40 transition-colors"
          >
            <BadgeCheck className="text-primary shrink-0 mt-0.5" size={22} />
            <div>
              <h3 className="font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.meta}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
          Hackathons & Competitions
        </h3>
        <div className="rounded-xl border border-border bg-card/60 p-6 shadow-card flex items-start gap-5">
          <div className="h-12 w-12 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
            <Trophy size={22} />
          </div>
          <div>
            <h4 className="font-bold text-lg">[Hackathon Name] | [Organizer]</h4>
            <p className="text-sm text-muted-foreground mt-1">[Date] | Karachi</p>
            <dl className="mt-3 space-y-1 text-sm">
              <div className="flex gap-2"><dt className="text-muted-foreground">Built:</dt><dd>[Project built]</dd></div>
              <div className="flex gap-2"><dt className="text-muted-foreground">Tech:</dt><dd>[Tech used]</dd></div>
              <div className="flex gap-2"><dt className="text-muted-foreground">Result:</dt><dd>Participant</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}

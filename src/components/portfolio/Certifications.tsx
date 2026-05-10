import { Section } from "./Section";

const certs = [
  { n: "01", title: "JavaScript Essentials", org: "Cisco Networking Academy", meta: "2024 — 2025", status: "Verified" },
  { n: "02", title: "HTML Essentials", org: "Cisco Networking Academy", meta: "2024 — 2025", status: "Verified" },
  { n: "03", title: "CSS Essentials", org: "Cisco Networking Academy", meta: "2024 — 2025", status: "Verified" },
  { n: "04", title: "Full Stack Web & Mobile App Development", org: "Institute, Karachi", meta: "2023 — 2025", status: "Verified" },
  { n: "05", title: "Certified Agentic AI Architect", org: "Self-paced", meta: "2026", status: "In Progress" },
];

export function Certifications() {
  return (
    <Section id="certifications" label="Credentials / 04" heading="Earned & in progress.">
      <ul className="border-t border-hairline">
        {certs.map((c) => (
          <li
            key={c.n}
            className="border-b border-hairline grid grid-cols-[40px_1fr_auto] sm:grid-cols-[160px_1fr_180px_120px] gap-4 sm:gap-12 items-baseline py-8"
          >
            <span className="font-mono text-xs accent">[{c.n}]</span>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl leading-tight">{c.title}</h3>
              <p className="mt-1 label-mono">{c.org}</p>
            </div>
            <div className="hidden sm:block label-mono">{c.meta}</div>
            <div>
              <span
                className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider ${
                  c.status === "Verified"
                    ? "border-hairline text-foreground/70"
                    : "border-accent accent"
                }`}
              >
                {c.status === "In Progress" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
                )}
                {c.status}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Hackathon */}
      <div className="mt-20">
        <div className="label-mono mb-6">[ Hackathons & Competitions ]</div>
        <div className="border border-hairline p-8 sm:p-12">
          <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <h4 className="font-serif text-3xl sm:text-4xl leading-tight">
                <span className="italic">[Hackathon Name]</span> — [Organizer]
              </h4>
              <p className="mt-2 label-mono">[Date] · Karachi</p>
            </div>
            <span className="border border-accent accent px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
              Participant
            </span>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-hairline">
            {[
              { k: "Team Size", v: "[N]" },
              { k: "Duration", v: "[Hours]" },
              { k: "Tech Used", v: "[Stack]" },
              { k: "Result", v: "Participant" },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`py-6 px-4 ${i !== 0 ? "border-l border-hairline" : ""}`}
              >
                <div className="label-mono">{s.k}</div>
                <div className="mt-2 font-serif text-xl">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

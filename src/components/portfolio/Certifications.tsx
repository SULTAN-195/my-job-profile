import { BadgeCheck, Trophy, Loader2 } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { title: "Cisco Networking Academy — JavaScript Essentials", meta: "Verified Badge + Certificate + Completion Statement | 2024-2025", status: "verified" },
  { title: "Cisco Networking Academy — HTML Essentials", meta: "Verified Badge + Certificate + Completion Statement | 2024-2025", status: "verified" },
  { title: "Cisco Networking Academy — CSS Essentials", meta: "Verified Badge + Certificate + Completion Statement | 2024-2025", status: "verified" },
  { title: "Full Stack Web & Mobile Application Development", meta: "[Institute Name], Karachi | 2023–2025", status: "verified" },
  { title: "Certified Agentic AI Architect", meta: "In Progress", status: "progress" },
];

export function Certifications() {
  return (
    <Section id="certifications" label="Certifications & Courses" heading="Credentials">
      <div className="relative pl-8 sm:pl-12">
        {/* Vertical line */}
        <div className="absolute left-2 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-violet to-cyan" />

        <div className="space-y-5">
          {certs.map((c) => (
            <div key={c.title} className="relative">
              {/* Dot */}
              <span className="absolute -left-[26px] sm:-left-[34px] top-5 h-3 w-3 rounded-full gradient-bg shadow-[0_0_14px_rgba(99,102,241,0.7)] ring-4 ring-background" />
              <div className="glass glow-hover rounded-xl p-5 flex items-start gap-4">
                {c.status === "verified" ? (
                  <BadgeCheck className="text-success shrink-0 mt-0.5" size={22} />
                ) : (
                  <Loader2 className="text-amber-400 shrink-0 mt-0.5 animate-spin" size={22} />
                )}
                <div className="flex-1">
                  <h3 className="font-bold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.meta}</p>
                </div>
                {c.status === "progress" && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 pulse-dot" />
                    In Progress
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 pulse-dot" />
          Hackathons & Competitions
        </h3>
        <div
          className="relative rounded-2xl p-6 sm:p-8 glass-strong overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(26,26,53,0.5))" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500" />
          <div className="flex items-start gap-5">
            <div className="h-14 w-14 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(245,158,11,0.3)]">
              <Trophy size={26} />
            </div>
            <div className="flex-1">
              <h4 className="font-extrabold text-xl">[Hackathon Name] | [Organizer]</h4>
              <p className="text-sm text-muted-foreground mt-1">[Date] | Karachi</p>
              <div className="mt-4 grid sm:grid-cols-4 gap-3 text-sm">
                {[
                  { k: "Team Size", v: "[N]" },
                  { k: "Duration", v: "[Hours]" },
                  { k: "Tech Used", v: "[Tech]" },
                  { k: "Result", v: "Participant" },
                ].map((s) => (
                  <div key={s.k} className="glass rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                    <div className="mt-1 font-semibold">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

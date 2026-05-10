import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { useState } from "react";

const links = [
  { label: "Email", value: "ali.hassan@email.com", href: "mailto:ali.hassan@email.com" },
  { label: "LinkedIn", value: "linkedin.com/in/alihassan", href: "https://linkedin.com/in/alihassan" },
  { label: "GitHub", value: "github.com/alihassan", href: "https://github.com/alihassan" },
  { label: "WhatsApp", value: "+92 300 0000000", href: "https://wa.me/923000000000" },
  { label: "Location", value: "Karachi, Pakistan", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" label="Contact / 06" heading="Let's work together.">
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-y lg:divide-y-0 divide-[var(--border)]">
        <div className="lg:pr-12 pb-12 lg:pb-0">
          <p className="font-serif text-3xl sm:text-4xl leading-[1.25]">
            Open to <span className="italic accent">internship</span> and{" "}
            <span className="italic">junior developer</span> opportunities. Have a role, project,
            or just want to connect?
          </p>

          <ul className="mt-12 border-t border-hairline">
            {links.map((l) => (
              <li key={l.label} className="border-b border-hairline">
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="label-mono w-20">{l.label}</span>
                    <span className="font-serif text-xl sm:text-2xl group-hover:text-accent transition-colors break-all">
                      {l.value}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="hover-arrow shrink-0 group-hover:text-accent transition-colors"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-12 pt-12 lg:pt-0">
          <div className="label-mono mb-6">[ Send a Message ]</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Subject" name="subject" />
            <Field label="Message" name="message" textarea />
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-accent-yellow px-6 py-4 text-xs font-mono uppercase tracking-[0.18em]"
            >
              Send Message
              <ArrowUpRight size={14} className="hover-arrow" />
            </button>
            {sent && (
              <p className="label-mono accent">[ Sent — I'll get back to you soon. ]</p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-0 border-b border-[var(--border)] py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";
  return (
    <label className="block">
      <span className="label-mono">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={4} className={`${cls} resize-none mt-1`} />
      ) : (
        <input name={name} type={type} required className={`${cls} mt-1`} />
      )}
    </label>
  );
}

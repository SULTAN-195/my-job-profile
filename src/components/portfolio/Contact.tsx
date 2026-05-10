import { Mail, Linkedin, Github, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { useState } from "react";

const cards = [
  { icon: Mail, label: "ali.hassan@email.com", href: "mailto:ali.hassan@email.com" },
  { icon: Linkedin, label: "linkedin.com/in/alihassan", href: "https://linkedin.com/in/alihassan" },
  { icon: Github, label: "github.com/alihassan", href: "https://github.com/alihassan" },
  { icon: MessageCircle, label: "+92 300 0000000 (WhatsApp)", href: "https://wa.me/923000000000" },
  { icon: MapPin, label: "Karachi, Pakistan", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" label="Get In Touch" heading="Let's Work Together">
      <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <p className="-mt-6 mb-10 max-w-2xl text-muted-foreground leading-relaxed">
        I'm actively looking for internship and junior developer opportunities. Whether you have
        a role, a project, or just want to connect — feel free to reach out!
      </p>
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass-strong rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Subject" name="subject" />
          <Field label="Message" name="message" textarea />
          <button
            type="submit"
            className="btn-lift w-full inline-flex items-center justify-center gap-2 rounded-lg gradient-bg px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.6)]"
          >
            Send Message <ArrowRight size={16} />
          </button>
          {sent && (
            <p className="text-sm text-success text-center">Thanks — I'll get back to you soon.</p>
          )}
        </form>

        <div className="space-y-3">
          {cards.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass glow-hover flex items-center gap-4 rounded-xl p-4"
            >
              <div className="h-10 w-10 rounded-lg gradient-bg grid place-items-center shrink-0 shadow-[0_0_14px_rgba(99,102,241,0.4)]">
                <Icon size={18} className="text-white" />
              </div>
              <span className="text-sm break-all text-foreground/90">{label}</span>
            </a>
          ))}
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
    "w-full rounded-lg border border-primary/20 bg-background/60 backdrop-blur px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(99,102,241,0.25),0_0_20px_rgba(99,102,241,0.3)] transition-all";
  return (
    <label className="block">
      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required rows={5} className={`${cls} mt-2 resize-none`} />
      ) : (
        <input name={name} type={type} required className={`${cls} mt-2`} />
      )}
    </label>
  );
}

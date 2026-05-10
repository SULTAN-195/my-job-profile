import { Mail, Linkedin, Github, MessageCircle, MapPin, Send } from "lucide-react";
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
      <p className="-mt-6 mb-10 max-w-2xl text-muted-foreground">
        I'm actively looking for internship and junior developer opportunities. Whether you have
        a role, a project, or just want to connect — feel free to reach out!
      </p>
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-xl border border-border bg-card/60 p-6 sm:p-8 shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Subject" name="subject" />
          <Field label="Message" name="message" textarea />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Send size={16} /> Send Message
          </button>
          {sent && (
            <p className="text-sm text-success">Thanks — I'll get back to you soon.</p>
          )}
        </form>

        <div className="space-y-3">
          {cards.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 shadow-card hover:border-primary/50 hover:text-accent-soft transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <Icon size={18} />
              </div>
              <span className="text-sm break-all">{label}</span>
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
    "w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required rows={5} className={`${cls} mt-1.5 resize-none`} />
      ) : (
        <input name={name} type={type} required className={`${cls} mt-1.5`} />
      )}
    </label>
  );
}

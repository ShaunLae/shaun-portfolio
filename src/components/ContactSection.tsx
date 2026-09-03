import type { ContactLink } from "../types";
import { Card } from "./Card";

interface ContactSectionProps {
  headline: string;
  body: string;
  links: ContactLink[];
}

export function ContactSection({ headline, body, links }: ContactSectionProps) {
  return (
    <section id="contact" className="border-t border-borderGlass py-[76px]">
      <Card className="grid items-center gap-8 px-[26px] py-9 text-left md:grid-cols-[1.2fr_0.8fr] md:px-11 md:py-[52px]">
        <div>
          <h2 className="mb-3.5 font-display text-[clamp(1.7rem,3.4vw,2.2rem)] font-semibold">
            {headline}
          </h2>
          <p className="max-w-[42ch] text-textMuted">{body}</p>
        </div>
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between rounded-glass-md border border-borderGlass bg-white/40 px-[18px] py-3.5 text-[0.92rem] no-underline transition-colors duration-200 hover:border-olive hover:bg-olive/10"
            >
              <span>{link.label}</span>
              <span className="font-mono text-[0.75rem] text-textMuted">{link.hint}</span>
            </a>
          ))}
        </div>
      </Card>
    </section>
  );
}

import type { ExperienceEntry } from "../types";
import { ExperienceItem } from "./ExperienceItem";

interface ExperienceSectionProps {
  eyebrow: string;
  entries: ExperienceEntry[];
}

export function ExperienceSection({ eyebrow, entries }: ExperienceSectionProps) {
  return (
    <section id="experience" className="border-t border-borderGlass py-[76px]">
      <div className="mb-10 max-w-[60ch]">
        <h2 className="mb-2.5 font-display text-[clamp(1.7rem,3.2vw,2.3rem)] font-semibold">
          Experience
        </h2>
        <p className="text-textMuted">{eyebrow}</p>
      </div>
      {entries.map((entry) => (
        <ExperienceItem key={entry.title} entry={entry} />
      ))}
    </section>
  );
}

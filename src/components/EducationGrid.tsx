import type { EducationEntry } from "../types";
import { EducationCard } from "./EducationCard";

interface EducationGridProps {
  entries: EducationEntry[];
}

export function EducationGrid({ entries }: EducationGridProps) {
  return (
    <section id="education" className="border-t border-borderGlass py-[76px]">
      <div className="mb-10 max-w-[60ch]">
        <h2 className="mb-2.5 font-display text-[clamp(1.7rem,3.2vw,2.3rem)] font-semibold">
          Education
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
        {entries.map((entry) => (
          <EducationCard key={entry.title} entry={entry} />
        ))}
      </div>
    </section>
  );
}

import type { ExperienceEntry } from "../types";

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <div className="grid gap-2 border-b border-borderGlass py-7 first:pt-0 last:border-b-0 sm:grid-cols-[200px_1fr] sm:gap-6">
      <div className="font-mono text-[0.82rem] text-olive">{entry.dates}</div>
      <div>
        <h3 className="mb-0.5 font-display text-[1.15rem] font-semibold">{entry.title}</h3>
        <div className="mb-3.5 text-[0.9rem] text-textMuted">{entry.company}</div>
        <ul className="flex list-none flex-col gap-2">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative pl-4 text-[0.9rem] text-textMuted before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-olive"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

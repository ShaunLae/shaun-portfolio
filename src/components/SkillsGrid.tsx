import type { SkillGroup } from "../types";
import { Card } from "./Card";

interface SkillsGridProps {
  eyebrow: string;
  groups: SkillGroup[];
}

export function SkillsGrid({ eyebrow, groups }: SkillsGridProps) {
  return (
    <section id="skills" className="border-t border-borderGlass py-[76px]">
      <div className="mb-10 max-w-[60ch]">
        <h2 className="mb-2.5 font-display text-[clamp(1.7rem,3.2vw,2.3rem)] font-semibold">
          Skills & stack
        </h2>
        <p className="text-textMuted">{eyebrow}</p>
      </div>
      <div className="grid grid-cols-1 gap-[18px] xs:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <Card key={group.title} radius="md" className="px-5 py-[22px]">
            <h3 className="mb-3 font-display text-[1.02rem] font-medium text-oliveDeep">{group.title}</h3>
            <ul className="flex list-none flex-col gap-[7px]">
              {group.items.map((item) => (
                <li key={item} className="text-[0.87rem] text-textMuted">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

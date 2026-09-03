import type { EducationEntry } from "../types";
import { Card } from "./Card";

interface EducationCardProps {
  entry: EducationEntry;
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <Card radius="md" className="px-5 py-[22px]">
      <span className="mb-2.5 block font-mono text-[0.75rem] text-olive">{entry.year}</span>
      <h3 className="mb-1 font-display text-[1.02rem] font-semibold">{entry.title}</h3>
      <p className="text-[0.85rem] text-textMuted">{entry.detail}</p>
    </Card>
  );
}

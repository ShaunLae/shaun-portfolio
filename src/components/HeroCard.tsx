import { useState } from "react";
import type { HeroStat } from "../types";
import { Card } from "./Card";

interface HeroCardProps {
  role: string;
  location: string;
  stats: HeroStat[];
  stackPills: string[];
  avatarSrc: string;
  avatarAlt: string;
}

export function HeroCard({
  role,
  location,
  stats,
  stackPills,
  avatarSrc,
  avatarAlt,
}: HeroCardProps) {
  const [showAvatar, setShowAvatar] = useState(true);

  return (
    <Card className="px-[26px] py-[30px]">
      {showAvatar ? (
        <img
          src={avatarSrc}
          alt={avatarAlt}
          className="mb-5 h-20 w-20 rounded-full object-cover ring-1 ring-borderGlass"
          onError={() => setShowAvatar(false)}
        />
      ) : null}
      <div className="mb-1 font-display text-[1.3rem] font-medium">{role}</div>
      <div className="mb-[22px] text-[0.9rem] text-textMuted">{location}</div>
      <div className="mb-[22px] flex gap-[22px]">
        {stats.map((stat) => (
          <div key={stat.label}>
            <b className="block font-display text-[1.6rem] font-semibold text-olive">{stat.value}</b>
            <span className="text-[0.78rem] text-textMuted">{stat.label}</span>
          </div>
        ))}
      </div>
      <hr className="my-[18px] border-0 border-t border-borderGlass" />
      <div className="flex flex-wrap gap-2">
        {stackPills.map((pill) => (
          <span key={pill} className="pill">
            {pill}
          </span>
        ))}
      </div>
    </Card>
  );
}

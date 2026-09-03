import type { Profile } from "../types";
import { HeroCard } from "./HeroCard";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="grid items-center gap-12 border-0 pb-16 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:pt-[88px]">
      <div>
        <span className="fade-up mb-[18px] inline-block font-mono text-[0.82rem] text-olive">
          {profile.heroEyebrow}
        </span>
        <h1 className="fade-up d1 mb-[22px] font-display text-[clamp(2.6rem,6vw,4.1rem)] font-semibold leading-[1.03] tracking-[-0.01em]">
          {profile.heroHeadline}
        </h1>
        <p className="fade-up d2 mb-8 max-w-[46ch] text-[1.08rem] text-textMuted">{profile.heroLede}</p>
        <div className="fade-up d3 flex flex-wrap gap-3.5">
          <a href={profile.heroPrimaryCta.href} className="btn btn-primary">
            {profile.heroPrimaryCta.label}
          </a>
          <a href={profile.heroSecondaryCta.href} className="btn btn-ghost">
            {profile.heroSecondaryCta.label}
          </a>
        </div>
      </div>
      <div className="fade-up d3">
        <HeroCard
          role={profile.role}
          location={profile.locationShort}
          stats={profile.stats}
          stackPills={profile.stackPills}
          avatarSrc={profile.avatarSrc}
          avatarAlt={profile.avatarAlt}
        />
      </div>
    </section>
  );
}

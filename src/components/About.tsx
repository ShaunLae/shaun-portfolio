import type { AboutTimelineEntry, TextSegment } from "../types";

interface AboutProps {
  eyebrow: string;
  paragraphs: TextSegment[][];
  timeline: AboutTimelineEntry[];
}

export function About({ eyebrow, paragraphs, timeline }: AboutProps) {
  return (
    <section id="about" className="border-t border-borderGlass py-[76px]">
      <div className="section-head mb-10 max-w-[60ch]">
        <h2 className="mb-2.5 font-display text-[clamp(1.7rem,3.2vw,2.3rem)] font-semibold">About</h2>
        <p className="text-textMuted">{eyebrow}</p>
      </div>
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          {paragraphs.map((segments, index) => (
            <p key={index} className="mb-4 text-textMuted">
              {segments.map((segment) =>
                segment.strong ? (
                  <strong key={segment.text} className="font-semibold text-text">
                    {segment.text}
                  </strong>
                ) : (
                  <span key={segment.text}>{segment.text}</span>
                ),
              )}
            </p>
          ))}
        </div>
        <div className="flex flex-col">
          {timeline.map((item) => (
            <div
              key={item.year + item.title}
              className="grid grid-cols-[80px_1fr] gap-4 border-b border-borderGlass py-4 last:border-b-0"
            >
              <span className="font-mono text-[0.78rem] text-olive">{item.year}</span>
              <div>
                <b className="mb-0.5 block text-[0.95rem] font-semibold">{item.title}</b>
                <span className="text-[0.85rem] text-textMuted">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

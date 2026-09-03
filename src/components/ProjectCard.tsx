import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass mb-[26px] grid overflow-hidden md:grid-cols-[0.9fr_1.1fr]">
      <div className="flex min-h-[140px] flex-col justify-between border-b border-borderGlass bg-[radial-gradient(circle_at_30%_20%,rgba(110,123,61,0.22),transparent_55%),linear-gradient(160deg,#EFEDDE,#F6F4EA)] px-[30px] py-[34px] md:min-h-[220px] md:border-b-0 md:border-r">
        <span className="w-fit rounded-full border border-borderGlass px-2.5 py-1 font-mono text-[0.72rem] text-olive">
          {project.tag}
        </span>
        <span className="font-display text-[2.6rem] text-olive/30">{project.number}</span>
      </div>
      <div className="px-8 py-[30px]">
        <h3 className="mb-2.5 font-display text-[1.4rem] font-semibold">{project.title}</h3>
        <div className="mb-3.5 font-mono text-[0.85rem] text-oliveDeep">{project.role}</div>
        <p className="mb-4 text-[0.94rem] text-textMuted">{project.description}</p>
        <div className="mb-[18px] flex flex-wrap gap-2">
          {project.meta.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-olive pb-0.5 text-[0.87rem] no-underline hover:text-olive"
              >
                Live site
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-olive pb-0.5 text-[0.87rem] no-underline hover:text-olive"
              >
                GitHub
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}

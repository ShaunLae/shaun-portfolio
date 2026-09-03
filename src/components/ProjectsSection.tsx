import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";

interface ProjectsSectionProps {
  eyebrow: string;
  projects: Project[];
}

export function ProjectsSection({ eyebrow, projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="border-t border-borderGlass py-[76px]">
      <div className="mb-10 max-w-[60ch]">
        <h2 className="mb-2.5 font-display text-[clamp(1.7rem,3.2vw,2.3rem)] font-semibold">
          Selected projects
        </h2>
        <p className="text-textMuted">{eyebrow}</p>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.number} project={project} />
      ))}
    </section>
  );
}

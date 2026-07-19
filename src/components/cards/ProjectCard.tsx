import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article
      className={`group h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={
          project.featured
            ? "grid h-full lg:grid-cols-[0.75fr_1.25fr]"
            : "flex h-full flex-col"
        }
      >
        <div className="relative flex min-h-56 items-center justify-center overflow-hidden border-b border-slate-800 bg-slate-950/70 lg:border-b-0 lg:border-r">
          <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:scale-105 group-hover:border-cyan-400/40">
            <Icon size={44} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {project.category}
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-slate-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {(project.repository || project.demo) && (
            <div className="mt-auto flex flex-wrap gap-4 pt-8">
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  <FaGithub size={19} />
                  Repositorio
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  <ExternalLink size={19} />
                  Ver proyecto
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
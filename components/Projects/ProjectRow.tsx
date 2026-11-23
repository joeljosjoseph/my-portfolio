import React from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { TECH } from "@/data/tech";

type Props = { project: Project; onOpen: (project: Project) => void };

const tileSize = "h-16 w-16 shrink-0 sm:h-20 sm:w-20";

const ProjectRow = ({ project, onOpen }: Props) => {
  const icons = project.tech
    .map((key) => TECH[key])
    .filter((tech) => tech.Icon)
    .slice(0, 6);
  const builtWith = project.tech.map((key) => TECH[key].label).join(", ");

  return (
    <li className="border-t border-white/20 last:border-b">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6 sm:py-6"
      >
        {project.image ? (
          <span className={`relative overflow-hidden ${tileSize}`}>
            <Image
              src={project.image}
              alt=""
              fill
              sizes="80px"
              className="object-cover grayscale transition duration-500 group-hover:grayscale-0 motion-reduce:transition-none"
            />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className={`grid place-items-center border border-white/30 font-display text-xl font-bold text-white/80 transition-colors group-hover:border-accent-soft group-hover:text-accent-soft ${tileSize}`}
          >
            {project.monogram}
          </span>
        )}

        <span className="min-w-0 flex-1 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-soft sm:text-3xl">
              {project.title}
            </span>
            {project.learning && (
              <span className="border border-white/40 px-2 py-0.5 text-xs text-white/70">
                Learning project
              </span>
            )}
          </span>
          <span className="mt-1 block text-sm text-white/60">
            {project.summary}
          </span>
        </span>

        {icons.length > 0 && (
          <span className="hidden items-center gap-3 text-xl text-white/60 md:flex">
            {icons.map(({ label, Icon }) =>
              Icon ? <Icon key={label} aria-hidden="true" /> : null
            )}
          </span>
        )}
        {builtWith && <span className="sr-only">Built with {builtWith}.</span>}

        <span className="hidden text-sm text-white/60 transition-colors group-hover:text-accent-soft sm:block">
          Details
        </span>
      </button>
    </li>
  );
};

export default ProjectRow;

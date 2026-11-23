"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import TechTag from "../TechTag/TechTag";

type Props = { project: Project; onClose: () => void };

const ProjectDialog = ({ project, onClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `${project.slug}-title`;

  // A native modal dialog gives us the focus trap, Escape to close and the backdrop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // No dialog.close() here: removing the element already takes it out of the top layer, and
    // closing it fires a "close" event that would ask the page to drop the project again
    // (React Strict Mode runs this cleanup once in development, which closed it instantly).
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        // Clicks on the dimmed backdrop land on the dialog element itself.
        if (event.target === dialogRef.current) onClose();
      }}
      className="m-auto max-h-[88vh] w-[min(92vw,640px)] overflow-y-auto bg-white p-0 text-black open:animate-dialog-in backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        {project.image ? (
          <div className="relative aspect-[16/9] w-full bg-fog">
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              fill
              sizes="(min-width: 640px) 640px, 92vw"
              className={
                project.imageFit === "contain"
                  ? "object-contain"
                  : "object-cover"
              }
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="grid h-40 w-full place-items-center bg-accent font-display text-6xl font-extrabold text-white"
          >
            {project.monogram}
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-accent"
        >
          Close
        </button>
      </div>

      <div className="flex flex-col gap-6 px-6 py-8 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3
            id={titleId}
            className="font-display text-3xl font-bold tracking-tight"
          >
            {project.title}
          </h3>
          {project.learning && (
            <span className="border border-black/30 px-2 py-0.5 text-xs text-black/70">
              Learning project
            </span>
          )}
        </div>

        <p className="leading-relaxed text-black/75">{project.description}</p>
        {project.note && (
          <p className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-black/70">
            {project.note}
          </p>
        )}

        {project.tech.length > 0 && (
          <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechTag key={tech} tech={tech} />
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black px-6 py-3 text-white transition-colors hover:bg-accent"
            >
              Open demo
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-6 py-3 transition-colors hover:bg-black hover:text-white"
          >
            View code
          </a>
        </div>
      </div>
    </dialog>
  );
};

export default ProjectDialog;

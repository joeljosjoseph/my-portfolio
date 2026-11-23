"use client";
import React, { useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import FilterBar from "../Projects/FilterBar";
import ProjectDialog from "../Projects/ProjectDialog";
import ProjectRow from "../Projects/ProjectRow";
import SectionTitle from "../SectionTitle/SectionTitle";

const FILTERS = [
  "All",
  "Full Stack",
  "AI",
  "Front-End",
  "Desktop",
  "Web3",
] as const;
type Filter = (typeof FILTERS)[number];

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(filter));

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="dark-surface relative bg-black py-24 text-white sm:py-32"
    >
      <div className="page-width">
        <SectionTitle id="projects-title">Projects.</SectionTitle>
        <div className="mt-8">
          <FilterBar filters={FILTERS} active={filter} onChange={setFilter} />
        </div>
        <p role="status" className="sr-only">
          Showing {visible.length}{" "}
          {visible.length === 1 ? "project" : "projects"}
        </p>
        <ul key={filter} className="mt-10 animate-fade-in">
          {visible.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              onOpen={setSelected}
            />
          ))}
        </ul>
      </div>

      {selected && (
        <ProjectDialog project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;

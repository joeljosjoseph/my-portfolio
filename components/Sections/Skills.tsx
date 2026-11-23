import React from "react";
import { SKILL_GROUPS } from "@/data/skills";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import SectionTitle from "../SectionTitle/SectionTitle";
import TechTag from "../TechTag/TechTag";

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative bg-fog py-24 sm:py-32"
    >
      <div className="page-width">
        <SectionTitle id="skills-title">Skills.</SectionTitle>
        <div className="mt-12 border-b border-black/25">
          {SKILL_GROUPS.map((group, index) => (
            <AnimateOnScroll key={group.name} delay={index * 60}>
              <div className="grid gap-4 border-t border-black/25 py-8 md:grid-cols-[240px_1fr] md:gap-10">
                <h3 className="font-display text-xl font-semibold">
                  {group.name}
                </h3>
                <div className="flex flex-col gap-5">
                  <p className="max-w-[60ch] leading-relaxed text-black/70">
                    {group.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.tech.map((tech) => (
                      <TechTag key={tech} tech={tech} />
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

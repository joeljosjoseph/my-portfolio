import React from "react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import SectionTitle from "../SectionTitle/SectionTitle";

const SERVICES = [
  {
    title: "Front-end development",
    description:
      "I build responsive interfaces with React, Next.js, TypeScript and Tailwind CSS, and I'm comfortable with CSS and SCSS.",
  },
  {
    title: "Full-stack and real-time apps",
    description:
      "I build APIs and real-time features with Node.js, Express and Socket.io, and connect them to PostgreSQL, MySQL or Firebase.",
  },
  {
    title: "AI features",
    description:
      "I add language-model features to web apps, such as a chat interface on top of the OpenAI API.",
  },
  {
    title: "Performance and optimization",
    description:
      "I minimize load times, optimize code and follow best practices so applications stay fast and efficient.",
  },
  {
    title: "Code quality and testing",
    description:
      "I write unit and end-to-end tests with Vitest and Playwright and set up CI on GitHub Actions, so changes are safe to ship.",
  },
  {
    title: "Collaboration and communication",
    description:
      "I communicate clearly and work well in teams, which keeps projects moving.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative bg-white py-24 sm:py-32"
    >
      <div className="page-width">
        <SectionTitle id="services-title">Services.</SectionTitle>
        <ul className="mt-12 border-b border-black/20">
          {SERVICES.map((service, index) => (
            <li key={service.title} className="border-t border-black/20">
              <AnimateOnScroll delay={index * 40}>
                <div className="grid gap-3 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10">
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="max-w-[58ch] leading-relaxed text-black/70">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;

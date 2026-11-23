"use client";
import { useEffect, useRef, useState } from "react";

const ROLES = [
  "front-end developer",
  "full-stack developer",
  "Next.js developer",
  "developer exploring AI agents",
];

const HomeSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roleRef = useRef<HTMLSpanElement>(null);

  // The CSS animation types the role in and out; swap the text each time it has fully gone.
  useEffect(() => {
    const element = roleRef.current;
    if (!element) return;
    const showNextRole = () =>
      setRoleIndex((current) => (current + 1) % ROLES.length);
    element.addEventListener("animationiteration", showNextRole);
    return () =>
      element.removeEventListener("animationiteration", showNextRole);
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="dark-surface relative flex min-h-[100svh] items-center text-white"
    >
      <div className="page-width pt-20">
        <h1
          id="home-title"
          className="font-display font-extrabold leading-[0.95] tracking-tighter [font-size:clamp(3.25rem,12vw,8.5rem)]"
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="hero-line" style={{ ["--d" as string]: "0ms" }}>
              Joel Jos
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="hero-line" style={{ ["--d" as string]: "120ms" }}>
              Joseph.
            </span>
          </span>
        </h1>

        <p
          className="hero-fade mt-8 flex text-lg sm:text-2xl"
          style={{ ["--d" as string]: "700ms" }}
        >
          <span className="sr-only">
            I&apos;m a front-end and full-stack developer.
          </span>
          <span aria-hidden="true" className="flex">
            <span className="whitespace-nowrap">I&apos;m a&nbsp;</span>
            <span
              ref={roleRef}
              className="landing-page-bio whitespace-nowrap border-r-2 border-white/70 font-medium"
            >
              {ROLES[roleIndex]}&nbsp;
            </span>
          </span>
        </p>

        <div
          className="hero-fade mt-12 flex flex-wrap gap-4"
          style={{ ["--d" as string]: "900ms" }}
        >
          <a
            href="#projects"
            className="bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-accent-soft"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="border border-white/60 px-6 py-3 transition-colors hover:bg-white hover:text-black"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

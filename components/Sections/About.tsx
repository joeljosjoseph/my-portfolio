import React from "react";
import Image from "next/image";
import Profile from "@/public/images/Profile.jpg";
import { PDF_DOWNLOAD } from "@/lib/constants";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative bg-white py-24 sm:py-32"
    >
      <div className="page-width grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <AnimateOnScroll>
          <SectionTitle id="about-title">About me.</SectionTitle>
          <div className="mt-8 flex max-w-[58ch] flex-col gap-5 text-base leading-relaxed text-black/70 sm:text-lg">
            <p>
              I&apos;m a front-end developer who works mostly in TypeScript,
              React and Next.js, building responsive interfaces.
            </p>
            <p>
              Lately I&apos;ve been going full stack. Hot Takes, a real-time
              multiplayer game, runs on Node, Express and Socket.io, and I&apos;ve
              built a chatbot on the OpenAI API. I&apos;m also learning how AI
              agents use tools and retrieval (RAG).
            </p>
            <p>
              I enjoy Web3 too, writing smart contracts in Solidity. I&apos;m
              open to new challenges where I can use these skills and keep
              expanding them.
            </p>
          </div>
          <a
            href={PDF_DOWNLOAD}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-black px-6 py-3 text-white transition-colors hover:bg-accent"
          >
            Download CV
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150} className="order-first md:order-none">
          <div className="relative mx-auto aspect-square w-full max-w-[260px] shadow-[14px_14px_0_0_#000] md:max-w-none">
            <Image
              src={Profile}
              alt="Portrait of Joel"
              fill
              sizes="(min-width: 768px) 400px, 260px"
              className="object-cover object-left-top grayscale transition duration-500 hover:grayscale-0 motion-reduce:transition-none"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;

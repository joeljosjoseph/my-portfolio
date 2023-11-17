import React from "react";
import ReactIcon from "@/public/icons/ReactIcon.svg";
import FirebaseIcon from "@/public/icons/FirebaseIcon.svg";
import CssIcon from "@/public/icons/CssIcon.svg";
import HtmlIcon from "@/public/icons/HtmlIcon.svg";
import TypescriptIcon from "@/public/icons/TypescriptIcon.svg";
import JavascriptIcon from "@/public/icons/JavascriptIcon.svg";
import Image from "next/image";
import SkillCard from "../Cards/SkillCard";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className="min-h-[100vh] py-20 px-4 relative bg-[#e2e2e2] mt-[-2px]"
    >
      <div className="custom-shape-divider-top-1700040623">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="min-h-[100vh] w-full flex flex-col justify-center gap-6 sm:gap-10">
        <p className="text-4xl max-w-[1000px] mx-auto w-full">Skills.</p>
        <div className="max-w-[1000px] w-full h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-12 xl:gap-24 mx-auto ">
          <AnimateOnScroll delay="delay-[100ms]">
            <SkillCard
              image={ReactIcon}
              altText="react-icon"
              description="I specialize in React, crafting dynamic user interfaces with modular components and state management. "
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-[175ms]">
            <SkillCard
              image={TypescriptIcon}
              altText="typescript-icon"
              description="I elevate JS development with TypeScript for enhanced type safety and scalable, robust applications."
            />{" "}
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-[250ms]">
            <SkillCard
              image={FirebaseIcon}
              altText="firebase-icon"
              description="I utilize Firebase to empower real-time sync enhancing the efficiency and responsiveness of web applications."
            />{" "}
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-[325ms]">
            <SkillCard
              image={JavascriptIcon}
              altText="javascript-icon"
              description="I wield JavaScript to craft dynamic web apps, leveraging its versatility for seamless user experiences."
            />{" "}
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-[400ms]">
            <SkillCard
              image={HtmlIcon}
              altText="html-icon"
              description="I harness HTML5 for creating modern & structured web content, ensuring interactive user experience."
            />{" "}
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-[475ms]">
            <SkillCard
              image={CssIcon}
              altText="css-icon"
              description="I style with CSS, combining aesthetics and responsiveness to create visually pleasing & user-friendly interfaces."
            />{" "}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import ServiceCard from "../Cards/ServiceCard";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

type Props = {};

const Services = (props: Props) => {
  return (
    <section
      id="services"
      className="min-h-[100vh] py-20 px-4 relative bg-white mt-[-2px]"
    >
      <div className="custom-shape-divider-top-1700159661">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="min-h-[100vh] w-full flex flex-col justify-center gap-10">
        <p className="text-4xl max-w-[1000px] mx-auto w-full">Services.</p>
        <div className="max-w-[1000px] w-full h-full flex flex-col justify-between gap-4 items-center mx-auto">
          {" "}
          <ul className="">
            <AnimateOnScroll delay="delay-[100ms]">
              <li className="flex">
                <span className="inline-block w-3 h-3 bg-black rounded-full m-2 sm:my-6"></span>
                <ServiceCard
                  title="Front-end Development"
                  description="With over a year of experience, I excel in front-end development, leveraging React, TypeScript, and Tailwind CSS. Proficient in CSS and SCSS, I create visually stunning, responsive interfaces for optimal user experiences."
                />
              </li>
            </AnimateOnScroll>
            <AnimateOnScroll delay="delay-[150ms]">
              <li className="flex">
                <span className="inline-block w-3 h-3 bg-black rounded-full m-2 sm:my-6"></span>
                <ServiceCard
                  title="Performance and Optimization"
                  description="With a focus on performance optimization, I elevate web applications using strategic techniques. Expertise in minimizing load times, optimizing code, and employing best practices for seamless and efficient user experiences."
                />
              </li>
            </AnimateOnScroll>
            <AnimateOnScroll delay="delay-[200ms]">
              <li className="flex">
                <span className="inline-block w-3 h-3 bg-black rounded-full m-2 sm:my-6"></span>
                <ServiceCard
                  title=" Collaboration and Communication"
                  description="As a collaborative front-end developer, I thrive on effective communication and teamwork. With strong interpersonal skills, I contribute positively to projects, fostering a cohesive environment for successful outcomes."
                />
              </li>
            </AnimateOnScroll>
            <AnimateOnScroll delay="delay-[250ms]">
              <li className="flex">
                <span className="inline-block w-3 h-3 bg-black rounded-full m-2 sm:my-6"></span>
                <ServiceCard
                  title="Code quality and Testing"
                  description="Setting a standard for best-in-class code quality, I leverage the latest technologies and tools to deliver top-notch front-end solutions. Meticulous in adopting industry best practices, my work reflects a commitment to excellence, innovation, and comprehensive testing methodologies for robust and reliable applications."
                />
              </li>
            </AnimateOnScroll>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

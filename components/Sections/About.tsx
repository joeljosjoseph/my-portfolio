import React from "react";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import Image from "next/image";
import Profile from "@/public/Profile.jpg";

type Props = {};

const About = (props: Props) => {
  const handleDownload = () => {
    // Example: Specify the path to the file in the public directory
    const filePath = "/files/resume.pdf";

    // Create a temporary link element
    const link = document.createElement("a");

    // Set the download attribute and create a URL from the file path
    link.download = "resume.pdf";
    link.href = filePath;

    // Trigger a click event on the link
    link.click();
  };

  return (
    <section
      id="about"
      className="min-h-[100vh] py-20 px-4 flex justify-center items-center relative bg-white mt-[-2px]"
    >
      <div className="max-w-[1000px] mx-auto  my-auto flex gap-10">
        <div className="flex flex-1 flex-wrap gap-10">
          <AnimateOnScroll>
            <div className="flex flex-col gap-2">
              <p className="text-4xl">About me.</p>
              <p className="text-lg text-black/60 ">
                I am a front-end developer, where my expertise lies in
                technologies such as TypeScript, HTML, CSS, and Next.js.
                <br />
                <br /> I bring a wealth of experience in crafting dynamic and
                responsive user interfaces. In addition to my proficiency in
                traditional web development, I have a strong passion in Web3
                development, leveraging Solidity for smart contract creation.
                <br />
                <br />{" "}
                <span className="hidden lg:flex">
                  I am open to exploring new challenges that allow me to apply
                  my existing skills while continually expanding my expertise in
                  TypeScript, HTML, CSS, Next.js, and Solidity.
                </span>{" "}
              </p>
              <button
                onClick={handleDownload}
                className="w-fit px-5 py-3 hover:bg-black/80 focus:bg-black/80 hover:text-white focus:text-white mt-2 border-[1px] border-black/90 origin-right transition-all ease-linear duration-300"
              >
                Download CV
              </button>
            </div>
          </AnimateOnScroll>
        </div>
        <div className="hidden md:flex flex-1 py-10 px-6">
          {" "}
          <AnimateOnScroll delay="delay-700">
            <Image
              src={Profile}
              alt="profile-image"
              className="h-[calc(100%-20px)] w-full object-cover object-left-top  shadow-[15px_15px_0px_0px_rgba(0,0,0,0.72)] "
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;

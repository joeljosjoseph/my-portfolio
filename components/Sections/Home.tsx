"use client";
import { useEffect, useState } from "react";

const TITLES = ["FRONT-END DEVELOPER", "REACT DEVELOPER", "WEB DEVELOPER"];

type Props = {};

const HomeSection = (props: Props) => {
  const [bioText, setBioText] = useState(0);

  useEffect(() => {
    const bioElement = document.getElementById("bio-text");

    if (bioElement) {
      const handleAnimationIteration = () => {
        setBioText((prevBioText) => (prevBioText + 1) % 3);
      };

      bioElement.addEventListener(
        "animationiteration",
        handleAnimationIteration
      );

      return () => {
        // Clean up the event listener on component unmount
        bioElement.removeEventListener(
          "animationiteration",
          handleAnimationIteration
        );
      };
    }
  }, [setBioText]);
  return (
    <section id="home" className="h-[120vh] min-h-[300px] relative">
      {/* <Image
            alt="laptop"
            src={LaptopBackground}
            className="bg-blend-multiply w-full brightness-50 object-cover h-[100vh] absolute"
          /> */}
      <div className="absolute text-white top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-10 justify-center items-center px-4">
        <div className="text-3xl lg:text-7xl font-bold whitespace-nowrap">
          HELLO, I'M JOEL
        </div>
        <div
          className={`landing-page-bio-wrapper flex w-full justify-center text-lg lg:text-2xl`}
        >
          <span className="whitespace-nowrap">I am a&nbsp;</span>
          <span
            id="bio-text"
            className="border-r-[2px] border-white/70 landing-page-bio whitespace-nowrap font-medium"
          >
            {TITLES[bioText]}&nbsp;
          </span>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1700029275">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HomeSection;

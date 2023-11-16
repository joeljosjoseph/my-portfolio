"use client";
import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

type Props = {};

const Header = (props: Props) => {
  // state to show/hide sidebar for smaller screens
  const [showSidebar, setShowSidebar] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [activeSection, setActiveSection] = useState("home");

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const NavLinkClass = (id: string) => {
    return `cursor-pointer before:transition-transform ease-linear duration-300 group before:absolute before:bottom-[-5px] before:content-[' '] before:w-full before:h-[2px] before:rounded-xl before:bg-black lg:before:bg-white ${
      activeSection === id
        ? "before:origin-left before:scale-x-100"
        : "before:scale-x-0"
    } hover:before:scale-x-100 before:origin-right hover:before:origin-left`;
  };
  const handleClickOutside = (event: MouseEvent) => {
    // Check if the sidebar is open and the clicked element is outside the sidebar
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowSidebar(false);
    }
  };

  const handleNavClick = (link: string) => {
    if (showSidebar) setShowSidebar(false);
    // Scroll to the section with the corresponding ID
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("scroll", (event: Event) => {
      if (window.scrollY > 150) {
        setBgColor("bg-black/80");
      } else {
        setBgColor("bg-transparent");
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate which section is in view based on scroll position
      const sections = document.querySelectorAll("section");
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2 &&
          !found
        ) {
          setActiveSection(section.id);
          found = true;
        }
      });
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${bgColor} z-[1000] py-4 md:py-8 lg:py-0 px-8 lg:px-16 flex justify-between items-center w-full duration-1000 group backdrop-blur-sm `}
    >
      <h1 className="text-4xl sm:text-5xl text-white font-extrabold">JJJ</h1>
      {/* mobile screen sidebar */}
      <div>
        <CiMenuBurger
          className="text-white text-2xl lg:hidden"
          onClick={() => setShowSidebar(true)}
        />
      </div>
      <div
        ref={sidebarRef}
        className={`lg:hidden absolute bg-white/90 h-[100vh] w-[70vw] top-0 right-0 transition-all ease-linear duration-300 ${
          showSidebar ? "translate-x-[0px]" : "translate-x-[1000px]"
        }`}
      >
        <div className="flex flex-col gap-6 py-8 px-5 font-medium">
          <div className="relative w-fit">
            <p
              className={NavLinkClass("home")}
              onClick={() => handleNavClick("home")}
            >
              Home
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass("about")}
              onClick={() => handleNavClick("about")}
            >
              About Me
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass("skills")}
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass("services")}
              onClick={() => handleNavClick("services")}
            >
              Services
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass("experience")}
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass("contact")}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex gap-12 py-8 px-5 font-medium text-white group-hover:xl:gap-16 group-focus:xl:gap-16">
        <div className="relative w-fit">
          <p
            className={NavLinkClass("home")}
            onClick={() => handleNavClick("home")}
          >
            Home
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p
            className={NavLinkClass("about")}
            onClick={() => handleNavClick("about")}
          >
            About Me
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p
            className={NavLinkClass("skills")}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p
            className={NavLinkClass("services")}
            onClick={() => handleNavClick("services")}
          >
            Services
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p
            className={NavLinkClass("experience")}
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p
            className={NavLinkClass("contact")}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

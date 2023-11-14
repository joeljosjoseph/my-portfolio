"use client";
import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

type Props = {};

const NavLinkClass =
  "cursor-pointer before:transition-transform ease-linear duration-300 group before:absolute before:bottom-[-5px] before:content-[' '] before:w-full before:h-[2px] before:rounded-xl before:bg-black lg:before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-right hover:before:origin-left";

const Header = (props: Props) => {
  // state to show/hide sidebar for smaller screens
  const [showSidebar, setShowSidebar] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  const sidebarRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div
      className={`fixed ${bgColor} z-10 py-4 md:py-8 lg:py-0 px-8 lg:px-16 flex justify-between items-center w-full duration-1000 group`}
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
            <p className={NavLinkClass} onClick={() => handleNavClick("home")}>
              Home
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p className={NavLinkClass} onClick={() => handleNavClick("about")}>
              About Me
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass}
              onClick={() => handleNavClick("profile")}
            >
              Profile
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass}
              onClick={() => handleNavClick("services")}
            >
              Services
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass}
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </p>
          </div>
          <div className="relative w-fit">
            {" "}
            <p
              className={NavLinkClass}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex gap-12 py-8 px-5 font-medium text-white group-hover:xl:gap-20 group-focus:xl:gap-20">
        <div className="relative w-fit">
          <p className={NavLinkClass} onClick={() => handleNavClick("home")}>
            Home
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p className={NavLinkClass} onClick={() => handleNavClick("about")}>
            About Me
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p className={NavLinkClass} onClick={() => handleNavClick("profile")}>
            Profile
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p
            className={NavLinkClass}
            onClick={() => handleNavClick("services")}
          >
            Services
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p
            className={NavLinkClass}
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </p>
        </div>
        <div className="relative w-fit">
          {" "}
          <p className={NavLinkClass} onClick={() => handleNavClick("contact")}>
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

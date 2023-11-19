import Link from "next/link";
import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  FACEBOOK,
  GITHUB,
  INSTAGRAM,
  LINKED_IN,
  TWITTER,
} from "@/public/constants/constants";

type Props = {};

const Footer = (props: Props) => {
  const iconClass =
    "text-[16px] sm:text-[24px] hover:scale-[120%] transition-all ease-in duration-300 cursor-pointer";
  return (
    <div
      className={`bg-black/80 py-4 md:py-8 lg:py-8 px-8 lg:px-16 flex flex-col justify-center gap-4 sm:gap-8 items-center w-full duration-1000 group backdrop-blur-sm `}
    >
      <div className="flex gap-4 sm:gap-6 text-white">
        <Link href={TWITTER} rel="noopener noreferrer" target="_blank">
          <FaTwitter className={iconClass} onClick />
        </Link>
        <Link href={FACEBOOK} rel="noopener noreferrer" target="_blank">
          <FaFacebook className={iconClass} />
        </Link>
        <Link href={INSTAGRAM} rel="noopener noreferrer" target="_blank">
          <FaInstagram className={iconClass} />
        </Link>
        <Link href={GITHUB} rel="noopener noreferrer" target="_blank">
          <FaGithub className={iconClass} />
        </Link>
        <Link href={LINKED_IN} rel="noopener noreferrer" target="_blank">
          <FaLinkedin className={iconClass} />
        </Link>
      </div>
      <div className="flex gap-2 text-white/70 items-center">
        <FaCopyright className="text-[12px] sm:text-[16px]" />
        <span className="text-[10px] sm:text-sm">2024 Joel Jos Joseph</span>
      </div>
    </div>
  );
};

export default Footer;

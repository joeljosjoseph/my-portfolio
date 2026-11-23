import React from "react";
import {
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
} from "@/lib/constants";

const SOCIALS = [
  { label: "GitHub", href: GITHUB, Icon: FaGithub },
  { label: "LinkedIn", href: LINKED_IN, Icon: FaLinkedin },
  { label: "Twitter", href: TWITTER, Icon: FaTwitter },
  { label: "Instagram", href: INSTAGRAM, Icon: FaInstagram },
  { label: "Facebook", href: FACEBOOK, Icon: FaFacebook },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="dark-surface relative bg-black text-white">
      <div className="page-width flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <p className="text-sm text-white/70">
          &copy; {year} Joel Jos Joseph
        </p>
        <ul className="flex gap-5 text-2xl">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-accent-soft"
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

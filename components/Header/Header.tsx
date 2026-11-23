"use client";
import React, { useEffect, useRef, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Darken the bar once the page has scrolled past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section that is crossing the middle of the screen.
  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // While the mobile menu is open: close on Escape, lock page scroll, focus the close button.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="dark-surface fixed inset-x-0 top-0 z-[500] text-white">
      {/* The background sits on its own layer so the blur doesn't trap the fixed mobile menu. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-black/90 backdrop-blur transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="page-width relative flex items-center justify-between py-4">
        <a
          href="#home"
          aria-label="Joel Jos Joseph, back to top"
          className="font-display text-3xl font-extrabold tracking-tight"
        >
          JJJ
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeSection === link.id ? "location" : undefined}
                  className={`border-b-2 py-1 transition-colors ${
                    activeSection === link.id
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="border border-white/50 px-4 py-2 text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[600] md:hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-fade-in bg-black/70"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="absolute right-0 top-0 flex h-full w-[75vw] max-w-sm animate-slide-in flex-col bg-white px-6 py-4 text-black"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="self-end border border-black/40 px-4 py-2 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
            <ul className="mt-8 flex flex-col gap-6">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={
                      activeSection === link.id ? "location" : undefined
                    }
                    onClick={() => setMenuOpen(false)}
                    className={`font-display text-2xl font-semibold ${
                      activeSection === link.id ? "text-accent" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

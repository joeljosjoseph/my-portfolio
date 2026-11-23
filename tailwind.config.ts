import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Bricolage Grotesque Variable"',
          "system-ui",
          "sans-serif",
        ],
        mono: ['"Roboto Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        fog: "#E7E7E7",
        // Used sparingly: focus rings, hover states, the active filter.
        accent: { DEFAULT: "#2B4BFF", soft: "#93A4FF" },
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "dialog-in": {
          from: { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "fade-in": "fade-in 300ms ease-out both",
        "slide-in": "slide-in 250ms ease-out both",
        "dialog-in": "dialog-in 250ms ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;

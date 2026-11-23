import type { TechKey } from "./tech";

export type SkillGroup = {
  name: string;
  description: string;
  tech: TechKey[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Front-end",
    description:
      "Responsive interfaces built from reusable components in React and Next.js, written in TypeScript and styled with Tailwind CSS.",
    tech: [
      "react",
      "nextjs",
      "typescript",
      "javascript",
      "html",
      "css",
      "tailwind",
    ],
  },
  {
    name: "Back-end and real-time",
    description:
      "APIs and real-time servers in Node.js with Express and Socket.io, backed by PostgreSQL, MySQL or Firebase. I also write Python, including a desktop app with tkinter.",
    tech: [
      "nodejs",
      "express",
      "socketio",
      "bun",
      "postgres",
      "mysql",
      "firebase",
      "php",
      "python",
      "tkinter"
    ],
  },
  {
    name: "AI",
    description:
      "A chatbot built on the OpenAI API, and agents with tool use and retrieval (RAG) that I'm learning to build with Gemini.",
    tech: ["openai", "gemini", "python"],
  },
  {
    name: "Testing and delivery",
    description:
      "Unit and end-to-end tests, continuous integration, and deployment to Vercel and Render.",
    tech: ["vitest", "playwright", "githubactions", "vercel", "render"],
  },
  {
    name: "Web3",
    description:
      "Smart contracts in Solidity developed with Hardhat, with a Next.js front end.",
    tech: ["solidity", "hardhat"],
  },
];

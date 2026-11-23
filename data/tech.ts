import type { IconType } from "react-icons";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPlaywright,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRender,
  SiSocketdotio,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiBun,
} from "react-icons/si";

type TechInfo = { label: string; Icon?: IconType };

const TECH_DEFS = {
  react: { label: "React", Icon: SiReact },
  nextjs: { label: "Next.js", Icon: SiNextdotjs },
  typescript: { label: "TypeScript", Icon: SiTypescript },
  javascript: { label: "JavaScript", Icon: SiJavascript },
  html: { label: "HTML", Icon: SiHtml5 },
  css: { label: "CSS", Icon: SiCss3 },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss },
  nodejs: { label: "Node.js", Icon: SiNodedotjs },
  express: { label: "Express", Icon: SiExpress },
  socketio: { label: "Socket.io", Icon: SiSocketdotio },
  bun: { label: "Bun", Icon: SiBun },
  firebase: { label: "Firebase", Icon: SiFirebase },
  postgres: { label: "PostgreSQL", Icon: SiPostgresql },
  mysql: { label: "MySQL", Icon: SiMysql },
  php: { label: "PHP", Icon: SiPhp },
  openai: { label: "OpenAI", Icon: SiOpenai },
  gemini: { label: "Gemini" },
  python: { label: "Python", Icon: SiPython },
  vitest: { label: "Vitest", Icon: SiVitest },
  playwright: { label: "Playwright", Icon: SiPlaywright },
  githubactions: { label: "GitHub Actions", Icon: SiGithubactions },
  vercel: { label: "Vercel", Icon: SiVercel },
  render: { label: "Render", Icon: SiRender },
  solidity: { label: "Solidity", Icon: SiSolidity },
  hardhat: { label: "Hardhat" },
};

export type TechKey = keyof typeof TECH_DEFS;

export const TECH: Record<TechKey, TechInfo> = TECH_DEFS;

import type { StaticImageData } from "next/image";
import Catering from "@/public/images/Catering.jpg";
import Lottery from "@/public/images/Lottery.jpg";
import Netflix from "@/public/images/Netflix.jpg";
import SocialMedia from "@/public/images/SocialMedia.jpg";
import TicTac from "@/public/images/TicTac.jpg";
import Whatsapp from "@/public/images/Whatsapp.jpg";
import Later from "@/public/images/Later.png";
import type { TechKey } from "./tech";

export type Category = "Front-End" | "Full Stack" | "Web3" | "AI" | "Desktop";

export type Project = {
  slug: string;
  title: string;
  /** One line, shown in the project list. */
  summary: string;
  /** A few sentences, shown in the project dialog. */
  description: string;
  /** Shown under the description, for things a visitor should know before opening the demo. */
  note?: string;
  image?: StaticImageData;
  imageFit?: "cover" | "contain";
  /** Two letters shown on the tile of projects that have no image. */
  monogram?: string;
  tech: TechKey[];
  categories: Category[];
  repo: string;
  demo?: string;
  learning?: boolean;
};

// Newest first. To add a project, add one entry to this list.
export const PROJECTS: Project[] = [
  {
    slug: "hot-takes",
    title: "Hot Takes",
    summary: "A real-time multiplayer party game for the browser.",
    description:
      "Players join a room with a 4-letter code from their phones, answer silly prompts and vote on the best take. The server owns the game state: it validates every request, runs the phase timers, keeps answers anonymous until results are revealed and rejects votes for your own answer. Unit tests (Vitest) and end-to-end tests of a full game (Playwright) run in CI on GitHub Actions.",
    note: "The server runs on Render's free tier, so the first connection after a quiet period can take 30 to 50 seconds.",
    monogram: "HT",
    tech: [
      "nextjs",
      "typescript",
      "tailwind",
      "nodejs",
      "express",
      "socketio",
      "vitest",
      "playwright",
      "githubactions",
      "vercel",
      "render",
    ],
    categories: ["Full Stack"],
    repo: "https://github.com/joeljosjoseph/Hot-takes",
    demo: "https://hot-takes-party-game.vercel.app/",
  },
  {
    slug: "later",
    title: "Later",
    summary: "A task manager for procrastinators that never lets you start.",
    description:
      "Later looks like a normal to-do app, but pressing Start on a task always finds a \"better time\" to begin and gives you a reason why. Every task has a panic bar and a mood, from \"Relax\" to \"Why are you still on this app?\". When a deadline is less than an hour away, delaying is refused and the row turns red. It also generates excuses and suggests productive procrastination. Tasks save automatically between sessions. It comes as a desktop window built with tkinter and as a terminal menu, both sharing the same task logic.",
    note: "Needs Python 3.9 or newer. Run py gui.py for the window or py later.py for the terminal version. A standalone Windows app can be built with PyInstaller.",
    // image: Later,
    // imageFit: "contain",
    monogram: "L",
    tech: ["python", "tkinter"],
    categories: ["Desktop"],
    repo: "https://github.com/joeljosjoseph/Later",
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    summary: "A chatbot built on the OpenAI API.",
    description:
      "A chatbot with a React front end and a Bun and Express back end, written in TypeScript and powered by OpenAI. The repo is set up with Prettier, lint-staged and Husky git hooks, and has scripts for type checking and formatting.",
    monogram: "AC",
    tech: ["react", "typescript", "bun", "express", "openai"],
    categories: ["Full Stack", "AI"],
    repo: "https://github.com/joeljosjoseph/Ai-chatbot",
  },
  {
    slug: "tools-and-rag",
    title: "Tools and RAG",
    summary: "Giving a language model tools and retrieval.",
    description:
      "A learning project on two ways to extend a language model: letting it call tools, and retrieval-augmented generation (RAG).",
    monogram: "TR",
    tech: [],
    categories: ["AI"],
    repo: "https://github.com/joeljosjoseph/tools-and-rag",
    learning: true,
  },
  {
    slug: "ai-agent",
    title: "AI Agent",
    summary: "A small research agent built with Gemini.",
    description:
      "A simple research agent built with Google's Gemini, written while I was learning how agents work. The code is in Python.",
    monogram: "AA",
    tech: ["python", "gemini"],
    categories: ["AI"],
    repo: "https://github.com/joeljosjoseph/ai-agent",
    learning: true,
  },
  {
    slug: "decentralised-lottery",
    title: "Decentralised Lottery",
    summary: "A lottery on the Ethereum blockchain.",
    description:
      "Players send 1 ETH to the contract and it randomly selects a winner. The smart contract is written in Solidity and developed with Hardhat, and a Next.js front end lets people interact with it.",
    image: Lottery,
    tech: ["nextjs", "solidity", "hardhat", "tailwind"],
    categories: ["Web3"],
    repo: "https://github.com/joeljosjoseph/hardhat-lottery",
  },
  {
    slug: "social-media-platform",
    title: "Social Media Platform",
    summary: "Profiles, posts, friendships and private messaging.",
    description:
      "A social platform with user authentication, profile customization, post sharing, a friendship system and private messaging. The front end is React, HTML and CSS, the RESTful API is written in PHP and PostgreSQL stores the data. The layout is responsive across devices.",
    image: SocialMedia,
    tech: ["react", "php", "postgres", "javascript", "html", "css"],
    categories: ["Full Stack"],
    repo: "https://github.com/joeljosjoseph/Social-Media-Website",
  },
  {
    slug: "catering-management-system",
    title: "Catering Management System",
    summary: "Ordering food in bulk, built in PHP and MySQL.",
    description:
      "Customers browse the menu, place orders and make bulk purchases. The back end, also in PHP, handles order processing, inventory management and user authentication, and MySQL stores the data.",
    image: Catering,
    tech: ["php", "mysql", "javascript", "html", "css"],
    categories: ["Full Stack"],
    repo: "https://github.com/joeljosjoseph/Catering-Management-System",
  },
  {
    slug: "netflix-clone",
    title: "Netflix Clone",
    summary: "A React clone of the Netflix interface.",
    description:
      "Content is fetched from an external API, so the catalogue stays up to date. It has content carousels, genre categories and detail views for movies and series, with a responsive layout.",
    image: Netflix,
    tech: ["react", "javascript", "html", "css"],
    categories: ["Front-End"],
    repo: "https://github.com/joeljosjoseph/Netflix-clone",
  },
  {
    slug: "whatsapp-clone",
    title: "WhatsApp Clone",
    summary: "A front-end clone of the WhatsApp interface.",
    description:
      "A React and CSS recreation of the chat view, the contact list and group chat layouts. It is a static design for now, with no messaging back end.",
    image: Whatsapp,
    tech: ["react", "javascript", "html", "css"],
    categories: ["Front-End"],
    repo: "https://github.com/joeljosjoseph/whatsapp-clone",
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    summary: "The classic two-player game in plain JavaScript.",
    description:
      "Two players take turns marking a 3x3 grid. The game shows whose turn it is, announces a win or a draw and lets you restart.",
    image: TicTac,
    tech: ["html", "javascript", "css"],
    categories: ["Front-End"],
    repo: "https://github.com/joeljosjoseph/tictactoe",
  },
];

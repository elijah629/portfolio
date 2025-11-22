import { StaticImageData } from "next/image";
import web2050 from "../images/web2050.png";
import flippy from "../images/flippy.png";
import ttfu from "../images/ttfu.png";
import sonai from "../images/sonai.png";
import pvbc from "../images/pvbc.png";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: StaticImageData;
  technologies: string[];
  link: {
    github: string;
    live?: string;
  };
  tags: string[];
  date: Date;
}

export const projects: Record<"web" | "hardware" | "ml" | "nix", Project[]> = {
  web: [
    {
      slug: "web2050",
      title: "web2050",
      description: "The internet, except everything was vibecoded.",
      image: web2050,
      technologies: ["Rust", "LLMs", "Hackclub"],
      link: {
        github: "https://github.com/elijah629/web2050",
        live: "https://ai.dino.icu",
      },
      tags: ["backend", "streaming", "ai"],
      date: new Date("August 25 2025"),
    },
    {
      slug: "ttfu",
      title: "Tic-Tac-Fuck-You",
      description: "Tic Tac Toe, but the AI hates you",
      image: ttfu,
      technologies: ["Next.js", "LLMs", "TailwindCSS"],
      link: {
        github: "https://github.com/elijah629/tic-tac-fuck-you",
        live: "https://ttfu.eli.best",
      },
      tags: ["web-game", "balatro-inspired", "PvE"],
      date: new Date("June 29 2025"),
    },
    {
      slug: "pvbc",
      title: "PVBC",
      description:
        'pvbc, or "Page View Badge Counter" is a little API which gives a shields.io-esq badge with a page view count!',
      image: pvbc,
      technologies: ["Rust", "Server", "shields.io"],
      link: {
        github: "https://github.com/elijah629/tic-tac-fuck-you",
        live: "https://ttfu.eli.best",
      },
      tags: ["backend", "utilities"],
      date: new Date("August 7 2025"),
    },
    {
      slug: "facts",
      title: "Facts",
      description: "factsmgt custom frontend thingy",
      technologies: ["Next.js", "Shadcn", "TailwindCSS"],
      link: {
        github: "https://github.com/elijah629/facts",
        live: "https://facts.eli.best",
      },
      tags: ["web-app", "school"],
      date: new Date("Feb 28 2025"),
    },
  ],
  hardware: [
    {
      slug: "flippy",
      title: "Flippy",
      description: "Flipper Zero firmware and remote archive management",
      image: flippy,
      technologies: ["Rust", "USB CDC-Serial"],
      link: {
        github: "https://github.com/elijah629/flippy",
      },
      tags: ["desktop", "flipper-zero"],
      date: new Date("June 22 2025"),
    },
    {
      slug: "jamrf",
      title: "jamRF",
      description: "Compact Sub-GHz Jammer for Flipper Zero ",
      technologies: ["C", "Sub-GHz"],
      link: {
        github: "https://github.com/elijah629/jamrf",
      },
      tags: ["jamming", "flipper-zero"],
      date: new Date("April 11 2025"),
    },
    {
      slug: "esp32-gpt",
      title: "ESP32-GPT",
      description: "AI on a TI-84 CE Plus calculator",
      technologies: ["esp32", "C++"],
      link: {
        github: "https://github.com/elijah629/esp32-gpt",
      },
      tags: ["ai", "cool-hw"],
      date: new Date("September 25 2025"),
    },
  ],
  nix: [
    {
      slug: "nix-config",
      title: "NixOS Configuration",
      description: "my nix config. hype(r)?",
      technologies: ["Nix"],
      link: {
        github: "https://github.com/elijah629/nix-config",
      },
      tags: ["nixos"],
      date: new Date("November 7 2024"),
    },
    {
      slug: "touca.nvim",
      title: "Neovim config",
      description: "use this config, i'm daring you :) ",
      technologies: ["Nix", "Neovim"],
      link: {
        github: "https://github.com/elijah629/touca.nvim",
      },
      tags: ["nixos", "nvim"],
      date: new Date("August 21 2025"),
    },
  ],
  ml: [
    {
      slug: "sonai",
      title: "sonai",
      description:
        "Rust-based AI text detection model trained on Hackclubbers' devlogs",
      image: sonai,
      technologies: ["Rust", "AI", "ML Detection"],
      link: {
        github: "https://github.com/elijah629/how-much-of-som-is-ai",
      },
      tags: ["ai", "ml"],
      date: new Date("July 27 2025"),
    },
  ],
};

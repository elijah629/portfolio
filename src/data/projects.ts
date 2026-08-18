import type { StaticImageData } from "next/image";
import esp32Gpt from "../images/esp32-gpt-preview.png";
import facts from "../images/facts.png";
import flavortownCatppucin from "../images/flavortown-catppuccin.png";
import flippy from "../images/flippy.png";
import hackaiFrontend from "../images/hackai-frontend.png";
import jamrf from "../images/jamrf-preview.png";
import mogged from "../images/mogged.webp";
import musee from "../images/musee.png";
import nixos from "../images/nixos.png";
import pvbc from "../images/pvbc.png";
import redditlang from "../images/redditlang.png";
import sonai from "../images/sonai.png";
import theChair from "../images/the-chair.png";
import toucaNvim from "../images/touca-nvim.png";
import ttfu from "../images/ttfu.png";
import web2050 from "../images/web2050.png";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: StaticImageData;
  imageAlt?: string;
  technologies: string[];
  link: {
    github: string;
    live?: string;
  };
  tags: string[];
  date: Date;
}

export const projects: Record<
  "web" | "hardware" | "ml" | "systems" | "nix",
  Project[]
> = {
  web: [
    {
      slug: "mogged",
      title: "mogged",
      description:
        "A facial-rating experiment built by tracing and reworking an existing Omoggle modification. Stardance records 10 hours across two devlogs.",
      image: mogged,
      imageAlt: "Mogged face-analysis interface from Eli's Stardance devlog",
      technologies: ["TypeScript", "Next.js", "Computer vision"],
      link: {
        github: "https://github.com/elijah629/mogged",
        live: "https://stardance.hackclub.com/projects/22090",
      },
      tags: ["reverse-engineering", "stardance"],
      date: new Date("July 3 2026"),
    },
    {
      slug: "flavortown-catppuccin",
      title: "Flavortown Catppuccin",
      description: "Catppuccin theme for hackclub/flavortown!",
      image: flavortownCatppucin,
      technologies: ["less", "css"],
      link: {
        github: "https://github.com/elijah629/flavortown-catppuccin",
        live: "https://userstyles.world/style/25744/flavortown-catppuccin",
      },
      tags: ["userstyle", "hackclub"],
      date: new Date("December 22 2025"),
    },
    {
      slug: "hackai-frontend",
      title: "HackAI Frontend",
      description: "BYOK Chat Frontend for hackclub/ai",
      image: hackaiFrontend,
      technologies: ["LLMs", "Hackclub", "Next.JS"],
      link: {
        github: "https://github.com/elijah629/hackai-frontend",
        live: "https://ai.eli.best",
      },
      tags: ["ai", "hackclub", "frontend"],
      date: new Date("November 23 2025"),
    },
    {
      slug: "web2050",
      title: "web2050",
      description: "The internet, except everything was vibecoded.",
      image: web2050,
      technologies: ["Rust", "LLMs", "Hackclub"],
      link: {
        github: "https://github.com/elijah629/web2050",
        // live: "https://ai.dino.icu",
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
        github: "https://github.com/elijah629/pvbc",
        live: "https://pvbc.eli.best",
      },
      tags: ["backend", "utilities"],
      date: new Date("August 7 2025"),
    },
    {
      slug: "facts",
      title: "Facts",
      description: "factsmgt custom frontend thingy",
      image: facts,
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
      slug: "the-chair",
      title: "The Chair",
      description:
        "Motorized VEX V5 chair: eight-motor differential drive, custom CAD mounts, encoder-based steering feedback, telemetry plans, and safety controls. Nine public devlogs; 23 hours logged.",
      image: theChair,
      technologies: ["VEX V5", "CAD", "3D printing", "Controls"],
      link: {
        github: "https://github.com/gmhs-robotics/the-chair",
        live: "https://stardance.hackclub.com/projects/4170",
      },
      tags: ["mechatronics", "stardance", "super-star"],
      date: new Date("June 2 2026"),
    },
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
      image: jamrf,
      imageAlt: "GitHub repository preview for the jamRF hardware project",
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
      image: esp32Gpt,
      imageAlt: "GitHub repository preview for ESP32-GPT",
      technologies: ["esp32", "C++"],
      link: {
        github: "https://github.com/elijah629/esp32-gpt",
      },
      tags: ["ai", "cool-hw"],
      date: new Date("September 25 2025"),
    },
  ],
  systems: [
    {
      slug: "musee",
      title: "musee",
      description:
        "Rust CLI for home music-server management and cleanup; tracked as a Stardance project.",
      image: musee,
      imageAlt: "GitHub repository preview for the musee music CLI",
      technologies: ["Rust", "CLI", "Music server"],
      link: {
        github: "https://github.com/elijah629/musee",
        live: "https://stardance.hackclub.com/projects/22089",
      },
      tags: ["systems", "stardance"],
      date: new Date("April 22 2026"),
    },
    {
      slug: "redditlang",
      title: "Redditlang",
      description:
        "Meme programming language / LLVM compiler in Rust. I abandoned it for a year because loops hurt, then came back and made them work.",
      image: redditlang,
      imageAlt: "Redditlang programming language logo",
      technologies: ["Rust", "LLVM", "Compiler"],
      link: {
        github: "https://github.com/elijah629/redditlang",
      },
      tags: ["compiler", "language", "rust"],
      date: new Date("May 2 2026"),
    },
  ],
  nix: [
    {
      slug: "nix-config",
      title: "NixOS Configuration",
      description: "my nix config. hype(r)?",
      image: nixos,
      imageAlt: "Official NixOS snowflake logo",
      technologies: ["Nix"],
      link: {
        github: "https://github.com/elijah629/nix-config",
      },
      tags: ["nixos"],
      date: new Date("November 7 2024"),
    },
    {
      slug: "touca.nvim",
      title: "touca.nvim",
      description: "use this neovim config, i'm daring you :) ",
      image: toucaNvim,
      imageAlt: "Pixel-art toucan displayed by touca.nvim",
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
        live: "https://sonai.eli.best",
      },
      tags: ["ai", "ml"],
      date: new Date("July 27 2025"),
    },
  ],
};

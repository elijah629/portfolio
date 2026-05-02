import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/data/site";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-24">
      <div className="flex flex-col gap-5 max-w-5xl">
        <p className="font-mono text-sm uppercase tracking-normal text-primary">
          yo wsp, I'm
        </p>
        <h1 className="text-5xl md:text-8xl font-black leading-none">
          Eli Ozcan. <span className="font-emoji">👋</span>
        </h1>
        <h2 className="text-4xl md:text-7xl text-muted-foreground leading-tight">
          I write code, <CrackedText>break</CrackedText> it, and call that{" "}
          <i>engineering</i>.
        </h2>
        <p className="max-w-3xl leading-8 text-xl text-muted-foreground">
          I'm a teen software engineer passionate about hacking the world around
          us. I'm currently focused on{" "}
          <Link className="text-primary hover:underline" href={site.hackClub}>
            Hack Club
          </Link>{" "}
          , programming for my school's robotics team, and experimenting with
          side projects.
        </p>
        <div className="flex md:flex-row flex-col gap-3 pt-2">
          <Button className="md:w-max w-full text-lg" size="lg" asChild>
            <Link href="#work">
              See selected work
              <ArrowDown />
            </Link>
          </Button>
          <Button
            className="md:w-max w-full text-lg font-mono"
            variant="outline"
            size="lg"
            asChild
          >
            <Link href={site.github} target="_blank" rel="noopener noreferrer">
              <SiGithub />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CrackedText({ children }: { children: ReactNode }) {
  return (
    <span className="cracked">
      {/* To leave a gap for the text and for screen readers */}
      <span className="opacity-0">{children}</span>
      <span className="left" aria-hidden="true">
        {children}
      </span>
      <span className="right" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

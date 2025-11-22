import Link from "next/link";
import { Button } from "./ui/button";
import { ReactNode } from "react";

export function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 max-w-[80vw]">
        <h3 className="font-mono">yo wsp, I'm</h3>
        <h1 className="text-5xl md:text-8xl font-black">
          Eli Ozcan. <span className="font-emoji">👋</span>
        </h1>
        <h1 className="text-4xl md:text-7xl text-muted-foreground">
          I write code, <CrackedText>break</CrackedText> it, and call that{" "}
          <i>engineering</i>.
        </h1>
        <p className="leading-7 not-first:mt-6 text-xl">
          I'm a teen software engineer passionate about hacking the world around
          us. I'm currently focused on{" "}
          <Link className="text-primary" href="https://hackclub.com/">
            Hackclub
          </Link>{" "}
          , programming for my school's robotics team, and experimenting with
          side projects.
        </p>
        <div className="flex md:flex-row flex-col gap-3">
          <Button className="md:w-min w-full mt-3 text-lg" size="lg" asChild>
            <Link href="#work">Enter the realm of coolness </Link>
          </Button>
          <Button
            className="md:w-min w-full mt-3 text-lg font-mono"
            variant="outline"
            size="lg"
            asChild
          >
            <Link
              href="https://github.com/elijah629"
              target="_blank"
              rel="noopener noreferrer"
            >
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

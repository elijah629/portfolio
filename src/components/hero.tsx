import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 max-w-[80vw]">
        <h3 className="font-mono">yo wsp, I'm</h3>
        <h1 className="text-8xl font-black">
          Eli Ozcan. <span className="font-emoji">👋</span>
        </h1>
        <h1 className="text-7xl text-muted-foreground">
          I build solutions to <i>most</i> problems.
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
        <div className="flex gap-3">
          <Button className="w-min mt-3 text-lg font-mono" size="lg" asChild>
            <Link href="#work">Enter the realm of coolness </Link>
          </Button>
          <Button
            className="w-min mt-3 text-lg font-mono"
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

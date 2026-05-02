import { Cpu, GraduationCap, Hammer, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const strengths = [
  {
    title: "I tinker first",
    description:
      "Cameras, controllers, remotes, laptops, codebases, VEX robots. If I want to know why it works, I usually have to risk breaking it.",
    icon: Rocket,
  },
  {
    title: "Half mechanic, half electrician",
    description:
      "Mechatronics fits because machines and electronics both feel like parts of the same thing. Losing either one would feel like leaving half of me behind.",
    icon: Cpu,
  },
  {
    title: "I learn better when I teach",
    description:
      "I help people a lot, sometimes too much, but it feels wrong not to. Explaining something makes me understand it for real.",
    icon: Hammer,
  },
  {
    title: "I use AI on purpose",
    description:
      "AI agents are a tool to learn with, not a substitute for talent. It takes real taste and skill to command one well anyways.",
    icon: GraduationCap,
  },
];

const focusAreas = [
  "Mechatronics",
  "CAD",
  "Rust",
  "Next.js",
  "React",
  "TypeScript",
  "AI/ML",
  "Robotics",
  "Aviation",
  "Golf",
  "Hardware",
  "NixOS",
  "C/C++",
  "Cloudflare",
];

export function RecruiterSummary() {
  return (
    <section className="w-full border-y bg-secondary/25 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <p className="font-mono text-sm uppercase tracking-normal text-primary">
            How I think
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            I keep track of the moments that change how I think.
          </h2>
          <p className="leading-7 text-muted-foreground">
            Software engineering has been my thing since I was around seven, but
            it never stayed only software. It turned into robotics, aviation,
            CAD, agricultural mechanics, PLTW, golf, and a lot of taking things
            apart just to understand the order inside them.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {focusAreas.map((area) => (
              <Badge key={area} variant="outline">
                {area}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map(({ title, description, icon: Icon }) => (
            <article
              className="rounded-lg border bg-background/70 p-5"
              key={title}
            >
              <Icon className="mb-4 text-primary" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-6 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

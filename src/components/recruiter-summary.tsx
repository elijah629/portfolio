import { Bot, Boxes, Code2, Printer } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { site } from "@/data/site";

const strengths = [
  {
    title: "Robotics lead",
    description:
      "I program and design VEX V5 robots, review technical build decisions, and help teammates turn mechanisms into working assemblies.",
    icon: Bot,
  },
  {
    title: "CAD and fabrication",
    description:
      "About two years using Autodesk Inventor plus Fusion 360. I design brackets and assemblies, then iterate from measured fit and load problems.",
    icon: Boxes,
  },
  {
    title: "3D printing officer",
    description:
      "I manage 3D printing at Garces and use Bambu Studio and OrcaSlicer for slicing, print setup, troubleshooting, and repeatable fabrication.",
    icon: Printer,
  },
  {
    title: "Software systems",
    description:
      "I work across Rust, C/C++, TypeScript, Next.js, embedded devices, ML experiments, Linux, and NixOS. Public repos show the implementation.",
    icon: Code2,
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
            Current engineering roles
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Work I am responsible for now.
          </h2>
          <p className="leading-7 text-muted-foreground">
            I am a student at{" "}
            <Link
              className="text-primary hover:underline"
              href={site.garces}
              target="_blank"
            >
              Garces Memorial High School
            </Link>
            , incoming captain of V5RC 28001A for the 2026–2027 Override season,
            and Garces 3D printing officer. I also serve in Civil Air Patrol as
            a C/Amn.
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

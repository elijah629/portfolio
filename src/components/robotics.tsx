import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";

const records = [
  {
    label: "2025–2026",
    title: "Captain and programmer · V5RC 28001A",
    text: "I programmed and helped design the competition robot in Rust with vexide. I also built an autonomous-route recorder and learned, through broken chains, rubber bands, and seized motors, that reliable software still depends on the entire machine.",
    href: site.previousRobotEvents,
    link: "Team record",
  },
  {
    label: "2026–2027 · Override",
    title: "Captain and programmer · V5RC 28002A",
    text: "I have worked with the team on technical planning, robot software, design review, build coordination, and documentation. I learn better when I teach, so helping newer members understand why a mechanism works is part of how I improve my own engineering.",
    href: site.robotEvents,
    link: "Current team record",
  },
  {
    label: "Garces Robotics",
    title: "President and treasurer",
    text: "I helped expand the program from two teams and about 12 students to four teams and 24 members. I now help organize the people, budget, equipment, and technical support needed to give more students room to build and learn.",
    href: site.roboticsGithub,
    link: "Robotics organization",
  },
  {
    label: "Garces Memorial",
    title: "3D printing officer",
    text: "Manage slicing, printer setup, troubleshooting, and part production. Current tools include Autodesk Inventor, Fusion 360, Bambu Studio, and OrcaSlicer.",
    href: site.garcesEngineering,
    link: "Engineering pathway",
  },
];

export function Robotics() {
  return (
    <section className="border-y bg-secondary/25 px-6 py-20" id="robotics">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm uppercase text-primary">
          Robotics responsibility
        </p>
        <h2 className="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">
          Robots are systems. Teams are, too.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {records.map((record) => (
            <article
              className="flex flex-col rounded-lg border bg-background/70 p-6"
              key={record.title}
            >
              <p className="font-mono text-xs uppercase text-primary">
                {record.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{record.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-muted-foreground">
                {record.text}
              </p>
              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                href={record.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {record.link}
                <ExternalLink className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

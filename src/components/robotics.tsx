import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";

const records = [
  {
    label: "2025–2026",
    title: "Programmer and robot designer · V5RC 28001A",
    text: "RobotEvents lists my work as coding and designing the robot and coaching teammates through technical construction. The season repository uses Rust with vexide.",
    href: site.robotEvents,
    link: "Team record",
  },
  {
    label: "2026–2027 · Override",
    title: "Captain · V5RC 28001A",
    text: "Responsible for technical direction, software, design review, build coordination, documentation, and helping newer members become independent builders.",
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
          I write robot code and own the build around it.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
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

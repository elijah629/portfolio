import { SiHackclub, SiInstagram } from "@icons-pack/react-simple-icons";
import { Award, ExternalLink, Trophy } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";

const achievements = [
  {
    title: "California Science & Engineering Fair",
    detail:
      '1st place in Cognitive Science, Junior Division, for "Unraveling AI," a project about AI detection and how easily humans can be fooled by AI-written essays.',
    href: site.californiaScienceFair,
    icon: Trophy,
  },
  {
    title: "Stardance engineering logs",
    detail:
      "Four public projects and 18 devlogs. The Chair alone records 34 hours across CAD, fabrication, three-Brain networking, controls, safety, telemetry, and ride testing.",
    href: site.stardance,
    icon: SiHackclub,
  },
  {
    title: "Stack Overflow archive",
    detail:
      "11 answers, 6 questions, and 104k people reached. This is older work, but it documents years of debugging in public.",
    href: site.stackOverflow,
    icon: ExternalLink,
  },
  {
    title: "Kern County Regional Science Fair",
    detail:
      "1st place in Cognitive Science before state, then advanced from the California fair to nationals.",
    href: site.kernRegionalScienceFair,
    icon: Award,
  },
  {
    title: "Hack Club Summer of Making",
    detail:
      "8 shipped projects, 107 devlogs, and 490h 31m logged. The record covers model training, reproducible builds, streaming parsers, performance work, and production debugging.",
    href: site.summerOfMaking,
    icon: SiHackclub,
  },
  {
    title: "Hack Club Flavortown contributor",
    detail:
      "Four merged pull requests: devlog API routing and views, pagination fixes, API rate-limit work, and a vector project icon. I also maintain a Catppuccin userstyle.",
    href: site.flavortownContributions,
    icon: SiHackclub,
  },
];

export function ProofPoints() {
  return (
    <section className="w-full px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold md:text-5xl">Results.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map(({ title, detail, href, icon: Icon }) => (
            <Link
              className="group rounded-lg border bg-secondary/25 p-5 transition hover:border-primary/70 hover:bg-secondary/40"
              href={href}
              key={title}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <Icon className="text-primary" />
                <ExternalLink className="size-4 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-6 text-muted-foreground">{detail}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground transition hover:text-primary"
            href={site.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SiInstagram className="size-4" />
            Instagram @eli.ozcan
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground transition hover:text-primary"
            href={site.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub @elijah629
          </Link>
        </div>
      </div>
    </section>
  );
}

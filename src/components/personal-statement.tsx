import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import plane from "@/images/civil-air-patrol-plane.jpg";
import notebook from "@/images/robotics-engineering-notebook.jpg";

const InlineLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    className="inline-flex items-baseline gap-1 text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
    <ExternalLink className="size-3.5 self-center" />
  </Link>
);

export function PersonalStatement() {
  return (
    <section className="w-full px-6 py-20" id="about">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-4xl text-4xl font-bold md:text-6xl">
          Why I chose engineering.
        </h2>

        <article className="mt-10 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <Image
            alt="Engineering notebook for Garces Rambotics V5RC team 28001A"
            className="mx-auto max-h-[680px] w-full rounded-xl border object-cover shadow-2xl shadow-black/25"
            placeholder="blur"
            src={notebook}
          />
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              I have been passionate about engineering ever since I was about
              seven. I found a laptop nearly as old as me running my old
              home&apos;s security system. After we moved, it had no real
              purpose, so I took it for my own use. I started with web
              development and made a collection of small projects by following
              tutorials. This was probably the most impactful experience I ever
              had: I found joy in building things. It strongly connects to my
              interest in engineering. I wanted to expand my design skills
              instead of only copying stuff.
            </p>
            <p className="text-2xl font-semibold leading-9 text-foreground">
              Engineering is just so freaking cool. The satisfaction I get from
              solving problems is like no other, especially because I get to
              work with a lot of cool tools along the way.
            </p>
            <p>
              In my studies, I hope to improve my knowledge of mechanical
              systems and get more experience at being a good engineer. I want
              to be more studious and particular with notes, the design process,
              and journaling. I believe the process is a bigger part of a
              project than the result.
            </p>
            <p>
              I hope to build something that solves a real problem in my life. I
              would be happy with pretty much anything difficult. The notebook
              beside this is from my work with{" "}
              <InlineLink href={site.robotEvents}>V5RC 28001A</InlineLink>.
            </p>
          </div>
        </article>

        <article className="mt-20 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="space-y-5 text-lg leading-8 text-muted-foreground lg:order-1">
            <p>
              After I graduate high school, I would like to attend a top
              engineering school. I am particularly invested in{" "}
              <InlineLink href={site.mitEducation}>MIT</InlineLink>, although
              the exact school matters less to me than getting to do difficult,
              meaningful engineering work. I would like to study mechatronics so
              I can keep mechanical design, electronics, controls, and software
              in the same field.
            </p>
            <p>
              With a degree, I would look at defense-contractor work, an{" "}
              <InlineLink href={site.airForceCareers}>
                Air Force engineering pathway
              </InlineLink>
              , private industry, or a research-focused government role such as{" "}
              <InlineLink href={site.nasaCareers}>NASA</InlineLink>. My
              experience as a C/Amn in{" "}
              <InlineLink href={site.civilAirPatrol}>
                Civil Air Patrol
              </InlineLink>{" "}
              is part of why aviation and service both interest me.
            </p>
            <p>
              I would also love to work on cutting-edge AI research at a lab
              such as <InlineLink href={site.openAiCareers}>OpenAI</InlineLink>,{" "}
              <InlineLink href={site.nvidiaCareers}>NVIDIA</InlineLink>, or{" "}
              <InlineLink href={site.anthropicCareers}>Anthropic</InlineLink>.
              Disregarding all of that, I would love to start my own business,
              build a product people want, and live off it.
            </p>
            <p>
              After high school, I see myself working in an engineering role at
              minimum for a first job, or putting more time into my studies.
              With my current experience, I want to be ready for early
              engineering work or self-employment instead of waiting for a
              degree to begin building.
            </p>
          </div>
          <Image
            alt="Commercial aircraft in flight, representing Eli Özcan's interest in aviation engineering"
            className="aspect-[4/3] w-full rounded-xl border object-cover shadow-2xl shadow-black/25 lg:order-2"
            placeholder="blur"
            src={plane}
          />
        </article>
      </div>
    </section>
  );
}

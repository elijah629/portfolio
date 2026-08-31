import { FeaturedBuilds } from "@/components/featured-builds";
import { Footer } from "@/components/footer";
import { GithubStats } from "@/components/github-stats";
import { Banner } from "@/components/hackclub-banner";
import { Hero } from "@/components/hero";
import { PersonalStatement } from "@/components/personal-statement";
import { PrintResumeButton } from "@/components/print-resume-button";
import { PrintableResume } from "@/components/printable-resume";
import { ProofPoints } from "@/components/proof-points";
import { RecruiterSummary } from "@/components/recruiter-summary";
import { Robotics } from "@/components/robotics";
import { Technologies } from "@/components/technologies";
import { Work } from "@/components/work";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  description: site.description,
  sameAs: site.sameAs,
  knowsAbout: site.keywords,
  hasOccupation: {
    "@type": "Occupation",
    name: "Student Robotics and Software Engineer",
    skills: [
      "Rust",
      "Next.js",
      "React",
      "TypeScript",
      "Mechatronics",
      "CAD",
      "AI/ML",
      "Robotics",
      "VEX V5",
      "Aviation",
      "Embedded systems",
      "NixOS",
    ],
  },
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Garces Memorial High School",
    url: site.garces,
  },
  memberOf: [
    {
      "@type": "Organization",
      name: "Garces Rambotics V5RC 28002A",
      url: site.robotEvents,
    },
    {
      "@type": "Organization",
      name: "Civil Air Patrol",
      url: site.civilAirPatrol,
    },
    { "@type": "Organization", name: "Hack Club", url: site.hackClub },
  ],
  subjectOf: Object.values(projects)
    .flat()
    .map((project) => ({
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      codeRepository: project.link.github,
      url: project.link.live ?? project.link.github,
      programmingLanguage: project.technologies,
    })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="screen-portfolio">
        <Banner year={2026} />
        <PrintResumeButton />
        <main>
          <Hero />
          <RecruiterSummary />
          <PersonalStatement />
          <FeaturedBuilds />
          <Robotics />
          <GithubStats />
          <ProofPoints />
          <Work />
          <Technologies />
        </main>
        <Footer />
      </div>
      <PrintableResume />
    </>
  );
}

import { Footer } from "@/components/footer";
import { Banner } from "@/components/hackclub-banner";
import { Hero } from "@/components/hero";
import { ProofPoints } from "@/components/proof-points";
import { RecruiterSummary } from "@/components/recruiter-summary";
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
    name: "Software Engineer",
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
      <Banner year={2026} />
      <main>
        <Hero />
        <RecruiterSummary />
        <ProofPoints />
        <Work />
        <Technologies />
      </main>
      <Footer />
    </>
  );
}

import { projects } from "@/data/projects";
import { ProjectCarousel } from "./project-carousel";

const categoryLabels: Record<keyof typeof projects, string> = {
  web: "Web and product engineering",
  hardware: "Hardware and embedded systems",
  ml: "AI and machine learning",
  systems: "Systems and compiler experiments",
  nix: "Developer tooling and Nix",
};

export function ProjectCategoryCarousel() {
  return (
    <div className="flex flex-col gap-16">
      {(Object.keys(projects) as Array<keyof typeof projects>).map(
        (category) => (
          <div key={category}>
            <div className="h-full px-0 pt-2 md:px-14">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                {categoryLabels[category]}
              </h3>
              <ProjectCarousel projects={projects[category]} />
            </div>
          </div>
        ),
      )}
    </div>
  );
}

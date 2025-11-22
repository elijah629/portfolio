import { projects } from "@/data/projects";
import { ProjectCarousel } from "./project-carousel";

export function ProjectCategoryCarousel() {
  return (
    <div className="flex flex-col gap-20">
      {Object.keys(projects).map((category) => (
        <div key={category}>
          <div className="px-14 pt-2 h-full">
            <h2 className="font-bold mb-2 text-3xl">{category}</h2>
            <ProjectCarousel
              projects={projects[category as keyof typeof projects]}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

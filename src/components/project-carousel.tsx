import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.slug}>
            <div className="p-1">
              <ProjectCard project={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

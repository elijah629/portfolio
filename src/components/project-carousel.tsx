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
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem className="@container" key={project.slug}>
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

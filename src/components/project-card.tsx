import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Tag as TagIcon } from "lucide-react";
import { Project } from "@/data/projects";
import { SiGithub } from "@icons-pack/react-simple-icons";

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex-col @2xl:flex-row justify-center items-center h-full">
      {project.image && (
        <div className="shrink-0 w-full px-6 @2xl:pr-0 @sm:w-max overflow-hidden rounded-xl">
          <Image
            src={project.image}
            width={project.image.width}
            alt={project.title}
            className="rounded-xl mx-auto border w-sm object-scale-down"
          />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle>
            <Button
              variant="link"
              size="lg"
              className="px-0! text-lg @2xl:text-xl"
              asChild
            >
              <Link
                href={project.link.live ?? project.link.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
                <ExternalLink className="w-4 h-4 opacity-80" />
              </Link>
            </Button>
          </CardTitle>
          <CardDescription className="text-md text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Calendar size={14} /> {formatDate(project.date)}
            </span>

            {project.tags?.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="inline-flex items-center gap-1 text-muted-foreground">
              <TagIcon size={14} /> Technologies
            </h4>

            {project.technologies.map((tech) => (
              <Badge variant="outline" key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-3">
          <Button variant="outline" size="icon-lg" asChild>
            <Link
              href={project.link.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={24} />
            </Link>
          </Button>

          {project.link.live && (
            <Button variant="link" asChild>
              <Link
                href={project.link.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium"
              >
                Live Demo
                <ExternalLink className="w-4 h-4 opacity-80" />
              </Link>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}

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

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex-col md:flex-row items-center p-6">
      {project.image && (
        <Image
          src={project.image}
          width={project.image.width}
          alt={project.title}
          className="rounded-xl max-w-sm object-cover"
        />
      )}
      <div className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">
            <Button variant="link" size="lg" className="px-0! text-xl" asChild>
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
              <Calendar className="w-3.5 h-3.5" /> {formatDate(project.date)}
            </span>

            {project.tags?.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="inline-flex items-center gap-1  text-muted-foreground">
              <TagIcon className="w-3.5 h-3.5" /> Technologies
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
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
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

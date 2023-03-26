"use server";

import { Project } from "@components/Project";
import { ProjectButtons } from "@components/ProjectButtons";
import { Project as IProject } from "@lib/project";

interface ProjectSlideshowProps {
	project: IProject;
	previous: string | null;
	next: string | null;
}

export const ProjectSlideshow = (props: ProjectSlideshowProps) => {
	return (
		<div className="flex h-full flex-col gap-4 overflow-hidden">
			<Project project={props.project} />
			<ProjectButtons
				next={props.next}
				previous={props.previous}
			/>
		</div>
	);
};

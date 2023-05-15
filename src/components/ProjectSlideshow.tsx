"use server";

import { ProjectButtons } from "@components/ProjectButtons";
import { ProjectDisplay } from "@components/ProjectDisplay";
import { Project } from "@lib/project";

interface ProjectSlideshowProps {
	project: Project;
	previous: string | null;
	next: string | null;
}

export const ProjectSlideshow = (props: ProjectSlideshowProps) => {
	return (
		<div className="flex h-full flex-col gap-4 overflow-hidden">
			<ProjectDisplay project={props.project} />
			<ProjectButtons
				next={props.next}
				previous={props.previous}
			/>
		</div>
	);
};

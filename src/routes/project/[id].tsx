import Project from "@/components/Project";
import { createEffect, createSignal } from "solid-js";
import { Title, useParams } from "solid-start";
import projects from "@/projects/index";
import ProjectButtons from "@/components/ProjectButtons";
import NotFound from "../[...404]";

export default function Page() {
	const params = useParams<{ id: string }>();
	const ids = Object.keys(projects);

	const [index, setIndex] = createSignal(ids.indexOf(params.id));

	createEffect(() => {
		setIndex(ids.indexOf(params.id));
	});

	if (index() === -1) {
		return <NotFound />;
	}

	return (
		<>
			<Title>{projects[params.id].title}</Title>
			<Project project={projects[params.id]} />
			<ProjectButtons
				next={ids[index() + 1]}
				previous={ids[index() - 1]}
			/>
		</>
	);
}

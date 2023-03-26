import { ProjectSlideshow } from "@components/ProjectSlideshow";
import { getProject } from "@lib/project";
import fs from "fs/promises";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import path from "path";

export default async function ProjectPage({
	params
}: {
	params: { slug: string };
}) {
	const slug = decodeURIComponent(params.slug);
	const projects = (await fs.readdir(path.join("projects")))
		.map(x => x.replace(".yml", ""))
		.sort();

	const index = projects.indexOf(slug);
	if (index === -1) {
		notFound();
	}

	const project = await getProject(slug).catch(() => notFound());

	return (
		<ProjectSlideshow
			project={project}
			previous={index === 0 ? null : projects[index - 1]}
			next={index === projects.length ? null : projects[index + 1]}
		/>
	);
}

export async function generateMetadata({
	params
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const project = await getProject(decodeURIComponent(params.slug)).catch(
		() => notFound()
	);
	return {
		title: `Project | ${project.title}`,
		description: project.description
	};
}

export async function generateStaticParams() {
	const projects = await fs.readdir(path.join("projects"));
	return projects.map(x => ({ slug: x.replace(".yml", "") }));
}

import { ProjectSlideshow } from "@components/ProjectSlideshow";
import { getProject } from "@lib/project";
import fs from "fs/promises";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import path from "path";

export const slug_translations = fs.readdir(path.join("projects")).then(x => {
	const slugs = x.map(x => x.replace(".yml", ""));
	slugs.sort();

	const xi = slugs
		.map((x, i) => ({ [x]: i }))
		.reduce((a, c) => ({ ...a, ...c }), {});
	const ix = slugs
		.map((x, i) => ({ [i]: x }))
		.reduce((a, c) => ({ ...a, ...c }), {});

	return {
		xi,
		ix
	};
});

export default async function ProjectPage({
	params
}: {
	params: { slug: string };
}) {
	const slug = decodeURIComponent(params.slug);
	const { xi, ix } = await slug_translations;

	const index = xi[slug];

	if (index === undefined) {
		notFound();
	}

	const project = await getProject(slug).catch(notFound);

	return (
		<ProjectSlideshow
			project={project}
			previous={index === 0 ? null : ix[index - 1]}
			next={index === xi.length ? null : ix[index + 1]}
		/>
	);
}

export async function generateMetadata({
	params
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const project = await getProject(decodeURIComponent(params.slug)).catch(
		notFound
	);
	return {
		title: `Project | ${project.title}`,
		description: project.description
	};
}

export async function generateStaticParams() {
	const projects = await fs.readdir(path.join("projects"));
	return projects.map(x => ({ slug: path.parse(x).name }));
}

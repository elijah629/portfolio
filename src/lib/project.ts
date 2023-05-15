import fs from "node:fs/promises";
import { parse as parseYAML } from "yaml";

export interface Project {
	title: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
	repo: string;
	slug: string;
}

async function fsRead(path: string): Promise<{ data?: Buffer; error?: any }> {
	let data: any;
	let error: any;
	await fs
		.readFile(path)
		.then(x => (data = x))
		.catch(e => (error = e));
	return { data, error };
}

export async function getProject(slug: string): Promise<Project> {
	const { data, error } = await fsRead(`projects/${slug}.yml`);

	if (error) throw error;

	const project: Record<string, any> = parseYAML(data!.toString());

	return {
		title: project.title,
		description: project.description,
		url: project.url,
		image: project.image,
		tags: project.tags,
		repo: project.repo,
		slug
	};
}

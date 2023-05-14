import fs from "node:fs/promises";
import { parse as parseYAML } from "yaml";

export interface Project {
	title: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
	slug: string;
}

async function read(path: string): Promise<{ data?: Buffer; error?: any }> {
	let data: any;
	let error: any;
	await fs
		.readFile(path)
		.then(x => (data = x))
		.catch(e => (error = e));
	return { data, error };
}

export async function getProject(slug: string): Promise<Project> {
	const { data: _data, error } = await read(`projects/${slug}.yml`);

	if (error) throw error;

	const data: Record<string, any> = parseYAML(_data!.toString());

	return {
		title: data.title,
		description: data.description,
		url: data.url,
		image: data.image,
		tags: data.tags,
		slug
	};
}

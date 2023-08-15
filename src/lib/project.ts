import fs from "node:fs/promises";
import path from "node:path";
import { parse as parseYAML } from "yaml";

export interface Project {
	title: string;
	description: string;
	url: string;
	image?: string;
	tags: string[];
	repo: string;
	slug: string;
}

export async function getProject(slug: string): Promise<Project> {
	const data = await fs.readFile(
		path.join(process.cwd(), "projects", `${slug}.yml`)
	);

	const project: Record<string, any> = parseYAML(data!.toString());

	return {
		...project,
		slug
	} as Project;
}

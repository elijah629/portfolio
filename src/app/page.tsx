import {
	IconBrandCSharp,
	IconBrandNextjs,
	IconBrandPrisma,
	IconBrandPython,
	IconBrandReact,
	IconBrandTailwind,
	IconBrandTypescript,
	IconBrandVercel
} from "@tabler/icons-react";
import Link from "next/link";
import fs from "node:fs/promises";
import path from "node:path";

export default async function Page() {
	const projects = (await fs.readdir(path.join("projects")))
		.map(x => x.replace(".yml", ""))
		.sort();
	return (
		<div className="flex h-full flex-col gap-4">
			<span>Welcome! Come and look at my</span>
			<Link
				href={`/project/${projects[0]}`}
				className="w-full flex-1 text-4xl">
				<button className="theme-interactable h-full w-full">
					Projects
				</button>
			</Link>
			<div>
				<h2 className="text-lg">Technologies</h2>
				<div className="flex h-16 justify-between gap-2 overflow-auto scrollbar-thin scrollbar-thumb-accent-light dark:scrollbar-thumb-accent-dark sm:h-20 [&>*]:h-auto [&>*]:w-auto [&>*]:flex-none">
					<IconBrandTypescript />
					<IconBrandVercel />
					<IconBrandPrisma />
					<IconBrandNextjs />
					<IconBrandReact />
					<IconBrandTailwind />
					<IconBrandCSharp />
					<IconBrandPython />
				</div>
			</div>
		</div>
	);
}

import {
	IconBrandCpp,
	IconBrandGit,
	IconBrandGithub,
	IconBrandHtml5,
	IconBrandOpenSource,
	IconBrandSocketIo,
	IconBrandSupabase,
	IconBrandUbuntu,
	IconBrandX
} from "@tabler/icons-react";
import {
	IconBrandCSharp,
	IconBrandCss3,
	IconBrandNextjs,
	IconBrandPrisma,
	IconBrandPython,
	IconBrandReact,
	IconBrandRust,
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
			<span>
				Welcome to my site, its filled with random projects I have
				worked on over my webdev career ( i do more than just webdev,
				please hire me ), enjoy.
			</span>
			<div className="grid h-full grid-rows-2 gap-2 sm:grid-cols-2 sm:grid-rows-none">
				<Link
					href={`/project/${projects[0]}`}
					className="w-full flex-1 text-4xl">
					<button className="theme-interactable h-full w-full">
						Slideshow
					</button>
				</Link>
				<Link
					href="/projects"
					className="w-full flex-1 text-4xl">
					<button className="theme-interactable h-full w-full">
						All Projects
					</button>
				</Link>
			</div>
			<div>
				<h2 className="text-lg font-bold">
					Stuff i&apos;ve worked with in the past
				</h2>
				<div className="flex h-16 justify-between gap-2 overflow-auto scrollbar-thin scrollbar-thumb-accent-light dark:scrollbar-thumb-accent-dark sm:h-20 [&>*]:h-auto [&>*]:w-auto [&>*]:flex-none">
					<IconBrandRust />
					<IconBrandNextjs />
					<IconBrandCSharp />
					<IconBrandCpp />
					<IconBrandHtml5 />
					<IconBrandTypescript />
					<IconBrandCss3 />
					<IconBrandSupabase />
					<IconBrandGithub />
					<IconBrandGit />
					<IconBrandSocketIo />
					<IconBrandOpenSource />
					<IconBrandReact />
					<IconBrandUbuntu />
					<IconBrandVercel />
				</div>
			</div>
		</div>
	);
}

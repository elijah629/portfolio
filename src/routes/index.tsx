import { A } from "@solidjs/router";
import {
	IconBrandSolidJS,
	IconBrandGit,
	IconBrandGithub,
	IconBrandHtml5,
	IconBrandSupabase,
	IconBrandCSharp,
	IconBrandCss3,
	IconBrandNextjs,
	IconBrandReact,
	IconBrandRust,
	IconBrandTypescript,
	IconBrandVercel
} from "@/lib/icons";
import projects from "@/projects";

export default function Home() {
	return (
		<>
			<p class="text-xs">
				<span class="font-bold">Notice anything different?</span> I
				remade my site with SolidJS and SolidStart! ( its amazing )
			</p>
			<p>
				Welcome to my site, its filled with projects I have worked on
				over my career, enjoy.
			</p>
			<div class="flex flex-1 flex-col gap-2 sm:flex-row">
				<A
					href={`/project/${Object.keys(projects)[0]}`}
					class="flex-1 text-4xl">
					<button class="btn h-full w-full">Slideshow</button>
				</A>
				<A
					href={`/projects`}
					class="flex-1 text-4xl">
					<button class="btn h-full w-full">All Projects</button>
				</A>
			</div>
			<div>
				<h2 class="text-lg font-bold">
					Stuff I've worked with in the past
				</h2>
				<div class="flex h-16 justify-between gap-2 overflow-auto scrollbar-thin scrollbar-thumb-accent sm:h-20 [&>*]:h-auto [&>*]:w-auto">
					<IconBrandRust />
					<IconBrandSolidJS />
					<IconBrandNextjs />
					<IconBrandCSharp />
					<IconBrandHtml5 />
					<IconBrandTypescript />
					<IconBrandCss3 />
					<IconBrandSupabase />
					<IconBrandGithub />
					<IconBrandGit />
					<IconBrandReact />
					<IconBrandVercel />
				</div>
			</div>
		</>
	);
}

import { IconSize } from "@/lib/iconSize";
import projects from "@/projects";
import { IconBrandGithub } from "@/lib/icons";
import { For } from "solid-js";
import { A, Title } from "solid-start";

export default function ProjectPage() {
	return (
		<>
			<Title>All projects</Title>
			<div class="grid grid-cols-2 gap-2 lg:grid-cols-5">
				<For each={Object.values(projects)}>
					{x => (
						<div class="relative">
							<div class="absolute right-0 z-10 flex border-b-2 border-l-2 bg-base">
								<A
									href={x.repo}
									target="_blank"
									rel="noopener noreferrer"
									class="btn border-0 p-2"
									aria-label={`${x.title} on Github`}>
									<IconBrandGithub size={IconSize.Medium} />
								</A>
							</div>
							<A
								href={x.url}
								target="_blank"
								rel="noopener noreferrer"
								class="btn flex aspect-square items-center justify-center text-xl font-bold uppercase sm:text-2xl lg:text-3xl">
								{/* <span class="flex items-center gap-2"> */}
								{x.title}
								{/* {new Date().getTime() - x.timestamp <=
                                        7 * 24 * 60 * 60 * 1000 && (
                                            <span class="bg-pink-600 px-2 text-sm font-bold lowercase text-primary">
                                                new
                                            </span>
                                        )} */}
								{/* </span> */}
							</A>
						</div>
					)}
				</For>
			</div>
		</>
	);
}

import { IconSize } from "@/lib/iconSize";
import { IconArrowRight, IconBrandGithub } from "@/lib/icons";
import { For, Show } from "solid-js";
import { A } from "solid-start";
import { Project as IProject } from "@/lib/project";

export default function Project(props: { project: IProject }) {
	return (
		<div class="flex h-full flex-1 flex-col border-2">
			<div class="relative min-h-[150px] flex-1">
				<div class="absolute right-0 z-10 flex border-b-2 border-l-2 bg-base">
					<A
						href={props.project.repo}
						target="_blank"
						rel="noopener noreferrer"
						class="btn border-0 p-2"
						aria-label={`${props.project.title} on Github`}>
						<IconBrandGithub size={IconSize.Medium} />
					</A>
				</div>
				<Show
					when={props.project.image}
					fallback={
						<A
							href={props.project.url}
							class="group flex h-full items-center justify-center">
							<span class="flex items-center text-3xl transition group-hover:translate-x-10">
								VISIT
								<IconArrowRight
									class="inline transition group-hover:translate-x-5"
									size={IconSize.ExtraLarge}
								/>
							</span>
						</A>
					}>
					<A
						href={props.project.url}
						target="_blank"
						rel="noopener noreferrer">
						<div class="relative h-full overflow-hidden">
							<img
								src={props.project.image}
								alt={props.project.title}
								class="absolute h-full w-full object-cover transition duration-1000 sm:object-scale-down sm:hover:scale-110"
							/>
						</div>
					</A>
				</Show>
			</div>
			<div class="flex border-t-2 p-2">
				<div class="flex flex-1 flex-col gap-2">
					<div class="flex items-center gap-4">
						<A
							href={props.project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="text-2xl uppercase">
							{/* <span class="flex items-center gap-2"> */}
							{props.project.title}
							{/* {new Date().getTime() -
                                props.project.timestamp <=
                                7 * 24 * 60 * 60 * 1000 && (
                                    <span class="bg-pink-600 px-2 text-sm font-bold lowercase text-primary transition hover:opacity-10">
                                        new
                                    </span>
                                )} */}
							{/* </span> */}
						</A>
						<div class="ml-auto flex gap-2">
							<For each={props.project.tags}>
								{x => (
									<span class="inverted border-2 p-1 font-bold">
										{x}
									</span>
								)}
							</For>
						</div>
					</div>
					<h2 class="text-lg">{props.project.description}</h2>
				</div>
			</div>
		</div>
	);
}

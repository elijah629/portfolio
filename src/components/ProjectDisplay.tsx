import { Project } from "@lib/project";
import {
	IconArrowLeftBar,
	IconArrowRight,
	IconBrandGithub
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDisplayProps {
	project: Project;
}

export const ProjectDisplay: React.FunctionComponent<ProjectDisplayProps> = (
	props: ProjectDisplayProps
) => {
	return (
		<div
			className="theme-border flex h-full flex-1 flex-col border-2"
			key={props.project.slug}>
			<div className="relative min-h-[150px] flex-1">
				<Link
					href={props.project.repo}
					target="_blank"
					rel="noopener noreferrer"
					className="theme-text absolute right-0 z-10"
					aria-label={`${props.project.title} on Github`}>
					<IconBrandGithub
						size={50}
						className="theme-interactable border-0 border-b-2 border-l-2 p-2"
					/>
				</Link>
				{props.project.image ? (
					<Link
						href={props.project.url}
						target="_blank"
						rel="noopener noreferrer">
						<div className="relative h-full overflow-hidden">
							<Image
								priority
								fill
								src={props.project.image}
								alt={props.project.title}
								className="object-cover transition duration-1000 sm:object-scale-down sm:hover:scale-110"
							/>
						</div>
					</Link>
				) : (
					<Link
						href={props.project.url}
						className="group flex h-full items-center justify-center">
						<span className="flex items-center text-3xl uppercase transition group-hover:translate-x-10">
							visit
							<IconArrowRight
								className="inline transition group-hover:translate-x-5"
								size={50}
							/>
						</span>
					</Link>
				)}
			</div>
			<div className="theme-border flex border-t-2 p-2">
				<div className="flex flex-1 flex-col gap-2">
					<div className="flex items-center gap-4">
						<Link
							href={props.project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl uppercase">
							{props.project.title}
						</Link>
						<div className="ml-auto flex gap-2">
							{props.project.tags.map(x => (
								<span
									key={x}
									className="theme-border theme-inverted border-2 p-1 font-bold">
									{x}
								</span>
							))}
						</div>
					</div>
					<h2 className="text-lg">{props.project.description}</h2>
				</div>
			</div>
		</div>
	);
};

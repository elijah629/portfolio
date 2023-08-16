import { Project } from "@lib/project";
import { IconThumbUp } from "@tabler/icons-react";
import {
	IconArrowLeftBar,
	IconArrowRight,
	IconBrandGithub,
	IconShare,
	IconShare2
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import CopyButton from "./CopyButton";
import { IconSize } from "@lib/iconSizes";

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
				<div className="theme-border theme-background absolute right-0 z-10 flex border-b-2 border-l-2">
					<Link
						href={props.project.repo}
						target="_blank"
						rel="noopener noreferrer"
						className="theme-interactable border-0 p-2"
						aria-label={`${props.project.title} on Github`}>
						<IconBrandGithub size={IconSize.Medium} />
					</Link>
				</div>
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
						<span className="flex items-center text-3xl transition group-hover:translate-x-10">
							VISIT
							<IconArrowRight
								className="inline transition group-hover:translate-x-5"
								size={IconSize.ExtraLarge}
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
							<span className="flex items-center gap-2">
								{props.project.title}
								{new Date().getTime() -
									props.project.timestamp <=
									7 * 24 * 60 * 60 * 1000 && (
									<span className="bg-pink-600 px-2 text-sm font-bold lowercase text-primary-dark transition hover:opacity-10 dark:text-primary-light">
										new
									</span>
								)}
							</span>
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

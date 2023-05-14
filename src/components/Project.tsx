import { Project as IProject } from "@lib/project";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
	project: IProject;
}

export const Project: React.FunctionComponent<ProjectProps> = (
	props: ProjectProps
) => {
	return (
		<Link
			target="_blank"
			rel="noopener noreferrer"
			href={props.project.url}
			className="theme-border flex h-full flex-1 flex-col border-2"
			key={props.project.slug}>
			<div className="min-h-[150px] flex-1">
				<div className="relative h-full overflow-hidden">
					<Image
						fill
						src={props.project.image}
						alt={props.project.title}
						className="object-cover transition duration-1000 sm:object-scale-down sm:hover:scale-110"
					/>
				</div>
			</div>
			<div className="theme-border flex border-t-2 p-2">
				<div className="flex flex-1 flex-col">
					<div className="flex gap-4">
						<h1 className="text-2xl uppercase">
							{props.project.title}
						</h1>
						<div className="ml-auto flex gap-2">
							{props.project.tags.map(x => (
								<span
									key={x}
									className="theme-border theme-inverted border-2 p-1 font-bold">
									#{x}
								</span>
							))}
						</div>
					</div>
					<h2 className="text-lg">{props.project.description}</h2>
				</div>
			</div>
		</Link>
	);
};

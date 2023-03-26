import { IconArrowLeft, IconArrowRight, IconX } from "@tabler/icons-react";
import Link from "next/link";

interface ProjectButtonsProps {
	next: string | null;
	previous: string | null;
}

const DisabledButton = (
	<span className="flex flex-1 cursor-not-allowed justify-center p-8 text-error">
		<IconX size={45} />
	</span>
);

export const ProjectButtons: React.FunctionComponent<ProjectButtonsProps> = (
	props: ProjectButtonsProps
) => {
	return (
		<div className="theme-border first:[&>*]:theme-border flex border-2 first:[&>*]:border-r-2">
			{props.previous ? (
				<Link
					href={`/project/${props.previous}`}
					aria-label="Previous project"
					className="hover:theme-inverted focus:theme-inverted group flex flex-1 justify-center p-8 sm:duration-200">
					<IconArrowLeft
						className="relative left-0 transition-all group-hover:-left-[25%]"
						size={45}
					/>
				</Link>
			) : (
				DisabledButton
			)}
			{props.next ? (
				<Link
					href={`/project/${props.next}`}
					aria-label="Next project"
					className="hover:theme-inverted focus:theme-inverted group flex flex-1 justify-center p-8">
					<IconArrowRight
						className="relative left-0 transition-all group-hover:left-[25%]"
						size={45}
					/>
				</Link>
			) : (
				DisabledButton
			)}
		</div>
	);
};

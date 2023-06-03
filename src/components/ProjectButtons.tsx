import { IconArrowLeft, IconArrowRight, IconX } from "@tabler/icons-react";
import Link from "next/link";

interface ProjectButtonsProps {
	next: string | null;
	previous: string | null;
}

const DisabledButton = (
	<span className="theme-border flex flex-1 cursor-not-allowed justify-center p-8 text-error">
		<IconX size={45} />
	</span>
);

export const ProjectButtons: React.FunctionComponent<ProjectButtonsProps> = (
	props: ProjectButtonsProps
) => {
	return (
		<div className="theme-border flex border-2 first:[&>*]:border-r-2">
			{props.previous ? (
				<Link
					href={`/project/${props.previous}`}
					aria-label="Previous project"
					className="theme-interactable sm:group flex flex-1 justify-center border-0 p-8 transition-none">
					<IconArrowLeft
						className="relative left-0 transition-all sm:group-hover:-left-[25%]"
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
					className="theme-interactable sm:group flex flex-1 justify-center border-0 p-8 transition-none">
					<IconArrowRight
						className="relative left-0 transition-all sm:group-hover:left-[25%]"
						size={45}
					/>
				</Link>
			) : (
				DisabledButton
			)}
		</div>
	);
};

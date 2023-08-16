import { IconSize } from "@lib/iconSizes";
import { IconArrowLeft, IconArrowRight, IconX } from "@tabler/icons-react";
import Link from "next/link";

interface ProjectButtonsProps {
	next: string | null;
	previous: string | null;
}

const DisabledButton = (
	<span className="theme-border flex flex-1 cursor-not-allowed justify-center p-8 text-error">
		<IconX size={IconSize.ExtraLarge} />
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
					className="theme-interactable flex flex-1 justify-center border-0 p-8">
					<IconArrowLeft size={IconSize.ExtraLarge} />
				</Link>
			) : (
				DisabledButton
			)}
			{props.next ? (
				<Link
					href={`/project/${props.next}`}
					aria-label="Next project"
					className="theme-interactable flex flex-1 justify-center border-0 p-8">
					<IconArrowRight size={IconSize.ExtraLarge} />
				</Link>
			) : (
				DisabledButton
			)}
		</div>
	);
};

import { IconSize } from "@/lib/iconSize";
import { TbArrowLeft, TbArrowRight, TbX } from "solid-icons/tb";
import { Show } from "solid-js";
import { A } from "solid-start";

function DisabledButton() {
	return (
		<span class="flex flex-1 cursor-not-allowed justify-center p-8 text-red-500">
			<TbX size={IconSize.ExtraLarge} />
		</span>
	);
}

export default function ProjectButtons(props: {
	next: string | undefined;
	previous: string | undefined;
}) {
	return (
		<div class="theme-border flex border-2 first:[&>*]:border-r-2">
			<Show
				when={props.previous}
				fallback={<DisabledButton />}>
				<A
					href={`/project/${props.previous}`}
					aria-label="Previous project"
					class="btn flex flex-1 justify-center border-0 p-8">
					<TbArrowLeft size={IconSize.ExtraLarge} />
				</A>
			</Show>
			<Show
				when={props.next}
				fallback={<DisabledButton />}>
				<A
					href={`/project/${props.next}`}
					aria-label="Next project"
					class="btn flex flex-1 justify-center border-0 p-8">
					<TbArrowRight size={IconSize.ExtraLarge} />
				</A>
			</Show>
		</div>
	);
}

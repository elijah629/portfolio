import { IconSize } from "@/lib/iconSize";
import { A } from "@solidjs/router";
import { TbBrandGithub } from "solid-icons/tb";
import { createSignal } from "solid-js";

export function Footer() {
	const address = "0x92AF1aEEd7D8Da4051D2F80ACb11124e5495F2E3";

	const o = (
		<>
			<span
				class="hidden sm:inline"
				aria-label={address}>
				ETH {address}
			</span>
			<span
				class="inline sm:hidden"
				aria-label={address}>
				{`ETH ${address.slice(0, 6)}..${address.slice(-4)}`}
			</span>
		</>
	);

	const [content, setContent] = createSignal(o);

	return (
		<footer class="grid grid-cols-[1fr,auto,1fr] items-center border-t-2 bg-secondary p-4">
			<A
				href="https://github.com/elijah629"
				target="_blank"
				rel="noopener noreferrer"
				class="btn w-fit p-2"
				aria-label="Github">
				<TbBrandGithub size={IconSize.Medium} />
			</A>
			<button
				class="btn col-start-2"
				onClick={() => {
					if (window.isSecureContext) {
						navigator.clipboard.writeText(address);
						setContent("👍 copied");
					}
					setTimeout(() => setContent(o), 2000);
				}}>
				{content()}
			</button>
		</footer>
	);
}

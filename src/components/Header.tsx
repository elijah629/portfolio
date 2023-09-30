import { A } from "solid-start";

export default function Header() {
	return (
		<header class="border-b-2 bg-secondary p-2">
			<A href="/">
				<h1 class="text-center text-2xl">
					&#8288; Elijah629
					{/* <RandomReveal
						isPlaying
						duration={1}
						characterSet={"1234567890abcdefABCDEF".split("")}
						characters="Elijah629"
					/> */}
				</h1>
			</A>
		</header>
	);
}

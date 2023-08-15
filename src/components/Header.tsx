"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const RandomReveal = dynamic(
	() => import("react-random-reveal").then(x => x.RandomReveal),
	{
		ssr: false
	}
);

export const Header: React.FunctionComponent = () => {
	return (
		<header className="theme-border flex-center border-2 p-2">
			<Link href="/">
				<h1 className="text-center text-2xl">
					&#8288;
					<noscript>Elijah629</noscript>
					<RandomReveal
						isPlaying
						duration={1}
						characterSet={"eioklxm!#$&*1234567890".split("")}
						characters="Elijah629"
					/>
				</h1>
			</Link>
		</header>
	);
};

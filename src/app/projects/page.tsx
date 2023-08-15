import { slug_translations } from "@app/project/[slug]/page";
import { getProject } from "@lib/project";
import { IconBrandGithub } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

export default async function ProjectPage() {
	const slugs = Object.keys((await slug_translations).xi);
	const projects = await Promise.all(slugs.map(x => getProject(x)));

	return (
		<>
			<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
				{projects.map(x => (
					<div
						key={x.slug}
						className="relative">
						<Link
							href={x.repo}
							target="_blank"
							rel="noopener noreferrer"
							className="theme-text absolute right-0 z-10"
							aria-label={`${x.title} on Github`}>
							<IconBrandGithub
								size={50}
								className="theme-interactable border-0 border-b-2 border-l-2 p-2"
							/>
						</Link>
						<Link
							href={x.url}
							className="theme-interactable flex aspect-square items-center justify-center text-3xl font-bold uppercase"
							key={x.slug}>
							{x.title}
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

export const metadata: Metadata = {
	title: "All Projects"
};

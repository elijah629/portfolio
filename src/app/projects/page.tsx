import { slug_translations } from "@app/project/[slug]/page";
import { IconSize } from "@lib/iconSizes";
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
						<div className="theme-border theme-background absolute right-0 z-10 flex border-b-2 border-l-2">
							<Link
								href={x.repo}
								target="_blank"
								rel="noopener noreferrer"
								className="theme-interactable border-0 p-2"
								aria-label={`${x.title} on Github`}>
								<IconBrandGithub size={IconSize.Medium} />
							</Link>
						</div>
						<Link
							href={x.url}
							className="theme-interactable flex aspect-square items-center justify-center text-3xl font-bold uppercase"
							key={x.slug}>
							<span className="flex items-center gap-2">
								{x.title}
								{new Date().getTime() - x.timestamp <=
									7 * 24 * 60 * 60 * 1000 && (
									<span className="bg-pink-600 px-2 text-sm font-bold lowercase text-primary-dark dark:text-primary-light">
										new
									</span>
								)}
							</span>
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

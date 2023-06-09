import "./globals.css";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { withFavicon } from "@lib/favicon";
import { metaplug } from "@lib/metaplug";
import { withPWA } from "@lib/pwa";
import { JetBrains_Mono } from "next/font/google";

//  Space_Grotesk({ subsets: ["latin"] });

const font = JetBrains_Mono({ weight: "variable", subsets: ["latin"] });

export const metadata = metaplug(
	{
		title: "Elijah629's Portfolio",
		description: "This is my website where I showcase my projects"
	},
	[withFavicon(), withPWA()]
);

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="h-full">
			<body
				className={`theme flex h-full flex-col gap-2 tracking-tighter ${font.className}`}>
				<div className="flex flex-1 flex-col gap-4 p-2">
					<Header />
					<main className="flex-1">{children}</main>
				</div>
				<Footer />
			</body>
		</html>
	);
}

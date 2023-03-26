import { Metadata } from "next";

export function withFavicon(): Metadata {
	return {
		icons: {
			apple: "/apple-touch-icon.png",
			icon: [
				{ sizes: "32x32", url: "/favicon-32x32.png" },
				{ sizes: "16x16", url: "/favicon-16x16.png" }
			]
		}
	};
}

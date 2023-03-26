import { Metadata } from "next";

export function withPWA(manifestPath = "/manifest.json"): Metadata {
	return {
		manifest: manifestPath,
		themeColor: "#000000",
		applicationName: "Elijah629",
		colorScheme: "dark light"
	};
}

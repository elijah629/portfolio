import solid from "solid-start/vite";
import vercel from "solid-start-vercel";

import { PluginOption, defineConfig } from "vite";
import path from "node:path";
import { parse } from "yaml";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		yaml(),
		commit_hash({
			repo: "elijah629/portfolio"
		}),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: null,
			manifest: {
				start_url: "/",
				name: "Elijah629's Portfolio",
				short_name: "Elijah629",
				theme_color: "#1dafa1",
				background_color: "#16171f",
				display: "standalone",
				orientation: "portrait",
				icons: [
					{
						src: "/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						purpose: "any maskable",
						src: "/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		}),
		solid({ adapter: vercel() })
	],
	build: {
		target: "esnext"
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	}
});

function yaml(): PluginOption {
	return {
		name: "vite:transform-yaml",

		transform(code, filename) {
			if (/\.ya?ml/.test(filename)) {
				return `export default ${JSON.stringify(parse(code))};`;
			}
		}
	};
}

function commit_hash(options: { repo: string }) {
	const virtualModuleId = "virtual:COMMIT_HASH";

	return {
		name: "commit-hash",
		resolveId(id: string) {
			if (id === virtualModuleId) {
				return virtualModuleId;
			}
		},
		async load(id: string) {
			if (id === virtualModuleId) {
				// HMR will rate limit you from gh api
				if (process.env.NODE_ENV !== "production") {
					return `export default ""`;
				}
				// Vercel doesn't upload .git
				const hash: string = await fetch(
					`https://api.github.com/repos/${options.repo}/commits/HEAD`
				)
					.then(x => x.json())
					.then(x => x.sha);

				return `export default "${hash}"`;
			}
		}
	};
}

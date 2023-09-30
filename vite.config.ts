import solid from "solid-start/vite";
import vercel from "solid-start-vercel";

import { PluginOption, defineConfig } from "vite";
import path from "node:path";
import { parse } from "yaml";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		yaml(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: null,
			manifest: {
				start_url: "/",
				name: "Elijah629's Portfolio",
				short_name: "Elijah629",
				theme_color: "#1dafa1",
				background_color: "#1d1e28",
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

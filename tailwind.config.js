/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				"primary-light": "#FFFFFF",
				"secondary-light": "#EFEFEF",
				// "accent-light": "#000000",
				"accent-light": "#1dafa1",

				"primary-dark": "#1d1e28",
				"secondary-dark": "#16171f",
				// "accent-dark": "#FFFFFF",
				"accent-dark": "#1dafa1",

				"error": "#ff2222",
				"success": "#22ff22"
			}
		}
	},
	plugins: [require("tailwind-scrollbar")]
};

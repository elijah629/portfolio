/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			colors: {
				"primary-light": "#FFFFFF",
				"secondary-light": "#EFEFEF",
				// "accent-light": "#000000",
				"accent-light": "#1dafa1",

				"primary-dark": "#000000",
				"secondary-dark": "#101010",
				// "accent-dark": "#FFFFFF",
				"accent-dark": "#1dafa1",

				"error": "#ff2222",
				"success": "#22ff22"
			}
		}
	},
	plugins: [require("tailwind-scrollbar")]
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			borderColor: {
				DEFAULT: "#1dafa1"
			},
			colors: {
				base: "#1d1e28",
				primary: "#1d1e28",
				secondary: "#16171f",
				accent: "#1dafa1"
			}
		}
	},
	plugins: [require("tailwind-scrollbar")]
};

import nextPWA from "next-pwa";

const withPWA = nextPWA({
	dest: "public"
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	experimental: {
		appDir: true
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.imgur.com",
				port: "",
				pathname: "/**"
			}
		]
	}
});

export default nextConfig;

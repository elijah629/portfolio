import nextPwa from "@murkrage/next-pwa";

const withPWA = nextPwa({
	dest: "public",
	disable: process.env.NODE_ENV === "development"
});

/** @type {import('next').NextConfig} */
const config = {
	experimental: {
		serverActions: true
	},
	reactStrictMode: true
};

const nextConfig = withPWA(config);

export default nextConfig;

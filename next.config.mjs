import nextPwa from "@murkrage/next-pwa";

const withPWA = nextPwa({
	dest: "public"
});

/** @type {import('next').NextConfig} */
const config = {
	experimental: {
		serverActions: true
	},
	reactStrictMode: true
};

const nextConfig =
	process.env.NODE_ENV === "development" ? config : withPWA(config);

export default nextConfig;

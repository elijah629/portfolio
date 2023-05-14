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

const nextConfig = withPWA(config);

export default nextConfig;

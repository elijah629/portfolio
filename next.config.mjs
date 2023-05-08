import nextPwa from "@murkrage/next-pwa";

const withPWA = nextPwa({
	dest: "public"
});

/** @type {import('next').NextConfig} */
const typedCFG = {
	experimental: {
		serverActions: true
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
};

const nextConfig = withPWA(typedCFG);

export default nextConfig;

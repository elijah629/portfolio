declare module "*.yaml" {
	const value: Record<string, any>;
	export default value;
}
declare module "*.yml" {
	const value: Record<string, any>;
	export default value;
}

declare module "virtual:COMMIT_HASH" {
	const value: string;
	export default value;
}

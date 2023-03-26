import { Metadata } from "next";

export function metaplug(metadata: Metadata, plugins: Metadata[]): Metadata {
	const pluginMeta = plugins.reduce((a, b) => ({ ...a, ...b }));
	return { ...metadata, ...pluginMeta };
}

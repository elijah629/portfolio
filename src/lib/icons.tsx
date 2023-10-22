// This file will remain here until solid-icons is fixed to work with solid@^1.8.0
// Icons from tabler icons

import { Component, JSX, splitProps } from "solid-js";

export interface IconProps
	extends Partial<
		JSX.IntrinsicElements & JSX.SvgSVGAttributes<SVGSVGElement>
	> {
	size?: string | number;
}

function I(children: JSX.Element): Component<IconProps> {
	return props => {
		const [local, others] = splitProps(props, ["size"]);
		return (
			<svg
				ref={props.ref}
				xmlns="http://www.w3.org/2000/svg"
				width={local.size ?? 24}
				height={local.size ?? 24}
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				{...others}>
				{children}
			</svg>
		);
	};
}

export const IconBrandRust = I(
	<>
		<path d="M10.139 3.463c.473 -1.95 3.249 -1.95 3.722 0a1.916 1.916 0 0 0 2.859 1.185c1.714 -1.045 3.678 .918 2.633 2.633a1.916 1.916 0 0 0 1.184 2.858c1.95 .473 1.95 3.249 0 3.722a1.916 1.916 0 0 0 -1.185 2.859c1.045 1.714 -.918 3.678 -2.633 2.633a1.916 1.916 0 0 0 -2.858 1.184c-.473 1.95 -3.249 1.95 -3.722 0a1.916 1.916 0 0 0 -2.859 -1.185c-1.714 1.045 -3.678 -.918 -2.633 -2.633a1.916 1.916 0 0 0 -1.184 -2.858c-1.95 -.473 -1.95 -3.249 0 -3.722a1.916 1.916 0 0 0 1.185 -2.859c-1.045 -1.714 .918 -3.678 2.633 -2.633a1.914 1.914 0 0 0 2.858 -1.184z"></path>
		<path d="M8 12h6a2 2 0 1 0 0 -4h-6v8v-4z"></path>
		<path d="M19 16h-2a2 2 0 0 1 -2 -2a2 2 0 0 0 -2 -2h-1"></path>
		<path d="M9 8h-4"></path>
		<path d="M5 16h4"></path>
	</>
);
export const IconX = I(
	<>
		<path d="M18 6l-12 12"></path>
		<path d="M6 6l12 12"></path>
	</>
);
export const IconBrandGithub = I(
	<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
);
export const IconArrowRight = I(
	<>
		<path d="M5 12l14 0"></path>
		<path d="M13 18l6 -6"></path>
		<path d="M13 6l6 6"></path>
	</>
);

export const IconArrowLeft = I(
	<>
		<path d="M5 12l14 0"></path>
		<path d="M5 12l6 6"></path>
		<path d="M5 12l6 -6"></path>
	</>
);

export const IconBrandSolidJS = I(
	<>
		<path d="M2 17.5c4.667 3 8 4.5 10 4.5c2.5 0 4 -1.5 4 -3.5s-1.5 -3.5 -4 -3.5c-2 0 -5.333 .833 -10 2.5z"></path>
		<path d="M5 13.5c4.667 -1.667 8 -2.5 10 -2.5c2.5 0 4 1.5 4 3.5c0 .738 -.204 1.408 -.588 1.96l-2.883 3.825"></path>
		<path d="M22 6.5c-4 -3 -8 -4.5 -10 -4.5c-2.04 0 -2.618 .463 -3.419 1.545"></path>
		<path d="M2 17.5l3 -4"></path>
		<path d="M22 6.5l-3 4"></path>
		<path d="M8.581 3.545l-2.953 3.711"></path>
		<path d="M7.416 12.662c-1.51 -.476 -2.416 -1.479 -2.416 -3.162c0 -2.5 1.5 -3.5 4 -3.5c1.688 0 5.087 1.068 8.198 3.204a114.76 114.76 0 0 1 1.802 1.296l-2.302 .785"></path>
	</>
);

export const IconBrandGit = I(
	<>
		<path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
		<path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
		<path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
		<path d="M12 15v-6"></path>
		<path d="M15 11l-2 -2"></path>
		<path d="M11 7l-1.9 -1.9"></path>
		<path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path>
	</>
);
export const IconBrandHtml5 = I(
	<>
		<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
		<path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
	</>
);
export const IconBrandSupabase = I(<path d="M4 14h8v7l8 -11h-8v-7z"></path>);
export const IconBrandCSharp = I(
	<>
		<path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"></path>
		<path d="M16 7l-1 10"></path>
		<path d="M20 7l-1 10"></path>
		<path d="M14 10h7.5"></path>
		<path d="M21 14h-7.5"></path>
	</>
);
export const IconBrandCss3 = I(
	<>
		<path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
		<path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
	</>
);
export const IconBrandNextjs = I(
	<>
		<path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
		<path d="M15 12v-3"></path>
	</>
);
export const IconBrandReact = I(
	<>
		<path d="M6.3 8.71C3.7 9.43 2 10.64 2 12c0 2.21 4.48 4 10 4 .77 0 1.53-.04 2.25-.1m3.45-.61c2.6-.72 4.3-1.93 4.3-3.29 0-2.21-4.48-4-10-4-.77 0-1.53.04-2.25.1" />
		<path d="M6.3 15.29c-.67 2.61-.48 4.69.7 5.37 1.91 1.1 5.7-1.88 8.46-6.66.4-.67.74-1.34 1.04-2m1.2-3.28c.67-2.62.48-4.7-.7-5.38-1.91-1.1-5.7 1.88-8.46 6.66a24.5 24.5 0 0 0-1.04 2" />
		<path d="M12 5.42c-1.93-1.89-3.82-2.76-5-2.08C5.09 4.44 5.77 9.22 8.54 14c.38.67.79 1.3 1.2 1.9M12 18.57c1.93 1.9 3.82 2.77 5 2.09 1.91-1.1 1.23-5.88-1.54-10.66-.37-.65-.78-1.28-1.2-1.9m-2.76 4.77a1 1 0 1 0 1-1.74 1 1 0 0 0-1 1.74z" />
	</>
);
export const IconBrandTypescript = I(
	<>
		<path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path>
		<path d="M9 12h4"></path>
		<path d="M11 12v6"></path>
		<path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path>
	</>
);
export const IconBrandVercel = I(<path d="M3 19h18l-9 -15z"></path>);

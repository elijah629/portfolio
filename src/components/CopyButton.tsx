"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";

interface CopyButtonProps
	extends React.PropsWithChildren,
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		> {
	copied: React.ReactNode;
	text: string;
	timeout?: number;
}

export default function CopyButton(props: CopyButtonProps) {
	const [content, setContent] = useState<React.ReactNode>(props.children);

	return (
		<button
			{...{
				...props,
				onClick: undefined,
				children: undefined
			}}
			onClick={e => {
				props.onClick?.(e);
				if (window.isSecureContext) {
					navigator.clipboard.writeText(props.text);
					setContent(props.copied);
				} else {
					setContent("Error");
				}
				setTimeout(
					() => setContent(props.children),
					props.timeout ?? 2000
				);
			}}>
			{content}
		</button>
	);
}

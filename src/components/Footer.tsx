"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import CopyButton from "./CopyButton";
import { IconSize } from "@lib/iconSizes";

export const Footer: React.FunctionComponent = () => {
	const address = "0x92AF1aEEd7D8Da4051D2F80ACb11124e5495F2E3";
	const [text, setText] = useState<string | null>(null);

	return (
		<footer className="theme-border grid grid-cols-[1fr,auto,1fr] items-center justify-center gap-2 border-t-2 bg-secondary-light p-4 dark:bg-secondary-dark">
			<Link
				href="https://github.com/elijah629"
				target="_blank"
				rel="noopener noreferrer"
				className="theme-interactable mr-auto p-2"
				aria-label="Github">
				<IconBrandGithub size={IconSize.Medium} />
			</Link>
			<CopyButton
				className="theme-interactable col-start-2"
				copied={"Copied"}
				text={address}>
				<span
					className="hidden sm:inline"
					aria-label={address}>
					{text ? text : `ETH ${address}`}
				</span>
				<span
					className="inline sm:hidden"
					aria-label={address}>
					{text
						? text
						: `ETH ${address.slice(0, 6)}..${address.slice(-4)}`}
				</span>
			</CopyButton>
		</footer>
	);
};

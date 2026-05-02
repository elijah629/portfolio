import Link from "next/link";
import { site } from "@/data/site";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="flex flex-col gap-3 border-t bg-secondary p-4 font-mono text-sm md:flex-row md:items-center md:justify-between">
      <span>{"// TODO: finish this"}</span>
      <div className="flex items-center gap-2">
        <Button variant="link" asChild>
          <Link href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
        </Button>
      </div>
    </footer>
  );
}

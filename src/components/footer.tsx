import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t p-4 bg-secondary font-mono flex justify-between">
      <span>// TODO: finish this</span>
      <Button variant="link" asChild>
        <Link href="https://github.com/elijah629">GitHub</Link>
      </Button>
    </footer>
  );
}

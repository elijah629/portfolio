import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 max-w-[80vw]">
        <h1 className="text-5xl md:text-8xl font-black">LOST?</h1>
        <h1 className="text-4xl md:text-7xl text-muted-foreground">
          404, Not Found
        </h1>
        <div className="flex md:flex-row flex-col gap-3">
          <Button className="md:w-min w-full mt-3 text-lg" size="lg" asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

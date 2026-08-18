"use client";

import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintResumeButton() {
  return (
    <div className="absolute top-4 right-4 z-40 print:hidden">
      <Button
        aria-label="Print résumé or save as PDF"
        className="rounded-full"
        onClick={() => window.print()}
        size="icon-lg"
        title="Print résumé / Save as PDF"
        type="button"
        variant="outline"
      >
        <FileDown data-icon="inline-start" />
      </Button>
    </div>
  );
}

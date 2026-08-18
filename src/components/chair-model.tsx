"use client";

import { createElement, useEffect } from "react";

export function ChairModel() {
  useEffect(() => {
    void import("@google/model-viewer");
  }, []);

  const modelViewer = createElement("model-viewer", {
    alt: "Interactive 3D CAD model of the RIO chair base",
    "auto-rotate": true,
    "camera-controls": true,
    "camera-orbit": "35deg 68deg 105%",
    className: "rio-model-viewer",
    exposure: "1.15",
    "interaction-prompt": "auto",
    "rotation-per-second": "18deg",
    "shadow-intensity": "1",
    src: "/models/rio-chair.glb",
    "touch-action": "pan-y",
  });

  return (
    <figure className="mt-8">
      <div className="chair-model-frame">{modelViewer}</div>
      <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
        RIO base CAD · drag to orbit · drivetrain attachments hidden
      </figcaption>
    </figure>
  );
}

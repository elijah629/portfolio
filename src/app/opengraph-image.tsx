import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#151520",
        color: "#e4e8ff",
        padding: "72px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: "18px", fontSize: 28 }}>
        <span>Rust</span>
        <span>AI/ML</span>
        <span>Hardware</span>
        <span>Robotics</span>
        <span>Next.js</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ color: "#8caaee", fontSize: 34 }}>{site.url}</div>
        <div style={{ fontSize: 92, fontWeight: 900, lineHeight: 1 }}>
          {site.name}
        </div>
        <div style={{ maxWidth: 900, color: "#c9d1f5", fontSize: 38 }}>
          Software, mechatronics, robotics, CAD, aviation, and projects that
          start by asking why something works.
        </div>
      </div>
    </div>,
    size,
  );
}

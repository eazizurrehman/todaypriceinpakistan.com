import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#080b10",
        color: "#f6d58a",
        fontSize: 64,
        display: "flex",
        flexDirection: "column",
        padding: 80,
        width: "100%",
        height: "100%",
      }}
    >
      <div>Gold Rate Today</div>
      <div style={{ fontSize: 32, color: "#fff", marginTop: 20 }}>
        24K · Rs. 495,660 per tola
      </div>
      <div
        style={{ fontSize: 24, color: "rgba(255,255,255,0.4)", marginTop: 12 }}
      >
        todaypriceinpakistan.com
      </div>
    </div>,
  );
}

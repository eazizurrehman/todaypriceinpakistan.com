import { ImageResponse } from "next/og";

export const alt = "Today Price in Pakistan — live commodity rates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background:
          "linear-gradient(145deg, #0f1318 0%, #151a22 45%, #1a1f29 100%)",
        color: "#f4f4f5",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontSize: 22, color: "#a1a1aa" }}>
            todaypriceinpakistan.com
          </span>
          <span style={{ fontSize: 34, fontWeight: 700 }}>
            Today Price in Pakistan
          </span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          Live gold, silver, dollar & fuel rates
        </span>
        <span style={{ fontSize: 30, color: "#d4d4d8", maxWidth: 820 }}>
          Clean UI • fast updates • no popup ads
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          {["Gold", "Silver", "USD", "Petrol"].map((label) => (
            <span
              key={label}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 22,
                color: "#e4e4e7",
              }}
            >
              {label}
            </span>
          ))}
        </div>
        <div
          style={{
            padding: "14px 28px",
            borderRadius: 999,
            background: "linear-gradient(90deg, #f6d58a, #e8b84a)",
            color: "#1a1408",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          24K from Rs. 495,660
        </div>
      </div>
    </div>,
    { ...size },
  );
}

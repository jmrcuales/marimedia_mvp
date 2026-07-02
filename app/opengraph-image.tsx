import { ImageResponse } from "next/og";

export const alt = "Mari Media | Affiliate Marketing & Email Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF5F7",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(233,30,99,0.18) 0%, rgba(233,30,99,0) 45%), radial-gradient(circle at 85% 80%, rgba(240,98,146,0.18) 0%, rgba(240,98,146,0) 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 32,
            background: "linear-gradient(135deg, #E91E63, #C2185B)",
            marginBottom: 40,
            boxShadow: "0 20px 40px rgba(233,30,99,0.3)",
          }}
        >
          <span style={{ fontSize: 64, fontWeight: 700, color: "#ffffff" }}>
            M
          </span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#222222",
            marginBottom: 16,
          }}
        >
          Mari Media
        </div>
        <div style={{ fontSize: 28, color: "#D6216E", fontWeight: 600 }}>
          Affiliate Marketing • Email Marketing
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Derek's Maintenance LLC · Mobile Mechanic in Raleigh, NC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 20% 20%, rgba(45,80,22,0.35), transparent 55%), radial-gradient(circle at 85% 90%, rgba(45,80,22,0.25), transparent 55%), #1A1A1A",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#4d7a1f",
            }}
          />
          <div
            style={{
              color: "#4d7a1f",
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Raleigh, NC · Available 24/7
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: "auto",
          }}
        >
          <div
            style={{
              color: "#F5F1E8",
              fontSize: 108,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-2px",
              textTransform: "uppercase",
            }}
          >
            Raleigh&apos;s
            <br />
            Mobile Mechanic.
          </div>
          <div
            style={{
              color: "#4d7a1f",
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "-1px",
            }}
          >
            Comes To You.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
            paddingTop: 28,
            borderTop: "2px solid rgba(77, 122, 31, 0.4)",
          }}
        >
          <div
            style={{
              color: "#F5F1E8",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Derek&apos;s Maintenance LLC
          </div>
          <div
            style={{
              color: "#F5F1E8",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            (919) 798-4452
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

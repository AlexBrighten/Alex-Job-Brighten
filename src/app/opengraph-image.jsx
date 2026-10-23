import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0b0c10",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          color: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(239, 68, 68, 0.22) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(56, 189, 248, 0.18) 0%, transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#ef4444",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#ef4444",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Founder&apos;s Office Associate
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Alex Job A<span style={{ color: "#ef4444" }}>.</span>
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "920px",
              lineHeight: 1.4,
            }}
          >
            Technical Thinker · Cross-Functional Executor · Builder at Heart
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "14px" }}>
            {["Product Strategy", "Technical Execution", "Rapid Prototyping", "Startup Operations"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: "#13151b",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "20px",
                    padding: "8px 18px",
                    fontSize: "15px",
                    color: "#38bdf8",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
          <span style={{ fontSize: "18px", color: "#64748b" }}>alexjob.pm@gmail.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

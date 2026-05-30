import React from "react";

const style: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  lineHeight: 1,
  whiteSpace: "nowrap",
};

export function LogoText({ dark }: { dark?: boolean }) {
  return (
    <span style={style}>
      <span style={{ color: dark ? "rgba(255,255,255,0.45)" : "rgba(12,35,48,0.40)" }}>
        ANDREA{" "}
      </span>
      <span style={{
        color: dark ? "#C4D9DC" : "#156686",
        textShadow: dark
          ? "0 0 16px rgba(196,217,220,0.75), 0 0 36px rgba(196,217,220,0.40)"
          : "0 0 16px rgba(21,102,134,0.55), 0 0 36px rgba(21,102,134,0.25)",
      }}>
        BONOMO
      </span>
    </span>
  );
}

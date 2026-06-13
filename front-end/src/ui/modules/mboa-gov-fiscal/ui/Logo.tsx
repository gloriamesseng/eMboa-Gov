import React from "react";
import { C } from "../tokens/tokens";

export function Logo({ size = 1 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 * size, cursor: "pointer" }}>
      <div
        style={{
          position: "relative",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/images/cameroun-flag.png"
          alt="Drapeau du Cameroun"
          style={{
            borderRadius: 4,
            objectFit: "cover",
            display: "block",
            height: 36 * size,
            width: "auto",
          }}
        />
      </div>
      <div style={{ lineHeight: 1.15 }}>
        <div style={{ fontSize: 16 * size, fontWeight: 700, color: C.white, letterSpacing: "-0.3px" }}>MboaGov</div>
        <div style={{ fontSize: 10 * size, fontWeight: 600, color: C.gold, letterSpacing: "2.5px", textTransform: "uppercase" }}>
          Fiscale
        </div>
      </div>
    </div>
  );
}


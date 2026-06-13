"use client";

import React from "react";
import { C } from "../tokens/tokens";
import { STATS } from "../data/constants";

export function StatsBar() {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.navy} 50%, #0A2A1A 100%)`,
        padding: "52px 40px",
        display: "grid",
        gridTemplateColumns: `repeat(${STATS.length},1fr)`,
        gap: 0,
        textAlign: "center",
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={s.label}
          style={{
            padding: "0 24px",
            borderRight: i < STATS.length - 1 ? "0.5px solid rgba(255,255,255,0.1)" : "none",
          }}
        >
          <div
            style={{
              fontSize: "clamp(32px,4vw,52px)",
              fontWeight: 800,
              color: C.gold,
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            {s.num}
          </div>
          <div style={{ fontSize: 13, color: C.textLight, marginTop: 10, letterSpacing: "0.3px" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}


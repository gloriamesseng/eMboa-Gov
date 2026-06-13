"use client";

import React from "react";
import { C } from "../tokens/tokens";
import { Icon } from "../ui/Icon";
import { FISCAL_CALENDAR } from "../data/constants";

export function FiscalCalendar() {
  return (
    <section style={{ background: C.white, padding: "80px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: 100,
              padding: "7px 18px",
              fontSize: 11,
              fontWeight: 600,
              color: C.textMuted,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              background: "rgba(0,0,0,0.03)",
            }}
          >
            <Icon.Calendar color={C.textMuted} /> Calendrier fiscal 2024
          </span>
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px,4vw,48px)",
            fontWeight: 800,
            color: C.textDark,
            letterSpacing: "-1.5px",
            marginBottom: 52,
          }}
        >
          Ne ratez aucune échéance
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {FISCAL_CALENDAR.map((m) => (
            <div
              key={m.name}
              style={{
                background: m.urgent ? C.white : C.offwhite,
                border: m.urgent ? `1.5px solid ${C.green}` : "1.5px solid rgba(0,0,0,0.07)",
                borderRadius: 16,
                padding: "24px 20px",
                boxShadow: m.urgent ? `0 4px 20px rgba(0,107,63,0.15)` : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon.Calendar color={C.blue} />
                  <span style={{ fontSize: 15, fontWeight: 700, color: C.blue }}>{m.name}</span>
                </div>
                {m.urgent && (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#92400E",
                      background: "#FEF3C7",
                      borderRadius: 6,
                      padding: "3px 8px",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    Urgent
                  </span>
                )}
              </div>

              {m.items.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, fontSize: 13, color: C.textMuted }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.textMuted, flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


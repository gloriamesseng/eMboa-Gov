"use client";

import React, { useState } from "react";
import { C } from "../tokens/tokens";
import { Icon } from "../ui/Icon";
import { QUICK_ACTIONS } from "../data/constants";

type Card = (typeof QUICK_ACTIONS)[number];

const iconFor = (key: Card["key"]) => {
  switch (key) {
    case "calc":
      return <Icon.Calc />;
    case "status":
      return <Icon.Shield color={C.green} />;
    case "plan":
      return <Icon.TrendUp />;
    case "calendar":
      return <Icon.Calendar color="#F59E0B" />;
    case "declarations":
      return <Icon.FileText />;
    case "admin":
      return <Icon.Building color={C.green} />;
    default:
      return <Icon.Sparkles />;
  }
};

export function QuickActions() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    {
      key: "calc",
      bg: "#EEF2FF",
      name: "Calculer mes impôts",
      desc: "Simulez votre IR et taxes applicables",
    },
    {
      key: "status",
      bg: "#ECFDF5",
      name: "Vérifier mon statut fiscal",
      desc: "Consultez votre situation en temps réel",
    },
    {
      key: "plan",
      bg: "#F5F3FF",
      name: "Planifier mes échéances",
      desc: "Anticipez vos obligations fiscales",
    },
    {
      key: "calendar",
      bg: "#FFFBEB",
      name: "Calendrier fiscal",
      desc: "Toutes les dates limites en un coup d'œil",
    },
    {
      key: "declarations",
      bg: "#EFF6FF",
      name: "Mes déclarations",
      desc: "Historique et suivi de vos déclarations",
    },
    {
      key: "admin",
      bg: "#ECFDF5",
      name: "Démarches administratives",
      desc: "Formulaires et guides pour vos formalités",
    },
  ] as const;

  return (
    <section style={{ background: C.offwhite, padding: "80px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              border: `1px solid ${C.green}`,
              borderRadius: 100,
              padding: "7px 18px",
              fontSize: 11,
              fontWeight: 600,
              color: C.green,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              background: "rgba(0,107,63,0.06)",
            }}
          >
            <Icon.Sparkles /> Actions rapides
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
          Vos services fiscaux en un clic
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          {cards.map((c, i) => (
            <div
              key={c.key}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: C.white,
                borderRadius: 20,
                padding: "28px 24px",
                border: hovered === i ? `1.5px solid ${C.green}` : "1.5px solid rgba(0,0,0,0.07)",
                boxShadow: hovered === i ? "0 8px 32px rgba(0,107,63,0.12)" : "0 2px 8px rgba(0,0,0,0.05)",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: c.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {iconFor(c.key)}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: C.textDark }}>{c.name}</span>
                  <Icon.Arrow color={hovered === i ? C.green : "#9CA3AF"} />
                </div>
                <div style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


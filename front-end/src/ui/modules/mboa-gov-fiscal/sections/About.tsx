"use client";

import React from "react";
import { C } from "../tokens/tokens";
import { Icon } from "../ui/Icon";
import { ABOUT_FEATURES, ABOUT_CHECKLIST } from "../data/constants";

export function About() {
  const iconFor = (key: (typeof ABOUT_FEATURES)[number]["key"]) => {
    switch (key) {
      case "instant":
        return <Icon.Zap />;
      case "security":
        return <Icon.Shield color={C.green} />;
      case "all":
        return <Icon.Users />;
      case "multi":
        return <Icon.Globe />;
      default:
        return <Icon.Sparkles />;
    }
  };

  const featureBgFor = (key: (typeof ABOUT_FEATURES)[number]["key"]) => {
    switch (key) {
      case "instant":
        return "#FFFBEB";
      case "security":
        return "#ECFDF5";
      case "all":
        return "#EFF6FF";
      case "multi":
        return "#F5F3FF";
      default:
        return "#EFF6FF";
    }
  };

  return (
    <section style={{ background: C.offwhite, padding: "80px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
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
            <Icon.Sparkles /> Notre mission
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2
              style={{
                fontSize: "clamp(28px,3.5vw,42px)",
                fontWeight: 800,
                color: C.textDark,
                letterSpacing: "-1.2px",
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              L'IA au service de la fiscalité camerounaise
            </h2>

            <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.75, marginBottom: 16 }}>
              MboaGov Fiscale est la plateforme nationale d'assistance fiscale intelligente du Cameroun, développée en partenariat avec la{" "}
              <strong style={{ color: C.textDark }}>Direction Générale des Impôts</strong>. Elle simplifie chaque interaction avec l'administration grâce à l'intelligence
              artificielle.
            </p>

            <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.75, marginBottom: 28 }}>
              Notre mission : rendre la fiscalité accessible, transparente et efficace pour chaque citoyen et chaque entreprise du territoire national.
            </p>

            {ABOUT_CHECKLIST.map((item, i) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    background: "rgba(0,107,63,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon.Check />
                </div>
                <span style={{ fontSize: 14, color: C.textDark, fontWeight: 500 }}>{item}</span>
              </div>
            ))}

            <button
              style={{
                marginTop: 32,
                padding: "16px 32px",
                borderRadius: 12,
                background: C.navy,
                border: "none",
                fontSize: 15,
                fontWeight: 700,
                color: C.white,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Découvrir nos services <Icon.Arrow color={C.white} />
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {ABOUT_FEATURES.map((f) => (
              <div
                key={f.key}
                style={{
                  background: C.white,
                  borderRadius: 16,
                  border: "1px solid rgba(0,0,0,0.07)",
                  padding: "24px 20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: featureBgFor(f.key),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  {iconFor(f.key)}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.textDark, marginBottom: 6 }}>{f.name}</div>
                <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


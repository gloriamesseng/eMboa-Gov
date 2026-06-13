"use client";

import React, { useState } from "react";
import { C } from "../tokens/tokens";
import { Icon } from "../ui/Icon";

export function CTA() {
  const [hovCta, setHovCta] = useState(false);
  const [hovSec, setHovSec] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        background: C.green,
        padding: "80px 40px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -80,
          top: "50%",
          transform: "translateY(-50%)",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -40,
          top: "50%",
          transform: "translateY(-50%)",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 120,
          bottom: -60,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            border: "1px solid rgba(255,255,255,0.35)",
            borderRadius: 100,
            padding: "7px 18px",
            marginBottom: 32,
            fontSize: 11,
            fontWeight: 600,
            color: C.white,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          <Icon.Sparkles /> Commencez maintenant
        </div>

        <h2
          style={{
            fontSize: "clamp(32px,5vw,56px)",
            fontWeight: 800,
            color: C.white,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Votre assistant fiscal vous attend
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            marginBottom: 48,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 0,
          }}
        >
          Rejoignez des millions de contribuables camerounais qui simplifient leurs démarches grâce à MboaGov Fiscale.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onMouseEnter={() => setHovCta(true)}
            onMouseLeave={() => setHovCta(false)}
            style={{
              padding: "18px 40px",
              borderRadius: 14,
              background: hovCta ? "#E6C00E" : C.gold,
              border: "none",
              fontSize: 16,
              fontWeight: 700,
              color: C.textDark,
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            Créer mon compte gratuitement
          </button>

          <button
            onMouseEnter={() => setHovSec(true)}
            onMouseLeave={() => setHovSec(false)}
            style={{
              padding: "18px 40px",
              borderRadius: 14,
              background: hovSec ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.35)",
              fontSize: 16,
              fontWeight: 600,
              color: C.white,
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}


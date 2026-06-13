"use client";

import React, { useState } from "react";
import { C } from "../tokens/tokens";
import { Icon } from "../ui/Icon";
import { SUGGESTIONS } from "../data/constants";

export function Hero() {
  const [query, setQuery] = useState("");
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);
  const submit = () => {
    if (query.trim()) {
      alert(`Envoyé : "${query}"`);
      setQuery("");
    }
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 80px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/images/monument_reunification.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px) brightness(0.5) saturate(1.3)",
          transform: "scale(1.08)",
        }}
      />

      <div
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 780,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "5px solid rgba(233, 197, 29, 0.8))",
            borderRadius: 80,
            padding: "9px 22px",
            fontSize: 11,
            fontWeight: 600,
            color: "rgba(233, 197, 29, 0.8)",
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Icon.Building color="rgba(233, 197, 29, 0.8)" />
          Direction Générale des Impôts — République du Cameroun
        </div>

        <h1
          style={{
            fontSize: "clamp(16px,7vw,56px)",
            fontWeight: 500,
            lineHeight: 1.06,
            letterSpacing: "-2.5px",
            color: C.white,
            marginTop: 35,
          }}
        >
          Comment pouvons-nous<br />
          vous aider&nbsp;
          <em style={{ color: C.gold, fontStyle: "italic" }}>aujourd'hui ?</em>
        </h1>

        <p
          style={{
            fontSize: "clamp(15px,2vw,18px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            maxWidth: 560,
            marginTop: 38,
          }}
        >
          Votre assistant fiscal intelligent pour toutes vos démarches
          administratives — rapide, sécurisé, disponible à toute heure.
        </p>

        <div
          style={{
            width: "100%",
            maxWidth: 680,
            background: "rgba(255,255,255,0.96)",
            borderRadius: 16,
            padding: "6px 6px 6px 8px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "1px solid rgba(0,107,63,0.25)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.3)",
            marginTop: 40,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: C.green,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon.Bot />
          </div>

          <textarea
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);

              e.target.style.height = "auto";
              e.target.style.height = `${Math.min(
                e.target.scrollHeight,
                72
              )}px`;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                query.trim() && submit();
              }
            }}
            rows={1}
            placeholder="Posez votre question fiscale ou choisissez une action ci-dessous"
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              fontSize: 14,
              color: "#111",
              outline: "none",
              padding: "10px 4px",
              fontFamily: "inherit",
              resize: "none",
              overflowY: "auto",
              minHeight: "40px",
              maxHeight: "72px",
              lineHeight: "24px",
              width: "100%",
            }}
          />

          <button
            onClick={submit}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "0.5px solid rgba(0,0,0,0.1)",
              background: query.trim() ? C.green : "rgba(0,0,0,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              color: query.trim() ? C.white : "#aaa",
            }}
            aria-label="Envoyer"
          >
            <Icon.Send />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            maxWidth: 680,
            marginTop: 40
          }}
          role="list"
          aria-label="Questions fréquentes"
        >
          {SUGGESTIONS.map((c, i) => (
            <button
              key={c}
              role="listitem"
              onClick={() => setQuery(c)}
              onMouseEnter={() => setHoveredChip(i)}
              onMouseLeave={() => setHoveredChip(null)}
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 100,
                padding: "9px 18px",
                fontSize: 13,
                color: C.white,
                background:
                  hoveredChip === i ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.09)",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                fontFamily: "inherit",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import { C } from "../tokens/tokens";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";

export function Footer() {
  const cols = [
    {
      title: "Services",
      links: ["Calculer mes impôts", "Vérifier mon statut", "Calendrier fiscal", "Mes déclarations"],
    },
    {
      title: "Gouvernement",
      links: ["DGI Cameroun", "Ministère des Finances", "Portail e-services", "Textes officiels"],
    },
    {
      title: "Support",
      links: ["Centre d'aide", "Contact DGI", "Guide utilisateur", "Accessibilité"],
    },
  ];

  return (
    <footer style={{ background: C.blueDeep, paddingTop: 64 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "0.5px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <Logo />
            <p style={{ fontSize: 13, color: C.textLight, lineHeight: 1.7, marginTop: 16, maxWidth: 240 }}>
              La plateforme nationale d'assistance fiscale intelligente de la République du Cameroun.
            </p>

            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              {[<Icon.Phone key="p" />, <Icon.Mail key="m" />, <Icon.Web key="w" />].map((ic, i) => (
                <button
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    border: "0.5px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {ic}
                </button>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: C.white,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {col.title}
              </div>

              {col.links.map((l) => (
                <div
                  key={l}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 13,
                    color: C.textLight,
                    marginBottom: 12,
                    cursor: "pointer",
                  }}
                >
                  {l}
                  <Icon.ExtLink />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            {["Politique de confidentialité", "Conditions d'utilisation", "Accessibilité", "Mentions légales"].map((l) => (
              <span key={l} style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>
                {l}
              </span>
            ))}
          </div>

          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
            © 2024 République du Cameroun · Conçu et développé par{" "}
            <strong style={{ color: C.gold }}>Gloria Messeng</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}


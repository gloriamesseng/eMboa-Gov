import React from "react";
import { C } from "../tokens/tokens";
import { Icon } from "../ui/Icon";

export function NavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const links = ["Accueil", "Services", "À propos", "Calendrier", "Contact"];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 150,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Panel */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 320,
          zIndex: 160,
          background: C.blueDark,
          borderLeft: "0.5px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          padding: "80px 32px 40px",
        }}
      >
        {links.map((l) => (
          <button
            key={l}
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 0",
              borderBottom: "0.5px solid rgba(255,255,255,0.07)",
              background: "none",
              border: "none",
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
              borderBottomColor: "rgba(255,255,255,0.07)",
              fontSize: 20,
              fontWeight: 700,
              color: C.white,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {l}
            <Icon.Arrow color={C.white} />
          </button>
        ))}

        <div style={{ marginTop: "auto" }}>
          <button
            style={{
              width: "100%",
              padding: "16px 0",
              borderRadius: 12,
              background: C.gold,
              border: "none",
              fontSize: 15,
              fontWeight: 700,
              color: C.textDark,
              cursor: "pointer",
            }}
          >
            Se connecter
          </button>

          <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
            Conçu par Gloria Messeng
          </div>
        </div>
      </nav>
    </>
  );
}


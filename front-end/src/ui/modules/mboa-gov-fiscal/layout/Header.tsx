"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { C } from "../tokens/tokens";
import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";


export function Header({
  onMenuToggle,
  menuOpen,
}: {
  onMenuToggle: () => void;
  menuOpen: boolean;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: 64,
        background: isHomePage ? "transparent" : "rgba(10, 22, 40, 0.92)",
        backdropFilter: isHomePage ? "none" : "blur(8px)",
        WebkitBackdropFilter: isHomePage ? "none" : "blur(8px)",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
        borderBottom: isHomePage ? "none" : `3px solid ${C.gold}`,
        // backdropFilter: "blur(0px)",
        // borderBottom: `3px solid ${C.gold}`,
      }}
    >
      <Logo />

      <div style={{ textAlign: "center", lineHeight: 1.3 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          République du Cameroun
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: C.white,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Assistant Fiscal National
        </div>
      </div>

      <button
        onClick={onMenuToggle}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          border: "0.5px solid rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        {menuOpen ? <Icon.Close /> : <Icon.Menu />}
      </button>
    </header>
  );
}


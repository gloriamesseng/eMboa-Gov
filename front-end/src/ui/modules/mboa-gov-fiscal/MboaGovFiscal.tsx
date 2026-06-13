"use client";

import React, { useState } from "react";
import { C } from "./tokens/tokens";
import { Header } from "./layout/Header";
import { NavDrawer } from "./layout/NavDrawer";
import { Hero } from "./sections/Hero";
import { QuickActions } from "./sections/QuickActions";
import { StatsBar } from "./sections/StatsBar";
import { About } from "./sections/About";
import { FiscalCalendar } from "./sections/FiscalCalendar";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

// TODO: Les sections (QuickActions/StatsBar/About/FiscalCalendar/CTA/Footer)
// seront refactorisées dans un prochain step.

export default function MboaGovFiscal() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: C.offwhite, color: C.textDark }}>
      <Header onMenuToggle={() => setMenuOpen((o) => !o)} menuOpen={menuOpen} />
      <NavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <QuickActions />
        <StatsBar />
        <About />
        <FiscalCalendar />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}


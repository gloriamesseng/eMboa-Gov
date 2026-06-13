# TODO - Refactor God File MboaGovFiscal

- [ ] Créer le dossier `src/ui/modules/mboa-gov-fiscal/` et y déplacer l’architecture découpée.
- [ ] Extraire tokens + constantes (couleurs + données UI) dans des modules dédiés.
- [ ] Créer les composants:
  - [ ] layout: `Header`, `NavDrawer`, `Logo`
  - [ ] ui: `Icon`
  - [ ] sections: `Hero`, `QuickActions`, `StatsBar`, `About`, `FiscalCalendar`, `CTA`, `Footer`
- [ ] Créer le composant racine `MboaGovFiscal.tsx` qui assemble toutes les sections.
- [ ] Mettre à jour `src/app/index.tsx` pour ne plus être un God File (il ne contiendra que l’export/import du module racine).
- [ ] Vérifier compilation + rendu (dev server) sans changement visuel majeur.


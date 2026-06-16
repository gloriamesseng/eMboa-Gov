# MboaGov Fiscal (front-end)

Application web Next.js pour l’« Assistant Fiscal National » au Cameroun.

## Stack
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS** (utilisé dans les composants)

## Structure (principale) — où mettre chaque fichier
Cette section explique “où” sont les fichiers dans le projet. Pour “afficher un fichier”, il faut qu’il soit **importé** par un composant rendu par `src/app/page.tsx`.

### Pages / routing (Next.js)
- `src/app/page.tsx`
  - Point d’entrée de la home.
  - C’est ce fichier qui décide quels composants sont affichés.
  - Si vous remplacez la page, c’est ici.
- `src/app/MboaGovFiscal.tsx`
  - Orchestrateur : compose toutes les sections (Hero, chatbot, sections marketing) + la navbar.

### UI “modules” (composants réutilisables)
- `src/ui/modules/*`
  - Placez ici les composants UI réutilisables (ex: Navbar, Hero, sections).
  - Ces composants ne s’affichent que s’ils sont importés par `src/app/MboaGovFiscal.tsx` (ou par une page).
  - Exemples :
    - `src/ui/modules/Navbar.tsx` : navbar (menu desktop + menu mobile)
    - `src/ui/modules/Hero.tsx` : hero
    - `src/ui/modules/QuickAccess.tsx` : accès rapides
    - `src/ui/modules/ChatSearch.tsx` : recherche / chatbot
    - `src/ui/modules/OfficialBanner.tsx` : bannière officielle
    - `src/ui/modules/SectionConstat.tsx`, `SectionSolution.tsx`, `SectionEcosysteme.tsx`, `SectionSecurite.tsx`, `SectionPublic.tsx`, `SectionCTA.tsx` : sections marketing

### Context / logique partagée
- `src/context/`
  - `LanguageContext.tsx` : gestion de la langue (FR/EN).
  - Utilisé par `Navbar` et potentiellement d’autres composants.

### Design system (données statiques)
- `src/ui/design-system/`
  - `constants.ts` : liens et données statiques (nav links, quick actions, etc.).


## Lancer le projet
```bash
cd front-end
npm install
npm run dev
```

## Scripts
- `npm run dev` : démarrage du serveur Next.js
- `npm run build` : build de production
- `npm run start` : démarrage en mode production
- `npm run lint` : lint (ESLint)

## Notes
- Les sections sont composées sous forme de composants React indépendants.
- La navbar et le contenu s’adaptent aux changements de langue via `LanguageContext`.


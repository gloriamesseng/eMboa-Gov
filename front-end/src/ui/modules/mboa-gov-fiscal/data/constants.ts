export const SUGGESTIONS = [
  "Comment déclarer mes revenus 2024 ?",
  "Délais de paiement de la TVA ?",
  "Obtenir mon quitus fiscal ?",
  "Exonérations pour les PME ?",
] as const;

export const QUICK_ACTIONS = [
  {
    key: "calc",
    name: "Calculer mes impôts",
    desc: "Simulez votre IR et taxes applicables",
  },
  {
    key: "status",
    name: "Vérifier mon statut fiscal",
    desc: "Consultez votre situation en temps réel",
  },
  {
    key: "plan",
    name: "Planifier mes échéances",
    desc: "Anticipez vos obligations fiscales",
  },
  {
    key: "calendar",
    name: "Calendrier fiscal",
    desc: "Toutes les dates limites en un coup d'œil",
  },
  {
    key: "declarations",
    name: "Mes déclarations",
    desc: "Historique et suivi de vos déclarations",
  },
  {
    key: "admin",
    name: "Démarches administratives",
    desc: "Formulaires et guides pour vos formalités",
  },
] as const;

export const STATS = [
  { num: "2.4M+", label: "Contribuables servis" },
  { num: "98%", label: "Taux de satisfaction" },
  { num: "24 / 7", label: "Disponibilité" },
  { num: "< 15 s", label: "Temps de réponse" },
] as const;

export const ABOUT_FEATURES = [
  {
    key: "instant",
    name: "Réponses instantanées",
    desc: "L'IA traite vos questions fiscales en quelques secondes, en continu.",
  },
  {
    key: "security",
    name: "Sécurité gouvernementale",
    desc: "Données protégées selon les standards nationaux de sécurité.",
  },
  {
    key: "all",
    name: "Pour tous les contribuables",
    desc: "Particuliers, entreprises, PME — adapté à chaque profil fiscal.",
  },
  {
    key: "multi",
    name: "Multilingue & Accessible",
    desc: "Français, anglais et langues locales pour une inclusion maximale.",
  },
] as const;

export const ABOUT_CHECKLIST = [
  "Zéro déplacement pour vos déclarations",
  "Réponses précises fondées sur les textes officiels",
  "Accompagnement personnalisé par l'IA",
] as const;

export const FISCAL_CALENDAR = [
  {
    name: "Janvier",
    urgent: true,
    items: ["Déclaration TVA T4", "Patente annuelle"],
  },
  { name: "Mars", urgent: false, items: ["Impôt sur le revenu", "DSF entreprises"] },
  { name: "Juin", urgent: false, items: ["Acompte IS", "Déclaration T2"] },
  { name: "Octobre", urgent: false, items: ["Acompte IS T3", "Déclaration T3"] },
] as const;


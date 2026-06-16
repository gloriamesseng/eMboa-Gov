export interface NavLink {
  label: string;
  href: string;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
  arrowBgHover: string;
  href: string;
}

export interface ChallengeCard {
  id: string;
  number: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  type: 'green' | 'blue' | 'gold' | 'purple';
}

export interface TargetGroup {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  gradient: string;
  type: 'pme' | 'artisan' | 'liberal';
  reality: {
    question: string;
    answer: string;
  };
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#' },
  { label: 'Le Constat', href: '#constat' },
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Sécurité', href: '#securite' },
  { label: 'Pour qui', href: '#public' },
  { label: 'Commencer', href: '#cta' },
];

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'calc',
    title: 'Calculer mes impôts',
    icon: '/assets/images/calculatrice.png',
    bgColor: 'bg-green-50',
    textColor: 'text-brand-green',
    arrowBgHover: 'group-hover:bg-brand-green',
    href: '#',
  },
  {
    id: 'status',
    title: 'Vérifier mon statut fiscal',
    icon: '/assets/images/utilisateur (1).png',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    arrowBgHover: 'group-hover:bg-blue-600',
    href: '#',
  },
  {
    id: 'plan',
    title: 'Planifier mes échéances',
    icon: '/assets/images/time-and-calendar.png',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-500',
    arrowBgHover: 'group-hover:bg-amber-500',
    href: '#',
  },
  {
    id: 'calendar',
    title: 'Calendrier fiscal',
    icon: '/assets/images/calendrier-verification.png',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    arrowBgHover: 'group-hover:bg-emerald-600',
    href: '#',
  },
  {
    id: 'decl',
    title: 'Mes déclarations',
    icon: '/assets/images/doc.png',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    arrowBgHover: 'group-hover:bg-indigo-600',
    href: '#',
  },
  {
    id: 'admin',
    title: 'Démarches administratives',
    icon: '/assets/images/bank.png',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-500',
    arrowBgHover: 'group-hover:bg-orange-500',
    href: '#',
  },
];

export const CHALLENGES: ChallengeCard[] = [
  {
    id: 'c1',
    number: '01',
    title: 'Complexité administrative accablante',
    description: 'Des formulaires incompréhensibles, des procédures opaques et des délais indéfinis découragent les contribuables de régulariser leur situation.',
    stat: '73%',
    statLabel: 'des PME ont du mal à déclarer seules',
    type: 'green',
  },
  {
    id: 'c2',
    number: '02',
    title: 'Information dispersée et peu fiable',
    description: 'Les contribuables se fient à des sources non officielles et s\'exposent à des erreurs coûteuses ou des pénalités évitables.',
    stat: '+60%',
    statLabel: 'des amendes liées à la mésinformation',
    type: 'blue',
  },
  {
    id: 'c3',
    number: '03',
    title: 'Accès inégal aux conseils fiscaux',
    description: 'Les experts-comptables restent hors de portée des artisans, micro-entrepreneurs et PME rurales, créant une fracture de conformité.',
    stat: '1',
    statLabel: 'expert pour 8 500 PME nationales',
    type: 'gold',
  },
  {
    id: 'c4',
    number: '04',
    title: 'Délais et coûts de conformité élevés',
    description: 'Une PME camerounaise consacre une part importante de son temps aux obligations fiscales, au détriment de sa croissance réelle.',
    stat: '602',
    statLabel: 'heures par an consacrées à la fiscalité',
    type: 'purple',
  },
];

export const TARGET_GROUPS: TargetGroup[] = [
  {
    id: 'pme',
    title: 'PME & Startups',
    description: 'Simplifiez la gestion de vos obligations mensuelles.',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    gradient: 'from-brand-blue/95 via-brand-blue/55 to-transparent',
    type: 'pme',
    reality: {
      question: 'Quels sont les acomptes d\'IS à payer ce trimestre pour une entreprise de services ?',
      answer: 'Le taux de l\'acompte est de 2,2% de votre chiffre d\'affaires, majoré de 10% de CAC. Voulez-vous que je prépare le bordereau ?',
    },
  },
  {
    id: 'artisan',
    title: 'Artisans',
    description: 'Concentrez-vous sur votre métier, pas sur la paperasse.',
    icon: '⚒️',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    gradient: 'from-brand-green/95 via-brand-green/55 to-transparent',
    type: 'artisan',
    reality: {
      question: 'Comment je fais pour payer ma patente cette année ? Mon atelier est à Douala.',
      answer: 'La contribution des patentes se paie au centre divisionnaire dont vous dépendez. Je vous guide pas à pas pour le paiement mobile.',
    },
  },
  {
    id: 'liberal',
    title: 'Prof. Libérales',
    description: 'Une gestion fiscale alignée avec vos honoraires.',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    gradient: 'from-[#b8890a]/95 via-[#b8890a]/55 to-transparent',
    type: 'liberal',
    reality: {
      question: 'Dois-je retenir le précompte sur les honoraires versés à mes collaborateurs externes ?',
      answer: 'Oui. Le taux de précompte sur honoraires est fixé à 5,5% pour les résidents. Voici le formulaire prérempli.',
    },
  },
];

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

export interface FeatureBadgeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  colorClass: string;
  bgClass: string;
  isSvgPathOnly?: boolean;
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

export const FOOTER_COLORS = {
  blueDeep: '#060F1C',
  green: '#006B3F',
  gold: '#FCD116',
  white: '#FFFFFF',
  textLight: 'rgba(255,255,255,0.65)',
} as const;

export const FOOTER_LINKS = {
  fr: [
    {
      title: 'Gouvernement',
      links: [
        { label: 'DGI Cameroun', href: 'https://www.impots.cm/fr/acceuil' },
        { label: 'Ministère des Finances', href: 'https://minfi.gov.cm/en/home/' },
        { label: 'Portail e-services', href: '#' },
        { label: 'Textes officiels', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: "Centre d'aide", href: '#' },
        { label: 'Contact DGI', href: 'https://www.impots.cm/fr/centre-dappels/' },
        { label: 'Guide utilisateur', href: '#' },
        { label: 'Accessibilité', href: '#' },
      ],
    },
    {
      title: 'Légal',
      links: [
        { label: 'Politique de confidentialité', href: '#' },
        { label: "Conditions d'utilisation", href: '#' },
        { label: 'Accessibilité', href: '#' },
        { label: 'Mentions légales', href: '#' },
      ],
    },
  ],
  en: [
    {
      title: 'Government',
      links: [
        { label: 'DGI Cameroon', href: 'https://www.impots.cm/fr/acceuil' },
        { label: 'Ministry of Finance', href: 'https://minfi.gov.cm/en/home/' },
        { label: 'E-services portal', href: '#' },
        { label: 'Official texts', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help center', href: '#' },
        { label: 'DGI contact', href: 'https://www.impots.cm/fr/centre-dappels/' },
        { label: 'User guide', href: '#' },
        { label: 'Accessibility', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy policy', href: '#' },
        { label: 'Terms of use', href: '#' },
        { label: 'Accessibility', href: '#' },
        { label: 'Legal notice', href: '#' },
      ],
    },
  ],
} as const;




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


export const NAV_LINKS = {
  fr: [
    { label: 'Accueil', href: '#' },
    { label: 'Le Constat', href: '#constat' },
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Sécurité', href: '#securite' },
    { label: 'Pour qui', href: '#public' },
    { label: 'Commencer', href: '#cta' },
  ],
  en: [
    { label: 'Home', href: '#' },
    { label: 'Problem', href: '#constat' },
    { label: 'Features', href: '#fonctionnalites' },
    { label: 'Security', href: '#securite' },
    { label: 'Target Audience', href: '#public' },
    { label: 'Get Started', href: '#cta' },
  ],
};

export const QUICK_ACTIONS = {
  fr: [
    { id: 'calc', title: 'Calculer mes impôts', icon: '/assets/images/calculatrice.png', bgColor: 'bg-green-50', textColor: 'text-brand-green', arrowBgHover: 'group-hover:bg-brand-green', href: '#' },
    { id: 'status', title: 'Vérifier mon statut fiscal', icon: '/assets/images/utilisateur (1).png', bgColor: 'bg-blue-50', textColor: 'text-blue-600', arrowBgHover: 'group-hover:bg-blue-600', href: '#' },
    { id: 'plan', title: 'Planifier mes échéances', icon: '/assets/images/time-and-calendar.png', bgColor: 'bg-amber-50', textColor: 'text-amber-500', arrowBgHover: 'group-hover:bg-amber-500', href: '#' },
    { id: 'calendar', title: 'Calendrier fiscal', icon: '/assets/images/calendrier-verification.png', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600', arrowBgHover: 'group-hover:bg-emerald-600', href: '#' },
    { id: 'decl', title: 'Mes déclarations', icon: '/assets/images/doc.png', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600', arrowBgHover: 'group-hover:bg-indigo-600', href: '#' },
    { id: 'admin', title: 'Démarches administratives', icon: '/assets/images/bank.png', bgColor: 'bg-orange-50', textColor: 'text-orange-500', arrowBgHover: 'group-hover:bg-orange-500', href: '#' },
  ],
  en: [
    { id: 'calc', title: 'Calculate my taxes', icon: '/assets/images/calculatrice.png', bgColor: 'bg-green-50', textColor: 'text-brand-green', arrowBgHover: 'group-hover:bg-brand-green', href: '#' },
    { id: 'status', title: 'Check my tax status', icon: '/assets/images/utilisateur (1).png', bgColor: 'bg-blue-50', textColor: 'text-blue-600', arrowBgHover: 'group-hover:bg-blue-600', href: '#' },
    { id: 'plan', title: 'Plan my deadlines', icon: '/assets/images/time-and-calendar.png', bgColor: 'bg-amber-50', textColor: 'text-amber-500', arrowBgHover: 'group-hover:bg-amber-500', href: '#' },
    { id: 'calendar', title: 'Tax calendar', icon: '/assets/images/calendrier-verification.png', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600', arrowBgHover: 'group-hover:bg-emerald-600', href: '#' },
    { id: 'decl', title: 'My declarations', icon: '/assets/images/doc.png', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600', arrowBgHover: 'group-hover:bg-indigo-600', href: '#' },
    { id: 'admin', title: 'Administrative procedures', icon: '/assets/images/bank.png', bgColor: 'bg-orange-50', textColor: 'text-orange-500', arrowBgHover: 'group-hover:bg-orange-500', href: '#' },
  ]
};

export const CHALLENGES = {
  fr: [
    { id: 'c1', number: '01', title: 'Complexité administrative accablante', description: 'Des formulaires incompréhensibles, des procédures opaques et des délais indéfinis découragent les contribuables de régulariser leur situation.', stat: '73%', statLabel: 'des PME ont du mal à déclarer seules', type: 'green' },
    { id: 'c2', number: '02', title: 'Information dispersée et peu fiable', description: 'Les contribuables se fient à des sources non officielles et s\'exposent à des erreurs coûteuses ou des pénalités évitables.', stat: '+60%', statLabel: 'des amendes liées à la mésinformation', type: 'blue' },
    { id: 'c3', number: '03', title: 'Accès inégal aux conseils fiscaux', description: 'Les experts-comptables restent hors de portée des artisans, micro-entrepreneurs et PME rurales, créant une fracture de conformité.', stat: '1', statLabel: 'expert pour 8 500 PME nationales', type: 'gold' },
    { id: 'c4', number: '04', title: 'Délais et coûts de conformité élevés', description: 'Une PME camerounaise consacre une part importante de son temps aux obligations fiscales, au détriment de sa croissance réelle.', stat: '602', statLabel: 'heures par an consacrées à la fiscalité', type: 'purple' },
  ],
  en: [
    { id: 'c1', number: '01', title: 'Overwhelming administrative complexity', description: 'Incomprehensible forms, opaque procedures and undefined deadlines discourage taxpayers from regularizing their situation.', stat: '73%', statLabel: 'of SMEs struggle to declare alone', type: 'green' },
    { id: 'c2', number: '02', title: 'Scattered and unreliable information', description: 'Taxpayers rely on unofficial sources and expose themselves to costly errors or avoidable penalties.', stat: '+60%', statLabel: 'of fines related to misinformation', type: 'blue' },
    { id: 'c3', number: '03', title: 'Unequal access to tax advice', description: 'Chartered accountants remain out of reach for artisans, micro-entrepreneurs and rural SMEs, creating a compliance gap.', stat: '1', statLabel: 'expert for 8,500 national SMEs', type: 'gold' },
    { id: 'c4', number: '04', title: 'High compliance times and costs', description: 'A Cameroonian SME spends a significant part of its time on tax obligations, to the detriment of its real growth.', stat: '602', statLabel: 'hours per year dedicated to taxation', type: 'purple' },
  ]
};

export const TARGET_GROUPS = {
  fr: [
    { id: 'pme', title: 'PME & Startups', description: 'Simplifiez la gestion de vos obligations mensuelles.', icon: '🏢', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800', gradient: 'from-brand-blue/95 via-brand-blue/55 to-transparent', type: 'pme', reality: { question: 'Quels sont les acomptes d\'IS à payer ce trimestre pour une entreprise de services ?', answer: 'Le taux de l\'acompte est de 2,2% de votre chiffre d\'affaires, majoré de 10% de CAC. Voulez-vous que je prépare le bordereau ?' } },
    { id: 'artisan', title: 'Artisans', description: 'Concentrez-vous sur votre métier, pas sur la paperasse.', icon: '⚒️', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800', gradient: 'from-brand-green/95 via-brand-green/55 to-transparent', type: 'artisan', reality: { question: 'Comment je fais pour payer ma patente cette année ? Mon atelier est à Douala.', answer: 'La contribution des patentes se paie au centre divisionnaire dont vous dépendez. Je vous guide pas à pas pour le paiement mobile.' } },
    { id: 'liberal', title: 'Prof. Libérales', description: 'Une gestion fiscale alignée avec vos honoraires.', icon: '💼', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800', gradient: 'from-[#b8890a]/95 via-[#b8890a]/55 to-transparent', type: 'liberal', reality: { question: 'Dois-je retenir le précompte sur les honoraires versés à mes collaborateurs externes ?', answer: 'Oui. Le taux de précompte sur honoraires est fixé à 5,5% pour les résidents. Voici le formulaire prérempli.' } },
  ],
  en: [
    { id: 'pme', title: 'SMEs & Startups', description: 'Simplify the management of your monthly obligations.', icon: '🏢', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800', gradient: 'from-brand-blue/95 via-brand-blue/55 to-transparent', type: 'pme', reality: { question: 'What are the corporate tax installments to be paid this quarter for a service company?', answer: 'The installment rate is 2.2% of your turnover, increased by 10% CAC. Would you like me to prepare the slip?' } },
    { id: 'artisan', title: 'Artisans', description: 'Focus on your craft, not the paperwork.', icon: '⚒️', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800', gradient: 'from-brand-green/95 via-brand-green/55 to-transparent', type: 'artisan', reality: { question: 'How do I pay my business license this year? My workshop is in Douala.', answer: 'The business license contribution is paid at the divisional center you depend on. I guide you step by step for mobile payment.' } },
    { id: 'liberal', title: 'Liberal Professions', description: 'Tax management aligned with your fees.', icon: '💼', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800', gradient: 'from-[#b8890a]/95 via-[#b8890a]/55 to-transparent', type: 'liberal', reality: { question: 'Should I withhold tax on fees paid to my external collaborators?', answer: 'Yes. The withholding tax rate on fees is fixed at 5.5% for residents. Here is the pre-filled form.' } },
  ]
};

export const content = {
  fr: {
    badge: "Plateforme officielle & 100% sécurisée",
    title: ["Votre assistant fiscal ", "intelligent", " au Cameroun"],
    description: "Posez vos questions, accédez à vos informations fiscales et simplifiez toutes vos démarches administratives.",
    features: [
      { title: "Réponses fiables", subtitle: "et officielles" },
      { title: "Données sécurisées", subtitle: "et confidentielles" },
      { title: "Disponible 24/7", subtitle: "partout, tout le temps" }
    ]
  },
  en: {
    badge: "Official & 100% secure platform",
    title: ["Your ", "intelligent", " tax assistant in Cameroon"],
    description: "Ask your questions, access your tax information and simplify all your administrative procedures.",
    features: [
      { title: "Reliable answers", subtitle: "and official" },
      { title: "Secure data", subtitle: "and confidential" },
      { title: "Available 24/7", subtitle: "anywhere, anytime" }
    ]
  }
};

export const contact = {
  phone: '+237680061741',
  email: 'messengloria@gmail.com',
  dgiUrl: 'https://www.impots.cm/fr/acceuil',
  minfiUrl: 'https://minfi.gov.cm/en/home/',
  contactDgiUrl: 'https://www.impots.cm/fr/centre-dappels/',
};
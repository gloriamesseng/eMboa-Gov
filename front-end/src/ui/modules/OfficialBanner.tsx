import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const OfficialBanner = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      official: { title: "Plateforme Officielle", subtitle: "République du Cameroun" },
      secure: { title: "Données 100% Sécurisées", subtitle: "Normes gouvernementales" },
      ai: { title: "Propulsée par l'IA", subtitle: "Intelligence artificielle fiable" },
      accessible: { title: "Accessible à Tous", subtitle: "Particuliers, PME, Artisans" }
    },
    en: {
      official: { title: "Official Platform", subtitle: "Republic of Cameroon" },
      secure: { title: "100% Secure Data", subtitle: "Government standards" },
      ai: { title: "AI-Powered", subtitle: "Reliable artificial intelligence" },
      accessible: { title: "Accessible to All", subtitle: "Individuals, SMEs, Artisans" }
    }
  };

  const t = content[language];

  return (
    <section className="max-w-[1300px] mx-auto px-6 pb-24 reveal relative z-20">
      <div className="bg-white rounded-[2rem] p-8 border border-brand-border flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
        
        <BannerItem 
          image="/assets/images/armoirie-cameroun.png"
          title={t.official.title}
          subtitle={t.official.subtitle}
          titleColor="text-brand-green"
        />

        <div className="hidden lg:block w-px h-10 bg-brand-border"></div>

        <BannerItem 
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
          title={t.secure.title}
          subtitle={t.secure.subtitle}
          titleColor="text-brand-blue"
          bgIconClass="bg-blue-50 text-blue-600"
        />

        <div className="hidden lg:block w-px h-10 bg-brand-border"></div>

        <BannerItem 
          image="/assets/images/jeu-de-puces.png"
          title={t.ai.title}
          subtitle={t.ai.subtitle}
          titleColor="text-brand-blue"
          bgIconClass="bg-emerald-50"
        />

        <div className="hidden lg:block w-px h-10 bg-brand-border"></div>

        <BannerItem 
          image="/assets/images/groupe.png"
          title={t.accessible.title}
          subtitle={t.accessible.subtitle}
          titleColor="text-brand-blue"
          bgIconClass="bg-amber-50"
        />
      </div>
    </section>
  );
};

interface BannerItemProps {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  titleColor: string;
  bgIconClass?: string;
}

const BannerItem = ({ image, icon, title, subtitle, titleColor, bgIconClass }: BannerItemProps) => (
  <div className="flex items-center gap-4 w-full lg:w-1/4">
    <div className={`w-10 h-10 rounded-full ${bgIconClass || ''} flex items-center justify-center`}>
      {image ? (
        <img src={image} alt={title} className="w-10 h-auto object-contain" />
      ) : (
        icon
      )}
    </div>
    <div>
      <h5 className={`text-xs font-bold ${titleColor} uppercase tracking-wide`}>{title}</h5>
      <p className="text-xs text-brand-muted mt-0.5">{subtitle}</p>
    </div>
  </div>
);

export default OfficialBanner;

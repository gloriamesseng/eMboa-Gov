import React from 'react';

const Hero = () => {
  return (
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-10 pb-32 flex flex-col lg:flex-row items-center min-h-[650px]">
      <div className="w-full lg:w-[55%] relative z-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-8 border border-brand-green/20">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Plateforme officielle & 100% sécurisée
        </div>

        <h2 className="text-[2.5rem] lg:text-[2.5rem] leading-[1.1] font-bold text-brand-blue mb-6 tracking-tight">
          Votre assistant fiscal <br />
          <span className="text-brand-green">intelligent</span> au Cameroun
        </h2>

        <p className="text-base lg:text-base text-brand-muted mb-10 max-w-lg leading-relaxed">
          Posez vos questions, accédez à vos informations fiscales et simplifiez toutes vos démarches administratives.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <FeatureBadge 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />} 
            title="Réponses fiables" 
            subtitle="et officielles" 
            colorClass="text-brand-green" 
            bgClass="bg-brand-green/10" 
          />
          <FeatureBadge 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />} 
            title="Données sécurisées" 
            subtitle="et confidentielles" 
            colorClass="text-blue-600" 
            bgClass="bg-blue-50" 
          />
          <FeatureBadge 
            icon={<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />} 
            isSvgPathOnly={false}
            title="Disponible 24/7" 
            subtitle="partout, tout le temps" 
            colorClass="text-amber-500" 
            bgClass="bg-amber-50" 
          />
        </div>
      </div>

      <div className="hidden lg:block lg:w-[45%]"></div>
    </div>
  );
};

interface FeatureBadgeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  colorClass: string;
  bgClass: string;
  isSvgPathOnly?: boolean;
}

const FeatureBadge = ({ icon, title, subtitle, colorClass, bgClass, isSvgPathOnly = true }: FeatureBadgeProps) => (
  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-sm border border-brand-border/50">
    <div className={`w-10 h-10 rounded-full ${bgClass} flex items-center justify-center ${colorClass}`}>
      <svg className="w-5 h-5" fill={isSvgPathOnly ? "none" : "currentColor"} stroke={isSvgPathOnly ? "currentColor" : "none"} viewBox={isSvgPathOnly ? "0 0 24 24" : "0 0 20 20"}>
        {icon}
      </svg>
    </div>
    <div>
      <p className="text-sm font-bold text-brand-blue">{title}</p>
      <p className="text-xs text-brand-muted">{subtitle}</p>
    </div>
  </div>
);

export default Hero;

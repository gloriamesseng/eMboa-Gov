import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const SectionEcosysteme = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      tag: "Écosystème intelligent",
      headline: ["Une seule conversation.", "Des dizaines de services."],
      subline: "MboaGov ne se limite pas à répondre à vos questions. Au fil de la discussion, l'assistant génère et présente les outils administratifs dont vous avez besoin, directement sous vos yeux.",
      assistantName: "MboaGov Assistant",
      online: "En ligne",
      userQuestion: "Comment obtenir mon quitus fiscal pour un appel d'offres ?",
      analyzing: "Analyse de votre dossier...",
      assistantResponse: "Je peux vous aider. Votre situation fiscale est à jour. Voici un accès direct à votre déclaration.",
      quitusTitle: "Quitus fiscal 2025",
      quitusDesc: "Document prêt à télécharger",
      floating: [
        { title: "Vérification statut", subtitle: "Régime simplifié validé" },
        { title: "Génération de document", subtitle: "Quitus fiscal prêt" },
        { title: "Historique complet", subtitle: "Traçabilité assurée" },
        { title: "Rappel programmé", subtitle: "Échéance TVA · 5 jours" }
      ]
    },
    en: {
      tag: "Intelligent Ecosystem",
      headline: ["One single conversation.", "Dozens of services."],
      subline: "MboaGov is not limited to answering your questions. Throughout the discussion, the assistant generates and presents the administrative tools you need, right before your eyes.",
      assistantName: "MboaGov Assistant",
      online: "Online",
      userQuestion: "How to get my tax clearance for a tender?",
      analyzing: "Analyzing your file...",
      assistantResponse: "I can help you. Your tax situation is up to date. Here is direct access to your declaration.",
      quitusTitle: "Tax Clearance 2025",
      quitusDesc: "Document ready to download",
      floating: [
        { title: "Status Check", subtitle: "Simplified regime validated" },
        { title: "Document Generation", subtitle: "Tax clearance ready" },
        { title: "Complete History", subtitle: "Traceability ensured" },
        { title: "Scheduled Reminder", subtitle: "VAT Deadline · 5 days" }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="fonctionnalites" className="relative w-full py-24 lg:py-32 overflow-hidden bg-mist">
      <div className="ambient-glow" style={{ top: '-10%', left: '-10%', width: '46%', height: '60%', background: 'radial-gradient(circle,rgba(0,107,63,0.08) 0%,transparent 70%)' }}></div>
      <div className="ambient-glow" style={{ bottom: '-10%', right: '-10%', width: '50%', height: '60%', background: 'radial-gradient(circle,rgba(15,76,129,0.08) 0%,transparent 70%)' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 reveal-up">
          <div className="section-kicker mb-6 text-brand-blue" style={{ background: 'rgba(255,255,255,0.7)', borderColor: '#E2E8F0' }}>
            <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
            {t.tag}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight leading-[1.15] mb-6">
            {t.headline[0]}<br />
            <span className="text-brand-green">{t.headline[1]}</span>
          </h2>
          <p className="text-base md:text-lg text-brand-muted font-medium leading-relaxed">
            {t.subline}
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto reveal-up">
          <div className="glass-light rounded-[2rem] p-6 md:p-8 relative z-10 max-w-[440px] mx-auto">
            <div className="flex items-center gap-4 pb-4 mb-5 border-b border-brand-border/70">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md" style={{ background: 'linear-gradient(135deg,#0F4C81,#006B3F)' }}>
                MG
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-blue">{t.assistantName}</h3>
                <p className="text-[11px] text-brand-green flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span> {t.online}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="self-end max-w-[85%] bg-brand-blue text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-md">
                <p>{t.userQuestion}</p>
              </div>

              <div className="self-start flex gap-2 items-center text-xs text-brand-muted font-mono bg-white/70 px-3 py-1.5 rounded-full border border-brand-border">
                <svg className="w-3 h-3 animate-spin text-brand-blue" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.analyzing}
              </div>

              <div className="self-start max-w-[92%] bg-white border border-brand-border text-slate-700 p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm space-y-3">
                <p>{t.assistantResponse}</p>
                <div className="bg-brand-bg rounded-xl p-3 border border-brand-border flex items-center justify-between cursor-pointer hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 text-brand-green rounded-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-blue">{t.quitusTitle}</p>
                      <p className="text-[11px] text-brand-muted">{t.quitusDesc}</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <FloatingCard 
            icon="🔍" 
            title={t.floating[0].title} 
            subtitle={t.floating[0].subtitle} 
            bgIconClass="bg-brand-green/10 text-brand-green" 
            positionClass="top-[8%] left-[2%]" 
            animationClass="animate-float" 
          />
          <FloatingCard 
            icon="📄" 
            title={t.floating[1].title} 
            subtitle={t.floating[1].subtitle} 
            style={{ background: 'rgba(252,209,22,0.18)', color: '#b8890a' }} 
            positionClass="bottom-[18%] left-[6%]" 
            animationClass="animate-float-fast" 
            delay="2s" 
          />
          <FloatingCard 
            icon="🔄" 
            title={t.floating[2].title} 
            subtitle={t.floating[2].subtitle} 
            bgIconClass="bg-brand-blue/10 text-brand-blue" 
            positionClass="bottom-[12%] right-[4%]" 
            animationClass="animate-float-slow" 
            delay="1.5s" 
          />
          <FloatingCard 
            icon="📅" 
            title={t.floating[3].title} 
            subtitle={t.floating[3].subtitle} 
            bgIconClass="bg-brand-green/10 text-brand-green" 
            positionClass="top-[12%] right-[2%]" 
            animationClass="animate-float-fast" 
            delay="1s" 
          />
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ icon, title, subtitle, bgIconClass, positionClass, animationClass, delay, style }: any) => (
  <div className={`hidden lg:flex absolute ${positionClass} glass-light rounded-2xl p-4 w-60 items-center gap-4 ${animationClass} z-10`} style={delay ? { animationDelay: delay } : {}}>
    <div className={`w-10 h-10 rounded-xl ${bgIconClass || ''} flex items-center justify-center text-lg`} style={style}>
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-bold text-brand-blue">{title}</h4>
      <p className="text-xs text-brand-muted">{subtitle}</p>
    </div>
  </div>
);

export default SectionEcosysteme;

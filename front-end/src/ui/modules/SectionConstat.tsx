import React from 'react';
import { CHALLENGES } from '../design-system/constants';
import { useCounter } from '@/hooks/useCounter';
import { useLanguage } from '@/context/LanguageContext';

const SectionConstat = () => {
  const { language } = useLanguage();
  const challenges = CHALLENGES[language];
  const { count: massiveCount, countRef: massiveCountRef } = useCounter(602);

  const content = {
    fr: {
      tag: "Le Constat",
      headline: ["La fiscalité camerounaise ne devrait pas être un ", "parcours du combattant"],
      subline: "Des millions de citoyens, artisans et PME perdent du temps, commettent des erreurs ou renoncent à leurs démarches faute d'informations claires et accessibles.",
      costTitle: "Le coût de la complexité",
      hoursPerYear: "heures/an",
      costDesc: "C'est le temps moyen consacré chaque année par une PME camerounaise pour comprendre, préparer et soumettre ses obligations fiscales."
    },
    en: {
      tag: "The Facts",
      headline: ["Cameroonian taxation should not be an ", "obstacle course"],
      subline: "Millions of citizens, artisans and SMEs lose time, make mistakes or give up on their procedures for lack of clear and accessible information.",
      costTitle: "The cost of complexity",
      hoursPerYear: "hours/year",
      costDesc: "This is the average time spent each year by a Cameroonian SME to understand, prepare and submit its tax obligations."
    }
  };

  const t = content[language];

  return (
    <section id="constat" className="relative w-full pt-8 pb-24 lg:pt-12 lg:pb-32 overflow-hidden bg-mist">
      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-10 h-[2px] bg-gradient-to-r from-transparent to-brand-green" />
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-brand-green">{t.tag}</span>
          <span className="w-10 h-[2px] bg-gradient-to-r from-brand-green to-transparent" />
        </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-blue leading-[1.15] mb-8 tracking-tight max-w-3xl mx-auto">
        {t.headline[0]}{" "}
        <span className="text-brand-green relative inline-block whitespace-nowrap">
          {t.headline[1]}

          <svg
            className="absolute w-full h-3 -bottom-1.5 left-0 text-brand-gold opacity-80"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 5 Q 50 10 100 5"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>

        </span>.
      </h1>

      <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto font-medium opacity-90">
        {t.subline}
      </p>

      </div>
      <div className="max-w-[1200px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
          ))}
        </div>
      </div>

      {/* Massive Counter */}
      <div className="max-w-4xl mx-auto px-6 mt-16 text-center reveal-up">
        <div className="glass-light rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="ambient-glow" style={{ top: '-20%', right: '-10%', width: '36%', height: '60%', background: 'radial-gradient(circle,rgba(0,107,63,0.08) 0%,transparent 70%)' }}></div>
          <div className="ambient-glow" style={{ bottom: '-20%', left: '-10%', width: '36%', height: '60%', background: 'radial-gradient(circle,rgba(15,76,129,0.08) 0%,transparent 70%)' }}></div>
          <div className="relative z-10">
            <p className="text-sm font-bold tracking-widest uppercase text-brand-muted mb-6">{t.costTitle}</p>
            <div className="flex items-baseline justify-center gap-4 mb-6">
              <span ref={massiveCountRef} className="text-3xl md:text-5xl font-black text-gradient tabular-nums">
                {massiveCount}
              </span>
              <span className="text-2xl md:text-4xl font-bold text-brand-blue">{t.hoursPerYear}</span>
            </div>
            <p className="text-base md:text-lg text-brand-muted font-medium max-w-2xl mx-auto leading-relaxed">
              {t.costDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChallengeCard = ({ challenge, index }: { challenge: any, index: number }) => {
  const isTarget602 = challenge.stat === '602';
  const targetValue = isTarget602 ? 602 : 0; // The others are strings like "73%"
  const { count, countRef } = useCounter(targetValue);

  const styles = {
    green: {
      bg: 'linear-gradient(135deg,#eef8f3 0%,#f4faf7 100%)',
      border: 'rgba(0,107,63,0.12)',
      iconBg: 'linear-gradient(135deg,rgba(0,107,63,0.12),rgba(0,107,63,0.06))',
      iconColor: '#006B3F',
      statColor: '#006B3F',
      glow: 'rgba(0,107,63,0.4)',
      shadow: 'rgba(0,107,63,0.18)'
    },
    blue: {
      bg: 'linear-gradient(135deg,#eef4fb 0%,#f4f8fd 100%)',
      border: 'rgba(15,76,129,0.12)',
      iconBg: 'linear-gradient(135deg,rgba(15,76,129,0.12),rgba(15,76,129,0.06))',
      iconColor: '#0F4C81',
      statColor: '#0F4C81',
      glow: 'rgba(15,76,129,0.4)',
      shadow: 'rgba(15,76,129,0.18)'
    },
    gold: {
      bg: 'linear-gradient(135deg,#fdf8ea 0%,#fffcf2 100%)',
      border: 'rgba(252,209,22,0.25)',
      iconBg: 'linear-gradient(135deg,rgba(252,209,22,0.20),rgba(252,209,22,0.08))',
      iconColor: '#b8890a',
      statColor: '#b8890a',
      glow: 'rgba(202,159,2,0.45)',
      shadow: 'rgba(202,159,2,0.20)'
    },
    purple: {
      bg: 'linear-gradient(135deg,#f5f2fd 0%,#faf8ff 100%)',
      border: 'rgba(109,40,217,0.10)',
      iconBg: 'linear-gradient(135deg,rgba(109,40,217,0.12),rgba(109,40,217,0.05))',
      iconColor: '#6d28d9',
      statColor: '#6d28d9',
      glow: 'rgba(109,40,217,0.4)',
      shadow: 'rgba(109,40,217,0.15)'
    }
  }[challenge.type as 'green' | 'blue' | 'gold' | 'purple'];

  return (
    <div 
      className="rounded-[1.75rem] p-6 lg:p-7 relative overflow-hidden group reveal-up" 
      style={{ 
        background: styles.bg, 
        border: `1px solid ${styles.border}`,
        transitionDelay: `${index * 0.1}s` 
      }}
    >
      <div 
        className="absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        style={{ boxShadow: `inset 0 0 0 1.5px ${styles.glow}, 0 20px 50px -10px ${styles.shadow}` }}
      ></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div 
          className="rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
          style={{ width: '52px', height: '52px', background: styles.iconBg }}
        >
          {challenge.type === 'green' && <svg className="w-6 h-6" style={{ color: styles.iconColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>}
          {challenge.type === 'blue' && <svg className="w-6 h-6" style={{ color: styles.iconColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
          {challenge.type === 'gold' && <svg className="w-6 h-6" style={{ color: styles.iconColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>}
          {challenge.type === 'purple' && <svg className="w-6 h-6" style={{ color: styles.iconColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: styles.iconColor, opacity: 0.55 }}>Challenge {challenge.number}</span>
      </div>

      <h3 className="text-lg font-bold text-brand-blue mb-1.5 relative z-10">{challenge.title}</h3>
      <p className="text-brand-muted mb-4 text-sm leading-relaxed relative z-10">{challenge.description}</p>
      
      <div className="relative z-10 pt-4 flex items-end gap-4" style={{ borderTop: `1px solid ${styles.border}` }}>
        <div ref={isTarget602 ? countRef : null} className="text-3xl font-extrabold" style={{ color: styles.statColor }}>
          {isTarget602 ? count : challenge.stat}
        </div>
        <div className="text-sm font-medium text-brand-muted pb-1" dangerouslySetInnerHTML={{ __html: challenge.statLabel.replace(' ', '<br>') }}></div>
      </div>
    </div>
  );
};

export default SectionConstat;

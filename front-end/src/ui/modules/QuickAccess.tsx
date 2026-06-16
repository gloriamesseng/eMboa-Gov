import React from 'react';
import { QUICK_ACTIONS } from '../design-system/constants';
import { useLanguage } from '@/context/LanguageContext';

const QuickAccess = () => {
  const { language } = useLanguage();
  const actions = QUICK_ACTIONS[language];

  return (
    <section className="max-w-[1300px] mx-auto px-6 pt-24 pb-16 reveal relative z-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-6 h-[2px] bg-brand-green"></div>
        <h3 className="text-sm font-bold tracking-widest text-brand-blue uppercase">
          {language === 'fr' ? 'Accès Rapide' : 'Quick Access'}
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
        {actions.map((action) => (
          <a
            key={action.id}
            href={action.href}
            className="group bg-white rounded-2xl p-4 min-h-[100px] border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${action.bgColor} rounded-xl flex items-center justify-center ${action.textColor} group-hover:scale-110 transition-transform`}>
                <img src={action.icon} alt={action.title} className="w-10 h-10 object-contain" />
              </div>
              <h4 className="font-semibold text-brand-blue text-sm leading-snug pr-6">
                {action.title}
              </h4>
            </div>

            <div className={`absolute bottom-3 right-3 w-7 h-7 rounded-full border border-brand-border flex items-center justify-center text-brand-muted ${action.arrowBgHover} group-hover:text-white group-hover:border-transparent transition-all`}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickAccess;

import React from 'react';
import { TARGET_GROUPS } from '../design-system/constants';
import { useLanguage } from '@/context/LanguageContext';

const SectionPublic = () => {
  const { language } = useLanguage();
  const groups = TARGET_GROUPS[language];

  const content = {
    fr: {
      tag: "Pour qui ?",
      headline: "Conçu pour chaque contribuable camerounais.",
      subline: "Quel que soit votre niveau de connaissance fiscale, MboaGov s'adapte à votre réalité quotidienne pour vous offrir un accompagnement sur-mesure.",
      reality: "La réalité",
      assistant: "MboaGov"
    },
    en: {
      tag: "For Whom?",
      headline: "Designed for every Cameroonian taxpayer.",
      subline: "Whatever your level of tax knowledge, MboaGov adapts to your daily reality to offer you tailor-made support.",
      reality: "The reality",
      assistant: "MboaGov"
    }
  };

  const t = content[language];

  return (
    <section id="public" className="relative w-full py-24 lg:py-32 overflow-hidden bg-mist">
      <div className="ambient-glow" style={{ top: '-10%', right: '-10%', width: '46%', height: '60%', background: 'radial-gradient(circle,rgba(252,209,22,0.10) 0%,transparent 70%)' }}></div>
      <div className="ambient-glow" style={{ bottom: '-10%', left: '-10%', width: '46%', height: '60%', background: 'radial-gradient(circle,rgba(0,107,63,0.07) 0%,transparent 70%)' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 reveal-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="gold-rule"></span>
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-green" style={{ letterSpacing: '.25em' }}>{t.tag}</span>
            <span className="gold-rule" style={{ background: 'linear-gradient(90deg,#FCD116,transparent)' }}></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight leading-[1.15] mb-6">
            {t.headline}
          </h2>
          <p className="text-base md:text-lg text-brand-muted font-medium leading-relaxed">
            {t.subline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {groups.map((group, index) => (
            <div 
              key={group.id} 
              className={`group relative h-[440px] w-full photo-card cursor-pointer reveal-up ${index === 1 ? 'lg:-translate-y-6' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img src={group.image} alt={group.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t ${group.gradient}`}></div>

              {/* Initial State */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-all duration-500 group-hover:-translate-y-3 opacity-100 group-hover:opacity-0">
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-4 text-xl">
                  {group.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{group.title}</h3>
                <p className="text-white/80 font-medium">{group.description}</p>
              </div>

              {/* Hover State - Reality Check */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                <h3 className="text-lg font-bold text-white mb-5 border-b border-white/20 pb-4">{t.reality} {language === 'fr' ? (group.id === 'liberal' ? 'libérale' : `de l'${group.id === 'pme' ? 'PME' : 'artisan'}`) : group.title}</h3>
                <div className="space-y-3">
                  <div className="bg-white/10 border border-white/20 p-3 rounded-2xl rounded-tr-sm text-sm text-white backdrop-blur-md self-end w-[90%] ml-auto">
                    {group.reality.question}
                  </div>
                  <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-sm text-sm w-[90%] shadow-xl">
                    <span className={`font-bold block mb-1 ${group.type === 'artisan' ? 'text-brand-green' : group.type === 'liberal' ? 'text-[#b8890a]' : 'text-brand-blue'}`}>
                      {t.assistant}
                    </span>
                    {group.reality.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPublic;

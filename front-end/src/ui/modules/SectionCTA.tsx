import React from 'react';

const SectionCTA = () => {
  return (
    <section id="cta" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 opacity-50" style={{ backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="ambient-glow" style={{ top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '60%', background: 'radial-gradient(ellipse at center, rgba(0,107,63,0.10) 0%, transparent 70%)' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 reveal-up">
        <div className="glass-light rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="ambient-glow" style={{ top: '-30%', right: '-10%', width: '40%', height: '60%', background: 'radial-gradient(circle,rgba(15,76,129,0.10) 0%,transparent 70%)' }}></div>
          <div className="ambient-glow" style={{ bottom: '-30%', left: '-10%', width: '40%', height: '60%', background: 'radial-gradient(circle,rgba(252,209,22,0.10) 0%,transparent 70%)' }}></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-8 border border-brand-green/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Plateforme officielle &amp; 100% sécurisée
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-6 tracking-tight leading-[1.15]">
              Votre prochaine démarche fiscale<br />commence par une simple question.
            </h2>

            <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-xl mx-auto mb-10">
              Rejoignez les citoyens, artisans et entreprises qui simplifient déjà leurs obligations fiscales avec MboaGov Fiscal — disponible 24/7, partout au Cameroun.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-[#005532] text-white rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Commencer maintenant
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="#" className="w-full sm:w-auto px-8 py-4 bg-white border border-brand-border text-brand-blue rounded-full font-semibold text-base shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all">
                Voir une démonstration
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-brand-border/70 text-sm font-medium text-brand-muted">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Gratuit pour les particuliers
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Disponible 24/7
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Données 100% sécurisées
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;

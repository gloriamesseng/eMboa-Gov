import React from 'react';

const SectionSolution = () => {
  return (
    <section id="solution" className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 opacity-50" style={{ backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="ambient-glow" style={{ top: '10%', right: '-15%', width: '42%', height: '55%', background: 'radial-gradient(circle,rgba(15,76,129,0.06) 0%,transparent 70%)' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20 mb-24 lg:mb-28">
          <div className="w-full lg:w-5/12 reveal-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="gold-rule"></span>
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-green" style={{ letterSpacing: '.25em' }}>La Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] font-bold text-brand-blue mb-6 tracking-tight">
              Et si une simple conversation suffisait&nbsp;?
            </h2>
            <p className="text-base md:text-lg text-brand-muted leading-relaxed mb-8 max-w-md">
              MboaGov Fiscal ne se contente pas de numériser les impôts. Nous créons un pont conversationnel direct, fluide et fiable entre vous et l'administration camerounaise — connecté en temps réel aux bases de la DGI et du MINFI.
            </p>
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-brand-green/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Connecté en direct aux bases DGI &amp; MINFI
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative reveal-up" style={{ transitionDelay: '0.1s' }}>
            <div className="ambient-glow" style={{ bottom: '-10%', left: '10%', width: '60%', height: '70%', background: 'radial-gradient(ellipse at center,rgba(0,107,63,0.10) 0%,transparent 70%)' }}></div>
            <div className="glass-light rounded-[2rem] p-6 md:p-8 relative overflow-hidden z-10">
              {/* Header chat */}
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-brand-border/70 relative z-10">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md bg-brand-green">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-blue">MboaGov Fiscal</div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-green">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
                    Assistant Fiscal National · En ligne
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20">
                    ✦ DGI Officiel
                  </span>
                </div>
              </div>

              {/* Message utilisateur */}
              <div 
                className="flex justify-end mb-5 relative z-10"
                style={{ 
                  opacity: 1, 
                  transform: 'translateX(30px)', 
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' 
                }}
              >
                <div className="max-w-[80%] px-5 py-3.5 text-sm rounded-3xl font-medium shadow-sm text-white" style={{ background: 'linear-gradient(135deg,#006B3F,#0a8a52)', borderBottomRightRadius: '6px' }}>
                  Quelles sont mes échéances fiscales ce mois-ci ?
                </div>
              </div>

              {/* Réponse */}
              <div 
                className="flex gap-3 relative z-10"
                style={{ 
                  opacity: 0.8, 
                  transform: 'translateY(15px)', 
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' 
                }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm bg-brand-green">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="flex-1 rounded-3xl rounded-bl-md p-5 bg-brand-blue/5 border border-brand-blue/10">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-brand-green/10 text-brand-green border border-brand-green/20">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    ✦ Données DGI vérifiées · Juin 2025
                  </div>
                  <p className="text-sm text-brand-blue font-medium mb-4">Voici vos échéances fiscales pour le mois de Juin 2025&nbsp;:</p>

                  <div className="space-y-3">
                    <DeadlineItem title="TVA — Déclaration mensuelle" date="15 Juin 2025" status="Urgent" color="red" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />} />
                    <DeadlineItem title="IR — Acompte trimestriel" date="20 Juin 2025" status="Proche" color="amber" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />} />
                    <DeadlineItem title="CNPS — Déclaration salaires" date="25 Juin 2025" status="À venir" color="violet" icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />} />
                  </div>

                  <div className="flex items-center gap-2 mt-4 pt-3 text-xs text-brand-muted border-t border-brand-border/70">
                    <svg className="w-3.5 h-3.5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    Source DGI officielle · Calendrier fiscal 2025 · Art. 152 CGI
                  </div>
                </div>
              </div>

              {/* Actions rapides */}
              <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                <button className="text-xs font-semibold px-4 py-2 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md bg-brand-green/10 text-brand-green border border-brand-green/15">
                  📅 Voir le calendrier complet
                </button>
                <button className="text-xs font-semibold px-4 py-2 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md bg-brand-blue/10 text-brand-blue border border-brand-blue/12">
                  🔔 M'envoyer un rappel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 mb-24 lg:mb-28">
          <div className="photo-card group reveal-up min-h-[360px] lg:min-h-[420px] flex">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop" alt="Discussion" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent"></div>
            <div className="relative z-10 mt-auto p-8 md:p-10">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">L'administration qui parle votre langue</h3>
              <p className="text-white/80 font-medium text-base leading-relaxed max-w-md">Plus de jargon intimidant. Posez vos questions en français, en anglais ou avec vos expressions locales — l'assistant traduit votre situation en termes juridiques précis, instantanément.</p>
            </div>
          </div>

          <div className="surface-card group reveal-up p-8 md:p-10 lg:p-12 flex flex-col" style={{ transitionDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3">Câblé directement sur la source</h3>
            <p className="text-brand-muted font-medium text-base leading-relaxed mb-8 max-w-md">Les lois changent, les PDF vieillissent. Notre connexion via le protocole MCP garantit que chaque réponse provient des serveurs à jour de la DGI et du MINFI — jamais d'une information obsolète.</p>

            <div className="mt-auto flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-semibold text-brand-muted mb-1">
                <span>Synchronisation DGI</span>
                <span className="text-brand-blue">En direct</span>
              </div>
              <div className="h-2 w-full bg-brand-bg rounded-full overflow-hidden border border-brand-border">
                <div className="h-full bg-brand-blue/60 w-3/4 animate-pulse"></div>
              </div>
              <div className="h-2 w-5/6 bg-brand-bg rounded-full overflow-hidden border border-brand-border">
                <div className="h-full bg-brand-green/60 w-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Reliability Process */}
        <div className="surface-card p-8 md:p-12 lg:p-16 reveal-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-kicker mb-4" style={{ color: '#b8890a', background: 'rgba(252,209,22,0.12)', borderColor: 'rgba(252,209,22,0.3)' }}>
              🛡️ Conçu pour la fiabilité
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-4 tracking-tight">Comment nous évitons l'hallucination</h3>
            <p className="text-brand-muted font-medium text-base md:text-lg leading-relaxed">L'intelligence artificielle est brillante, mais elle peut se tromper. Le protocole MCP agit comme un garde-fou&nbsp;: il oblige l'assistant à lire la donnée gouvernementale avant de répondre.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4">
            <ProcessStep number="1" title="Question" description="Expression du besoin en langage naturel." />
            <div className="step-connector hidden lg:block self-center"></div>
            <ProcessStep number="2" title="Traduction MCP" description="Conversion en requête technique stricte." color="#006B3F" />
            <div className="step-connector hidden lg:block self-center"></div>
            <ProcessStep number="3" title="Base de l'État" description="Extraction de la donnée certifiée (DGI / MINFI)." color="#b8890a" />
            <div className="step-connector hidden lg:block self-center"></div>
            <ProcessStep number="4" title="Réponse sourcée" description="L'assistant vulgarise l'information certifiée." />
          </div>
        </div>
      </div>
    </section>
  );
};

const DeadlineItem = ({ title, date, status, color, icon }: any) => (
  <div className={`flex items-center gap-3 rounded-xl p-3 bg-${color}-50 border border-${color}-100`}>
    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-white">
      <svg className={`w-4 h-4 text-${color === 'red' ? 'brand-green' : color === 'amber' ? 'brand-blue' : ''}`} style={color === 'violet' ? { color: '#6d28d9' } : {}} fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
    </div>
    <div className="flex-1">
      <div className="text-xs font-bold text-brand-blue">{title}</div>
      <div className="text-xs text-brand-muted">{date}</div>
    </div>
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-${color}-100 text-${color === 'red' ? 'red-600' : color === 'amber' ? 'amber-700' : 'green-700'}`}>{status}</span>
  </div>
);

const ProcessStep = ({ number, title, description, color }: any) => (
  <div className="flex-1 flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center gap-5 lg:gap-4">
    <div className="step-badge" style={color ? { color } : {}}>{number}</div>
    <div>
      <h5 className="text-sm font-bold text-brand-blue mb-1">{title}</h5>
      <p className="text-xs text-brand-muted leading-relaxed">{description}</p>
    </div>
  </div>
);

export default SectionSolution;

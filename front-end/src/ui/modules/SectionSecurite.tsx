import React from 'react';

const SectionSecurite = () => {
  return (
    <section id="securite" className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50" style={{ backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="ambient-glow" style={{ top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: '70%', height: '50%', background: 'linear-gradient(90deg, rgba(15,76,129,0.05), rgba(0,107,63,0.05), rgba(252,209,22,0.05))' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 reveal-up">
          <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight leading-[1.15] mb-6">
            Chaque réponse est vérifiée avant de vous être présentée.
          </h2>
          <p className="text-base md:text-lg text-brand-muted font-medium leading-relaxed">
            Une IA utile n'est pas une IA qui devine. C'est une architecture qui s'appuie exclusivement sur les bases de données officielles de l'État.
          </p>
        </div>

        {/* Flow Schema */}
        <div className="relative w-full max-w-5xl mx-auto mb-20 lg:mb-24 py-8 reveal-up">
          <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden md:block z-0" overflow="visible">
            <path id="flow-path" d="M 50 48 L 950 48" stroke="#E2E8F0" strokeWidth="2" fill="none"/>
            <path d="M 50 48 L 950 48" stroke="url(#gradient-line)" strokeWidth="3" fill="none" opacity="0.5"/>
            <circle r="4" fill="#006B3F" filter="blur(1px)">
              <animateMotion dur="3s" repeatCount="indefinite"><mpath href="#flow-path"/></animateMotion>
            </circle>
            <circle r="3" fill="#0F4C81">
              <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite"><mpath href="#flow-path"/></animateMotion>
            </circle>
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0F4C81"/>
                <stop offset="50%" stopColor="#006B3F"/>
                <stop offset="100%" stopColor="#FCD116"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
            <FlowItem icon="👤" title="Utilisateur" subtitle="Requête" />
            <div className="glass-light flex flex-col items-center p-4 rounded-2xl w-44 transform scale-110">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#0F4C81,#006B3F)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span className="text-sm font-bold text-brand-blue">Assistant IA</span>
              <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider mt-1">Analyse sémantique</span>
            </div>
            <FlowItem icon={<svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>} title="Protocole MCP" subtitle="Filtre strict" dark />
            <FlowItem icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>} title="Bases de l'État" subtitle="DGI &amp; MINFI" greenIcon />
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          <GuaranteeCard 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>} 
            title="Données officielles" 
            description="Aucune information n'est générée au hasard. Chaque texte de loi cité est extrait en temps réel du Code Général des Impôts en vigueur." 
            colorClass="text-brand-blue bg-brand-blue/10"
          />
          <GuaranteeCard 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>} 
            title="Schémas contrôlés" 
            description="Notre architecture technique empêche l'assistant d'improviser. Si la donnée gouvernementale n'existe pas, il vous le dira clairement." 
            colorClass="text-brand-green bg-brand-green/10"
            delay="0.1s"
          />
          <GuaranteeCard 
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>} 
            title="Confidentialité absolue" 
            description="Vos données financières et vos requêtes sont chiffrées de bout en bout. Elles ne servent jamais à entraîner des modèles d'intelligence artificielle publics." 
            style={{ background: 'rgba(252,209,22,0.16)', color: '#b8890a' }}
            delay="0.2s"
          />
        </div>
      </div>
    </section>
  );
};

const FlowItem = ({ icon, title, subtitle, dark, greenIcon }: any) => (
  <div className={`surface-card flex flex-col items-center p-4 w-40 ${dark ? 'bg-[#0B2341] border-[#0B2341]' : ''}`}>
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${dark ? 'bg-white/10 border border-white/15' : greenIcon ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-bg text-xl'}`}>
      {icon}
    </div>
    <span className={`text-sm font-bold ${dark ? 'text-white' : 'text-brand-blue'}`}>{title}</span>
    <span className={`text-[10px] uppercase tracking-wider mt-1 ${dark ? 'text-white/50' : 'text-brand-muted'}`}>{subtitle}</span>
  </div>
);

const GuaranteeCard = ({ icon, title, description, colorClass, style, delay }: any) => (
  <div className="surface-card p-8 reveal-up" style={{ transitionDelay: delay }}>
    <div className={`w-12 h-12 rounded-2xl ${colorClass || ''} flex items-center justify-center mb-6`} style={style}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
    </div>
    <h3 className="text-xl font-bold text-brand-blue mb-3">{title}</h3>
    <p className="text-sm text-brand-muted leading-relaxed">{description}</p>
  </div>
);

export default SectionSecurite;

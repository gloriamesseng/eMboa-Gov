import React from 'react';
import { NAV_LINKS } from '../design-system/constants';

const Navbar = () => {
  return (
    <nav className="relative z-50 w-full px-6 py-5 max-w-[1400px] mx-auto flex items-center justify-between opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-center gap-3">
        <img
          src="/assets/images/cameroun-flag.png"
          alt="Drapeau du Cameroun"
          className="w-10 h-10 object-contain"
        />
        <div>
          <h1 className="font-bold text-xl leading-tight text-brand-blue">MboaGov Fiscal</h1>
          <p className="text-[11px] font-medium text-brand-muted">Assistant Fiscal National</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-brand-text/80">
        {NAV_LINKS.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className={`transition-colors hover:text-brand-blue ${index === 0 ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-1' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm font-medium bg-white/20 px-4 py-2 rounded-full shadow-sm cursor-pointer hover:shadow-md transition-all border border-brand-border/50">
          FR
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <button className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-brand-border/50">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

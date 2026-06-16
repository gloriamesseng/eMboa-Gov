"use client";

import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../design-system/constants';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const currentLinks = NAV_LINKS[language];

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[100] w-full border-b transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-brand-bg/80 backdrop-blur-md border-brand-border/50 shadow-sm'
          : 'bg-brand-bg/0 backdrop-blur-none border-transparent shadow-none'
      }`}
    >
      <nav 
        className="w-full px-6 py-4 max-w-[1400px] mx-auto flex items-center justify-between opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.1s' }}
      >
        {/* LOGO & NOM */}
        <div className="flex items-center gap-3 relative z-[110]">
          <img
            src="/assets/images/cameroun-flag.png"
            alt="Drapeau du Cameroun"
            className="w-10 h-10 object-contain"
          />
          <div>
            <h1 className="font-bold text-xl leading-tight text-brand-blue">MboaGov Fiscal</h1>
            <p className="text-[11px] font-medium text-brand-muted">
              {language === 'fr' ? 'Assistant Fiscal National' : 'National Tax Assistant'}
            </p>
          </div>
        </div>

        {/* LIENS DE NAVIGATION (DESKTOP) */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-brand-text/80">
          {currentLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`transition-colors duration-300 hover:text-brand-blue ${
                index === 0 ? 'text-brand-green font-semibold border-b-2 border-brand-green pb-1' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-[110]">
          <div className="relative">
            <div 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-sm font-medium bg-white/40 px-4 py-2 rounded-full shadow-sm cursor-pointer hover:bg-white/60 transition-all border border-brand-border/50"
            >
              {language.toUpperCase()}
              <svg className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {isLangOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-brand-border/50 py-2 min-w-[100px] overflow-hidden animate-in fade-in zoom-in duration-200">
                <button 
                  onClick={() => { setLanguage('fr'); setIsLangOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-bg transition-colors ${language === 'fr' ? 'text-brand-green font-bold' : 'text-brand-text'}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-bg transition-colors ${language === 'en' ? 'text-brand-green font-bold' : 'text-brand-text'}`}
                >
                  EN
                </button>
              </div>
            )}
          </div>
          
          {/* BOUTON MENU MOBILE */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-brand-border/50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>


      {isMenuOpen && (
        <div className="fixed inset-0 z-[90]">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute inset-0 bg-brand-bg/10 backdrop-blur-xs"
          />
          <nav
            className="absolute top-0 right-0 h-screen w-[320px] bg-brand-bg/90 backdrop-blur-xl border-l border-brand-border/50 shadow-floating"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
              {currentLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-2xl font-bold text-brand-blue hover:text-brand-green transition-colors"
                  style={{
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: `all 0.5s ease-out ${index * 0.1}s`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
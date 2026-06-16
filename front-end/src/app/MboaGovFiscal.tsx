'use client';

import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useParticles } from '@/hooks/useParticles';
import Navbar from '@/ui/modules/Navbar';
import Hero from '@/ui/modules/Hero';
import ChatSearch from '@/ui/modules/ChatSearch';
import QuickAccess from '@/ui/modules/QuickAccess';
import OfficialBanner from '@/ui/modules/OfficialBanner';
import SectionConstat from '@/ui/modules/SectionConstat';
import SectionSolution from '@/ui/modules/SectionSolution';
import SectionEcosysteme from '@/ui/modules/SectionEcosysteme';
import SectionSecurite from '@/ui/modules/SectionSecurite';
import SectionPublic from '@/ui/modules/SectionPublic';
import SectionCTA from '@/ui/modules/SectionCTA';
import { useLanguage } from '@/context/LanguageContext';

/**
 * MboaGovFiscal Orchestrator
 * Faithful reproduction of the index.html structure.
 */
export default function MboaGovFiscal() {
  useScrollReveal();
  const particlesRef = useParticles();
  const { language } = useLanguage();
  return (
    <div className="text-brand-text antialiased relative">
      {/* Background Particles Container */}
      <div 
        ref={particlesRef}
        id="particles-container" 
        className="absolute top-0 right-0 w-1/2 h-screen z-0 overflow-hidden pointer-events-none"
      />

      {/* Visual Background with Monument and Assistant Panel */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-[800px] lg:h-[950px] z-0 opacity-0 animate-fade-in-up pointer-events-none" style={{ animationDelay: '0.4s' }}>
        <div className="relative w-full h-full monument-mask">
          <img 
            src="/assets/images/monument_reunification.jpg" 
            alt="Monument de la Réunification" 
            className="w-full h-full object-cover object-[center_30%] opacity-[0.85] mix-blend-multiply" 
          />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8FAFC] to-transparent"></div>
        </div>

        {/* Assistant Greeting Card */}
        <div className="hidden md:flex absolute right-6 lg:right-16 top-[30%] -translate-y-1/2 glass-panel p-5 rounded-2xl shadow-floating animate-float max-w-[280px] pointer-events-auto">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-brand-blue"> {language === 'fr' ? 'Bonjour !' : 'Good Morning !'}</p>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">{language === 'fr' ? "Je suis votre assistant fiscal. Comment puis-je vous aider aujourd'hui ?" : "I am your tax assistant. How can i help you today ?"}</p>
            </div>
          </div>
        </div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <ChatSearch />
        <QuickAccess />
        <OfficialBanner />
        
        {/* Transition Divider */}
        <div className="relative z-20 -mt-1 pointer-events-none overflow-hidden h-[100px]">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#f6faf8', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#f3f7fb', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#fbf8f0', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M0,60 C240,95 480,30 720,55 C960,80 1200,30 1440,55 L1440,100 L0,100 Z" fill="url(#waveGrad)" opacity="0.6"/>
            <path d="M0,75 C360,45 720,95 1080,60 C1260,42 1380,70 1440,68 L1440,100 L0,100 Z" fill="url(#waveGrad)"/>
          </svg>
        </div>

        <SectionConstat />
        <SectionSolution />
        <SectionEcosysteme />
        <SectionSecurite />
        <SectionPublic />
        <SectionCTA />
      </main>
    </div>
  );
}

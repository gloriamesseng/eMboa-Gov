'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FOOTER_COLORS, FOOTER_LINKS, contact } from '@/ui/design-system/constants';

const C = FOOTER_COLORS;

function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
      <img
        src="/assets/images/cameroun-flag.png"
        alt="Drapeau du Cameroun"
        className="w-10 h-10 object-contain"
      />
      <div style={{ lineHeight: 1.15 }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: C.blueDeep,
            letterSpacing: '-0.3px',
          }}
        >
          MboaGov
        </div>

        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: C.gold,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
          }}
        >
          Fiscale
        </div>
      </div>
    </div>
  );
}

const Icon = {
  Phone: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.21a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.91z" />
    </svg>
  ),
  Mail: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Web: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  ExtLink: () => (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginLeft: 3 }}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
};

export default function Footer() {
  const { language } = useLanguage();
  const cols = FOOTER_LINKS[language];


  

  return (
    <footer style={{ background: C.green, paddingTop: 24 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
            gap: 48,
            paddingBottom: 48,
            borderBottom: '0.5px solid rgba(255,255,255,0.08)',
          }}
        >
          <div>
            <Logo />
            <p
              style={{
                fontSize: 13,
                color: C.textLight,
                lineHeight: 1.7,
                marginTop: 16,
                maxWidth: 240,
              }}
            >
              {language === 'fr'
                ? "La plateforme d'assistance fiscale intelligente de la République du Cameroun."
                : 'The intelligent fiscal assistance platform of the Republic of Cameroon.'}
            </p>

            <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
              <button
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="footer-phone"
                onClick={() => {
                  window.open(`tel:${contact.phone}`, '_self');
                }}
              >

                <Icon.Phone />
              </button>

              <button
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="footer-email"
                onClick={() => {
                  window.location.href = `mailto:${contact.email}`;
                }}
              >
                <Icon.Mail />
              </button>

              <button
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="footer-web"
                onClick={() => {
                  window.location.href = contact.dgiUrl;
                }}
              >
                <Icon.Web />
              </button>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: C.white,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                {col.title}
              </div>

              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 13,
                    color: C.textLight,
                    marginBottom: 12,
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                  <Icon.ExtLink />
                </a>
              ))}
            </div>
          ))}

        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            padding: '20px 0',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            © 2026 République du Cameroun · Conçu et développé par{' '}
            <strong style={{ color: C.gold }}>Gloria MESSENG</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}


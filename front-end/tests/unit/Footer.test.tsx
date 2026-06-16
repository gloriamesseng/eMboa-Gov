import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '@/ui/modules/Footer';

// Mock minimal du hook useLanguage
vi.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({ language: 'fr' }),
}));

// Mock des constantes utilisées
// eslint-disable-next-line import/no-mutable-exports
vi.mock('@/ui/design-system/constants', () => ({
  FOOTER_COLORS: {
    blueDeep: '#060F1C',
    green: '#006B3F',
    gold: '#FCD116',
    white: '#FFFFFF',
    textLight: 'rgba(255,255,255,0.65)',
  },
  FOOTER_LINKS: {
    fr: [
      {
        title: 'Gouvernement',
        links: [
          { label: 'DGI Cameroun', href: 'https://www.impots.cm/fr/acceuil' },
          {
            label: 'Ministère des Finances',
            href: 'https://minfi.gov.cm/en/home/',
          },
          {
            label: 'Contact DGI',
            href: 'https://www.impots.cm/fr/centre-dappels/',
          },
        ],
      },
      {
        title: 'Support',
        links: [],
      },
      {
        title: 'Légal',
        links: [],
      },
    ],
  },
  contact: {
    phone: '+237680061741',
    email: 'messengloria@gmail.com',
    dgiUrl: 'https://www.impots.cm/fr/acceuil',
    minfiUrl: 'https://minfi.gov.cm/en/home/',
    contactDgiUrl: 'https://www.impots.cm/fr/centre-dappels/',
  },
}));

describe('Footer', () => {
  it('affiche le logo', () => {
    render(<Footer />);
    expect(screen.getByText('MboaGov')).toBeInTheDocument();
  });

  it('affiche un lien DGI (cible _blank) pour “DGI Cameroun”', () => {
    render(<Footer />);
    const dgiLink = screen.getByRole('link', {
      name: /DGI Cameroun/i,
    });
    expect(dgiLink).toHaveAttribute('href', 'https://www.impots.cm/fr/acceuil');
    expect(dgiLink).toHaveAttribute('target', '_blank');
  });

  it('affiche le bouton téléphone “footer-phone”', () => {
    render(<Footer />);
    const phoneBtn = screen.getByLabelText('footer-phone');
    expect(phoneBtn).toBeInTheDocument();
  });
});


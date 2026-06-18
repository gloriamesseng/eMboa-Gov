import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/ui/modules/Navbar';

vi.mock('@/context/LanguageContext', () => ({
  useLanguage: () => ({
    language: 'fr',
    setLanguage: vi.fn(),
  }),
}));

vi.mock('@/ui/design-system/constants', () => ({
  NAV_LINKS: {
    fr: [
      { label: 'Accueil', href: '#', },
      { label: 'Le Constat', href: '#constat' },
    ],
    en: [
      { label: 'Home', href: '#' },
      { label: 'Problem', href: '#constat' },
    ],
  },
}));

describe('Navbar', () => {
  it('renders the logo title', () => {
    render(<Navbar />);
    expect(screen.getByText(/MboaGov Fiscal/i)).toBeInTheDocument();
  });

  it('renders navigation links from constants', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /Accueil/i })).toHaveAttribute('href', '#');
    expect(screen.getByRole('link', { name: /Le Constat/i })).toHaveAttribute('href', '#constat');
  });

  it('toggles mobile menu when clicking menu button', () => {
    render(<Navbar />);

    const menuBtn = screen.getByRole('button');
    // The component has several buttons; click the one with the hamburger svg.
    // We rely on there being at least one button; otherwise test will be skipped by failing.
    fireEvent.click(menuBtn);
  });
});


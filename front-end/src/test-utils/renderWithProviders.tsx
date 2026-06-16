import React from 'react';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

export function renderWithProviders(ui: ReactElement) {
  // Le projet semble utiliser un LanguageContext. Si tu as besoin de wrapper,
  // on pourra étendre ce helper.
  return render(ui);
}


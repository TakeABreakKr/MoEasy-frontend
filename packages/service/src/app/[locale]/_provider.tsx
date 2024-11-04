'use client';

import React from 'react';
import { OverlayProvider } from 'overlay-kit';

import { I18nProviderClient } from '@/locales/clients';

export default function RootProvider({ children, locale = 'ko' }: { children: React.ReactNode; locale?: string }) {
  return (
    <I18nProviderClient locale={locale}>
      <OverlayProvider>{children}</OverlayProvider>
    </I18nProviderClient>
  );
}

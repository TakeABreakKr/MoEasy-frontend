'use client';

import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { OverlayProvider } from 'overlay-kit';

import { I18nProviderClient } from '@/locales/clients';

import { getQueryClient } from './tanstack-query';

export default function RootProvider({ children, locale = 'ko' }: { children: React.ReactNode; locale?: string }) {
  const queryClient = getQueryClient();

  return (
    <I18nProviderClient locale={locale}>
      <OverlayProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </OverlayProvider>
    </I18nProviderClient>
  );
}

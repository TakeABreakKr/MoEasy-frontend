'use client';

import React from 'react';
import { OverlayProvider } from 'overlay-kit';

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return <OverlayProvider>{children}</OverlayProvider>;
}

'use client';

import { useRef } from 'react';

import { AboutToNextPage } from '@/widget/about/to-next-page';

import * as styles from './about.css';

export function AboutPage({ children }: { children?: React.ReactNode }) {
  const parentRef = useRef<HTMLElement>(null);
  return (
    <main ref={parentRef} className={styles.aboutMain}>
      {children}
      <AboutToNextPage parentRef={parentRef} />
    </main>
  );
}

'use client';

import { useRef } from 'react';
import clsx from 'clsx';

import { AboutToNextPage } from '@/widget/about/to-next-page';

import { suite } from '@moeasy/storybook/font';

import * as styles from './about.css';

export function AboutPage({ children }: { children?: React.ReactNode }) {
  const parentRef = useRef<HTMLElement>(null);
  return (
    <main ref={parentRef} className={clsx(styles.aboutMain, suite.className)}>
      {children}
      <AboutToNextPage parentRef={parentRef} />
    </main>
  );
}

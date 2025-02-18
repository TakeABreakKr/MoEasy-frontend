'use client';

import { useRef } from 'react';
import clsx from 'clsx';

import { suite } from '@moeasy/storybook/font';
import { MainFooter } from '@moeasy/storybook/ui/footer';

import { AboutContents } from './content';
import { AboutToNextPage } from './to-next-page';

import * as styles from './about.css';

export function AboutPageWrapper({ children }: { children?: React.ReactNode }) {
  const parentRef = useRef<HTMLElement>(null);
  return (
    <>
      <main ref={parentRef} className={clsx(styles.aboutMain, suite.className)}>
        {children}
        <AboutToNextPage parentRef={parentRef} />
        <MainFooter />
      </main>
    </>
  );
}

export function AboutPage() {
  return (
    <AboutPageWrapper>
      <AboutContents />
    </AboutPageWrapper>
  );
}

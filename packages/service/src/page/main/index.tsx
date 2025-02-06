import { Suspense } from 'react';

import { MainContent } from '@/widget/main/content';
import { MainContentLoadingFallback } from '@/widget/main/content/loading';
import { MainFirstSection } from '@/widget/main/section/first';

import { MainFooter } from '@moeasy/storybook/ui/footer';
import { Separator } from '@moeasy/storybook/ui/separator';

import * as styles from './main.css';

export async function MainPage() {
  return (
    <>
      <main className={styles.main}>
        <MainFirstSection />
        <Suspense fallback={<MainContentLoadingFallback />}>
          <MainContent />
        </Suspense>
      </main>
      <Separator direction="horizontal" />
      <MainFooter />
    </>
  );
}

import { Suspense } from 'react';

import { MainContentLoadingFallback } from './content/loading';
import { MainHeroSection } from './section/hero';
import { MainContent } from './content';

import * as styles from './main.css';

export function MainBody() {
  return (
    <main className={styles.main}>
      <MainHeroSection />
      <Suspense fallback={<MainContentLoadingFallback />}>
        <MainContent />
      </Suspense>
    </main>
  );
}

import { Suspense } from 'react';

import { MainContentLoadingFallback } from './content/loading';
import { MainFirstSection } from './section/first';
import { MainContent } from './content';

import * as styles from './main.css';

export function MainBody() {
  return (
    <main className={styles.main}>
      <MainFirstSection />
      <Suspense fallback={<MainContentLoadingFallback />}>
        <MainContent />
      </Suspense>
    </main>
  );
}

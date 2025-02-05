import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getScopedI18n } from '@/locales/server';
import { MainContent } from '@/widget/main/content';
import { MainContentLoadingFallback } from '@/widget/main/content/loading';
import { LoginPopup } from '@/widget/main/popup/login';

import { MainFooter } from '@moeasy/storybook/ui/footer';
import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Separator } from '@moeasy/storybook/ui/separator';

import * as styles from './main.css';

export async function MainPage() {
  const t = await getScopedI18n('main');
  return (
    <>
      <LoginPopup />
      <main className={styles.main}>
        <section className={styles.firstSection}>
          <div className={styles.sectionLeft}>
            <h1 className={styles.justRound}>{t('desc')}?</h1>
            <pre className={styles.desc}>{t('desc-detail')}</pre>
            <Link href="/about" className={styles.moreLink}>
              {t('더 알아보기')}
              <ChevronDown width={12} transform="rotate(270)" />
            </Link>
          </div>
          <div style={{ background: 'gray', minHeight: 300, maxHeight: 300, width: 300 }}>
            <Image src={'https://placehold.co/300'} unoptimized width={300} height={300} alt="sample" />
          </div>
        </section>
        <Suspense fallback={<MainContentLoadingFallback />}>
          <MainContent />
        </Suspense>
      </main>
      <Separator direction="horizontal" />
      <MainFooter />
    </>
  );
}

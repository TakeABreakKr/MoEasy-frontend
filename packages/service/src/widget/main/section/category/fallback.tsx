'use client';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { DirectionButton } from '@moeasy/storybook/ui/button';

import { sectionHeaderFallaback } from '../../fallback.css';
import * as styles from '../section.css';
import * as categoryStyles from './category.css';

export function MainCategorySectionFallback({ title }: { title: string }) {
  return (
    <section className={styles.section}>
      <div className={sectionHeaderFallaback} />
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'large', width: '100%' })}>
        <MainCategorySectionTabFallback />
        <MainCategorySectionContentFallback />
      </div>
    </section>
  );
}

function MainCategorySectionTabFallback() {
  return <div className={categoryStyles.tabFallback} />;
}

function MainCategorySectionContentFallback() {
  return (
    <>
      <div className={categoryStyles.content}>
        {Array.from({ length: 10 })?.map((_, index) => (
          <button
            key={index}
            className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'small', alignItems: 'center' })}
          >
            <div className={categoryStyles.iconFallback} />
            <div className={categoryStyles.categoryFallback} />
          </button>
        ))}
      </div>
      <MainCategorySectionContentPageFallback />
    </>
  );
}

function MainCategorySectionContentPageFallback() {
  return (
    <div className={sprinkles({ display: 'flex', gap: 'small', width: '100%', justifyContent: 'center' })}>
      <DirectionButton disabled />
      <DirectionButton direction="right" disabled />
    </div>
  );
}

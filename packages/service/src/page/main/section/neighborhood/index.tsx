'use client';

import { useState } from 'react';

import { components } from '@/shared/api/my-schema';

import { EllipsisIcon } from '@moeasy/storybook/ui/icon';
import { useInterval } from '@moeasy/storybook/utils/hooks/use-interval';

import { MainLastSectionLoginButton } from './login-button';

import * as styles from '../section.css';
import * as lastStyles from './last.css';

export function MainLastSection({
  mostActivatedRegions,
}: {
  mostActivatedRegions?: components['schemas']['HomeMostActivatedRegionDto'][];
}) {
  const [index, setIndex] = useState(0);
  const showingRegion = mostActivatedRegions?.[index];

  useInterval(() => {
    setIndex((index) => (index === (mostActivatedRegions?.length || 0) - 1 ? 0 : index + 1));
  }, 3000);

  return (
    <section className={styles.section}>
      <div className={lastStyles.container}>
        <div className={lastStyles.currentIcon}>
          <EllipsisIcon />
        </div>
        <div className={lastStyles.currentText}>
          지금 우리 동네는?
          <br />
          {showingRegion?.name} {showingRegion?.activityCount}개 활동 진행중
        </div>
      </div>
      <MainLastSectionLoginButton />
    </section>
  );
}

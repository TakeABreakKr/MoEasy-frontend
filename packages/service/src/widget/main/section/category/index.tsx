'use client';

import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { CategoryItemType, categoryList } from '@/shared/consts/category';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { pushSearchParams } from '@/shared/utils/search-param';

import { DirectionButton } from '@moeasy/storybook/ui/button';
import { Text } from '@moeasy/storybook/ui/text';

import { isValidGroupName } from './utils';

import * as styles from '../section.css';
import * as categoryStyles from './category.css';

export function MainCategorySection({ title }: { title: string }) {
  return (
    <section className={styles.section}>
      <Text asChild title="large">
        <h1 className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>{title}</h1>
      </Text>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'large', width: '100%' })}>
        <MainCategorySectionTab />
        <MainCategorySectionContent />
      </div>
    </section>
  );
}

function MainCategorySectionTab() {
  const searchParams = useSearchParams();
  const group = searchParams.get('group');
  const validatedGroup = isValidGroupName(group) ? group : '전체';
  return (
    <div className={sprinkles({ display: 'flex', gap: 'medium' })}>
      {categoryList.map(({ title }) => (
        <button
          className={clsx(categoryStyles.categoryButton, validatedGroup === title && categoryStyles.activeCategory)}
          key={title}
          onClick={() => pushSearchParams({ group: title, page: null })}
        >
          <Text semibold={validatedGroup === title}>{title}</Text>
        </button>
      ))}
    </div>
  );
}

function MainCategorySectionContent() {
  const searchParams = useSearchParams();
  const group = searchParams.get('group');
  const validatedGroup = isValidGroupName(group) ? group : '전체';
  const currentPage = searchParams.get('page') || '1';
  const validCurrentPage = isNaN(Number(currentPage)) ? 1 : Number(currentPage);
  const selectedCategory =
    validatedGroup === '전체'
      ? categoryList.reduce<CategoryItemType[]>((acc, { category }) => [...acc, ...category], [])
      : categoryList.find((item) => item.title === validatedGroup)?.category || [];
  const showingCategories = selectedCategory.slice((validCurrentPage - 1) * 10, validCurrentPage * 10);
  return (
    <>
      <div className={categoryStyles.content}>
        {showingCategories?.map(({ key, icon }) => (
          <button
            key={key}
            className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'small', alignItems: 'center' })}
          >
            <div className={categoryStyles.iconDiv}>
              {icon}
              <div className={categoryStyles.iconMultiply} />
            </div>
            <Text>{key}</Text>
          </button>
        ))}
      </div>
      <MainCategorySectionContentPage
        currentPage={validCurrentPage}
        categoryLength={selectedCategory.length}
        group={validatedGroup}
      />
    </>
  );
}
function MainCategorySectionContentPage({
  currentPage = 1,
  categoryLength = 0,
  group,
}: {
  currentPage?: number;
  categoryLength?: number;
  group?: string | null;
}) {
  return (
    <div className={sprinkles({ display: 'flex', gap: 'small', width: '100%', justifyContent: 'center' })}>
      <DirectionButton
        disabled={currentPage === 1}
        onClick={() => pushSearchParams({ group, page: (currentPage - 1).toString() })}
      />
      <DirectionButton
        direction="right"
        disabled={currentPage + 1 > categoryLength / 10}
        onClick={() => pushSearchParams({ group, page: (currentPage + 1).toString() })}
      />
    </div>
  );
}

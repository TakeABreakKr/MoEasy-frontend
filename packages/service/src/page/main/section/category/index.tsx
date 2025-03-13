'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { components } from '@/shared/api/my-schema';
import { CategoryItemType, categoryList } from '@/shared/consts/category';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { pushSearchParams } from '@/shared/utils/search-param';

import { DirectionButton } from '@moeasy/storybook/ui/button';
import { Text } from '@moeasy/storybook/ui/text';

import { isValidGroupName } from './utils';

import * as styles from '../section.css';
import * as categoryStyles from './category.css';

export function MainCategorySection({
  title,
  categories,
}: {
  title: string;
  categories?: components['schemas']['HomeCategoryGroupDto'][];
}) {
  return (
    <section className={styles.section}>
      <Text asChild title="large">
        <h1 className={categoryStyles.titleWrapper}>{title}</h1>
      </Text>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'large', width: '100%' })}>
        <MainCategorySectionTab />
        <MainCategorySectionContent categories={categories} />
      </div>
    </section>
  );
}

function MainCategorySectionTab() {
  const searchParams = useSearchParams();
  const group = searchParams.get('group');
  const validatedGroup = isValidGroupName(group) ? group : '';
  return (
    <div className={sprinkles({ display: 'flex', gap: 'medium' })}>
      <button
        className={clsx(categoryStyles.categoryButton, !validatedGroup && categoryStyles.activeCategory)}
        key="ALL"
        onClick={() => pushSearchParams({ group: null, page: null })}
      >
        <Text semibold={!validatedGroup}>전체</Text>
      </button>
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

function MainCategorySectionContent({ categories }: { categories?: components['schemas']['HomeCategoryGroupDto'][] }) {
  const searchParams = useSearchParams();
  const group = searchParams.get('group');
  const validatedGroup = isValidGroupName(group) ? group : '전체';
  const currentPage = searchParams.get('page') || '1';
  const validCurrentPage = isNaN(Number(currentPage)) ? 1 : Number(currentPage);
  const [selectedCategoryGroup, sortedCategories] = useMemo(() => {
    const selectedCategoryGroup =
      validatedGroup === '전체'
        ? categoryList.reduce<CategoryItemType[]>((acc, { category }) => [...acc, ...category], [])
        : categoryList.find((item) => item.title === validatedGroup)?.category || [];

    const showingCategories = selectedCategoryGroup.slice((validCurrentPage - 1) * 10, validCurrentPage * 10);

    const orderOfCategoriesOfSelectedGroup = categories?.find(
      (category) => category.name === validatedGroup,
    )?.homeCategoryList;

    const sortedCategories = orderOfCategoriesOfSelectedGroup
      ? showingCategories.sort((prev, next) => {
          const prevOrder = orderOfCategoriesOfSelectedGroup.find((category) => category.name === prev.key)?.order || 0;
          const nextOrder = orderOfCategoriesOfSelectedGroup.find((category) => category.name === next.key)?.order || 0;
          return prevOrder - nextOrder;
        })
      : showingCategories;

    return [selectedCategoryGroup, sortedCategories] as const;
  }, [validatedGroup, categories, validCurrentPage]);

  return (
    <>
      <div className={categoryStyles.content}>
        {sortedCategories.map(({ key, Icon }) => (
          <button
            key={key}
            className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'small', alignItems: 'center' })}
          >
            <div className={categoryStyles.iconDiv}>
              <Icon />
              <div className={categoryStyles.iconMultiply} />
            </div>
            <Text>{key}</Text>
          </button>
        ))}
      </div>
      <MainCategorySectionContentPage
        currentPage={validCurrentPage}
        categoryLength={selectedCategoryGroup.length}
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

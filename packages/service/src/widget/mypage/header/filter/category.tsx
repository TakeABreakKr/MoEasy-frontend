'use client';

import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { useScopedI18n } from '@/locales/clients';
import { CategoryItemType, categoryList } from '@/shared/consts/category';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { pushSearchParams } from '@/shared/utils/search-param';

import { Button } from '@moeasy/storybook/ui/button';
import { ChevronDown, ResetIcon, XIcon } from '@moeasy/storybook/ui/icon';
import { Popover, PopoverContent, PopoverTrigger } from '@moeasy/storybook/ui/select';
import { Separator } from '@moeasy/storybook/ui/separator';
import { Text } from '@moeasy/storybook/ui/text';

import { isValidGroupName } from './util';

import * as styles from './filter.css';

export function MyPageFilterCategory({ active }: { active?: boolean }) {
  const searchParams = useSearchParams();
  const group = searchParams.get('group');
  const validatedGroup = isValidGroupName(group) ? group || '전체' : '전체';
  const selectedCategories = searchParams.getAll('category');
  const t = useScopedI18n('mypage.filter');

  const onOpen = () => pushSearchParams({ filter: 'category' }, searchParams);
  const onGroupToggle = (group: string) => () => {
    const newGroup = isValidGroupName(group) ? group || '전체' : '전체';
    pushSearchParams({ group: newGroup }, searchParams);
  };
  const onCategoryToggle = (category: string) => () => {
    const newRoles = selectedCategories.includes(category)
      ? selectedCategories.filter((role) => role !== category)
      : [...selectedCategories, category];
    pushSearchParams({ category: newRoles }, searchParams);
  };
  const onReset = () => {
    pushSearchParams({ category: [] }, searchParams);
  };

  return (
    <Popover>
      <PopoverTrigger className={clsx(styles.filterButton, active && styles.filterButtonActive)} onClick={onOpen}>
        {t('전체 카테고리')}
        <ChevronDown height={6} aria-hidden />
      </PopoverTrigger>
      <PopoverContent align="start" className={styles.categoryContainer}>
        <MyPageGroupList group={validatedGroup} onGroupToggle={onGroupToggle} />
        <MyPageCategoryContent
          group={validatedGroup}
          onCategoryToggle={onCategoryToggle}
          selected={selectedCategories}
        />
        <Separator direction="horizontal" color="#cfcfcf" />
        <MyPageSelectedCategory selected={selectedCategories} onCategoryToggle={onCategoryToggle} onReset={onReset} />
      </PopoverContent>
    </Popover>
  );
}

function MyPageGroupList({ group, onGroupToggle }: { group: string; onGroupToggle: (group: string) => () => void }) {
  return (
    <ul className={styles.filterGroupList}>
      {categoryList.map((item) => (
        <li key={item.title}>
          <button
            className={clsx(styles.filterGroupItem, item.title === group && styles.filterGroupItemActive)}
            onClick={onGroupToggle(item.title)}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

function MyPageCategoryContent({
  group,
  onCategoryToggle,
  selected,
}: {
  group: string;
  onCategoryToggle: (category: string) => () => void;
  selected: string[];
}) {
  const validatedGroup = isValidGroupName(group) ? group : '전체';
  const selectedCategory =
    validatedGroup === '전체'
      ? categoryList.reduce<CategoryItemType[]>((acc, { category }) => [...acc, ...category], [])
      : categoryList.find((item) => item.title === validatedGroup)?.category || [];

  return (
    <div className={styles.filterCategoryList}>
      {selectedCategory?.map(({ key, Icon }) => (
        <button
          key={key}
          className={clsx(styles.filterCategoryItem, selected.includes(key) && styles.filterCategoryItemActive)}
          onClick={onCategoryToggle(key)}
        >
          <div className={styles.filterCategoryIcon}>
            <Icon aria-hidden width={20} height={20} />
          </div>
          <Text>{key}</Text>
        </button>
      ))}
    </div>
  );
}

function MyPageSelectedCategory({
  selected,
  onCategoryToggle,
  onReset,
}: {
  selected: string[];
  onCategoryToggle: (category: string) => () => void;
  onReset: () => void;
}) {
  const t = useScopedI18n('mypage.filter');
  return (
    <ul className={styles.selectedCategoryList}>
      {selected.map((item) => (
        <li key={item} className={styles.selectedCategoryItem}>
          <Text>{item}</Text>
          <Button size="icon" rounded="full" onClick={onCategoryToggle(item)}>
            <XIcon aria-hidden width={6} />
          </Button>
        </li>
      ))}
      <li key="reset" className={styles.selectedItemBase}>
        <button onClick={onReset} className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'xsmall' })}>
          <ResetIcon />
          {t('초기화')}
        </button>
      </li>
    </ul>
  );
}

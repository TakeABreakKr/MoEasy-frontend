'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { CategoryType } from '@/entities/meeting/api/type';
import { categoryList } from '@/shared/consts/category';

import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Popover, PopoverContent, PopoverTrigger } from '@moeasy/storybook/ui/select';
import { Text } from '@moeasy/storybook/ui/text';

// TODO: 스타일 수정
import * as styles from './category-select.css';

type CategorySelectProps = {
  selectedCategory?: CategoryType;
  onValueChange: (category: CategoryType) => void;
};

export function CategorySelect({ selectedCategory, onValueChange }: CategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onCategorySelect = (category: CategoryType) => {
    onValueChange(category);
    setIsOpen(false);
  };

  const selectedCategoryIcon = (key: CategoryType) => {
    for (const category of categoryList) {
      const categoryIcon = category.category.find((item) => item.key === key);
      if (categoryIcon) return categoryIcon.Icon;
    }
    return null;
  };

  const CategoryIcon = selectedCategory ? selectedCategoryIcon(selectedCategory) : null;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className={clsx(styles.triggerButton)}>
        {CategoryIcon && (
          <span className={clsx(styles.selectedCategoryIcon)}>
            <CategoryIcon className={clsx(styles.selectedIcon)} />
          </span>
        )}
        {selectedCategory || '모임의 성격을 가장 잘 나타내는 카테고리를 선택해주세요'}
        <ChevronDown height={6} aria-hidden />
      </PopoverTrigger>
      <PopoverContent align="start" className={styles.categoryContainer}>
        <CategoryContent selectedCategory={selectedCategory} onCategorySelect={onCategorySelect} />
      </PopoverContent>
    </Popover>
  );
}

function CategoryContent({
  selectedCategory,
  onCategorySelect,
}: {
  selectedCategory?: CategoryType;
  onCategorySelect: (category: CategoryType) => void;
}) {
  const [selectedGroup, setSelectedGroup] = useState<(typeof categoryList)[number]['title']>(categoryList[0].title);
  return (
    <div className={styles.categoryGroupContainer}>
      <div className={styles.categoryTabs}>
        {categoryList.map(({ title }) => (
          <button
            key={title}
            className={clsx(styles.categoryTabs, selectedGroup === title && styles.activeCategoryTab)}
            onClick={() => setSelectedGroup(title)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={styles.categoryList}>
        {categoryList
          .find(({ title }) => title === selectedGroup)
          ?.category.map(({ key, Icon }) => (
            <button
              key={key}
              className={clsx(styles.categoryItem, selectedCategory === key)}
              onClick={() => onCategorySelect(key)}
            >
              <div className={styles.categoryIcon}>
                <Icon aria-hidden width={30} height={30} />
              </div>
              <Text>{key}</Text>
            </button>
          ))}
      </div>
    </div>
  );
}

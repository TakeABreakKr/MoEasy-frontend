'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { categoryList } from '@/shared/consts/category';
import { Popover, PopoverContent, PopoverTrigger } from '@moeasy/storybook/ui/select';
import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './category-select.css';

type CategorySelectProps = {
  selectedCategory: string;
  onValueChange: (category: string) => void;
};

export function CategorySelect({ selectedCategory, onValueChange }: CategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onCategorySelect = (category: string) => {
    onValueChange(category);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className={clsx(styles.triggerButton, isOpen && styles.activeTrigger)}>
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
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}) {
  return (
    <div className={styles.categoryGroupContainer}>
      {categoryList.map(({ title, category }) => (
        <div key={title} className={styles.categoryGroup}>
          <Text className={styles.categoryGroupTitle}>{title}</Text> {/* ✅ 그룹 제목 표시 */}
          <div className={styles.categoryList}>
            {category.map(({ key, Icon }) => (
              <button
                key={key}
                className={clsx(styles.categoryItem, selectedCategory === key && styles.categoryItemActive)}
                onClick={() => onCategorySelect(key)}
              >
                <div className={styles.categoryIcon}>
                  <Icon aria-hidden width={20} height={20} />
                </div>
                <Text>{key}</Text>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

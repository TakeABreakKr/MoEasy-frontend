'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { categoryList } from '@/shared/consts/category';
import { Popover, PopoverContent, PopoverTrigger } from '@moeasy/storybook/ui/select';
import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';
// TODO: 스타일 수정
import * as styles from './category-select.css';

type CategorySelectProps = {
  selectedCategory: string;
  onValueChange: (category: string) => void;
};

//TODO: 선택한 카테고리가 아이콘 + 텍스트 형태로 필드에 반영되도록 수정
export function CategorySelect({ selectedCategory, onValueChange }: CategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onCategorySelect = (category: string) => {
    onValueChange(category);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className={clsx(styles.triggerButton)}>
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
  const [selectedGroup, setSelectedGroup] = useState(categoryList.find(({ title }) => title !== '전체')?.title || '');
  return (
    <div className={styles.categoryGroupContainer}>
      <div className={styles.categoryTabs}>
        {categoryList
          .filter(({ title }) => title !== '전체')
          .map(({ title }) => (
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

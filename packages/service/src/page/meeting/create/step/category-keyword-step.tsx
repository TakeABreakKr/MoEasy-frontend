import { useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { isComposingOnEnter } from '@/shared/utils/event';
import { CategorySelect } from '@/widget/meeting/category-select';

import { Button } from '@moeasy/storybook/ui/button';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Input } from '@moeasy/storybook/ui/input';
import { Label } from '@moeasy/storybook/ui/label/label';
import { Tag } from '@moeasy/storybook/ui/tag';

import { StepProps } from '../creating-step-form';

import * as keywordStyles from './keywords.css';

export function CategoryKeywordStep({ formData, dispatch }: StepProps) {
  const [inputValue, setInputValue] = useState('');

  const isKeywordsTooLong = inputValue.length > 10;

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const handleAddKeyword = () => {
    if (!inputValue.trim()) return;
    if (formData.keywords.includes(inputValue.trim())) return;
    if (formData.keywords.length >= 10) return;

    const newKeywords = [...formData.keywords, inputValue.trim()];
    dispatch({ keywords: newKeywords });
    setInputValue('');
  };

  const handleRemoveKeyword = (keyword: string) => {
    const updatedKeywords = formData.keywords.filter((k) => k !== keyword);
    dispatch({ keywords: updatedKeywords });
  };

  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.labelWrapper}>
        <div className={formStyles.label}>카테고리</div>
        <CategorySelect selectedCategory={formData.category} onValueChange={(category) => dispatch({ category })} />
      </label>
      <label className={formStyles.labelWrapper}>
        <div className={formStyles.label}>
          키워드 <small>({formData.keywords.length}/10)</small>
          {isKeywordsTooLong && <Label variant="error">최대 10글자까지 입력 가능합니다.</Label>}
        </div>
        <div className={sprinkles({ width: '100%', display: 'flex', alignItems: 'center', gap: 'medium' })}>
          <Input
            name="keywords"
            placeholder="키워드를 입력해주세요"
            className={formStyles.input}
            value={inputValue}
            onValueChange={handleInputChange}
            onKeyDown={(e) => {
              isComposingOnEnter(e) && handleAddKeyword();
            }}
            maxLength={10}
            minLength={0}
            isError={isKeywordsTooLong}
            disabled={formData.keywords.length >= 10}
          />
          <Button
            type="button"
            variant="dark"
            size="small"
            rounded="medium"
            onClick={handleAddKeyword}
            disabled={formData.keywords.length >= 10}
          >
            확인
          </Button>
        </div>
        <div className={keywordStyles.keywordList}>
          {formData.keywords.map((keyword) => (
            <Tag key={keyword} variant="light" onDeleteClick={() => handleRemoveKeyword(keyword)} isDelete>
              {keyword}
            </Tag>
          ))}
        </div>
      </label>
    </div>
  );
}

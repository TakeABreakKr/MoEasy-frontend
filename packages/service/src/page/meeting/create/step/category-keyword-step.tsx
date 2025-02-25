import { useState } from 'react';

import { Input } from '@moeasy/storybook/ui/input';
import { Button } from '@moeasy/storybook/ui/button';
import { StepProps } from '../creating-step-form';
import { CategorySelect } from '@/widget/meeting/category-select';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import * as keywordStyles from './keywords.css';

export function CategoryKeywordStep({ formData, dispatch }: StepProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };

  //TODO: 키워드 입력 오류시 처리 (중복, 10개 초과 등) 확인 필요
  // TODO: 키워드 몇 개까지 입력 가능한지 확인 필요
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
      <label className={formStyles.label}>
        <span>카테고리</span>
        <CategorySelect selectedCategory={formData.category} onValueChange={(category) => dispatch({ category })} />
      </label>
      <label className={formStyles.label}>
        <span>
          키워드 <small>({formData.keywords.length}/10)</small>
        </span>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Input
            name="keywords"
            placeholder="키워드를 입력해주세요"
            className={formStyles.input}
            value={inputValue}
            onValueChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddKeyword();
              }
            }}
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
            <div key={keyword} className={keywordStyles.keywordItem}>
              <span>{keyword}</span>
              <button type="button" className={keywordStyles.removeButton} onClick={() => handleRemoveKeyword(keyword)}>
                x
              </button>
              {/* FIXME: removeButton을 icon으로 사용하는지? 아니면 text로 사용하는지 확인 후 수정 */}
            </div>
          ))}
        </div>
      </label>
    </div>
  );
}

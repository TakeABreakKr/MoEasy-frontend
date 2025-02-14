import { Input } from '@moeasy/storybook/ui/input';
import { StepProps } from '../creating-step-form';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

// TODO: 카테고리 선택 창
// TODO: 키워드 입력하여 저장되는 기능
export function CategoryKeywordStep({ formData, dispatch }: StepProps) {
  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label}>
        <span>카테고리</span>

        <Input
          name="category"
          placeholder="카테고리를 입력해주세요"
          className={formStyles.input}
          value={formData.category}
          onValueChange={(category) => dispatch({ category })}
        />
      </label>
      <label className={formStyles.label}>
        <span>키워드</span>
        <Input
          name="keywords"
          placeholder="키워드를 입력해주세요"
          className={formStyles.input}
          value={formData.keywords}
          onValueChange={(keywords) => dispatch({ keywords })}
        />
      </label>
    </div>
  );
}

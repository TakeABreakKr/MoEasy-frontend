import { Input } from '@moeasy/storybook/ui/input';
import { Textarea } from '@moeasy/storybook/ui/textarea';
import { StepProps } from '../creating-step-form';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

export function MeetingInfoStep({ formData, dispatch }: StepProps) {
  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label}>
        <span>모임 이름</span>

        <Input
          name="name"
          placeholder="모임 이름을 입력해주세요"
          className={formStyles.input}
          value={formData.name}
          onValueChange={(name) => dispatch({ name })}
        />
      </label>
      <label className={formStyles.label}>
        <span>모임 소개</span>
        <Textarea
          name="description"
          placeholder="모임 소개를 입력해주세요"
          className={formStyles.input}
          value={formData.description}
          onValueChange={(description) => dispatch({ description })}
        />
      </label>
    </div>
  );
}

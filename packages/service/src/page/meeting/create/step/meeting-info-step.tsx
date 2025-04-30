import { Input } from '@moeasy/storybook/ui/input';
import { Textarea } from '@moeasy/storybook/ui/textarea';
import { Label } from '@moeasy/storybook/ui/label/label';
import { StepProps } from '../creating-step-form';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

export function MeetingInfoStep({ formData, dispatch }: StepProps) {
  const isNameTooLong = formData.name.length > 30;
  const isExplanationTooLong = formData.explanation.length > 100;

  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.labelWrapper}>
        <div className={formStyles.label}>
          모임 이름 {isNameTooLong && <Label variant="error">최대 30글자까지 입력 가능합니다.</Label>}
        </div>
        <Input
          name="name"
          placeholder="모임 이름은 무엇인가요?"
          className={formStyles.input}
          value={formData.name}
          onValueChange={(name) => dispatch({ name })}
          maxLength={30}
          minLength={0}
          isError={isNameTooLong}
        />
      </label>
      <label className={formStyles.labelWrapper}>
        <div className={formStyles.label}>
          모임 소개{isExplanationTooLong && <Label variant="error">최대 100글자까지 입력 가능합니다.</Label>}
        </div>
        <Textarea
          name="description"
          placeholder="모임 목표와 주요 활동을 설명해주세요"
          className={formStyles.input}
          value={formData.explanation}
          onValueChange={(explanation) => dispatch({ explanation })}
          maxLength={100}
          minLength={0}
          isError={isExplanationTooLong}
        />
      </label>
    </div>
  );
}

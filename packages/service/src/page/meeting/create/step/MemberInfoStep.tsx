import { Input } from '@moeasy/storybook/ui/input';
import { Button } from '@moeasy/storybook/ui/button';
import { StepProps } from '../CreatingStepForm';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

type MemberStepProps = StepProps & {
  toggleLimitDisabled: () => void;
};

export default function MemberInfoStep({ formData, dispatch, toggleLimitDisabled }: MemberStepProps) {
  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label}>
        <span>몇 명까지 참여할 수 있나요?</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Input
            name="limit"
            placeholder="모임 인원을 입력해주세요"
            value={formData.limit}
            onValueChange={(limit) => dispatch({ limit })}
            disabled={formData.limitDisabled}
          />
          <Button
            type="button"
            variant={formData.limitDisabled ? 'primary' : 'secondary'}
            size="small"
            rounded="medium"
            onClick={toggleLimitDisabled}
          >
            제한 없음
          </Button>
        </div>
      </label>
      {/* TODO: 모임원 추가 모달 생성 */}
      <label className={formStyles.label}>
        <span>모임원 추가</span>
        <Input
          name="member"
          className={formStyles.input}
          placeholder="모임원을 선택해주세요"
          value={formData.member}
          onValueChange={(member) => dispatch({ member })}
        />
      </label>
    </div>
  );
}

import { useReducer } from 'react';

import { ActivityStepData_TEMP } from '@/entities/activity/api/type';
import { objectReducer } from '@/shared/utils/object-reducer';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Input } from '@moeasy/storybook/ui/input';

import { ActivityStepNavigation } from '../navigation';

type ActivityAnnouncementValue = Pick<ActivityStepData_TEMP, 'announcement'>;
type ActivityAnnouncementValueProps = Partial<ActivityAnnouncementValue>;

export function ActivityAnnouncementStep({
  step,
  announcement = '',
  onPrevStep,
  onNextStep,
}: ActivityAnnouncementValueProps & {
  step: number;
  onPrevStep: () => void;
  onNextStep: (param: ActivityAnnouncementValue) => void;
}) {
  const [state, dispatch] = useReducer(objectReducer<ActivityAnnouncementValue>, null, () => ({
    announcement,
  }));
  return (
    <>
      <div className={formStyles.formGroup}>
        <label className={formStyles.label}>
          <span>활동 안내</span>
          <Input
            type="text"
            className={formStyles.input}
            placeholder="활동에 대한 상세 안내를 작성해주세요."
            name="announcement"
            maxLength={1000}
            value={state.announcement}
            onValueChange={(announcement) => dispatch({ announcement })}
          />
        </label>
      </div>
      <ActivityStepNavigation
        step={step}
        onPrevStep={onPrevStep}
        onNextStep={() => {
          onNextStep(state);
        }}
      />
    </>
  );
}

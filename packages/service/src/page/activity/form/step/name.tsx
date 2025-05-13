import { useReducer } from 'react';
import { useRouter } from 'next/navigation';

import { ActivityStepData_TEMP } from '@/entities/activity/api/type';
import { objectReducer } from '@/shared/utils/object-reducer';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Input } from '@moeasy/storybook/ui/input';

import { ActivityStepNavigation } from '../navigation';

type ActivityNameValue = Pick<ActivityStepData_TEMP, 'name'>;
type ActivityNameValueProps = Partial<ActivityNameValue>;

export function ActivityNameStep({
  step,
  name = '',
  onNextStep,
}: ActivityNameValueProps & {
  step: number;
  onNextStep: (param: ActivityNameValue) => void;
}) {
  const router = useRouter();
  const [state, dispatch] = useReducer(objectReducer<ActivityNameValue>, {
    name,
  });
  return (
    <>
      <div className={formStyles.formGroup}>
        <label className={formStyles.label}>
          <span>활동 이름</span>
          <Input
            type="text"
            className={formStyles.input}
            placeholder="활동 이름은 무엇인가요?"
            name="name"
            maxLength={30}
            value={state.name}
            onValueChange={(name) => dispatch({ name })}
          />
        </label>
      </div>
      <ActivityStepNavigation
        step={step}
        onPrevStep={() => router.back()}
        disabled={state.name.trim().length === 0}
        onNextStep={() => {
          if (state.name.trim().length === 0) {
            return;
          }
          onNextStep(state);
        }}
      />
    </>
  );
}

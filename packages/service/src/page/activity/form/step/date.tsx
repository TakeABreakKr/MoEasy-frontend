import { useReducer } from 'react';
import clsx from 'clsx';

import { ActivityStepData_TEMP } from '@/entities/activity/api/type';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { objectReducer } from '@/shared/utils/object-reducer';

import Calendar from '@moeasy/storybook/ui/calendar/calendar';
import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

import { ActivityStepNavigation } from '../navigation';

type ActivityTimeValue = Pick<ActivityStepData_TEMP, 'startDate' | 'endDate'>;
type ActivityTimeValueProps = Partial<ActivityTimeValue>;

type ActivityTimeState = { controlTime: boolean; controlEndDate: boolean };

export const activityTimeReducer = (state: ActivityTimeState, action: keyof ActivityTimeState) => {
  return {
    ...state,
    [action]: !state[action],
  };
};

export const controlInitializer = (value: Partial<ActivityTimeState> = {}): ActivityTimeState => {
  return {
    controlTime: false,
    controlEndDate: false,
    ...value,
  };
};

const activityTimeInitializer = ({ startDate, endDate }: ActivityTimeValueProps) => {
  return {
    startDate: startDate ? new Date(startDate) : new Date(),
    endDate: endDate ? new Date(endDate) : new Date(),
  };
};

export function ActivityTimeStep({
  step,
  startDate,
  endDate,
  onPrevStep,
  onNextStep,
}: ActivityTimeValueProps & {
  step: number;
  onPrevStep: () => void;
  onNextStep: (param: { startDate: string; endDate?: string }) => void;
}) {
  const [state, dispatch] = useReducer(objectReducer, { startDate, endDate }, activityTimeInitializer);
  const [timeState, dispatchTime] = useReducer(activityTimeReducer, {}, controlInitializer);

  return (
    <>
      <div className={formStyles.formGroup}>
        <div className={formStyles.label}>
          <fieldset className={clsx(formStyles.labelWrapper, sprinkles({ gap: 'medium' }))}>
            <span>날짜 / 시간</span>
            <div className={sprinkles({ display: 'flex', gap: 'small' })}>
              <div className={sprinkles({ display: 'flex', gap: 'xsmall' })}>
                <Checkbox
                  rounded={false}
                  checked={timeState.controlTime}
                  onCheckedChange={() => {
                    dispatchTime('controlTime');
                  }}
                />
                <span>시간 설정</span>
              </div>
              <div className={sprinkles({ display: 'flex', gap: 'xsmall' })}>
                <Checkbox
                  rounded={false}
                  checked={timeState.controlEndDate}
                  onCheckedChange={() => {
                    dispatchTime('controlEndDate');
                  }}
                />
                <span>일정 종료</span>
              </div>
            </div>
          </fieldset>
          <div className={sprinkles({ display: 'flex', gap: 'xsmall' })}>
            <Calendar
              name="startDate"
              hasTime={timeState.controlTime}
              date={state.startDate}
              onSelect={(startDate) => dispatch({ startDate })}
            />
            <Calendar
              name="endDate"
              hasTime={timeState.controlTime}
              disabled={!timeState.controlEndDate}
              date={state.endDate}
              onSelect={(endDate) => dispatch({ endDate })}
              min={state.startDate}
            />
          </div>
        </div>
      </div>
      <ActivityStepNavigation
        step={step}
        onPrevStep={onPrevStep}
        onNextStep={() => {
          onNextStep(
            timeState.controlEndDate
              ? {
                  startDate: state.startDate.toISOString(),
                  endDate: state.endDate.toISOString(),
                }
              : {
                  startDate: state.startDate.toISOString(),
                },
          );
        }}
      />
    </>
  );
}

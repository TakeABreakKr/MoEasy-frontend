import { useReducer, useTransition } from 'react';
import { delay } from 'msw';

// import { createActivityApi } from '@/entities/activity/api/server';
import { ActivityStepData_TEMP } from '@/entities/activity/api/type';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { alertCall } from '@/shared/utils/alert-call';
import { objectReducer } from '@/shared/utils/object-reducer';

import { SearchButton } from '@moeasy/storybook/ui/button';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

import { ActivityStepNavigation } from '../navigation';

type ActivityParticipantValue = Pick<ActivityStepData_TEMP, 'participants'>;

export function ActivityParticipantStep({
  step,
  payload,
  onPrevStep,
}: {
  step: number;
  onPrevStep: () => void;
  payload: ActivityStepData_TEMP;
}) {
  const [state, dispatch] = useReducer(objectReducer<ActivityParticipantValue>, payload, (payload) => ({
    participants: payload.participants,
  }));
  const [pending, startTransition] = useTransition();
  return (
    <>
      <div className={formStyles.formGroup}>
        <label className={formStyles.label}>
          <span>참여 모임원</span>
          <SearchButton
            className={sprinkles({ width: '100%' })}
            placeholder="활동에 대한 상세 안내를 작성해주세요."
            name="participants"
            onClick={() => {
              alertCall({ message: '모임 생성에서 사용된 모임원 선택 팝업을 사용합니다.' });
            }}
          />
        </label>
      </div>
      <ActivityStepNavigation
        step={step}
        disabled={pending}
        onPrevStep={onPrevStep}
        onNextStep={() => {
          startTransition(async () => {
            await delay(2000);
            alertCall({ message: '활동이 성공적으로 생성되었습니다!' });
            // const { data, error } = await createActivityApi({
            //   ...payload,
            //   participants: state.participants,
            //   // TODO: swagger 수정 이후 타입 단언 제거
            //   address: payload.address!,
            // });
            // if (data) {
            //   alertCall({ message: '활동이 성공적으로 생성되었습니다!' });
            // }
            // if (error) {
            //   alertCall({ message: '활동 생성 중 오류가 발생했습니다.' });
            //   return;
            // }
          });
        }}
      />
    </>
  );
}

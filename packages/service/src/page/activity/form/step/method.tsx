import { useReducer } from 'react';
import clsx from 'clsx';

import { ActivityStepData_TEMP } from '@/entities/activity/api/type';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { alertCall } from '@/shared/utils/alert-call';
import { objectReducer } from '@/shared/utils/object-reducer';

import { SearchButton } from '@moeasy/storybook/ui/button';
import { CreateButtonCommon } from '@moeasy/storybook/ui/create/step-button';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Input } from '@moeasy/storybook/ui/input';
import { Label } from '@moeasy/storybook/ui/label/label';
import { Radio, RadioGroup } from '@moeasy/storybook/ui/radio';

import { ActivityStepNavigation } from '../navigation';

import * as styles from './step.css';

type ActivityMethodStepValue = Pick<ActivityStepData_TEMP, 'onlineYn' | 'address' | 'detailAddress' | 'onlineLink'>;
type ActivityMethodStepValueProps = Partial<ActivityMethodStepValue>;
type ActivityMethodStepState = Omit<ActivityMethodStepValue, 'address'> & {
  address?: ActivityStepData_TEMP['address'];
};

export function ActivityMethodStep({
  step,
  address,
  onlineYn = false,
  detailAddress = '',
  onlineLink = '',
  onPrevStep,
  onNextStep,
}: ActivityMethodStepValueProps & {
  step: number;
  onPrevStep: () => void;
  onNextStep: (param: Partial<ActivityMethodStepValue>) => void;
}) {
  const [state, dispatch] = useReducer(objectReducer<ActivityMethodStepState>, null, () => ({
    onlineYn,
    address,
    detailAddress,
    onlineLink,
  }));

  return (
    <>
      <div className={formStyles.formGroup}>
        <fieldset className={clsx(formStyles.labelWrapper, styles.methodStepGap)}>
          <span className={formStyles.label}>진행방식</span>
          <RadioGroup
            className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}
            name="onlineYn"
            value={state.onlineYn ? 'true' : 'false'}
            onValueChange={(value) => dispatch({ onlineYn: value === 'true' })}
          >
            <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
              <Radio value="true" id="online" variant="secondary" />
              <Label htmlFor="online">온라인</Label>
            </div>
            <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
              <Radio value="false" id="offline" />
              <Label htmlFor="offline">오프라인</Label>
            </div>
          </RadioGroup>
          {!state.onlineYn && (
            <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'small' })}>
              <span className={formStyles.label}>활동 장소</span>
              <SearchButton
                placeholder="주소 검색"
                onClick={() => {
                  if (window.daum)
                    new window.daum.Postcode({
                      oncomplete: (address) => {
                        dispatch({ address });
                      },
                    }).open({
                      q: state.address?.query || '',
                    });
                }}
              >
                {state.address?.address}
              </SearchButton>
              <Input
                name="detailAddress"
                value={state.detailAddress}
                placeholder="상세주소를 입력해주세요."
                className={sprinkles({ width: '100%' })}
                onChange={(e) => dispatch({ detailAddress: e.target.value })}
              />
            </div>
          )}
          {state.onlineYn && (
            <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'small' })}>
              <span className={formStyles.label}>참여 URL</span>
              <Input
                name="onlineLink"
                value={state.onlineLink}
                placeholder="활동에 참여하기 위한 URL을 입력해주세요."
                className={sprinkles({ width: '100%' })}
                onChange={(e) => dispatch({ onlineLink: e.target.value })}
              />
            </div>
          )}
        </fieldset>
      </div>
      <CreateButtonCommon
        onPrevStep={onPrevStep}
        onNextStep={() => alertCall({ message: '일정 생성에 성공했습니다.', href: '/activity' })}
      />
      <ActivityStepNavigation
        step={step}
        onPrevStep={onPrevStep}
        onNextStep={() => {
          if ((state.onlineYn && !state.onlineLink) || (!state.onlineYn && !state.address)) {
            return;
          }
          onNextStep(state);
        }}
      />
    </>
  );
}

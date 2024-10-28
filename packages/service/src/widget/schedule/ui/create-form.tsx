'use client';

import { useReducer } from 'react';
import { useFormState } from 'react-dom';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { CommonFormAction } from '@/entities';
import * as styles from '@/shared/style/create-form/index.css';
import { onSearchValueChange } from '@/shared/utils/search-param';

import { CommonAlert } from '@moeasy/storybook/ui/alert';
import { SearchButton } from '@moeasy/storybook/ui/button';
import Calendar from '@moeasy/storybook/ui/calendar/calendar';
import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import { CreateStepButton, FormCreateUnderLine } from '@moeasy/storybook/ui/create/step-button';
import { CreateStepList } from '@moeasy/storybook/ui/create/step-list';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Input } from '@moeasy/storybook/ui/input';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Textarea } from '@moeasy/storybook/ui/textarea';
import { Toggle } from '@moeasy/storybook/ui/toggle';

import {
  scheduleCreateInitializer,
  scheduleCreateReducer,
  scheduleTimeInitializer,
  scheduleTimeReducer,
} from './reducer';

type ScheduleCreateFormProps = {
  action: CommonFormAction;
};

const scheduleCeateStepArray = ['일정 이름 / 소개', '날짜 / 시간', '리마인드 알림', '공지사항', '인원제한 / 모임원'];
export const ReminderEnumList = [
  ['ON_TIME'],
  ['TEN_M', 'THIRTY_M'],
  ['ONE_H', 'TWO_H', 'THREE_H', 'FOUR_H', 'SIX_H', 'TWELVE_H'],
  ['ONE_D', 'TWO_D', 'THREE_D', 'SEVEN_D'],
] as const;

export function ScheduleCreateForm({ action }: ScheduleCreateFormProps) {
  const searchParams = useSearchParams();
  const [message, formAction] = useFormState(action, { type: 'waiting' });
  const currentStep = Number(searchParams.get('step') || '1');
  return (
    <div className={styles.container}>
      <form className={formStyles.formStyle} action={formAction}>
        <div className={formStyles.body}>
          <CreateStepList steps={scheduleCeateStepArray} currentStep={currentStep} />
          <ScheduleCreateFormInput currentStep={currentStep} searchParams={searchParams} />
        </div>
        <CreateStepButton
          steps={scheduleCeateStepArray}
          step={currentStep}
          searchParams={searchParams}
          finishMessage="모임 생성"
          messageOnPending="모임 생성 중.."
          pathname="/schedule/create"
        />
      </form>
      <FormCreateUnderLine />
      {message.type === 'success' && <CommonAlert message={message.message} />}
    </div>
  );
}

function ScheduleCreateFormInput({
  currentStep,
  searchParams,
}: {
  currentStep: number;
  searchParams: URLSearchParams;
}) {
  const [state, dispatch] = useReducer(scheduleCreateReducer, {}, scheduleCreateInitializer);
  const [timeState, dispatchTime] = useReducer(scheduleTimeReducer, {}, scheduleTimeInitializer);
  const activeCurrentStepClassName = (step: number) =>
    clsx(formStyles.formGroup, currentStep !== step && formStyles.formGroupInvisible);

  return (
    <div className={formStyles.formWrapper}>
      <div className={activeCurrentStepClassName(1)}>
        <label className={formStyles.label}>
          <span>일정 이름</span>
          <Input
            type="text"
            className={formStyles.input}
            placeholder="일정 이름을 입력해주세요"
            name="name"
            maxLength={30}
            defaultValue={searchParams.get('name') || ''}
            onValueChange={onSearchValueChange('name', searchParams)}
          />
        </label>
        <label className={formStyles.label}>
          <span>일정 소개</span>
          <Textarea
            className={formStyles.input}
            placeholder="일정을 간단하게 소개해주세요"
            name="explanation"
            minLength={10}
            maxLength={100}
            defaultValue={searchParams.get('explanation') || ''}
            onValueChange={onSearchValueChange('explanation', searchParams)}
          />
        </label>
      </div>
      <div className={activeCurrentStepClassName(2)}>
        <div className={formStyles.label}>
          <fieldset style={{ border: 'none', display: 'flex', gap: 12 }}>
            <span>날짜 / 시간</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <Checkbox
                rounded={false}
                checked={timeState.controlTime}
                onCheckedChange={() => {
                  dispatchTime('controlTime');
                }}
              />
              시간 설정
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <Checkbox
                rounded={false}
                checked={timeState.controlEndDate}
                onCheckedChange={() => {
                  dispatchTime('controlEndDate');
                }}
              />
              일정 종료
            </div>
          </fieldset>
          <div style={{ display: 'flex', gap: 4 }}>
            <Calendar name="startDate" hasTime={timeState.controlTime} date={state.startDate} />
            <Calendar
              name="endDate"
              hasTime={timeState.controlTime}
              disabled={!timeState.controlEndDate}
              min={state.startDate}
            />
          </div>
        </div>
      </div>
      <div className={activeCurrentStepClassName(3)}>
        <label>
          <span className={formStyles.label}>리마인드 알림</span>
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {ReminderEnumList.map((line, index) => (
            <div key={index} style={{ display: 'flex', gap: 4 }}>
              {line.map((time) => (
                <Tag
                  key={time}
                  value={time}
                  type="button"
                  variant={state.reminder.includes(time) ? 'dark' : 'light'}
                  data-testid="reminder-item"
                  onClick={() => dispatch({ key: 'reminder', payload: time })}
                >
                  <input readOnly hidden value={time} name="reminder" />
                  {time}
                </Tag>
              ))}
            </div>
          ))}
          <div className={styles.tagListGradient} />
        </div>
      </div>
      <div className={activeCurrentStepClassName(4)}>
        <fieldset className={formStyles.labelWrapper}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 12 }}>
            <span className={formStyles.label}>공지사항</span>
            <Toggle
              inverse
              checked={state.onlineYn}
              onToggleChange={(checked) => dispatch({ key: 'onlineYn', payload: !!checked })}
            />
            <span style={{ color: state.onlineYn ? 'purple' : 'inherit' }}>온라인 모임</span>/
            <span style={{ color: state.onlineYn ? 'inherit' : 'purple' }}>오프라인 모임</span>
          </div>
          {!state.onlineYn && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className={formStyles.label}>모임 장소</span>
              <SearchButton
                placeholder="주소 검색"
                onClick={() => {
                  if (window.daum)
                    new window.daum.Postcode({
                      oncomplete: (data) => {
                        dispatch({ key: 'detailAddress', payload: data.address });
                      },
                    }).open();
                }}
              >
                {state.detailAddress}
              </SearchButton>
              <Input
                value={state.detailAddress}
                placeholder="상세주소를 입력해주세요."
                style={{ width: '100%' }}
                onChange={(e) => dispatch({ key: 'detailAddress', payload: e.target.value })}
              />
            </div>
          )}
          <span className={formStyles.label}>텍스트 입력</span>
          <Textarea
            className={formStyles.input}
            placeholder="공지사항, 참고링크, 준비물, 회비, 벌칙 등 공유할 사항을 입력해주세요."
            name="announcement"
            defaultValue={searchParams.get('announcement') || ''}
            onValueChange={onSearchValueChange('announcement', searchParams)}
          />
        </fieldset>
      </div>
      <div className={activeCurrentStepClassName(5)}>
        <fieldset className={formStyles.labelWrapper}>
          <span className={formStyles.label}>참여 모임원 선택</span>
          <SearchButton placeholder="모임원을 선택해주세요" />
        </fieldset>
      </div>
    </div>
  );
}

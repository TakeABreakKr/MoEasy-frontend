'use client';

import { Fragment, useReducer } from 'react';
import { useFormState } from 'react-dom';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { CommonFormAction } from '@/entities';
import * as styles from '@/shared/style/create-form/index.css';
import { onSearchValueChange } from '@/shared/utils/search-param';

import { CommonAlert } from '@moeasy/storybook/ui/alert';
import { SearchButton } from '@moeasy/storybook/ui/button';
import Calendar from '@moeasy/storybook/ui/calendar/calendar';
import { CreateStepButton, FormCreateUnderLine } from '@moeasy/storybook/ui/create/step-button';
import { CreateStepList } from '@moeasy/storybook/ui/create/step-list';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Input } from '@moeasy/storybook/ui/input';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Textarea } from '@moeasy/storybook/ui/textarea';

import { scheduleCreateInitializer, scheduleCreateReducer } from './reducer';

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

const ScheduleCreateFormInput = ({
  currentStep,
  searchParams,
}: {
  currentStep: number;
  searchParams: URLSearchParams;
}) => {
  const [state, dispatch] = useReducer(scheduleCreateReducer, {}, scheduleCreateInitializer);

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
          <span>날짜 / 시간</span>
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className={activeCurrentStepClassName(3)}>
        <label>
          <span className={formStyles.label}>리마인드 알림</span>
        </label>
        <div className={styles.tagWrapper}>
          <div className={styles.tagList}>
            {ReminderEnumList.map((line, index) => (
              <Fragment key={index}>
                {line.map((time) => (
                  <Tag
                    isDelete
                    key={time}
                    value={time}
                    data-testid="keyword-item"
                    onClick={() => dispatch({ key: 'reminder', payload: time })}
                  >
                    <input readOnly hidden value={time} name="reminder" />
                    {time}
                  </Tag>
                ))}
              </Fragment>
            ))}
            <div className={styles.tagListGradient} />
          </div>
        </div>
      </div>
      <div className={activeCurrentStepClassName(4)}>
        <fieldset className={formStyles.labelWrapper}>
          <span className={formStyles.label}>공지사항</span>
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
          <SearchButton>모임원을 선택해주세요</SearchButton>
        </fieldset>
      </div>
    </div>
  );
};

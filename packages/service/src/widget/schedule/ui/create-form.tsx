'use client';

import { useEffect, useReducer, useState } from 'react';
import Link from 'next/link';
import { createFunnelSteps, useFunnel } from '@use-funnel/browser';

import { CreateScheduleType } from '@/entities/schedule/api';
import { useScopedI18n } from '@/locales/clients';
import * as styles from '@/shared/style/create-form/index.css';
import { alertCall } from '@/shared/utils/alert-call';
import { objectReducer } from '@/shared/utils/object-reducer';

import { SearchButton } from '@moeasy/storybook/ui/button';
import Calendar from '@moeasy/storybook/ui/calendar/calendar';
import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import { FormCreateUnderLine } from '@moeasy/storybook/ui/create/step-button';
import { CreateStepList } from '@moeasy/storybook/ui/create/step-list';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Input } from '@moeasy/storybook/ui/input';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Textarea } from '@moeasy/storybook/ui/textarea';
import { Toggle } from '@moeasy/storybook/ui/toggle';

import { scheduleTimeInitializer, scheduleTimeReducer } from './reducer';

const scheduleCreateStepArray = [
  { key: 'name', text: '일정 이름 / 소개' },
  { key: 'date', text: '날짜 / 시간' },
  { key: 'reminder', text: '리마인드 알림' },
  { key: 'announcement', text: '공지사항' },
  // { key: 'member', text: '참여 모임원 선택' },
] as const;

export const ReminderEnumList = [
  ['ON_TIME'],
  ['TEN_M', 'THIRTY_M'],
  ['ONE_H', 'TWO_H', 'THREE_H', 'FOUR_H', 'SIX_H', 'TWELVE_H'],
  ['ONE_D', 'TWO_D', 'THREE_D', 'SEVEN_D'],
] as const;

const steps = createFunnelSteps<Partial<CreateScheduleType>>()
  .extends('name')
  .extends('date', { requiredKeys: 'name' })
  .extends('reminder')
  .extends('announcement')
  .build();

export function ScheduleCreateForm() {
  const funnel = useFunnel({
    id: 'create-schedule',
    steps,
    initial: {
      step: 'name',
      context: {},
    },
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className={styles.container}>
        <form className={formStyles.formStyle}>
          <div className={formStyles.body}>이전 입력 값 불러오는 중...</div>
        </form>
      </div>
    );

  return (
    <div className={styles.container}>
      <form className={formStyles.formStyle}>
        <div className={formStyles.body}>
          <CreateStepList title="일정 생성" steps={scheduleCreateStepArray} currentStep={funnel.step} />
          <div className={formStyles.formWrapper}>
            <funnel.Render
              name={({ history, context }) => (
                <스케쥴이름및소개
                  name={context.name}
                  explanation={context.explanation}
                  onNextStep={(param) => history.push('date', param)}
                />
              )}
              date={({ history, context }) => (
                <스케쥴시간입력
                  startDate={context.startDate}
                  endDate={context.endDate}
                  onPrevStep={() => history.back()}
                  onNextStep={(param) => {
                    history.push('reminder', {
                      ...context,
                      startDate: param.startDate.toISOString(),
                      endDate: param.endDate?.toISOString(),
                    });
                  }}
                />
              )}
              reminder={({ history, context }) => (
                <스케쥴리마인더입력
                  reminder={context.reminder}
                  onPrevStep={() => history.back()}
                  onNextStep={({ reminder }) => history.push('announcement', { ...context, reminder })}
                />
              )}
              announcement={({ history, context }) => (
                <스케쥴공지입력
                  onlineYn={context.onlineYn}
                  announcement={context.announcement}
                  address={context.address}
                  detailAddress={context.detailAddress}
                  onPrevStep={() => history.back()}
                />
              )}
              // limit={({ history, context }) => (
              //   <인원제한입력
              //     payload={{
              //       name: '',
              //       explanation: '',
              //       keywords: [],
              //       members: [],
              //       thumbnail: file!,
              //       limit: 10,
              //     }}
              //     onPrevStep={() => history.back()}
              //   />
              // )}
            />
          </div>
        </div>
      </form>
      <FormCreateUnderLine />
    </div>
  );
}

type 스케쥴이름및소개값 = Pick<CreateScheduleType, 'name' | 'explanation'>;
type 스케쥴이름및소개값Props = Partial<스케쥴이름및소개값>;

function 스케쥴이름및소개({
  name = '',
  explanation = '',
  onNextStep,
}: 스케쥴이름및소개값Props & {
  onNextStep: (param: 스케쥴이름및소개값) => void;
}) {
  const [state, dispatch] = useReducer(objectReducer<스케쥴이름및소개값>, {
    name,
    explanation,
  });
  return (
    <>
      <div className={formStyles.formGroup}>
        <label className={formStyles.label}>
          <span>일정 이름</span>
          <Input
            type="text"
            className={formStyles.input}
            placeholder="모임 이름을 입력해주세요"
            name="name"
            maxLength={30}
            value={state.name}
            onValueChange={(name) => dispatch({ name })}
          />
        </label>
        <label className={formStyles.label}>
          <span>일정 소개</span>
          <Textarea
            className={formStyles.input}
            placeholder="모임 소개를 입력해주세요"
            name="explanation"
            minLength={10}
            maxLength={100}
            value={state.explanation}
            onValueChange={(explanation) => dispatch({ explanation })}
          />
        </label>
      </div>
      <div className={formStyles.navigation}>
        <Link className={formStyles.navButton} href="/mypage">
          이전
        </Link>
        <button
          type="button"
          className={formStyles.navButton}
          onClick={() => {
            onNextStep(state);
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

type 스케쥴시간입력값 = Pick<CreateScheduleType, 'startDate' | 'endDate'>;
type 스케쥴시간입력값Props = Partial<스케쥴시간입력값>;

function 스케쥴시간입력({
  startDate,
  endDate,
  onPrevStep,
  onNextStep,
}: 스케쥴시간입력값Props & {
  onPrevStep: () => void;
  onNextStep: (param: { startDate: Date; endDate?: Date }) => void;
}) {
  const [state, dispatch] = useReducer(objectReducer<{ startDate: Date; endDate: Date }>, {
    startDate: startDate ? new Date(startDate) : new Date(),
    endDate: endDate ? new Date(endDate) : new Date(),
  });
  const [timeState, dispatchTime] = useReducer(scheduleTimeReducer, {}, scheduleTimeInitializer);

  return (
    <>
      <div className={formStyles.formGroup}>
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
      <div className={formStyles.navigation}>
        <button type="button" className={formStyles.navButton} onClick={onPrevStep}>
          이전
        </button>
        <button
          type="button"
          className={formStyles.navButton}
          onClick={() => {
            onNextStep(state);
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

type 스케쥴리마인더입력값 = Pick<CreateScheduleType, 'reminder'>;
type 스케쥴리마인더입력값Props = Partial<스케쥴리마인더입력값>;

function 스케쥴리마인더입력({
  reminder: reminderProp = [],
  onPrevStep,
  onNextStep,
}: 스케쥴리마인더입력값Props & {
  onPrevStep: () => void;
  onNextStep: (param: { reminder: string[] }) => void;
}) {
  const t = useScopedI18n('schedule-create.remainder');
  const [reminder, dispatch] = useState(reminderProp);
  const toggleReminderItem = (key: (typeof ReminderEnumList)[number][number]) => {
    dispatch((prev) => (prev.includes(key) ? prev.filter((remind) => remind !== key) : [...prev, key]));
  };

  return (
    <>
      <div className={formStyles.formGroup}>
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
                  variant={reminder.includes(time) ? 'dark' : 'light'}
                  data-testid="reminder-item"
                  onClick={() => toggleReminderItem(time)}
                >
                  <input readOnly hidden value={time} name="reminder" />
                  {t(time)}
                </Tag>
              ))}
            </div>
          ))}
          <div className={styles.tagListGradient} />
        </div>
      </div>
      <div className={formStyles.navigation}>
        <button type="button" className={formStyles.navButton} onClick={onPrevStep}>
          이전
        </button>
        <button
          type="button"
          className={formStyles.navButton}
          onClick={() => {
            onNextStep({ reminder });
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

type 스케쥴공지입력값 = Pick<CreateScheduleType, 'announcement' | 'onlineYn' | 'address' | 'detailAddress'>;
type 스케쥴공지입력값Props = Partial<스케쥴공지입력값>;
type 스케쥴공지입력State = Omit<스케쥴공지입력값, 'address'> & { address?: CreateScheduleType['address'] };

function 스케쥴공지입력({
  address,
  announcement = '',
  onlineYn = false,
  detailAddress = '',
  onPrevStep,
  // onNextStep,
}: 스케쥴공지입력값Props & {
  onPrevStep: () => void;
  // onNextStep: (param: 스케쥴공지입력State) => void;
}) {
  const [state, dispatch] = useReducer(objectReducer<스케쥴공지입력State>, {
    announcement,
    onlineYn,
    address,
    detailAddress,
  });

  return (
    <>
      <div className={formStyles.formGroup}>
        <fieldset className={formStyles.labelWrapper}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 12 }}>
            <span className={formStyles.label}>공지사항</span>
            <Toggle
              inverse
              name="onlineYn"
              value="Y"
              checked={state.onlineYn}
              onToggleChange={(onlineYn) => dispatch({ onlineYn })}
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
                      oncomplete: (address) => {
                        dispatch({ address });
                      },
                    }).open();
                }}
              >
                {state.address?.address}
              </SearchButton>
              <Input
                name="detailAddress"
                value={state.detailAddress}
                placeholder="상세주소를 입력해주세요."
                style={{ width: '100%' }}
                onChange={(e) => dispatch({ detailAddress: e.target.value })}
              />
            </div>
          )}
          <span className={formStyles.label}>텍스트 입력</span>
          <Textarea
            className={formStyles.input}
            placeholder="공지사항, 참고링크, 준비물, 회비, 벌칙 등 공유할 사항을 입력해주세요."
            name="announcement"
            value={state.announcement}
            onValueChange={(announcement) => dispatch({ announcement })}
          />
        </fieldset>
      </div>
      <div className={formStyles.navigation}>
        <button type="button" className={formStyles.navButton} onClick={onPrevStep}>
          이전
        </button>
        <button
          type="button"
          className={formStyles.navButton}
          onClick={() => alertCall({ message: '일정 생성에 성공했습니다.', href: '/schedule' })}
        >
          다음
        </button>
      </div>
    </>
  );
}

// function ParticipateListPopup({
//   selected,
//   dispatch,
//   limit,
// }: {
//   selected: ListItemType[];
//   dispatch: Dispatch<SetStateAction<ListItemType[]>>;
//   limit?: number;
// }) {
//   return (
//     <Alert>
//       <AlertTrigger asChild>
//         <SearchButton placeholder="모임원을 선택해주세요" />
//       </AlertTrigger>
//       <AlertContent size="medium">
//         <AlertTitle>모임원 추가</AlertTitle>
//         <List
//           list={[
//             { id: '2', name: 'aa' },
//             { id: '3', name: 'javme' },
//           ]}
//           selected={selected}
//           limit={limit}
//         >
//           <ListContent></ListContent>
//           <ListFooter asChild close={dispatch}>
//             <AlertCloseButton>확인</AlertCloseButton>
//           </ListFooter>
//         </List>
//       </AlertContent>
//     </Alert>
//   );
// }

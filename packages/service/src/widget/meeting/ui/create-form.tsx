'use client';

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { overlay } from 'overlay-kit';

import { gotoTeamList, teamModifyAction } from '@/app/[locale]/meeting/action';
import { CreateMeetingType } from '@/entities/meeting/api';
import { useUnmountOverlay } from '@/shared/utils/useUnmountOverlay';
import { createQueryString } from '@/shared/utils/utils';

import { SampleAlert } from '@moeasy/storybook/ui/alert';
import { Button, SearchButton } from '@moeasy/storybook/ui/button';
import { ImageUpload } from '@moeasy/storybook/ui/file-upload';
import { Input } from '@moeasy/storybook/ui/input';
import { List } from '@moeasy/storybook/ui/list';
import { Progress } from '@moeasy/storybook/ui/progress';

import * as styles from './create-form.css';

type CreateFormProps = {
  action: typeof teamModifyAction;
  data?: Partial<Omit<CreateMeetingType, 'thumbnail'> & { thumbnail: string }>;
};

const CreateForm = ({ action, data = {} }: CreateFormProps) => {
  const searchParams = useSearchParams();
  const [message, formAction] = useFormState(action, { type: 'waiting' });
  const currentStep = Number(searchParams.get('step') || '1');
  return (
    <form className={styles.container} action={formAction}>
      <div className={styles.header}>
        <h1 className={styles.headerH1}>모임 생성</h1>
      </div>
      <div className={styles.body}>
        <CreateFormAside step={currentStep} />
        <CreateFormInput step={currentStep} searchParams={searchParams} />
      </div>
      {message.type === 'success' && <SampleAlert close={() => gotoTeamList()} message={message.message || ''} />}
    </form>
  );
};

CreateForm.displayName = 'CreateForm';

const createStepArray = ['모임명 / 소개', '썸네일 설정', '카테고리 / 키워드', '인원제한 / 모임원'];

const CreateFormAside = ({ step }: { step: number }) => {
  return (
    <aside className={styles.aside}>
      <ul className={styles.asideStep}>
        {createStepArray.map((txt, index) => (
          <li key={index} className={clsx(styles.stepLi, step === index + 1 && styles.stepLiSelected)}>
            <span className={clsx(styles.stepNumber, step === index + 1 && styles.numberSelected)}>{index + 1}</span>
            <span>{txt}</span>
          </li>
        ))}
      </ul>
      <Progress value={step} max={createStepArray.length} className={styles.progress} />
    </aside>
  );
};

const CreateFormInput = ({ step, searchParams }: { step: number; searchParams: URLSearchParams }) => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [members, setMembers] = useState<string[]>([]);
  const limitDisabled = searchParams.get('limit') === 'disabled';
  const overlayRef = useUnmountOverlay();

  return (
    <div className={styles.formWrapper}>
      <div className={clsx(styles.formGroup, step !== 1 && styles.formGroupInvisible)}>
        <label>
          <span className={styles.label}>모임 이름</span>
          <Input
            type="text"
            className={styles.input}
            placeholder="모임 이름을 입력해주세요"
            name="name"
            maxLength={30}
            defaultValue={searchParams.get('name') || ''}
            onValueChange={onValueChange('name', searchParams)}
          />
        </label>
        <label>
          <span className={styles.label}>모임 소개</span>
          <Input
            type="text"
            className={styles.input}
            placeholder="모임 소개를 입력해주세요"
            name="explanation"
            maxLength={100}
            defaultValue={searchParams.get('explanation') || ''}
            onValueChange={onValueChange('explanation', searchParams)}
          />
        </label>
      </div>
      <div className={clsx(styles.formGroup, step !== 2 && styles.formGroupInvisible)}>
        <span className={styles.label}>썸네일</span>
        <ImageUpload selectedFile={thumbnail} onImageUpload={setThumbnail} />
      </div>
      <div className={clsx(styles.formGroup, step !== 3 && styles.formGroupInvisible)}>
        <label>
          <span className={styles.label}>
            키워드 설정
            <span className={styles.detail}>키워드 5개까지 설정가능</span>
          </span>
          <Input
            type="text"
            className={styles.input}
            placeholder="검색창에 #키워드 를 검색하면 나의 모임이 보여요-!"
            defaultValue={searchParams.get('keyword') || ''}
            onValueChange={onValueChange('keyword', searchParams)}
            onKeyUp={(e) => {
              e.preventDefault();
              if (e.key === 'Enter') {
                const keyword = searchParams.get('keyword');
                if (keyword) {
                  setMembers((prevMembers) => [...prevMembers, keyword]);
                  onValueChange('keyword', searchParams)('');
                  e.currentTarget.value = '';
                }
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
          />
          {members.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </label>
      </div>
      <div className={clsx(styles.formGroup, step !== 4 && styles.formGroupInvisible)}>
        <fieldset className={styles.labelWrapper}>
          <span className={styles.label}>모임 인원</span>
          <div style={{ display: 'flex', gap: 10 }}>
            <Input
              type="number"
              className={styles.input}
              style={{ flex: '1' }}
              disabled={searchParams.get('limit') === 'disabled'}
              placeholder="모임 인원을 입력해주세요"
              name="limit"
              min={1}
              defaultValue={parseInt(limitDisabled ? '10' : searchParams.get('limit') || '10')}
              onValueChange={onValueChange('limit', searchParams)}
            />
            <Button asChild type="button" variant="primary" size="thick" rounded="medium">
              <Link
                href={{
                  pathname: '/meeting/create',
                  query: { ...Object.fromEntries(searchParams), limit: limitDisabled ? '10' : 'disabled' },
                }}
              >
                제한 없음
              </Link>
            </Button>
          </div>
        </fieldset>
        <label className={styles.labelWrapper}>
          <span className={styles.label}>누구와 함께</span>
          <SearchButton
            type="button"
            onClick={() => {
              overlay.open(({ unmount, overlayId }) => {
                overlayRef.current = overlayId;
                return (
                  <List
                    users={[]}
                    close={(users) => {
                      console.log(users);
                      unmount();
                    }}
                  />
                );
              });
            }}
          >
            유저 닉네임을 검색해보세요
          </SearchButton>
        </label>
      </div>
      <CreateFormButton step={step} searchParams={searchParams} />
    </div>
  );
};

const CreateFormButton = ({ step, searchParams }: { step: number; searchParams: URLSearchParams }) => {
  const searchParamsObject = Object.fromEntries(searchParams);
  return (
    <div className={styles.navigation}>
      {step === 1 && (
        <Link className={styles.navButton} href="/mypage">
          이전
        </Link>
      )}
      {step !== 1 && (
        <Link
          className={styles.navButton}
          href={{
            pathname: '/meeting/create',
            query: { ...searchParamsObject, step: Number(searchParamsObject.step || '1') - 1 },
          }}
        >
          이전
        </Link>
      )}
      {step !== createStepArray.length && (
        <Link
          className={styles.navButton}
          href={{
            pathname: '/meeting/create',
            query: { ...searchParamsObject, step: Number(searchParamsObject.step || '1') + 1 },
          }}
        >
          다음
        </Link>
      )}
      {step === createStepArray.length && <FormCreateSubmitButton />}
    </div>
  );
};

/** 값 변경시 searchParams을 변경 */
const onValueChange = (key: string, searchParams: URLSearchParams) => (value: string | number) => {
  window.history.replaceState(
    null,
    '',
    '?' + createQueryString(searchParams, key, typeof value === 'number' ? String(value) : value),
  );
};

function FormCreateSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.navButton} disabled={pending}>
      {pending ? '모임 생성 중...' : '모임 생성'}
    </button>
  );
}

export default CreateForm;

'use client';

import { KeyboardEventHandler, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import clsx from 'clsx';
import { overlay } from 'overlay-kit';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { createQueryString } from '@/shared/utils/utils';

import { SampleAlert } from '@moeasy/storybook/alert';
import { List } from '@moeasy/storybook/list';
import { UserProps } from '@moeasy/storybook/list/list';

import { CreateTeamFormType } from '../_feature/data';
import { gotoTeamList, teamModifyAction } from '../action';

import styles from './create-form.module.css';

const tempUsers: UserProps[] = [
  { id: 1, name: '<NAME>', avatar: 'https://via.placeholder.com/20' },
  { id: 2, name: '<NAME>', avatar: 'https://via.placeholder.com/20' },
  { id: 3, name: '<NAME>', avatar: 'https://via.placeholder.com/20' },
  { id: 4, name: '<NAME>', avatar: 'https://via.placeholder.com/20' },
];

type CreateFormProps = {
  action: typeof teamModifyAction;
  data?: Partial<Omit<CreateTeamFormType, 'thumbnail'> & { thumbnail: string }>;
};
const CreateForm = ({ action, data = {} }: CreateFormProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const [message, formAction] = useFormState(action.bind(null, selectedIds), { type: 'waiting' });
  return (
    <form className={styles['container']} action={formAction}>
      <div className={styles['header']}>
        <h1>그룹 생성</h1>
        <h2>그룹 설정</h2>
      </div>
      <div className={styles['form-group']}>
        <label>모임 이름</label>
        <div className={styles['input-wrapper']}>
          <input
            type="text"
            placeholder="모임 이름을 입력해주세요"
            name="name"
            maxLength={18}
            defaultValue={searchParams.get('name') || ''}
            onKeyUp={onValueChange('name', searchParams)}
          />
          <span className={styles['char-count']}>{searchParams.get('name')?.length || 0}/18</span>
        </div>
      </div>
      <div className={styles['form-group']}>
        <label>모임 소개</label>
        <div className={styles['input-wrapper']}>
          <textarea
            placeholder="모임 소개를 입력해주세요"
            rows={3}
            name="explanation"
            maxLength={100}
            defaultValue={searchParams.get('explanation') || ''}
            onKeyUp={onValueChange('explanation', searchParams)}
          />
          <span className={styles['char-count']}>{searchParams.get('explanation')?.length || 0}/100</span>
        </div>
      </div>
      <div className={styles['form-group']}>
        <label>썸네일</label>
        <div className={clsx(styles['input-wrapper'], styles['horizontal'])}>
          <input type="file" placeholder="업로드 하지 않을 경우 기본이미지로 대체" name="thumbnail" />
          <button type="button">찾아보기</button>
        </div>
      </div>
      <div className={styles['form-group']}>
        <label>모임 인원</label>
        <div className={clsx(styles['input-wrapper'], styles['horizontal'])}>
          <input
            type="number"
            placeholder="10명"
            name="limit"
            min={1}
            defaultValue={searchParams.get('limit') || ''}
            onKeyUp={onValueChange('limit', searchParams)}
          />
          <button type="button">제한 없음</button>
        </div>
      </div>
      <div className={styles['form-group']}>
        <label>누구와 함께</label>
        <div className={clsx(styles['input-wrapper'], styles['horizontal'])}>
          <input type="text" placeholder="#친구 이름을 입력해주세요" />
          <button
            type="button"
            onClick={async () => {
              const selectedUsers = await new Promise<UserProps[]>((res) => {
                return overlay.open(({ isOpen, unmount }) => {
                  const getUserOnClose = (users: UserProps[]) => {
                    res(users);
                    unmount();
                  };
                  return <List isOpen={isOpen} close={getUserOnClose} users={tempUsers} />;
                });
              });
              setSelectedIds(selectedUsers.map((item) => String(item.id)));
            }}
          >
            찾아보기
          </button>
        </div>
        <div className={styles['member-tags']}>
          <div className={styles['member-tag']}>
            <Image width={20} height={20} src="https://via.placeholder.com/20" alt="thumbnail" />
            <span>최성용</span>
          </div>
          <div className={styles['member-tag']}>
            <Image width={20} height={20} src="https://via.placeholder.com/20" alt="thumbnail" />
            <span>김민중</span>
          </div>
          <div className={styles['member-tag']}>
            <Image width={20} height={20} src="https://via.placeholder.com/20" alt="thumbnail" />
            <span>신승민</span>
          </div>
          <div className={styles['member-tag']}>
            <Image width={20} height={20} src="https://via.placeholder.com/20" alt="thumbnail" />
            <span>윤찬결</span>
          </div>
          <div className={styles['member-tag']}>
            <Image width={20} height={20} src="https://via.placeholder.com/20" alt="thumbnail" />
            <span>모이지</span>
          </div>
        </div>
      </div>
      <div className={styles['navigation']}>
        <Link className={styles['nav-button']} href="/mypage">
          {'<'}
        </Link>
        <button type="submit" className={clsx(styles['nav-button'], styles.next)}>
          {'>'}
        </button>
      </div>
      {message.type === 'success' && (
        <SampleAlert close={() => gotoTeamList()} message={message.message || ''}></SampleAlert>
      )}
    </form>
  );
};

CreateForm.displayName = 'CreateForm';

/** 값 변경시 searchParams을 변경 */
const onValueChange: (
  key: string,
  searchParams: URLSearchParams,
) => KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (key, searchParams) => (e) => {
  window.history.replaceState(null, '', '?' + createQueryString(searchParams, key, e.currentTarget.value));
};

function FormCreateSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? '팀 생성 중...' : '팀 생성'}
    </button>
  );
}

export default CreateForm;

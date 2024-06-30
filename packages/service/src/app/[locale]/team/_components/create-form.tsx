'use client';

import { ChangeEventHandler } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import clsx from 'clsx';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { createQueryString, returnValueOnCondition } from '@/shared/utils/utils';

import { CreateTeamFormType } from '../_feature/data';
import { teamModifyAction } from '../action';

import styles from './create-form.module.css';

type CreateFormProps = {
  action: typeof teamModifyAction;
  data?: Partial<Omit<CreateTeamFormType, 'thumbnail'> & { thumbnail: string }>;
};

const CreateForm = ({ action, data = {} }: CreateFormProps) => {
  const searchParams = useSearchParams();
  const [message, formAction] = useFormState(action, { type: 'waiting' });
  /** 값 변경시 searchParams을 변경 */
  const onValueChange: (key: string, type: string) => ChangeEventHandler<HTMLInputElement> | undefined = (key, type) =>
    returnValueOnCondition((e) => {
      window.history.replaceState(null, '', '?' + createQueryString(searchParams, key, e.target.value));
    }, type !== 'file');
  return (
    <form className={styles['container']} action={formAction}>
      <div className={styles['header']}>
        <h1>그룹 생성</h1>
        <h2>그룹 설정</h2>
      </div>
      <div className={styles['form-group']}>
        <label>모임 이름</label>
        <div className={styles['input-wrapper']}>
          <input type="text" placeholder="모임 이름을 입력해주세요" />
          <span className={styles['char-count']}>0/18</span>
        </div>
      </div>
      <div className={styles['form-group']}>
        <label>모임 소개</label>
        <div className={styles['input-wrapper']}>
          <textarea placeholder="모임 소개를 입력해주세요" rows={3}></textarea>
          <span className={styles['char-count']}>0/100</span>
        </div>
      </div>
      <div className={styles['form-group']}>
        <label>썸네일</label>
        <div className={clsx(styles['input-wrapper'], styles['horizontal'])}>
          <input type="file" placeholder="업로드 하지 않을 경우 기본이미지로 대체" />
          <button>찾아보기</button>
        </div>
      </div>
      <div className={styles['form-group']}>
        <label>모임 인원</label>
        <div className={clsx(styles['input-wrapper'], styles['horizontal'])}>
          <input type="number" placeholder="10명" />
          <button>제한 없음</button>
        </div>
      </div>
      <div className={styles['form-group']}>
        <label>누구와 함께</label>
        <div className={clsx(styles['input-wrapper'], styles['horizontal'])}>
          <input type="text" placeholder="#친구 이름을 입력해주세요" />
          <button>찾아보기</button>
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
        <Link className={styles['nav-button']} href="/team">
          {'<'}
        </Link>
        <button type="button" className={clsx(styles['nav-button'], styles.next)}>
          {'>'}
        </button>
      </div>
    </form>
  );
};

CreateForm.displayName = 'CreateForm';

function FormCreateSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? '팀 생성 중...' : '팀 생성'}
    </button>
  );
}

export default CreateForm;

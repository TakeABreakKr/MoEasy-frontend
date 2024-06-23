'use client';

import { ChangeEventHandler } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { createQueryString, returnValueOnCondition } from '@/shared/utils';

import { CreateTeamFormType, stepKeys, TeamCreateKeyMap } from '../_feature/data';
import { teamModifyAction } from '../action';

import formStyle from './create-form.module.css';

type CreateFormProps = {
  action: typeof teamModifyAction;
  data?: Partial<Omit<CreateTeamFormType, 'thumbnail'> & { thumbnail: string }>;
};

const CreateForm = ({ action, data = {} }: CreateFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, formAction] = useFormState(action, { type: 'waiting' });
  const step = (searchParams.get('step') ?? stepKeys[0].key) as TeamCreateKeyMap | undefined;
  const currentValue = step ? data[step] ?? searchParams?.get(step) : null;
  const currentIndex = stepKeys.findIndex((key) => key.key === step);
  const { required: currentRequired, defaultValue: stepHasDefault } = stepKeys[currentIndex] || {};
  const nextStep = stepKeys[currentIndex + 1]?.key;
  const prevStep = stepKeys[currentIndex - 1]?.key;
  /** 이전 탭으로 이동 */
  const onPrevStep = prevStep
    ? () => window.history.pushState(null, '', '?' + createQueryString(searchParams, 'step', prevStep))
    : () => router.push('/team');
  /** 다음 탭으로 이동 */
  const onNextStep = returnValueOnCondition(() => {
    // 필수 값인데 기본값이 없으며, 현재 값이 존재하지 않는 경우 다음 단계 이동 중지
    if (!stepHasDefault && currentRequired && !currentValue) {
      alert('값을 입력해주세요');
      return;
    }
    window.history.pushState(null, '', '?' + createQueryString(searchParams, 'step', nextStep));
  }, nextStep);
  /** 값 변경시 searchParams을 변경 */
  const onValueChange: (key: string, type: string) => ChangeEventHandler<HTMLInputElement> | undefined = (key, type) =>
    returnValueOnCondition((e) => {
      window.history.replaceState(null, '', '?' + createQueryString(searchParams, key, e.target.value));
    }, type !== 'file');
  return (
    <form action={formAction}>
      <label className={formStyle['input-label']}>
        {step}
        {stepKeys.map(({ key, type, ...props }) => {
          const defaultValue = data[key] ?? searchParams.get(key) ?? props.defaultValue ?? '';
          return (
            <input
              key={key}
              type={type}
              name={key}
              hidden={step !== key}
              disabled={step !== key}
              defaultValue={defaultValue}
              onChange={onValueChange(key, type)}
              {...props}
            />
          );
        })}
      </label>
      <button type="button" onClick={onPrevStep}>
        {prevStep ? `${prevStep}으로 이동...` : '이전으로...'}
      </button>
      <button type="button" onClick={onNextStep} hidden={!nextStep}>
        {nextStep ? `${nextStep}으로 이동...` : '...'}
      </button>
      {!nextStep && <FormCreateSubmitButton />}
      {message.type === 'error' && <span className={formStyle.error}>{message.message}</span>}
      {message.type === 'success' && (
        <dialog open className={formStyle['input-label']}>
          {message.message}
          <Link href={'/team'}>확인</Link>
        </dialog>
      )}
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

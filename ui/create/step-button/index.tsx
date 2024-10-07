import { useFormStatus } from 'react-dom';

import Link from 'next/link';

import * as styles from './step-button.css';

type CreateStepButtonProps = {
  step: number;
  steps: string[];
  searchParams: URLSearchParams;
  /** step에 마지막에 표시되는 글자 */
  finishMessage?: string;
  /** form 전송 중 표시되는 글자 */
  messageOnPending?: string;
};

export function CreateStepButton({
  step,
  steps,
  searchParams,
  finishMessage,
  messageOnPending = 'loading...',
}: CreateStepButtonProps) {
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
      {step !== steps.length && (
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
      {step === steps.length && (
        <FormCreateSubmitButton messageOnPending={messageOnPending}>{finishMessage}</FormCreateSubmitButton>
      )}
    </div>
  );
}

function FormCreateSubmitButton({
  children,
  messageOnPending = 'loading...',
}: {
  children: React.ReactNode;
  messageOnPending?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.navButton} disabled={pending}>
      {pending ? messageOnPending : children}
    </button>
  );
}

export { FormCreateUnderLine } from './underline';

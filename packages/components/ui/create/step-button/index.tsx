import Link from 'next/link';

import * as styles from './step-button.css';

export type CreateButtonCommonProps = {
  prevText?: string;
  nextText?: string;
  onPrevStep: () => void;
  onNextStep: () => void;
  disabled?: boolean;
};

export function CreateButtonFirst({
  prevText = '이전',
  nextText = '다음',
  prevHref,
  onNextStep,
}: Omit<CreateButtonCommonProps, 'onPrevStep'> & { prevHref: string }) {
  return (
    <div className={styles.navigation}>
      <Link className={styles.navButton} href={prevHref}>
        {prevText}
      </Link>
      <button type="button" className={styles.navButton} onClick={onNextStep}>
        {nextText}
      </button>
    </div>
  );
}

export function CreateButtonCommon({
  prevText = '이전',
  nextText = '다음',
  disabled = false,
  onPrevStep,
  onNextStep,
}: CreateButtonCommonProps) {
  return (
    <div className={styles.navigation}>
      <button type="button" disabled={disabled} className={styles.navButton} onClick={onPrevStep}>
        {prevText}
      </button>
      <button type="button" disabled={disabled} className={styles.navButton} onClick={onNextStep}>
        {nextText}
      </button>
    </div>
  );
}

export { FormCreateUnderLine } from './underline';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '@moeasy/storybook/ui/button';
import * as styles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { delay } from '@moeasy/storybook/utils/lib/delay';

type ActivityOutStep = 'confirm' | 'finish' | 'error';

const stepControl = async (prevState: ActivityOutStep): Promise<ActivityOutStep> => {
  switch (prevState) {
    case 'confirm': {
      await delay(1000);
      const random = Math.random();
      if (random < 0.8) {
        return 'finish';
      } else {
        return 'error';
      }
    }
    case 'finish':
      return 'error';
    case 'error':
      return 'finish';
  }
};

export function ActivityWithdrawPopup({ close }: { close?: () => void }) {
  const [step, actions] = useActionState(stepControl, 'confirm');
  console.log(step);
  let renderChild: React.ReactNode = null;
  switch (step) {
    case 'confirm':
      renderChild = <ActivityWithdrawConfirm close={close} />;
      break;
    case 'finish':
      renderChild = <ActivityWithdrawClose close={close} />;
      break;
    case 'error':
      renderChild = <ActivityWithdrawError close={close} />;
      break;
  }
  return (
    <div className={styles.overlay}>
      <form className={styles.container({ size: 'alert', padding: 'small' })} action={actions}>
        <div className={styles.header}>
          <Button variant="dark" rounded="full" size="icon" type="button" onClick={close}>
            <XIcon />
          </Button>
        </div>
        {renderChild}
      </form>
    </div>
  );
}

function ActivityWithdrawConfirm({ close }: { close?: () => void }) {
  const { pending } = useFormStatus();
  return (
    <>
      <div className={styles.popupContent}>
        <h2 className={styles.popupTitle}>모임 탈퇴하기</h2>
        <p className={styles.popupDesc}>모임에서 탈퇴하시겠습니까? 탈퇴하시면 작성한 게시글은 삭제되지 않습니다.</p>
      </div>
      <div className={styles.footer}>
        <Button variant="light" rounded="medium" size="large" type="button" onClick={close}>
          취소
        </Button>
        <Button size="large" rounded="medium" disabled={pending}>
          탈퇴하기
        </Button>
      </div>
    </>
  );
}

function ActivityWithdrawClose({ close }: { close?: () => void }) {
  return (
    <>
      <div className={styles.popupContent}>
        <h2 className={styles.popupTitle}>모임 탈퇴하기</h2>
        <p className={styles.popupDesc}>모임에서 탈퇴하였습니다.</p>
      </div>
      <div className={styles.footer}>
        <Button size="large" rounded="medium" type="button" onClick={close}>
          확인
        </Button>
      </div>
    </>
  );
}

function ActivityWithdrawError({ close }: { close?: () => void }) {
  return (
    <>
      <div className={styles.popupContent}>
        <h2 className={styles.popupTitle}>모임 탈퇴하기</h2>
        <p className={styles.popupDesc}>모임에서 탈퇴하지 못했습니다. 다시 시도해주세요.</p>
      </div>
      <div className={styles.footer}>
        <Button size="large" rounded="medium" type="button" onClick={close}>
          확인
        </Button>
      </div>
    </>
  );
}

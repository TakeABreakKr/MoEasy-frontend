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

export function ActivityRemovePopup({ close }: { close?: () => void }) {
  const [step, actions] = useActionState(stepControl, 'confirm');
  console.log(step);
  let renderChild: React.ReactNode = null;
  switch (step) {
    case 'confirm':
      renderChild = <ActivityRemoveConfirm close={close} />;
      break;
    case 'finish':
      renderChild = <ActivityRemoveClose close={close} />;
      break;
    case 'error':
      renderChild = <ActivityRemoveError close={close} />;
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

function ActivityRemoveConfirm({ close }: { close?: () => void }) {
  const { pending } = useFormStatus();
  return (
    <>
      <div className={styles.popupContent}>
        <h2 className={styles.popupTitle}>모임 삭제하기</h2>
        <p className={styles.popupDesc}>
          삭제할 경우 <u>복구할 수 없습니다.</u> 모임을 삭제하시겠습니까?
        </p>
      </div>
      <div className={styles.footer}>
        <Button variant="light" rounded="medium" size="large" type="button" onClick={close}>
          취소
        </Button>
        <Button size="large" rounded="medium" disabled={pending}>
          삭제하기
        </Button>
      </div>
    </>
  );
}

function ActivityRemoveClose({ close }: { close?: () => void }) {
  return (
    <>
      <div className={styles.popupContent}>
        <h2 className={styles.popupTitle}>모임 삭제하기</h2>
        <p className={styles.popupDesc}>모임을 삭제하였습니다.</p>
      </div>
      <div className={styles.footer}>
        <Button size="large" rounded="medium" type="button" onClick={close}>
          확인
        </Button>
      </div>
    </>
  );
}

function ActivityRemoveError({ close }: { close?: () => void }) {
  return (
    <>
      <div className={styles.popupContent}>
        <h2 className={styles.popupTitle}>모임 삭제하기</h2>
        <p className={styles.popupDesc}>모임을 삭제하지 못했습니다. 다시 시도해주세요.</p>
      </div>
      <div className={styles.footer}>
        <Button size="large" rounded="medium" type="button" onClick={close}>
          확인
        </Button>
      </div>
    </>
  );
}

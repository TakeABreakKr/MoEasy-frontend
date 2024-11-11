import { useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { ModalClose, ModalContent } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { delay } from '@moeasy/storybook/utils/lib/delay';

import { MeetingAuthority } from '..';

import * as styles from '../card.css';

const withdrawlStepTexts = [
  {
    title: '모임에서 탈퇴',
    content: ({ authority }: { authority?: MeetingAuthority }) => (
      <>
        {authority !== 'MEMBER' && (
          <>
            [매니저]권한으로 있는 모임에서 탈퇴할 경우
            <br />재 가입 시 [모임원]권한으로 가입 처리 됩니다.
          </>
        )}
        <br /> 모임에서 탈퇴하시겠습니까?
      </>
    ),
  },
  {
    title: '모임에서 탈퇴',
    content: (_: { authority?: MeetingAuthority }) => '모임에서 탈퇴하였습니다',
  },
];

export function MeetingWithdrawal({ authority }: { authority?: MeetingAuthority }) {
  const [step, setStep] = useState(0);
  const { title, content } = withdrawlStepTexts[step];
  const withdrawal = async () => {
    await delay(1000);
    setStep(1);
  };
  return (
    <ModalContent className={styles.popupContainer}>
      <div className={styles.popupHeader}>
        <Button asChild variant="dark" rounded="full" size="icon" type="button">
          <ModalClose>
            <XIcon />
          </ModalClose>
        </Button>
      </div>
      <div
        className={sprinkles({
          display: 'flex',
          flexDirection: 'column',
          gap: 'medium',
          alignItems: 'center',
          justifyContent: 'flex-start',
          alignSelf: 'stretch',
          position: 'relative',
        })}
      >
        <div className={styles.popupTitle}>{title}</div>
        <div className={styles.popupDesc}>{content({ authority })}</div>
      </div>
      {step === 0 && (
        <div className={modalStyles.footer}>
          <Button variant="dark" size="large" rounded="medium" className={sprinkles({ flex: 1 })}>
            돌아가기
          </Button>
          <Button variant="light" size="large" rounded="medium" className={sprinkles({ flex: 1 })} onClick={withdrawal}>
            탈퇴하기
          </Button>
        </div>
      )}
    </ModalContent>
  );
}

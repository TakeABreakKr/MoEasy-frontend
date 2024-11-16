import { useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { ModalClose, ModalContent } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { delay } from '@moeasy/storybook/utils/lib/delay';

import * as styles from '../card.css';

const deleteStepTexts = [
  {
    title: '모임 삭제',
    content: (
      <>
        삭제할 경우 복구할 수 없습니다.
        <br />
        모임을 삭제하시겠습니까?
      </>
    ),
  },
  {
    title: '모임 삭제',
    content: '모임이 삭제되었습니다.',
  },
];

export function MeetingDeleteModal({ code = 'G-1234123412341234' }: { code?: string }) {
  const [step, setStep] = useState(0);
  const { title, content } = deleteStepTexts[step];
  const deleteMeeting = async () => {
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
        <div className={styles.popupDesc}>{content}</div>
      </div>
      {step === 0 && (
        <div className={modalStyles.footer}>
          <>
            <Button variant="dark" size="large" rounded="medium" className={sprinkles({ flex: 1 })}>
              돌아가기
            </Button>
            <Button
              variant="light"
              size="large"
              rounded="medium"
              className={sprinkles({ flex: 1 })}
              onClick={deleteMeeting}
            >
              삭제하기
            </Button>
          </>
        </div>
      )}
    </ModalContent>
  );
}

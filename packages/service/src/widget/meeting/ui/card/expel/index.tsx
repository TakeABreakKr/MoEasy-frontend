import { useEffect, useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { ModalClose, ModalContent } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { delay } from '@moeasy/storybook/utils/lib/delay';

import { MeetingCardPopupState } from '../../../types';

import * as styles from '../card.css';

type MeetingExpelProps = {
  memberName?: string;
  setCardPopupState: React.Dispatch<React.SetStateAction<MeetingCardPopupState>>;
};

const expelStepTexts = [
  {
    title: '모임원 강제퇴장',
    content: ({ memberName }: Pick<MeetingExpelProps, 'memberName'>) => (
      <>
        <strong>{memberName}</strong>님을 모임에서 탈퇴하시겠습니까?
      </>
    ),
  },
  {
    title: '강제퇴장 완료',
    content: ({ memberName }: Pick<MeetingExpelProps, 'memberName'>) => (
      <>
        <strong>{memberName}</strong>님을 모임에서 퇴장하였습니다.
      </>
    ),
  },
];

export function MeetingExpel({ memberName, setCardPopupState }: MeetingExpelProps) {
  const [step, setStep] = useState(0);
  const { title, content } = expelStepTexts[step];
  const withdrawal = async () => {
    await delay(1000);
    setStep(1);
  };

  useEffect(() => {
    if (!step) return;
    return () => {
      setCardPopupState({ popupType: 'MEETING' });
    };
  }, [step, setCardPopupState]);

  return (
    <ModalContent className={styles.popupContainer} contentDraggable>
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
        <div className={styles.popupDesc}>{content({ memberName })}</div>
      </div>
      {step === 0 && (
        <div className={modalStyles.footer}>
          <Button asChild variant="dark" size="large" rounded="medium" className={sprinkles({ flex: 1 })}>
            <ModalClose>돌아가기</ModalClose>
          </Button>
          <Button variant="light" size="large" rounded="medium" className={sprinkles({ flex: 1 })} onClick={withdrawal}>
            강제퇴장
          </Button>
        </div>
      )}
    </ModalContent>
  );
}

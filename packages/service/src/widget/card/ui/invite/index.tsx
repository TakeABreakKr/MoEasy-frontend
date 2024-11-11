import { useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';

import { Button } from '@moeasy/storybook/ui/button';
import { ModalClose, ModalContent } from '@moeasy/storybook/ui/dialog';
import { XIcon } from '@moeasy/storybook/ui/icon';

import * as styles from '../card.css';

const inviteStepTexts = [
  {
    title: '모임으로 초대',
    content: (
      <>
        아래 기재된 링크를 친구에게 공유해주세요!
        <br />
        (7일 후 링크가 만료됩니다.)
      </>
    ),
  },
  {
    title: '모임 코드가 복사 되었습니다.',
    content: '모임코드를 공유해서 친구를 초대해보세요.',
  },
];

export function MeetingInviteModal({ code = 'G-1234123412341234' }: { code?: string }) {
  const [step, setStep] = useState(0);
  const { title, content } = inviteStepTexts[step];
  const copyAndStepForward = () => {
    copyText({ text: code });
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
        <button className={styles.popupCodeInput} onClick={copyAndStepForward}>
          {code}
          <span className={styles.inviteCopy}>복사</span>
        </button>
      )}
    </ModalContent>
  );
}

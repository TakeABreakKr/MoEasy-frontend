import { createFunnelSteps, useFunnel } from '@use-funnel/browser';

import { copyText } from '@/shared/utils/copy-text';

import { Button } from '@moeasy/storybook/ui/button';
import { ModalClose, ModalContent } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';

import * as styles from '../../card.css';

const steps = createFunnelSteps<{ meetingId: string }>().extends('초대하기').extends('초대완료').build();

export function MeetingInviteModal({ meetingId }: { meetingId: string }) {
  const funnel = useFunnel({
    id: 'meeting-invite',
    steps,
    initial: {
      step: '초대하기',
      context: {
        meetingId,
      },
    },
  });

  return (
    <ModalContent className={modalStyles.container({ size: 'alert', padding: 'small' })}>
      <div className={modalStyles.header}>
        <Button asChild variant="dark" rounded="full" size="icon" type="button">
          <ModalClose>
            <XIcon />
          </ModalClose>
        </Button>
      </div>
      <funnel.Render
        초대하기={({ history, context }) => (
          <초대하기 meetingId={context.meetingId} onInvite={() => history.push('초대완료')} />
        )}
        초대완료={초대완료}
      />
    </ModalContent>
  );
}

function 초대하기({ meetingId, onInvite }: { meetingId: string; onInvite: () => void }) {
  const copyAndStepForward = () => {
    copyText({ text: meetingId });
    onInvite();
  };
  return (
    <>
      <div className={modalStyles.popupContent}>
        <div className={modalStyles.popupTitle}>모임으로 초대</div>
        <div className={modalStyles.popupDesc}>
          아래 기재된 링크를 친구에게 공유해주세요!
          <br />
          (7일 후 링크가 만료됩니다.)
        </div>
      </div>
      <button className={styles.popupCodeInput} onClick={copyAndStepForward}>
        {meetingId}
        <span className={styles.inviteCopy}>복사</span>
      </button>
    </>
  );
}

function 초대완료() {
  return (
    <div className={modalStyles.popupContent}>
      <div className={modalStyles.popupTitle}>모임 코드가 복사 되었습니다.</div>
      <div className={modalStyles.popupDesc}>모임코드를 공유해서 친구를 초대해보세요.</div>
    </div>
  );
}

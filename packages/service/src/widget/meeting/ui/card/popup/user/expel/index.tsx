import { createFunnelSteps, useFunnel } from '@use-funnel/browser';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { ModalClose, ModalContent } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { delay } from '@moeasy/storybook/utils/lib/delay';

type MeetingExpelProps = {
  memberName: string;
};
const steps = createFunnelSteps<{}>().extends('내보내기').extends('내보내기_완료').build();

export function MeetingExpel({ memberName }: MeetingExpelProps) {
  const funnel = useFunnel({
    id: 'meeting-expel',
    steps,
    initial: {
      step: '내보내기',
      context: {},
    },
  });

  return (
    <ModalContent className={modalStyles.container({ size: 'alert', padding: 'small' })} contentDraggable>
      <div className={modalStyles.header}>
        <Button asChild variant="dark" rounded="full" size="icon" type="button">
          <ModalClose>
            <XIcon />
          </ModalClose>
        </Button>
      </div>
      <funnel.Render
        내보내기={({ history }) => (
          <내보내기
            memberName={memberName}
            onExpel={async () => {
              await delay(1000);
              history.push('내보내기_완료');
            }}
          />
        )}
        내보내기_완료={() => <내보내기완료 memberName={memberName} />}
      />
    </ModalContent>
  );
}

export function 내보내기({ memberName, onExpel }: { memberName: string; onExpel: () => void }) {
  return (
    <>
      <div className={modalStyles.popupContent}>
        <div className={modalStyles.popupTitle}>모임원 강제퇴장</div>
        <div className={modalStyles.popupDesc}>
          <strong>{memberName}</strong>님을 모임에서 탈퇴하시겠습니까?
        </div>
      </div>
      <div className={modalStyles.footer}>
        <Button asChild variant="dark" size="large" rounded="medium" className={sprinkles({ flex: 1 })}>
          <ModalClose>돌아가기</ModalClose>
        </Button>
        <Button variant="light" size="large" rounded="medium" className={sprinkles({ flex: 1 })} onClick={onExpel}>
          강제퇴장
        </Button>
      </div>
    </>
  );
}

export function 내보내기완료({ memberName }: { memberName: string }) {
  return (
    <div className={modalStyles.popupContent}>
      <div className={modalStyles.popupTitle}>강제퇴장 완료</div>
      <div className={modalStyles.popupDesc}>
        <strong>{memberName}</strong>님을 모임에서 퇴장하였습니다.
      </div>
    </div>
  );
}

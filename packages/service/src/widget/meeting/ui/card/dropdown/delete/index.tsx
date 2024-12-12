import { createFunnelSteps, useFunnel } from '@use-funnel/browser';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { ModalClose, ModalContent } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { delay } from '@moeasy/storybook/utils/lib/delay';

const steps = createFunnelSteps<{}>().extends('삭제하기').extends('삭제완료').build();

export function MeetingDeleteModal({ meetingId }: { meetingId: string }) {
  const funnel = useFunnel({
    id: 'meeting-delete',
    steps,
    initial: {
      step: '삭제하기',
      context: {},
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
        삭제하기={({ history }) => (
          <삭제하기
            onDelete={async () => {
              await delay(1000);
              console.table([{ meetingId }]);
              history.push('삭제완료');
            }}
          />
        )}
        삭제완료={삭제완료}
      />
    </ModalContent>
  );
}

function 삭제하기({ onDelete }: { onDelete: () => void }) {
  return (
    <>
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
        <div className={modalStyles.popupTitle}>모임 삭제</div>
        <div className={modalStyles.popupDesc}>
          삭제할 경우 복구할 수 없습니다.
          <br />
          모임을 삭제하시겠습니까?
        </div>
      </div>
      <div className={modalStyles.footer}>
        <Button variant="dark" size="large" rounded="medium" className={sprinkles({ flex: 1 })}>
          돌아가기
        </Button>
        <Button variant="light" size="large" rounded="medium" className={sprinkles({ flex: 1 })} onClick={onDelete}>
          삭제하기
        </Button>
      </div>
    </>
  );
}

function 삭제완료() {
  return (
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
      <div className={modalStyles.popupTitle}>모임 삭제</div>
      <div className={modalStyles.popupDesc}>모임이 삭제되었습니다.</div>
    </div>
  );
}

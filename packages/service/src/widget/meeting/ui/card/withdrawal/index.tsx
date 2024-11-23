import { createFunnelSteps, useFunnel } from '@use-funnel/browser';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { ModalClose, ModalContent } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { delay } from '@moeasy/storybook/utils/lib/delay';

import { escapePopup } from '../../../utils';

import * as styles from '../card.css';
import { MeetingAuthority } from '@/entities';

const steps = createFunnelSteps<{}>().extends('탈퇴하기').extends('탈퇴완료').build();

export function MeetingWithdrawal({ authority }: { authority?: MeetingAuthority }) {
  const funnel = useFunnel({
    id: 'meeting-withdrawal',
    steps,
    initial: {
      step: '탈퇴하기',
      context: {},
    },
  });

  return (
    <ModalContent className={styles.popupContainer} contentDraggable>
      <div className={styles.popupHeader}>
        <Button asChild variant="dark" rounded="full" size="icon" type="button">
          <ModalClose onClick={escapePopup}>
            <XIcon />
          </ModalClose>
        </Button>
      </div>
      <funnel.Render
        탈퇴하기={({ history }) => (
          <모임탈퇴하기
            authority={authority}
            onWithdrawal={async () => {
              await delay(1000);
              history.push('탈퇴완료');
            }}
          />
        )}
        탈퇴완료={() => <모임탈퇴완료 />}
      />
    </ModalContent>
  );
}

function 모임탈퇴하기({ authority, onWithdrawal }: { authority?: MeetingAuthority; onWithdrawal: () => void }) {
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
      <div className={styles.popupTitle}>모임에서 탈퇴</div>
      <div className={styles.popupDesc}>
        {authority !== 'MEMBER' && (
          <>
            [매니저]권한으로 있는 모임에서 탈퇴할 경우
            <br />재 가입 시 [모임원]권한으로 가입 처리 됩니다.
          </>
        )}
        <br /> 모임에서 탈퇴하시겠습니까?
      </div>
      <div className={modalStyles.footer}>
        <Button asChild variant="dark" size="large" rounded="medium" className={sprinkles({ flex: 1 })}>
          <ModalClose>돌아가기</ModalClose>
        </Button>
        <Button variant="light" size="large" rounded="medium" className={sprinkles({ flex: 1 })} onClick={onWithdrawal}>
          탈퇴하기
        </Button>
      </div>
    </div>
  );
}

function 모임탈퇴완료() {
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
      <div className={styles.popupTitle}>모임에서 탈퇴</div>
      <div className={styles.popupDesc}>모임에서 탈퇴하였습니다</div>
    </div>
  );
}

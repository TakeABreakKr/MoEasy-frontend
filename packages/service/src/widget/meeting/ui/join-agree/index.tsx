import clsx from 'clsx';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import { Modal, ModalClose, ModalContent, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { UserIcon, XIcon } from '@moeasy/storybook/ui/icon';

import * as styles from './join-agree.css';

/**
 * 모임 수락 대기중인 인원을 받는 화면
 */
export function MeetingJoinAgreePopup() {
  return (
    <Modal>
      <ModalTrigger>
        <UserIcon />
      </ModalTrigger>
      <ModalPortal>
        <ModalOverlay className={modalStyles.overlay}>
          <ModalContent className={modalStyles.content({ size: 'medium' })}>
            <div
              className={sprinkles({
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',
                padding: 'medium',
              })}
            >
              <ModalClose asChild>
                <Button size="icon" rounded="full">
                  <XIcon />
                </Button>
              </ModalClose>
            </div>
            <h2
              className={clsx(
                sprinkles({
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }),
                styles.joinAgreeRow,
              )}
            >
              모임 가입 수락 대기
            </h2>
            <div
              className={clsx(
                sprinkles({
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }),
                styles.joinAgreeRow,
              )}
            >
              <label
                className={sprinkles({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'small',
                })}
              >
                <Checkbox rounded={false} />
                전체 선택
              </label>
              <div
                className={sprinkles({
                  display: 'flex',
                  gap: 'small',
                })}
              >
                선택 거절 | 선택 수락
              </div>
            </div>
            <div className={styles.meetingWaitingList}>
              <div className={styles.meetingWaiting}>
                <div className={styles.meetingNameWrapper}>TEAM TAB</div>
                <MeetingWaitingUser />
                <MeetingWaitingUser />
                <MeetingWaitingUser />
              </div>
              <div className={styles.meetingWaiting}>
                <div className={styles.meetingNameWrapper}>TEAM TAB</div>
                <MeetingWaitingUser />
                <MeetingWaitingUser />
                <MeetingWaitingUser />
              </div>
              <div className={styles.meetingWaiting}>
                <div className={styles.meetingNameWrapper}>TEAM TAB</div>
                <MeetingWaitingUser />
                <MeetingWaitingUser />
                <MeetingWaitingUser />
              </div>
            </div>
          </ModalContent>
        </ModalOverlay>
      </ModalPortal>
    </Modal>
  );
}

function MeetingWaitingUser({ userName = 'Kim moeasy' }: { userName?: string }) {
  return (
    <div className={styles.waitingUserWrapper}>
      <div className={styles.waitingUserLeft}>
        <div className={styles.waitingUserCheck}>
          <Checkbox rounded={false} />
        </div>
        <div className={styles.waitingUserInfo}>
          <div className={styles.waitingUserName}>{userName}</div>
          <div className={styles.waitingUserDesc}>
            안녕하세요, 프로젝트 추가인원 김모이지 입니다(박스 넘어가면...으로 생략) 안녕하세요, 프로젝트 추가인원
            김모이지 입니다(박스 넘어가면...으로 생략)
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.buttonVariant.reject}>거절</button>
        <button className={styles.buttonVariant.admit}>수락</button>
      </div>
    </div>
  );
}

'use client';

import clsx from 'clsx';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { alertCall } from '@/shared/utils/alert-call';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import { Modal, ModalClose, ModalContent, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { ChevronDown, UserIcon, XIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';
import { delay } from '@moeasy/storybook/utils/lib/delay';

import * as styles from './join-agree.css';

const meetingWaitingMesseges = {
  agree: {
    success: {
      title: '모임 수락',
      description: () => '선택한 대기 인원을 모임에 추가하였습니다.',
    },
    fail: {
      title: '모임 수락',
      description: () => (
        <>
          선택한 대기 인원을 모임에 추가에 실패하였습니다.
          <br />
          다시 선택을 진행해주세요.
        </>
      ),
    },
    exceed: {
      title: '모임 인원 제한 초과',
      description: () => (
        <>
          모임 인원 제한을 초과하였습니다. <br />
          ‘모임 수정’에서 인원 제한 수를 수정 후<br />
          대기인원을 수락해주세요.
        </>
      ),
    },
  },
  reject: {
    success: {
      title: '모임 수락 거절',
      description: () => '선택한 대기 인원에 대한 모임 추가를 거절하였습니다.',
    },
    fail: {
      title: '모임 수락 거절',
      description: () => (
        <>
          선택한 대기 인원에 대한 거절 요청에 실패하였습니다.
          <br />
          다시 선택을 진행해주세요.
        </>
      ),
    },
  },
};

const onApplyDummy = async () => {
  await delay(1000);
  const random = Math.random();
  const result =
    random < 0.4
      ? meetingWaitingMesseges.agree.success
      : random < 0.7
        ? meetingWaitingMesseges.agree.fail
        : meetingWaitingMesseges.agree.exceed;

  alertCall({ title: result.title, message: result.description() });
};

const onRejectDummy = async () => {
  await delay(1000);
  const random = Math.random();
  const result = random < 0.5 ? meetingWaitingMesseges.reject.success : meetingWaitingMesseges.reject.fail;
  alertCall({ title: result.title, message: result.description() });
};

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
          <ModalContent className={modalStyles.container({ size: 'medium' })}>
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
              <Text
                label="small"
                className={sprinkles({
                  display: 'flex',
                  gap: 'small',
                })}
              >
                선택 거절 | 선택 수락
              </Text>
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
        <Modal>
          <ModalTrigger asChild>
            <button className={styles.waitingUserInfo}>
              <div className={styles.waitingUserName}>{userName}</div>
              <div className={styles.waitingUserDesc}>
                안녕하세요, 프로젝트 추가인원 김모이지 입니다(박스 넘어가면...으로 생략) 안녕하세요, 프로젝트 추가인원
                김모이지 입니다(박스 넘어가면...으로 생략)
              </div>
            </button>
          </ModalTrigger>
          <ModalPortal>
            <ModalOverlay className={modalStyles.overlay}>
              <MeetingWaitingUserInfo userName={userName} explanation={'description'} />
            </ModalOverlay>
          </ModalPortal>
        </Modal>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.buttonVariant.reject} onClick={onRejectDummy}>
          거절
        </button>
        <button className={styles.buttonVariant.admit} onClick={onApplyDummy}>
          수락
        </button>
      </div>
    </div>
  );
}

function MeetingWaitingUserInfo({ userName, explanation }: { userName: string; explanation: string }) {
  return (
    <CardWrapper data-user-index={userName} asChild>
      <ModalContent>
        <CardThumbnail src={`https://via.placeholder.com/72/${userName}`} alt={userName} />
        <CardHeader>
          <Button variant="dark" size="icon" rounded="full" asChild>
            <ModalClose>
              <XIcon />
            </ModalClose>
          </Button>
        </CardHeader>
        <CardTitle>{userName}</CardTitle>
        <CardDescription>{explanation}</CardDescription>
        <CardTagsWrapper>
          <textarea className={sprinkles({ width: '100%' })} />
        </CardTagsWrapper>
        <CardTagsWrapper>
          <div className={sprinkles({ display: 'flex', justifyContent: 'space-between', width: '100%' })}>
            <ModalClose>
              <ChevronDown transform="rotate(90)" height={8} />
              뒤로가기
            </ModalClose>
            <div className={sprinkles({ display: 'flex', gap: 'small' })}>
              <button className={styles.buttonVariant.reject} onClick={onRejectDummy}>
                거절
              </button>
              <button className={styles.buttonVariant.admit} onClick={onApplyDummy}>
                수락
              </button>
            </div>
          </div>
        </CardTagsWrapper>
      </ModalContent>
    </CardWrapper>
  );
}

import { HTMLAttributes, useState } from 'react';
import { overlay } from 'overlay-kit';

import { components } from '@/shared/api/my-schema';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardMember,
  CardMembers,
  CardThumbnail,
  CardTitle,
  CardTrigger,
  CardTriggerItem,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { Modal, ModalContent, ModalOverlay, ModalPortal } from '@moeasy/storybook/ui/dialog';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { Separator } from '@moeasy/storybook/ui/separator';

import * as styles from './card.css';

type MeetingAuthority = components['schemas']['MeetingListMeetingDto']['authority'];

export type CardProps = {
  idx: number | string;
  title: string;
  description?: string;
  thumbnail?: string;
  count?: number;
  maxCount?: number;
  members?: CardMember[];
  authority?: MeetingAuthority;
} & HTMLAttributes<HTMLDivElement>;

export function Card({
  idx,
  title,
  className,
  description = '',
  count = 0,
  maxCount = 10,
  members = [],
  authority = 'MEMBER',
  ...props
}: CardProps) {
  return (
    <CardWrapper data-meeting-index={idx} {...props}>
      <CardThumbnail src={`https://via.placeholder.com/72/${idx}`} alt={title} />
      <TriggerRenderByAuthority authority={authority} />
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
      <CardMembers members={members} />
    </CardWrapper>
  );
}

function TriggerRenderByAuthority({ authority }: { authority?: MeetingAuthority }) {
  switch (authority) {
    case 'MEMBER':
    case 'MANAGER':
      return (
        <CardTrigger>
          <CardTriggerItem
            padding
            align="center"
            onClick={() =>
              overlay.open(({ unmount }) => {
                return <MeetingInviteModal unmount={unmount} />;
              })
            }
          >
            초대하기
          </CardTriggerItem>
          <Separator direction="horizontal" color="#cfcfcf" />
          <CardTriggerItem padding align="center" notice>
            탈퇴하기
          </CardTriggerItem>
        </CardTrigger>
      );
    case 'OWNER':
      return (
        <CardTrigger>
          <CardTriggerItem padding align="center">
            수정
          </CardTriggerItem>
          <Separator direction="horizontal" color="#cfcfcf" />
          <CardTriggerItem
            padding
            align="center"
            onClick={(e) => (
              e.preventDefault(),
              overlay.open(({ unmount }) => {
                return <MeetingInviteModal unmount={unmount} />;
              })
            )}
          >
            초대하기
          </CardTriggerItem>
          <Separator direction="horizontal" color="#cfcfcf" />
          <CardTriggerItem padding align="center" notice>
            탈퇴하기
          </CardTriggerItem>
          <Separator direction="horizontal" color="#cfcfcf" />
          <CardTriggerItem padding align="center" notice>
            삭제
          </CardTriggerItem>
        </CardTrigger>
      );
    case 'WAITING':
    default:
      return <CardTrigger />;
  }
}

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

function MeetingInviteModal({ code = 'G-1234123412341234', unmount }: { code?: string; unmount: () => void }) {
  const [step, setStep] = useState(0);
  const { title, content } = inviteStepTexts[step];
  const copyAndStepForward = () => {
    copyText({ text: code });
    setStep(1);
  };
  return (
    <Modal open>
      <ModalPortal>
        <ModalOverlay className={styles.popupOverlay}>
          <ModalContent className={styles.inviteContainer}>
            <div className={styles.inviteHeader}>
              <Button variant="dark" rounded="full" size="icon" type="button" onClick={unmount}>
                <XIcon />
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
              <div className={styles.inviteTitle}>{title}</div>
              <div className={styles.inviteDesc}>{content}</div>
            </div>
            {step === 0 && (
              <button className={styles.inviteCodeInput} onClick={copyAndStepForward}>
                {code}
                <span className={styles.inviteCopy}>복사</span>
              </button>
            )}
          </ModalContent>
        </ModalOverlay>
      </ModalPortal>
    </Modal>
  );
}

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createFunnelSteps, useFunnel } from '@use-funnel/browser';

import { MeetingAuthority } from '@/entities';
import { MemberType } from '@/entities/member/api';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';
import { escapePopup, isManagerAutorized, toPopupCard } from '@/widget/meeting/utils';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardTrigger,
  CardTriggerItem,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { Modal, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { ChevronDown, XIcon } from '@moeasy/storybook/ui/icon';
import { NameTag } from '@moeasy/storybook/ui/tag';
import { Toggle } from '@moeasy/storybook/ui/toggle';

import { MeetingExpel } from './expel';

import * as styles from '../../card.css';

const steps = createFunnelSteps<{}>().extends('intro').extends('changeInfo').build();

/**
 * memberId와 meetingId가 valid하지 않으면 null로 들어오도록 해야한다.
 */
export function MemberCard({
  memberId,
  meetingId,
  authority,
  toMeeting,
}: {
  memberId: string;
  meetingId: string | null;
  /** 현재 창의 user의 authority가 아닌 사용자의 authority */
  authority?: MeetingAuthority;
  toMeeting: () => void;
}) {
  const funnel = useFunnel({
    id: 'member-popup',
    steps,
    initial: {
      step: 'intro',
      context: {},
    },
  });
  const { data, isLoading, error, refetch } = useQuery<MemberType>({
    queryKey: ['member', memberId],
    queryFn: async () => {
      const response = await fetch(`mock/member/${memberId}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const newData = await response.json();
      return newData;
    },
  });

  let renderComponent: React.ReactNode;
  if (isLoading) renderComponent = <div>loading...</div>;
  if (error) renderComponent = <UserCardErrorFallback refetch={refetch} meetingId={meetingId} toMeeting={toMeeting} />;
  if (data) {
    renderComponent = (
      <funnel.Render
        intro={({ history }) => (
          <MemberPopupCardContent
            member={data}
            meetingId={meetingId}
            authority={authority}
            toMeeting={toMeeting}
            toNextStep={() => {
              history.push('changeInfo');
            }}
          />
        )}
        changeInfo={({ history }) => <MemberPopupCardChangeInfo member={data} toPrevStep={history.back} />}
      />
    );
  }
  return (
    <div className={modalStyles.overlay}>
      <CardWrapper>{renderComponent}</CardWrapper>
    </div>
  );
}

function MemberPopupCardContent({
  member,
  authority: userAuthority,
  toNextStep,
  toMeeting,
  meetingId,
}: {
  member: MemberType;
  meetingId: string | null;
  /** 현재 창의 user의 authority가 아닌 사용자의 authority */
  authority?: MeetingAuthority;
  toMeeting: () => void;
  toNextStep: () => void;
}) {
  const { memberId, username, authority, thumbnail } = member;
  const [parsedRole, toggleParseRole] = useState<MeetingAuthority>(authority);
  const explanation = '자기소개 자기소개';
  const isManager = isManagerAutorized(userAuthority);

  return (
    <>
      <CardThumbnail as="button" onThumbnailClick={toNextStep} src={thumbnail} alt={username || 'thumbnail'} />
      <CardHeader>
        <UserCardDropDown member={member} meetingId={meetingId} />
        <Button variant="dark" size="icon" rounded="full" onClick={toMeeting}>
          <XIcon />
        </Button>
      </CardHeader>
      <CardTitle>{username}</CardTitle>
      <CardDescription>{explanation}</CardDescription>
      <button className={styles.userFollow}>팔로우</button>
      <CardTagsWrapper>
        <NameTag userRole="limit">친구코드</NameTag>
        <div>{memberId}</div>
        <NameTag onClick={() => copyText({ text: memberId })}>복사</NameTag>
      </CardTagsWrapper>
      <CardTagsWrapper
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        {isManager && (
          <span
            className={sprinkles({
              display: 'flex',
              gap: 'small',
              alignItems: 'center',
            })}
          >
            매니저 설정
            <Toggle
              defaultChecked={parsedRole === 'MANAGER'}
              onToggleChange={(v) => {
                toggleParseRole(v ? 'MANAGER' : 'MEMBER');
              }}
            />
          </span>
        )}
        {meetingId && (
          <button
            className={sprinkles({
              display: 'flex',
              gap: 'xsmall',
              alignItems: 'center',
            })}
            onClick={toMeeting}
          >
            <ChevronDown height={6} transform="rotate(90)" />
            뒤로가기
          </button>
        )}
      </CardTagsWrapper>
    </>
  );
}

function MemberPopupCardChangeInfo({ member, toPrevStep }: { member: MemberType; toPrevStep: () => void }) {
  const { memberId, username, thumbnail } = member;
  return (
    <>
      <CardThumbnail as="button" onThumbnailClick={toPrevStep} src={thumbnail} alt={memberId || 'thumbnail'} />
      <CardHeader>
        <Button variant="dark" size="icon" rounded="full" onClick={escapePopup}>
          <XIcon />
        </Button>
      </CardHeader>
      <CardTitle>{username}</CardTitle>
      <div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
      </div>
      <CardTagsWrapper className={sprinkles({ justifyContent: 'flex-end' })}>
        <button
          className={sprinkles({
            display: 'flex',
            gap: 'xsmall',
            alignItems: 'center',
          })}
          onClick={toPrevStep}
        >
          <ChevronDown height={6} transform="rotate(90)" />
          뒤로가기
        </button>
      </CardTagsWrapper>
    </>
  );
}

const UserCardDropDownItems = ['퇴장'] as const;
type UserCardDropDownEnum = (typeof UserCardDropDownItems)[number];

function UserCardDropDown({ member, meetingId }: { member: MemberType; meetingId: string | null }) {
  const [menu, setMenu] = useState<UserCardDropDownEnum>('퇴장');
  const changeMenu = (key: UserCardDropDownEnum) => () => setMenu(key);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && meetingId) {
      return () => toPopupCard({ meetingId });
    }
  }, [open, meetingId]);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <CardTrigger>
        <CardTriggerItem padding align="center" onClick={changeMenu('퇴장')} asChild>
          <ModalTrigger>강제퇴장</ModalTrigger>
        </CardTriggerItem>
      </CardTrigger>
      <ModalPortal>
        <ModalOverlay className={modalStyles.overlay}>
          {menu === '퇴장' && <MeetingExpel memberName={member.username} />}
        </ModalOverlay>
      </ModalPortal>
    </Modal>
  );
}

function UserCardErrorFallback({
  refetch,
  toMeeting,
  meetingId,
}: {
  refetch: () => void;
  meetingId: string | null;
  toMeeting: () => void;
}) {
  return (
    <>
      <CardThumbnail />
      <CardHeader>
        <Button variant="dark" size="icon" rounded="full" onClick={escapePopup}>
          <XIcon />
        </Button>
      </CardHeader>
      <CardTitle>유저 정보 불러오기 실패</CardTitle>
      <CardDescription>유저 정보를 불러올 수 없습니다. 다시 시도해주세요.</CardDescription>
      <button className={styles.userFollow} onClick={refetch}>
        재시도
      </button>
      <CardTagsWrapper>
        <NameTag userRole="limit">친구코드</NameTag>
        <div>...</div>
        <NameTag>복사</NameTag>
      </CardTagsWrapper>
      <CardTagsWrapper
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        {meetingId && (
          <button
            className={sprinkles({
              display: 'flex',
              gap: 'xsmall',
              alignItems: 'center',
            })}
            onClick={toMeeting}
          >
            <ChevronDown height={6} transform="rotate(90)" />
            뒤로가기
          </button>
        )}
      </CardTagsWrapper>
    </>
  );
}

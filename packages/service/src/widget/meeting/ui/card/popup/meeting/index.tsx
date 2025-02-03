import { useCallback, useState } from 'react';
import Link from 'next/link';

import { MeetingType } from '@/entities/meeting/api';
import { useQuery } from '@/shared/hooks/use-query';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';
import { escapePopup, getUserRoleForTags } from '@/widget/meeting/utils';

import { useCallbackRef } from '@moeasy/storybook/hooks/use-callback-ref';
import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { BookMarkIcon, XIcon } from '@moeasy/storybook/ui/icon';
import { NameTag } from '@moeasy/storybook/ui/tag';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { MeetingCardDropDown, MeetingDropDownEnum } from '../../dropdown/v2';

export type toMemberCardCallback = (memberId: string) => void;

export function MeetingPopupCard({
  meetingId,
  toMemberCard,
}: {
  meetingId: string;
  toMemberCard: toMemberCardCallback;
}) {
  const { data, loading, error, refetch } = useQuery<MeetingType>({ queryURL: `mock/meeting/${meetingId}` });

  let renderComponent: React.ReactNode;
  if (loading) renderComponent = <div>loading...</div>;
  if (error) renderComponent = <MeetingPopupCardContentErrorFallback refetch={refetch} />;
  if (data) renderComponent = <MeetingPopupCardContent meeting={data} toMemberCard={toMemberCard} />;
  return <div className={modalStyles.overlay}>{renderComponent}</div>;
}

/**
 * 팝업으로 표시되는 모임 카드
 */
export function MeetingPopupCardContent({
  meeting,
  toMemberCard,
}: {
  meeting: MeetingType;
  toMemberCard: toMemberCardCallback;
}) {
  const { meetingId, name, authority = 'MANAGER', explanation } = meeting;
  const [bookmark, setBookmark] = useState(false);
  const toMemberCallbackRef = useCallbackRef(toMemberCard);
  const onEscape = useCallback(
    (currentMenu: MeetingDropDownEnum) => {
      if (['탈퇴', '삭제'].includes(currentMenu)) {
        escapePopup();
        return;
      }
      toMemberCallbackRef(meeting.meetingId);
    },
    [meeting.meetingId, toMemberCallbackRef],
  );

  return (
    <CardWrapper>
      <CardThumbnail src={`https://placehold.co/72/${meetingId}`} alt={name} />
      <CardHeader>
        <MeetingCardDropDown meetingId={meetingId} authority={authority} onEscape={onEscape} />
        <Button variant="dark" size="icon" rounded="full" onClick={escapePopup}>
          <XIcon />
        </Button>
      </CardHeader>
      <div
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <CardTitle>{name}</CardTitle>
        <div
          className={sprinkles({
            display: 'flex',
            alignItems: 'center',
            gap: 'small',
          })}
        >
          <button
            className={sprinkles({
              display: 'flex',
              alignItems: 'center',
            })}
            onClick={() => setBookmark((prev) => !prev)}
          >
            <BookMarkIcon color={bookmark ? 'yellow' : globalVars.color.neutral[20]} />
          </button>
          <Button size="small" rounded="small" asChild>
            <Link href="/schedule/create">일정 생성</Link>
          </Button>
        </div>
      </div>
      <CardDescription>{explanation}</CardDescription>
      <CardTagsWrapper>
        <NameTag userRole="limit">키워드</NameTag>
        <NameTag>사이드 프로젝트</NameTag>
        <NameTag>포트폴리오</NameTag>
      </CardTagsWrapper>
      <CardTagsWrapper>
        <NameTag userRole="limit">{meeting.limit}명</NameTag>
        {meeting.members.map((member, index) => (
          <NameTag
            key={member.memberId}
            name={member.username}
            userRole={getUserRoleForTags(member.authority)}
            src={member.thumbnail || `https://placehold.co/30/png`}
            onClick={() => toMemberCard(member.memberId)}
          >
            {member.username}
          </NameTag>
        ))}
      </CardTagsWrapper>
      <CardTagsWrapper>
        <NameTag userRole="limit">모임코드</NameTag>
        <div>{meetingId}</div>
        <NameTag onClick={() => copyText({ text: meetingId })}>복사</NameTag>
      </CardTagsWrapper>
    </CardWrapper>
  );
}

/**
 * 팝업으로 표시되는 모임 카드
 */
export function MeetingPopupCardContentErrorFallback({ refetch }: { refetch?: () => void }) {
  return (
    <CardWrapper>
      <CardThumbnail />
      <CardHeader>
        <Button variant="dark" size="icon" rounded="full" onClick={escapePopup}>
          <XIcon />
        </Button>
      </CardHeader>
      <div
        className={sprinkles({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <CardTitle>모임 정보 불러오기 실패</CardTitle>
        <div
          className={sprinkles({
            display: 'flex',
            alignItems: 'center',
            gap: 'small',
          })}
        >
          <button
            className={sprinkles({
              display: 'flex',
              alignItems: 'center',
            })}
          >
            <BookMarkIcon color={globalVars.color.neutral[20]} />
          </button>
          <Button size="small" rounded="small" onClick={refetch}>
            재요청
          </Button>
        </div>
      </div>
      <CardDescription>유저 정보를 불러올 수 없습니다. 우측 버튼을 눌러서 정보를 재요청해주세요.</CardDescription>
      <CardTagsWrapper>
        <NameTag userRole="limit">0명</NameTag>
        <NameTag>...</NameTag>
        <NameTag>...</NameTag>
      </CardTagsWrapper>
      <CardTagsWrapper>
        <NameTag userRole="limit">모임코드</NameTag>
        <div>...</div>
        <NameTag disabled>복사</NameTag>
      </CardTagsWrapper>
    </CardWrapper>
  );
}

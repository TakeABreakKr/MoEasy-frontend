import { useState } from 'react';
import Link from 'next/link';

import { MeetingType } from '@/entities/meeting/api';
import { useQuery } from '@/shared/hooks/use-query';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';
import { escapePopup, getUserRoleForTags, toPopupCard } from '@/widget/meeting/utils';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { BookMarkIcon, XIcon } from '@moeasy/storybook/ui/icon';
import { NameTag } from '@moeasy/storybook/ui/tag';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { MeetingCardDropDown } from '../dropdown/v2';

import * as styles from '../card.css';

export function PopupCard({ meetingId }: { meetingId: string | null }) {
  const { data, loading, error, refetch } = useQuery<MeetingType>({ queryURL: `mock/meeting/${meetingId || ''}` });

  if (loading) return <div>loading...</div>;
  if (error) return <PopupCardContentErrorFallback refetch={refetch} />;
  if (data) return <PopupCardContent meeting={data} />;
}

/**
 * 팝업으로 표시되는 모임 카드
 */
export function PopupCardContent({ meeting }: { meeting: MeetingType }) {
  const { meetingId, name, authority = 'MANAGER', explanation } = meeting;
  const [bookmark, setBookmark] = useState(false);

  return (
    <div className={styles.popupOverlay}>
      <CardWrapper>
        <CardThumbnail src={`https://via.placeholder.com/72/${meetingId}`} alt={name} />
        <CardHeader>
          <MeetingCardDropDown authority={authority} />
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
          <CardMembersInPopup meeting={meeting} />
        </CardTagsWrapper>
        <CardTagsWrapper>
          <NameTag userRole="limit">모임코드</NameTag>
          <div>{meetingId}</div>
          <NameTag onClick={() => copyText({ text: meetingId })}>복사</NameTag>
        </CardTagsWrapper>
      </CardWrapper>
    </div>
  );
}

/**
 * 팝업으로 표시되는 모임 카드
 */
export function PopupCardContentErrorFallback({ refetch }: { refetch: () => void }) {
  return (
    <div className={styles.popupOverlay}>
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
          <NameTag userRole="limit">0</NameTag>
          <NameTag>...</NameTag>
          <NameTag>...</NameTag>
        </CardTagsWrapper>
        <CardTagsWrapper>
          <NameTag userRole="limit">모임코드</NameTag>
          <div>...</div>
          <NameTag disabled>복사</NameTag>
        </CardTagsWrapper>
      </CardWrapper>
    </div>
  );
}

export function CardMembersInPopup({ meeting }: { meeting: MeetingType }) {
  return (
    <>
      <NameTag userRole="limit">{meeting.limit}명</NameTag>
      {meeting.members.map((member, index) => (
        <NameTag
          key={member.memberId}
          name={member.username}
          userRole={getUserRoleForTags(member.authority)}
          src={member.thumbnail || `https://via.placeholder.com/30/${index + 1}`}
          onClick={() => toPopupCard({ meetingId: meeting.meetingId, memberId: member.memberId })}
        >
          {member.username}
        </NameTag>
      ))}
    </>
  );
}

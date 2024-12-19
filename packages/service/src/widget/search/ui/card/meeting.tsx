import { HTMLAttributes, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { MeetingType } from '@/entities/meeting/api';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { BookMarkIcon } from '@moeasy/storybook/ui/icon';
import { NameTag } from '@moeasy/storybook/ui/tag';
import { Text } from '@moeasy/storybook/ui/text';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { searchKeywordAction } from '../../lib';

export type SearchMeetingCardProps = {
  meeting: MeetingType;
  /** keyword를 props로 받으면 해당 키워드를 볼드체로 바꾸고 그렇지 않으면 키워드가 표시되지 않음. */
  keyword?: string;
  exposeCode?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * 키워드로 검색된 검색화면에서 볼 수 있는 일반 모임 카드
 */
export function SearchMeetingCard({ className, meeting, keyword, exposeCode, ...props }: SearchMeetingCardProps) {
  const { meetingId, name, explanation } = meeting;
  const [bookmark, setBookmark] = useState(false);
  const searchParams = useSearchParams();
  const searchKeyword = (keyword: string) => {
    searchKeywordAction({ keyword }, searchParams);
  };
  const moveToPopup = () => {
    searchKeywordAction({ meetingId }, searchParams);
  };
  return (
    <CardWrapper data-meeting-index={meetingId} {...props} hoverEffect>
      <CardThumbnail src={meeting.thumbnail} alt={name} />
      <CardHeader />
      <div>
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
            <Button size="small" rounded="small" onClick={moveToPopup}>
              모임 가입
            </Button>
          </div>
        </div>
        {exposeCode && <Text label="medium">{meetingId}</Text>}
        <CardDescription>{explanation}</CardDescription>
      </div>
      {keyword && (
        <CardTagsWrapper>
          <NameTag userRole="limit">키워드</NameTag>
          {meeting.keywords.map((_keyword) => (
            <NameTag key={_keyword} name={_keyword} onClick={() => searchKeyword(_keyword)}>
              {_keyword === keyword ? <Text semibold>{_keyword}</Text> : _keyword}
            </NameTag>
          ))}
        </CardTagsWrapper>
      )}
    </CardWrapper>
  );
}

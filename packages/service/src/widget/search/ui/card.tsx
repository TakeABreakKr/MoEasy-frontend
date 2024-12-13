import { HTMLAttributes } from 'react';

import { MeetingType } from '@/entities/meeting/api';

import {
  CardDescription,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { NameTag } from '@moeasy/storybook/ui/tag';
import { Text } from '@moeasy/storybook/ui/text';

export type SearchMeetingCardProps = {
  meeting: MeetingType;
  /** keyword를 props로 받으면 해당 키워드를 볼드체로 바꾸고 그렇지 않으면 키워드가 표시되지 않음. */
  keyword?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * 검색화면에서 볼 수 있는 일반 모임 카드
 */
export function SearchMeetingCard({ className, meeting, keyword, ...props }: SearchMeetingCardProps) {
  const { meetingId, name, explanation } = meeting;
  return (
    <CardWrapper data-meeting-index={meetingId} {...props} hoverEffect>
      <CardThumbnail src={meeting.thumbnail} alt={name} />
      <div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{explanation}</CardDescription>
      </div>
      <CardTagsWrapper>
        <NameTag userRole="limit">키워드</NameTag>
        {keyword &&
          meeting.keywords.map((_keyword) => (
            <NameTag key={_keyword} name={_keyword}>
              {_keyword === keyword ? <Text semibold>{_keyword}</Text> : _keyword}
            </NameTag>
          ))}
        {/* <NameTag onClick={() => toPopupCard({ meetingId: meeting.meetingId })}>더 보기</NameTag> */}
      </CardTagsWrapper>
    </CardWrapper>
  );
}

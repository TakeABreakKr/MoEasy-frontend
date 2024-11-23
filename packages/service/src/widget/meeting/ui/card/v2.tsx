import { HTMLAttributes } from 'react';

import { MeetingType } from '@/entities/meeting/api';

import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { NameTag } from '@moeasy/storybook/ui/tag';

import { getUserRoleForTags, toPopupCard } from '../../utils';

import { MeetingCardDropDown } from './dropdown/v2';

export type CardProps = {
  meeting: MeetingType;
} & HTMLAttributes<HTMLDivElement>;

/**
 * 팝업이 아닌 메인 화면에서 볼 수 있는 일반 모임 카드
 */
export function MeetingCard({ className, meeting, ...props }: CardProps) {
  const { meetingId, name, authority = 'MANAGER', explanation } = meeting;
  return (
    <CardWrapper data-meeting-index={meetingId} {...props} hoverEffect>
      <CardThumbnail src={meeting.thumbnail} alt={name} />
      <CardHeader>
        <MeetingCardDropDown meetingId={meetingId} authority={authority} />
      </CardHeader>
      <div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{explanation}</CardDescription>
      </div>
      <CardTagsWrapper>
        <NameTag userRole="limit">{meeting.limit}명</NameTag>
        {meeting.members.slice(0, 5).map((member, index) => (
          <NameTag
            key={member.memberId}
            name={member.username}
            userRole={getUserRoleForTags(member.authority)}
            src={member.thumbnail}
            onClick={() => toPopupCard({ memberId: member.memberId })}
          >
            {member.username}
          </NameTag>
        ))}
        <NameTag onClick={() => toPopupCard({ meetingId: meeting.meetingId })}>더 보기</NameTag>
      </CardTagsWrapper>
    </CardWrapper>
  );
}

import { HTMLAttributes } from 'react';

import { MemberType } from '@/entities/member/api/index';

import {
  CardDescription,
  CardHeader,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';

export type SearchMeetingCardProps = {
  member: MemberType;
} & HTMLAttributes<HTMLDivElement>;

/**
 * 키워드로 검색된 검색화면에서 볼 수 있는 유저 카드
 */
export function SearchMemberCard({ className, member, ...props }: SearchMeetingCardProps) {
  const { memberId, username, explanation, thumbnail } = member;
  return (
    <CardWrapper data-member-index={memberId} {...props} hoverEffect>
      <CardThumbnail src={thumbnail} alt={username} />
      <CardHeader />
      <div>
        <CardTitle>{username}</CardTitle>
        <CardDescription>{explanation}</CardDescription>
      </div>
    </CardWrapper>
  );
}

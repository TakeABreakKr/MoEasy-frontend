import { HTMLAttributes, useReducer } from 'react';

import { MemberType } from '@/entities/member/api/index';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { Text } from '@moeasy/storybook/ui/text';

export type SearchMeetingCardProps = {
  member: MemberType;
  exposeCode?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * 키워드로 검색된 검색화면에서 볼 수 있는 유저 카드
 */
export function SearchMemberCard({ className, member, exposeCode, ...props }: SearchMeetingCardProps) {
  const { memberId, username, explanation, thumbnail } = member;
  const [isFollow, toggle] = useReducer((e) => !e, false);
  return (
    <CardWrapper data-member-index={memberId} {...props} hoverEffect>
      <CardThumbnail src={thumbnail} alt={username} />
      <CardHeader />
      <div>
        <div
          className={sprinkles({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          })}
        >
          <CardTitle>{username}</CardTitle>
          <Button size="small" rounded="small" variant={isFollow ? 'primary' : 'dark'} onClick={toggle}>
            {isFollow ? '팔로잉' : '팔로우'}
          </Button>
        </div>
        {exposeCode && <Text label="medium">{memberId}</Text>}
        <CardDescription>{explanation}</CardDescription>
      </div>
    </CardWrapper>
  );
}

import { HTMLAttributes } from 'react';

import { components } from '@/shared/api/my-schema';

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
import { Separator } from '@moeasy/storybook/ui/separator';

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
  authority,
  ...props
}: CardProps) {
  return (
    <CardWrapper data-meeting-index={idx} {...props}>
      <CardThumbnail src={`https://via.placeholder.com/72/${idx}`} alt={title} />
      {<TriggerRenderByAuthority authority={authority} />}
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
          <CardTriggerItem padding align="center">
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
          <CardTriggerItem padding align="center">
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

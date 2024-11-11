import { HTMLAttributes, useState } from 'react';
import Link from 'next/link';

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
import { Modal, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import { Separator } from '@moeasy/storybook/ui/separator';

import { MeetingDeleteModal } from './delete';
import { MeetingInviteModal } from './invite';
import { MeetingWithdrawal } from './withdrawal';

import * as styles from './card.css';

export type MeetingType = components['schemas']['MeetingListMeetingDto'];
export type MeetingAuthority = MeetingType['authority'];

/** 매니저/관리자 권한인지 여부 */
export const isManagerAutorized = (autority?: MeetingAuthority) =>
  !!autority && (['MANAGER', 'OWNER'] as Array<MeetingAuthority>).includes(autority);

export type CardProps = {
  idx: number | string;
  count?: number;
  maxCount?: number;
  members?: CardMember[];
} & MeetingType &
  HTMLAttributes<HTMLDivElement>;

export function Card({
  idx,
  name = 'title',
  className,
  explanation = '',
  count = 0,
  maxCount = 10,
  members = [],
  authority = 'OWNER',
  ...props
}: CardProps) {
  return (
    <CardWrapper data-meeting-index={idx} {...props}>
      <CardThumbnail src={`https://via.placeholder.com/72/${idx}`} alt={name} />
      <TriggerRenderByAuthority authority={authority} />
      <div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{explanation}</CardDescription>
      </div>
      <CardMembers members={members} />
    </CardWrapper>
  );
}

const MeetingDropDownItems = ['수정', '초대', '탈퇴', '삭제'] as const;
type MeetingDropDownEnum = (typeof MeetingDropDownItems)[number];

function TriggerRenderByAuthority({ authority }: { authority?: MeetingAuthority }) {
  const [menu, setMenu] = useState<MeetingDropDownEnum>('수정');
  const changeMenu = (key: MeetingDropDownEnum) => () => setMenu(key);
  const isManager = isManagerAutorized(authority);

  return (
    <Modal>
      <CardTrigger>
        {isManager && (
          <>
            <CardTriggerItem padding align="center" asChild>
              <Link href="/meeting/modify">수정</Link>
            </CardTriggerItem>
            <Separator direction="horizontal" color="#cfcfcf" />
          </>
        )}
        <CardTriggerItem padding align="center" onClick={changeMenu('초대')} asChild>
          <ModalTrigger>초대하기</ModalTrigger>
        </CardTriggerItem>
        <Separator direction="horizontal" color="#cfcfcf" />
        <CardTriggerItem padding align="center" notice onClick={changeMenu('탈퇴')} asChild>
          <ModalTrigger>탈퇴하기</ModalTrigger>
        </CardTriggerItem>
        {isManager && (
          <>
            <Separator direction="horizontal" color="#cfcfcf" />
            <CardTriggerItem padding align="center" notice onClick={changeMenu('삭제')} asChild>
              <ModalTrigger>삭제</ModalTrigger>
            </CardTriggerItem>
          </>
        )}
      </CardTrigger>
      <ModalPortal>
        <ModalOverlay className={styles.popupOverlay}>
          {menu === '초대' && <MeetingInviteModal />}
          {menu === '탈퇴' && <MeetingWithdrawal authority={authority} />}
          {menu === '삭제' && <MeetingDeleteModal />}
        </ModalOverlay>
      </ModalPortal>
    </Modal>
  );
}

import { HTMLAttributes, useState } from 'react';
import Link from 'next/link';

import { components } from '@/shared/api/my-schema';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardMember,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardTrigger,
  CardTriggerItem,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { Modal, ModalClose, ModalContent, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import { BookMarkIcon, XIcon } from '@moeasy/storybook/ui/icon';
import { Separator } from '@moeasy/storybook/ui/separator';
import { NameTag } from '@moeasy/storybook/ui/tag';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

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
  limit?: number;
  members?: CardMember[];
  team: MeetingType;
} & HTMLAttributes<HTMLDivElement>;

/**
 * 팝업이 아닌 메인 화면에서 볼 수 있는 일반 모임 카드
 */
export function Card({ className, limit = 5, members = [], team, ...props }: CardProps) {
  const { meetingId, name, authority = 'MANAGER', explanation } = team;
  return (
    <CardWrapper data-meeting-index={meetingId} {...props}>
      <CardThumbnail src={`https://via.placeholder.com/72/${meetingId}`} alt={name} />
      <CardHeader>
        <TriggerRenderByAuthority authority={authority} />
      </CardHeader>
      <div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{explanation}</CardDescription>
      </div>
      <CardTagsWrapper>
        <CardMembers limit={limit} members={members} meeting={team} />
      </CardTagsWrapper>
    </CardWrapper>
  );
}

/**
 * 팝업으로 표시되는 모임 카드
 */
function PopupCard({ meeting }: { meeting: MeetingType }) {
  const { meetingId, name, authority = 'MANAGER', explanation } = meeting;
  const [bookmark, setBookmark] = useState(false);
  return (
    <ModalOverlay className={styles.popupOverlay}>
      <CardWrapper asChild>
        <ModalContent>
          <CardThumbnail src={`https://via.placeholder.com/72/${meetingId}`} alt={name} />
          <CardHeader>
            <TriggerRenderByAuthority authority={authority} />
            <Button variant="dark" size="icon" rounded="full" asChild>
              <ModalClose>
                <XIcon />
              </ModalClose>
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
            <CardMembers members={[{ name: 'JAMES' }]} />
          </CardTagsWrapper>
          <CardTagsWrapper>
            <NameTag userRole="limit">모임코드</NameTag>
            <div>{meetingId}</div>
            <NameTag onClick={() => copyText({ text: meetingId })}>복사</NameTag>
          </CardTagsWrapper>
        </ModalContent>
      </CardWrapper>
    </ModalOverlay>
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

export function CardMembers({
  limit = 5,
  members,
  meeting,
}: {
  limit?: number;
  members: CardMember[];
  meeting?: MeetingType;
}) {
  return (
    <>
      <NameTag userRole="limit">{limit}명</NameTag>
      {members?.map((member, index) => (
        <Modal key={member.name}>
          <ModalTrigger asChild>
            <NameTag
              key={`${index}-${name}`}
              name={member.name}
              userRole={member.userRole}
              src={member.avatar || `https://via.placeholder.com/30/${index + 1}`}
            >
              {member.name}
            </NameTag>
          </ModalTrigger>
          <ModalPortal>
            <UserCard member={member} />
          </ModalPortal>
        </Modal>
      )) ?? null}

      {meeting && (
        <Modal>
          <ModalTrigger asChild>
            <NameTag>더 보기</NameTag>
          </ModalTrigger>
          <ModalPortal>
            <PopupCard meeting={meeting} />
          </ModalPortal>
        </Modal>
      )}
    </>
  );
}

export function UserCard({ member }: { member: CardMember }) {
  const { name, userRole } = member;
  const parsedRole: MeetingAuthority = userRole === 'admin' ? 'MANAGER' : 'MEMBER';
  const explanation = '자기소개 자기소개';
  const userCode = `G-${name}`;
  return (
    <ModalOverlay className={styles.popupOverlay}>
      <CardWrapper asChild>
        <ModalContent>
          <CardThumbnail src={`https://via.placeholder.com/72/${userCode}`} alt={name || 'thumbnail'} />
          <CardHeader>
            <TriggerRenderByAuthority authority={parsedRole} />
            <Button variant="dark" size="icon" rounded="full" asChild>
              <ModalClose>
                <XIcon />
              </ModalClose>
            </Button>
          </CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{explanation}</CardDescription>
          <button className={styles.userFollow}>팔로우</button>
          <CardTagsWrapper>
            <NameTag userRole="limit">친구코드</NameTag>
            <div>{userCode}</div>
            <NameTag onClick={() => copyText({ text: userCode })}>복사</NameTag>
          </CardTagsWrapper>
        </ModalContent>
      </CardWrapper>
    </ModalOverlay>
  );
}

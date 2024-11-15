import { Dispatch, HTMLAttributes, SetStateAction, useState } from 'react';
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
import { Toggle } from '@moeasy/storybook/ui/toggle';
import { globalVars } from '@moeasy/storybook/utils/styles/global.css';

import { MeetingDeleteModal } from './delete';
import { MeetingExpel } from './expel';
import { MeetingInviteModal } from './invite';
import { MeetingWithdrawal } from './withdrawal';

import * as styles from './card.css';

export type MeetingType = components['schemas']['MeetingListMeetingDto'];
export type MeetingAuthority = MeetingType['authority'];

/** 매니저/관리자 권한인지 여부 */
export const isManagerAutorized = (authority?: MeetingAuthority) =>
  !!authority && (['MANAGER', 'OWNER'] as Array<MeetingAuthority>).includes(authority);

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
        <MeetingCardDropDown authority={authority} />
      </CardHeader>
      <div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{explanation}</CardDescription>
      </div>
      <CardTagsWrapper>
        <CardMembers limit={limit} members={members} meeting={team} authority={authority} />
      </CardTagsWrapper>
    </CardWrapper>
  );
}

const MeetingDropDownItems = ['수정', '초대', '탈퇴', '삭제'] as const;
type MeetingDropDownEnum = (typeof MeetingDropDownItems)[number];

function MeetingCardDropDown({ authority }: { authority?: MeetingAuthority }) {
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

export type MeetingCardPopupState = { popupType: 'MEETING' } | { popupType: 'MEMBER'; member: CardMember } | null;

export function CardMembers({
  limit = 5,
  members,
  meeting,
  authority,
}: {
  limit?: number;
  members: CardMember[];
  meeting?: MeetingType;
  authority?: MeetingAuthority;
}) {
  const [cardPopupState, setCardPopupState] = useState<MeetingCardPopupState>(() => null);

  return (
    <Modal>
      <NameTag userRole="limit">{limit}명</NameTag>
      {members?.map((member, index) => (
        <ModalTrigger key={member.name} asChild>
          <NameTag
            key={`${index}-${member.name}`}
            name={member.name}
            userRole={member.userRole}
            src={member.avatar || `https://via.placeholder.com/30/${index + 1}`}
            onClick={() => setCardPopupState({ popupType: 'MEMBER', member: member })}
          >
            {member.name}
          </NameTag>
        </ModalTrigger>
      )) ?? null}

      {meeting && (
        <ModalTrigger asChild>
          <NameTag onClick={() => setCardPopupState({ popupType: 'MEETING' })}>더 보기</NameTag>
        </ModalTrigger>
      )}
      <ModalPortal>
        <ModalOverlay className={styles.popupOverlay}>
          <CardWrapper asChild>
            <ModalContent>
              {cardPopupState?.popupType === 'MEMBER' && (
                <UserCard member={cardPopupState.member} setCardPopupState={setCardPopupState} authority={authority} />
              )}
              {meeting && cardPopupState?.popupType === 'MEETING' && (
                <PopupCard meeting={meeting} setCardPopupState={setCardPopupState} />
              )}
            </ModalContent>
          </CardWrapper>
        </ModalOverlay>
      </ModalPortal>
    </Modal>
  );
}

export function CardMembersInPopup({
  limit = 5,
  members,
  setCardPopupState,
}: {
  limit?: number;
  members: CardMember[];
  setCardPopupState: Dispatch<SetStateAction<MeetingCardPopupState>>;
}) {
  return (
    <>
      <NameTag userRole="limit">{limit}명</NameTag>
      {members?.map((member, index) => (
        <ModalTrigger key={member.name} asChild>
          <NameTag
            key={`${index}-${name}`}
            name={member.name}
            userRole={member.userRole}
            src={member.avatar || `https://via.placeholder.com/30/${index + 1}`}
            onClick={() => setCardPopupState({ popupType: 'MEMBER', member: member })}
          >
            {member.name}
          </NameTag>
        </ModalTrigger>
      )) ?? null}
    </>
  );
}

/**
 * 팝업으로 표시되는 모임 카드
 */
function PopupCard({
  meeting,
  setCardPopupState,
}: {
  meeting: MeetingType;
  setCardPopupState: Dispatch<SetStateAction<MeetingCardPopupState>>;
}) {
  const { meetingId, name, authority = 'MANAGER', explanation } = meeting;
  const [bookmark, setBookmark] = useState(false);
  return (
    <>
      <CardThumbnail src={`https://via.placeholder.com/72/${meetingId}`} alt={name} />
      <CardHeader>
        <MeetingCardDropDown authority={authority} />
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
        <CardMembersInPopup members={[{ name: 'JAMES' }]} setCardPopupState={setCardPopupState} />
      </CardTagsWrapper>
      <CardTagsWrapper>
        <NameTag userRole="limit">모임코드</NameTag>
        <div>{meetingId}</div>
        <NameTag onClick={() => copyText({ text: meetingId })}>복사</NameTag>
      </CardTagsWrapper>
    </>
  );
}

export function UserCard({
  member,
  setCardPopupState,
  authority,
}: {
  member: CardMember;
  setCardPopupState: Dispatch<SetStateAction<MeetingCardPopupState>>;
  authority?: MeetingAuthority;
}) {
  const { name, userRole } = member;
  const parsedRole: MeetingAuthority = userRole === 'admin' ? 'MANAGER' : 'MEMBER';
  const explanation = '자기소개 자기소개';
  const userCode = `G-${name}`;
  const isManager = isManagerAutorized(authority);

  return (
    <>
      <CardThumbnail src={`https://via.placeholder.com/72/${userCode}`} alt={name || 'thumbnail'} />
      <CardHeader>
        <UserCardDropDown member={member} setCardPopupState={setCardPopupState} />
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
      <CardTagsWrapper
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        {isManager && (
          <span
            className={sprinkles({
              display: 'flex',
              gap: 'small',
              alignItems: 'center',
            })}
          >
            매니저 설정
            <Toggle />
          </span>
        )}
        <button onClick={() => setCardPopupState({ popupType: 'MEETING' })}>&lt;&lt; 뒤로가기</button>
      </CardTagsWrapper>
    </>
  );
}

const UserCardDropDownItems = ['퇴장'] as const;
type UserCardDropDownEnum = (typeof UserCardDropDownItems)[number];

function UserCardDropDown({
  member,
  setCardPopupState,
}: {
  member: CardMember;
  setCardPopupState: Dispatch<SetStateAction<MeetingCardPopupState>>;
}) {
  const [menu, setMenu] = useState<UserCardDropDownEnum>('퇴장');
  const changeMenu = (key: UserCardDropDownEnum) => () => setMenu(key);

  return (
    <Modal>
      <CardTrigger>
        <CardTriggerItem padding align="center" onClick={changeMenu('퇴장')} asChild>
          <ModalTrigger>강제퇴장</ModalTrigger>
        </CardTriggerItem>
      </CardTrigger>
      <ModalPortal>
        <ModalOverlay className={styles.popupOverlay}>
          {menu === '퇴장' && <MeetingExpel memberName={member.name} setCardPopupState={setCardPopupState} />}
        </ModalOverlay>
      </ModalPortal>
    </Modal>
  );
}

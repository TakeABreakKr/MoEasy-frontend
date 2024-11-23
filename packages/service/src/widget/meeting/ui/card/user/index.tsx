import { useState } from 'react';

import { MeetingAuthority } from '@/entities';
import { MemberType } from '@/entities/member/api';
import { useQuery } from '@/shared/hooks/use-query';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';
import { escapePopup, isIdValid, isManagerAutorized } from '@/widget/meeting/utils';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardTrigger,
  CardTriggerItem,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import { Modal, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import { ChevronDown, XIcon } from '@moeasy/storybook/ui/icon';
import { NameTag } from '@moeasy/storybook/ui/tag';
import { Toggle } from '@moeasy/storybook/ui/toggle';

import { MeetingExpel } from '../expel';

import * as styles from '../card.css';

export function UserCard({
  memberId,
  meetingId,
  authority,
}: {
  memberId: string | null;
  meetingId?: string | null;
  /** 현재 창의 user의 authority가 아닌 사용자의 authority */
  authority?: MeetingAuthority;
}) {
  const [step, setStep] = useState(0);
  const toNextStep = () => setStep(1);
  const toPrevStep = () => setStep(0);
  const { data, loading, error, refetch } = useQuery<MemberType>({ queryURL: `/mock/member/${memberId || ''}` });

  let renderComponent: React.ReactNode;
  if (loading) renderComponent = <div>loading...</div>;
  if (error) renderComponent = <UserCardErrorFallback refetch={refetch} fromOutside={!isIdValid(meetingId)} />;
  if (data) {
    if (step === 0)
      renderComponent = (
        <UserCardFirstStep
          member={data}
          authority={authority}
          fromOutside={!isIdValid(meetingId)}
          toNextStep={toNextStep}
        />
      );
    if (step === 1) {
      renderComponent = <UserCardLastStep member={data} toPrevStep={toPrevStep} />;
    }
  }
  return (
    <div className={styles.popupOverlay}>
      <CardWrapper>{renderComponent}</CardWrapper>
    </div>
  );
}

function UserCardFirstStep({
  member,
  authority: userAuthority,
  fromOutside,
  toNextStep,
}: {
  member: MemberType;
  /** 현재 창의 user의 authority가 아닌 사용자의 authority */
  authority?: MeetingAuthority;
  /** 내부가 아닌 외부에서 유저 정보로 진입 시 뒤로가기 버튼 제거 */
  fromOutside?: boolean;
  toNextStep: () => void;
}) {
  const { memberId, username, authority, thumbnail } = member;
  const [parsedRole, toggleParseRole] = useState<MeetingAuthority>(authority);
  const explanation = '자기소개 자기소개';
  const isManager = isManagerAutorized(userAuthority);

  return (
    <>
      <CardThumbnail as="button" onThumbnailClick={toNextStep} src={thumbnail} alt={username || 'thumbnail'} />
      <CardHeader>
        <UserCardDropDown member={member} />
        <Button variant="dark" size="icon" rounded="full" onClick={escapePopup}>
          <XIcon />
        </Button>
      </CardHeader>
      <CardTitle>{username}</CardTitle>
      <CardDescription>{explanation}</CardDescription>
      <button className={styles.userFollow}>팔로우</button>
      <CardTagsWrapper>
        <NameTag userRole="limit">친구코드</NameTag>
        <div>{memberId}</div>
        <NameTag onClick={() => copyText({ text: memberId })}>복사</NameTag>
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
            <Toggle
              defaultChecked={parsedRole === 'MANAGER'}
              onToggleChange={(v) => {
                toggleParseRole(v ? 'MANAGER' : 'MEMBER');
              }}
            />
          </span>
        )}
        {!fromOutside && (
          <button
            className={sprinkles({
              display: 'flex',
              gap: 'xsmall',
              alignItems: 'center',
            })}
            onClick={escapePopup}
          >
            <ChevronDown height={6} transform="rotate(90)" />
            뒤로가기
          </button>
        )}
      </CardTagsWrapper>
    </>
  );
}

function UserCardLastStep({ member, toPrevStep }: { member: MemberType; toPrevStep: () => void }) {
  const { memberId, username, thumbnail } = member;
  return (
    <>
      <CardThumbnail as="button" onThumbnailClick={toPrevStep} src={thumbnail} alt={memberId || 'thumbnail'} />
      <CardHeader>
        <Button variant="dark" size="icon" rounded="full" onClick={escapePopup}>
          <XIcon />
        </Button>
      </CardHeader>
      <CardTitle>{username}</CardTitle>
      <div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
        <div className={styles.userHistoryWrapper}>
          <div className={styles.userhistory}>Kim &gt; Kim moeasy 닉네임이 변경되었습니다.</div>
          <div className={styles.userhistoryDate}>2024.03.20</div>
        </div>
      </div>
      <CardTagsWrapper className={sprinkles({ justifyContent: 'flex-end' })}>
        <button
          className={sprinkles({
            display: 'flex',
            gap: 'xsmall',
            alignItems: 'center',
          })}
          onClick={toPrevStep}
        >
          <ChevronDown height={6} transform="rotate(90)" />
          뒤로가기
        </button>
      </CardTagsWrapper>
    </>
  );
}

const UserCardDropDownItems = ['퇴장'] as const;
type UserCardDropDownEnum = (typeof UserCardDropDownItems)[number];

function UserCardDropDown({ member }: { member: MemberType }) {
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
          {menu === '퇴장' && <MeetingExpel memberName={member.username} />}
        </ModalOverlay>
      </ModalPortal>
    </Modal>
  );
}

function UserCardErrorFallback({ refetch, fromOutside }: { refetch: () => void; fromOutside?: boolean }) {
  return (
    <>
      <CardThumbnail />
      <CardHeader>
        <Button variant="dark" size="icon" rounded="full" onClick={escapePopup}>
          <XIcon />
        </Button>
      </CardHeader>
      <CardTitle>유저 정보 불러오기 실패</CardTitle>
      <CardDescription>유저 정보를 불러올 수 없습니다. 다시 시도해주세요.</CardDescription>
      <button className={styles.userFollow} onClick={refetch}>
        재시도
      </button>
      <CardTagsWrapper>
        <NameTag userRole="limit">친구코드</NameTag>
        <div>...</div>
        <NameTag>복사</NameTag>
      </CardTagsWrapper>
      <CardTagsWrapper
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        {!fromOutside && (
          <button
            className={sprinkles({
              display: 'flex',
              gap: 'xsmall',
              alignItems: 'center',
            })}
            onClick={escapePopup}
          >
            <ChevronDown height={6} transform="rotate(90)" />
            뒤로가기
          </button>
        )}
      </CardTagsWrapper>
    </>
  );
}

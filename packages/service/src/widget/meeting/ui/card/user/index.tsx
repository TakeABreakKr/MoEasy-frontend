import { Dispatch, SetStateAction, useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';
import { isManagerAutorized } from '@/widget/meeting/utils';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardTrigger,
  CardTriggerItem,
} from '@moeasy/storybook/ui/card/compound-card';
import { Modal, ModalClose, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import { ChevronDown, XIcon } from '@moeasy/storybook/ui/icon';
import { NameTag } from '@moeasy/storybook/ui/tag';
import { Toggle } from '@moeasy/storybook/ui/toggle';

import { CardMember, MeetingAuthority } from '../../../types';
import { MeetingExpel } from '../expel';

import * as styles from '../card.css';

export type MeetingCardPopupState =
  | { popupType: 'MEETING'; fromOutside?: boolean }
  | { popupType: 'MEMBER'; fromOutside?: boolean; member: CardMember }
  | null;

export function UserCard({
  member,
  setCardPopupState,
  authority,
  fromOutside,
}: {
  member: CardMember;
  setCardPopupState: Dispatch<SetStateAction<MeetingCardPopupState>>;
  authority?: MeetingAuthority;
  /** 내부가 아닌 외부에서 유저 정보로 진입 시 뒤로가기 버튼 제거 */
  fromOutside?: boolean;
}) {
  const [step, setStep] = useState(0);
  const toNextStep = () => setStep(1);
  const toPrevStep = () => setStep(0);

  return (
    <>
      {step === 0 && (
        <UserCardFirstStep
          member={member}
          setCardPopupState={setCardPopupState}
          authority={authority}
          fromOutside={fromOutside}
          toNextStep={toNextStep}
        />
      )}
      {step === 1 && <UserCardLastStep member={member} toPrevStep={toPrevStep} />}
    </>
  );
}

function UserCardFirstStep({
  member,
  setCardPopupState,
  authority,
  fromOutside,
  toNextStep,
}: {
  member: CardMember;
  setCardPopupState: Dispatch<SetStateAction<MeetingCardPopupState>>;
  authority?: MeetingAuthority;
  /** 내부가 아닌 외부에서 유저 정보로 진입 시 뒤로가기 버튼 제거 */
  fromOutside?: boolean;
  toNextStep: () => void;
}) {
  const { name, userRole } = member;
  const [parsedRole, toggleParseRole] = useState<MeetingAuthority>(() => (userRole === 'admin' ? 'MANAGER' : 'MEMBER'));
  const explanation = '자기소개 자기소개';
  const userCode = `G-${name}`;
  const isManager = isManagerAutorized(authority);

  return (
    <>
      <CardThumbnail
        as="button"
        onThumbnailClick={toNextStep}
        src={`https://via.placeholder.com/72/${userCode}`}
        alt={name || 'thumbnail'}
      />
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
            onClick={() => setCardPopupState({ popupType: 'MEETING' })}
          >
            <ChevronDown height={6} transform="rotate(90)" />
            뒤로가기
          </button>
        )}
      </CardTagsWrapper>
    </>
  );
}

function UserCardLastStep({ member, toPrevStep }: { member: CardMember; toPrevStep: () => void }) {
  const { name, userRole } = member;
  const userCode = `G-${name}`;

  return (
    <>
      <CardThumbnail
        as="button"
        onThumbnailClick={toPrevStep}
        src={`https://via.placeholder.com/72/${userCode}`}
        alt={name || 'thumbnail'}
      />
      <CardHeader>
        <Button variant="dark" size="icon" rounded="full" asChild>
          <ModalClose>
            <XIcon />
          </ModalClose>
        </Button>
      </CardHeader>
      <CardTitle>{name}</CardTitle>
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

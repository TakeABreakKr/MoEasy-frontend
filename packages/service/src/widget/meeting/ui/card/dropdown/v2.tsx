import { useEffect, useState } from 'react';
import Link from 'next/link';

import { CardTrigger, CardTriggerItem } from '@moeasy/storybook/ui/card/compound-card';
import { Modal, ModalOverlay, ModalPortal, ModalTrigger } from '@moeasy/storybook/ui/dialog';
import { Separator } from '@moeasy/storybook/ui/separator';

import { escapePopup, isManagerAutorized } from '../../../utils';
import { MeetingDeleteModal } from '../delete';
import { MeetingInviteModal } from '../invite';
import { MeetingWithdrawal } from '../withdrawal';

import * as styles from '../card.css';
import { MeetingAuthority } from '@/entities';

const MeetingDropDownItems = ['수정', '초대', '탈퇴', '삭제', '닫힘'] as const;
type MeetingDropDownEnum = (typeof MeetingDropDownItems)[number];

export function MeetingCardDropDown({ authority }: { authority?: MeetingAuthority }) {
  const [menu, setMenu] = useState<MeetingDropDownEnum>('닫힘');
  const isManager = isManagerAutorized(authority);
  const changeMenu = (key: MeetingDropDownEnum) => () => setMenu(key);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      return escapePopup;
    }
  }, [open]);

  return (
    <Modal open={open} onOpenChange={setOpen}>
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

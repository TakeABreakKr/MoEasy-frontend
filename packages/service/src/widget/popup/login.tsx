'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { ProviderUrl } from '@/shared/consts/login';
import { pushSearchParams } from '@/shared/utils/search-param';

import { useDebounceCallback } from '@moeasy/storybook/hooks/use-debounce-callback';
import { useOnEscape } from '@moeasy/storybook/hooks/use-on-escape';
import { Button } from '@moeasy/storybook/ui/button';
import { Modal, ModalContent, ModalOverlay } from '@moeasy/storybook/ui/dialog';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { DiscordIcon, LogoIconWithText, XIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import { desc, discordLogin, loginPopupSize, textContainer } from './login.css';

export function LoginPopup() {
  const searchParams = useSearchParams();
  const escapePopup = useDebounceCallback(() => window.history.back());
  useOnEscape(true, escapePopup);

  if (!searchParams.get('login')) return null;
  return (
    <Modal>
      <ModalOverlay className={modalStyles.overlay}>
        <ModalContent className={clsx(modalStyles.container({ padding: 'small' }), loginPopupSize)}>
          <div className={modalStyles.header}>
            <Button
              variant="dark"
              rounded="full"
              size="icon"
              type="button"
              onClick={() => pushSearchParams({ login: null }, searchParams)}
            >
              <XIcon />
            </Button>
          </div>
          <div className={textContainer}>
            <LogoIconWithText color="#0071FE" />
            <Text title="large">모이지에 오신 것을 환영해요!</Text>
            <span className={desc}>
              취향이 모여 특별한
              <br />
              순간을 만드는 공간을 찾아보세요
            </span>
          </div>
          <div className={modalStyles.footer}>
            <Link href={ProviderUrl.DISCORD} className={discordLogin}>
              <DiscordIcon width={32} height={32} />
              Discord 로그인
            </Link>
          </div>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}

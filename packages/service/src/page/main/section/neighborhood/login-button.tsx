'use client';

import { useSearchParams } from 'next/navigation';

import { pushSearchParams } from '@/shared/utils/search-param';

import { DiscordIcon } from '@moeasy/storybook/ui/icon';

import * as lastStyles from './last.css';

export function MainLastSectionLoginButton() {
  const searchParams = useSearchParams();
  return (
    <div className={lastStyles.container}>
      <button
        type="button"
        onClick={() => pushSearchParams({ login: 'true' }, searchParams)}
        className={lastStyles.discordIcon}
      >
        <DiscordIcon width={90} height={90} />
      </button>
      <div className={lastStyles.currentText}>
        디스코드로
        <br />
        간편하게 로그인하세요
      </div>
    </div>
  );
}

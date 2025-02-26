import Image from 'next/image';

import { MeetingAuthority } from '@/entities';
import { MemberType } from '@/entities/member/api';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { CrownIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import { isAdminAutority } from './utils';

import * as styles from './member.css';

export function MemberItem({ member }: { member: Omit<MemberType, 'explanation'> }) {
  return (
    <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'medium' })}>
      <MemberThumbnailWrapper authority={member.authority} thumbnail={member.thumbnail} />
      <Text body="medium">{member.username}</Text>
    </div>
  );
}

function MemberThumbnailWrapper({ thumbnail, authority }: { thumbnail: string; authority: MeetingAuthority }) {
  return (
    <div className={styles.memberThumbnailVariants[isAdminAutority(authority) ? authority : 'MEMBER']}>
      <Image className={styles.memberThumbnailImg} src={thumbnail} width={35} height={35} alt="userThumbnail" />
      {isAdminAutority(authority) && (
        <div className={styles.memberCrownVariants[authority]}>
          <CrownIcon />
        </div>
      )}
    </div>
  );
}

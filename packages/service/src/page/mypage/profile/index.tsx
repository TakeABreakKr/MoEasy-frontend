import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Input } from '@moeasy/storybook/ui/input';
import { Text } from '@moeasy/storybook/ui/text';

import { ProfileEdit } from './profile-edit';

import * as styles from './profile.css';

export function MyPageProfile() {
  return (
    <div className={styles.profileSection}>
      <ProfileEdit src="https://placehold.co/120/png" />
      <div className={styles.inputWrapper}>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: 'small',
            width: '100%',
          })}
        >
          <Text title="small">닉네임</Text>
          <Input className={sprinkles({ width: '100%' })} />
        </div>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: 'small',
            width: '100%',
          })}
        >
          <Text title="small">자기소개</Text>
          <Input className={sprinkles({ width: '100%' })} />
        </div>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: 'small',
            width: '100%',
          })}
        >
          <Text title="small">지역</Text>
          <Input className={sprinkles({ width: '100%' })} />
        </div>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            gap: 'small',
            width: '100%',
          })}
        >
          <Text title="small">관심사</Text>
          <Input className={sprinkles({ width: '100%' })} />
        </div>
      </div>
    </div>
  );
}

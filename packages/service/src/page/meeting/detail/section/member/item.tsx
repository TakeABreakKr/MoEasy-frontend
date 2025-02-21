import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Text } from '@moeasy/storybook/ui/text';

import * as styles from '../../meeting-detail.css';

export function MemberItem() {
  return (
    <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'medium' })}>
      <div className={styles.memberThumbnail} />
      <Text body="medium">성남시</Text>
    </div>
  );
}

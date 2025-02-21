import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { SearchIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import { MEETING_DETAIL_TAB_LIST } from '../../const';

import { MemberItem } from './item';

import * as styles from '../../meeting-detail.css';

export function MeetingDetailMember() {
  return (
    <section className={styles.memberSection}>
      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        })}
      >
        <Text title="medium" id={MEETING_DETAIL_TAB_LIST[2].key}>
          멤버 (200)
        </Text>
        <Button rounded="large" size="small">
          멤버 초대하기
        </Button>
      </div>
      <div className={styles.inputWrapper}>
        <SearchIcon />
        <input placeholder="모임 멤버를 검색해보세요." className={styles.plainInput} />
      </div>
      <div className={styles.memberContainer}>
        {Array.from({ length: 50 }, (_, index) => ({
          id: index,
        })).map((item) => (
          <MemberItem key={item.id} />
        ))}
      </div>
    </section>
  );
}

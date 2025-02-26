'use client';

import { useDeferredValue, useState } from 'react';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { SearchIcon } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import { MEETING_DETAIL_TAB_LIST } from '../../const';

import { MemberItem } from './item';

import * as styles from '../../meeting-detail.css';

const mockMembers = [
  {
    memberId: (1).toString(),
    username: '모임장',
    thumbnail: `https://placehold.co/70/png`,
    authority: 'OWNER',
  },
  ...Array.from(
    { length: 3 },
    (_, index) =>
      ({
        memberId: (index + 2).toString(),
        username: `member${index + 2}`,
        thumbnail: `https://placehold.co/70/png`,
        authority: 'MANAGER',
      }) as const,
  ),
  ...Array.from(
    { length: 50 },
    (_, index) =>
      ({
        memberId: (index + 5).toString(),
        username: '성남시',
        thumbnail: `https://placehold.co/70/png`,
        authority: 'MEMBER',
      }) as const,
  ),
] as const;

export function MeetingDetailMember() {
  const [search, setSearch] = useState('');
  const deferedKeyword = useDeferredValue(search);
  const filteredMembers = deferedKeyword
    ? mockMembers.filter((member) => member.username.includes(deferedKeyword))
    : mockMembers;
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
        <input
          placeholder="모임 멤버를 검색해보세요."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.plainInput}
        />
      </div>
      <div className={styles.memberContainer}>
        {filteredMembers.map((item) => (
          <MemberItem key={item.memberId} member={item} />
        ))}
      </div>
    </section>
  );
}

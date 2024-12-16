import { PropsWithChildren } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { MeetingType } from '@/entities/meeting/api';
import { MemberType } from '@/entities/member/api';
import { useQuery } from '@/shared/hooks/use-query';
import { plainLink } from '@/shared/style/link/index.css';
import { cardGrid } from '@/shared/style/list/list.css';

import { Text } from '@moeasy/storybook/ui/text';

import { SearchMeetingCard } from '../card/meeting';
import { SearchMemberCard } from '../card/member';

import * as styles from './template.css';

export function SearchResultByKeyword({ keyword }: { keyword: string }) {
  return (
    <>
      <SearchListTemplate title="키워드" keyword={keyword} detail="keyword">
        <SearchResultMeetingKeywordContainer keyword={keyword} detail="keyword" />
      </SearchListTemplate>
      <SearchListTemplate title="모임 이름" keyword={keyword} detail="meeting">
        <SearchResultMeetingKeywordContainer keyword={keyword} detail="meeting" />
      </SearchListTemplate>
      <SearchListTemplate title="닉네임" keyword={keyword} detail="member">
        <SearchResultMemberKeywordContainer keyword={keyword} detail="member" />
      </SearchListTemplate>
    </>
  );
}

export function SearchResultByCode({ keyword }: { keyword: string }) {
  return (
    <>
      <SearchListTemplate title="모임 코드" keyword={keyword} detail="meeting_code">
        <SearchResultMeetingKeywordContainer keyword={keyword} detail="meeting_code" />
      </SearchListTemplate>
      <SearchListTemplate title="유저 코드" keyword={keyword} detail="member_code">
        <SearchResultMemberKeywordContainer keyword={keyword} detail="member_code" />
      </SearchListTemplate>
    </>
  );
}

export function SearchListTemplate({
  title,
  keyword,
  detail,
  children,
}: PropsWithChildren<{ title: string; keyword: string; detail: string }>) {
  return (
    <div className={styles.template}>
      <div className={styles.header}>
        <Text asChild title="medium">
          <h2>{title}</h2>
        </Text>
        <Link href={`/search?keyword=${keyword}&detail=${detail}`} className={plainLink}>
          더보기 &gt;
        </Link>
      </div>
      {children}
    </div>
  );
}

export function SearchResultMeetingKeywordContainer({ keyword, detail }: { keyword: string; detail: string }) {
  const { data, loading, error, refetch } = useQuery<MeetingType[]>({
    queryURL: `mock/meeting/list?keyword=${keyword}&detail=${detail}`,
  });

  if (loading) return <Text label="medium">모임 데이터를 불러오는 중입니다.</Text>;
  if (error)
    return (
      <Text label="medium">
        모임 데이터를 불러오는데 실패했습니다. <button onClick={refetch}>재요청</button>
      </Text>
    );
  if (!loading && !error) {
    if (!data || !data.length) return <Text label="medium">검색된 모임이 없습니다.</Text>;
    return (
      <div className={clsx(cardGrid, styles.gridMargin)}>
        {data
          ?.slice(0, 4)
          .map((meeting) => <SearchMeetingCard key={meeting.meetingId} meeting={meeting} keyword={keyword} />)}
      </div>
    );
  }
}

export function SearchResultMemberKeywordContainer({ keyword, detail }: { keyword: string; detail: string }) {
  const { data, loading, error, refetch } = useQuery<MemberType[]>({
    queryURL: `mock/member/list?keyword=${keyword}&detail=${detail}`,
  });

  if (loading) return <Text label="medium">유저 데이터를 불러오는 중입니다.</Text>;
  if (error)
    return (
      <Text label="medium">
        유저 데이터를 불러오는데 실패했습니다. <button onClick={refetch}>재요청</button>
      </Text>
    );
  if (!loading && !error) {
    if (!data || !data.length) return <Text label="medium">검색된 유저가 없습니다.</Text>;
    return (
      <div className={clsx(cardGrid, styles.gridMargin)}>
        {data?.slice(0, 4).map((member) => <SearchMemberCard key={member.memberId} member={member} />)}
      </div>
    );
  }
}

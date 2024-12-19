import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
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
  const searchParam = useSearchParams();
  const filters = searchParam.getAll('filter');
  return (
    <>
      {filters.includes('keyword') && (
        <SearchListTemplate title="키워드" keyword={keyword}>
          <SearchResultMeetingKeywordContainer keyword={keyword} expostKeywords />
        </SearchListTemplate>
      )}
      {filters.includes('meeting') && (
        <SearchListTemplate title="모임 이름" keyword={keyword}>
          <SearchResultMeetingKeywordContainer name={keyword} />
        </SearchListTemplate>
      )}
      {filters.includes('member') && (
        <SearchListTemplate title="닉네임" keyword={keyword}>
          <SearchResultMemberKeywordContainer name={keyword} />
        </SearchListTemplate>
      )}
    </>
  );
}

export function SearchResultByCode({ keyword }: { keyword: string }) {
  const searchParam = useSearchParams();
  const filters = searchParam.getAll('filter');
  return (
    <>
      {filters.includes('meeting') && (
        <SearchListTemplate title="모임 코드" keyword={keyword}>
          <SearchResultMeetingKeywordContainer code={keyword} exposeCode />
        </SearchListTemplate>
      )}
      {filters.includes('member') && (
        <SearchListTemplate title="유저 코드" keyword={keyword}>
          <SearchResultMemberKeywordContainer code={keyword} exposeCode />
        </SearchListTemplate>
      )}
    </>
  );
}

export function SearchListTemplate({
  title,
  keyword = '',
  name = '',
  children,
}: PropsWithChildren<{ title: string; keyword?: string; name?: string }>) {
  const queryString = new URLSearchParams({ keyword, name }).toString();
  return (
    <div className={styles.template}>
      <div className={styles.header}>
        <Text asChild title="medium">
          <h2>{title}</h2>
        </Text>
        <Link href={`/search?keyword=${queryString}`} className={plainLink}>
          더보기 &gt;
        </Link>
      </div>
      {children}
    </div>
  );
}

export function SearchResultMeetingKeywordContainer({
  keyword = '',
  name = '',
  code = '',
  expostKeywords,
  exposeCode,
}: {
  keyword?: string;
  name?: string;
  code?: string;
  expostKeywords?: boolean;
  exposeCode?: boolean;
}) {
  const queryString = new URLSearchParams({ keyword, name, code }).toString();
  const { data, loading, error, refetch } = useQuery<MeetingType[]>({
    queryURL: `mock/meeting/list?${queryString}`,
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
          .map((meeting) => (
            <SearchMeetingCard
              key={meeting.meetingId}
              meeting={meeting}
              keyword={expostKeywords ? keyword : ''}
              exposeCode={exposeCode}
            />
          ))}
      </div>
    );
  }
}

export function SearchResultMemberKeywordContainer({
  name = '',
  code = '',
  exposeCode,
}: {
  name?: string;
  code?: string;
  exposeCode?: boolean;
}) {
  const queryString = new URLSearchParams({ name, code }).toString();
  const { data, loading, error, refetch } = useQuery<MemberType[]>({
    queryURL: `mock/member/list?${queryString}`,
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
        {data
          ?.slice(0, 4)
          .map((member) => <SearchMemberCard key={member.memberId} member={member} exposeCode={exposeCode} />)}
      </div>
    );
  }
}

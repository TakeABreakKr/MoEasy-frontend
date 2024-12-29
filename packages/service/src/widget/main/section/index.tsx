'use client';

import { useRef } from 'react';
import Link from 'next/link';

import { MeetingType } from '@/entities/meeting/api';
import { useQuery } from '@/shared/hooks/use-query';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import MainCommonCard from '@/widget/main/card/common';

import { Button } from '@moeasy/storybook/ui/button';
import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './section.css';

type MainCardSectionProps = {
  title: string;
  href: string;
};

export function MainCardSection({ title, href = '' }: MainCardSectionProps) {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const goToNextCard = (toNext?: boolean) => {
    const oneStep = 327 + 32;
    cardContainerRef.current?.scrollTo({
      left: cardContainerRef.current.scrollLeft + (toNext ? oneStep : -oneStep),
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.section}>
      <MainCardSectionHeader title={title} href={href} goToNextCard={goToNextCard} />
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper} ref={cardContainerRef}>
          <MainCardSectionContent />
        </div>
      </div>
    </section>
  );
}

type MainCardSectionHeaderProps = MainCardSectionProps & { goToNextCard: (toNext?: boolean) => void };

function MainCardSectionHeader({ title = '', href = '', goToNextCard }: MainCardSectionHeaderProps) {
  return (
    <div
      className={sprinkles({ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}
    >
      <Text asChild title="large">
        <h1 className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'small' })}>
          {title}
          <Link href={href}>
            <ChevronDown width={12} transform="rotate(270)" />
          </Link>
        </h1>
      </Text>
      <div className={sprinkles({ display: 'flex', gap: 'small' })}>
        <Button size="icon" rounded="full" onClick={() => goToNextCard()}>
          <ChevronDown width={12} transform="rotate(90)" />
        </Button>
        <Button size="icon" rounded="full" onClick={() => goToNextCard(true)}>
          <ChevronDown width={12} transform="rotate(270)" />
        </Button>
      </div>
    </div>
  );
}

function MainCardSectionContent() {
  const { loading, data, error, refetch } = useQuery<MeetingType[]>({ queryURL: 'mock/meeting/list' });
  if (loading) return <div>loading...</div>;
  if (error)
    return (
      <div>
        목록 다시 불러오기
        <Button size="medium" rounded="medium" onClick={refetch}>
          다시 불러오기
        </Button>
      </div>
    );
  return (
    <>
      {data?.map((meeting, idx) => (
        <MainCommonCard
          key={idx}
          idx={idx + 1}
          title={'title ' + idx}
          description={`첫째주 한식/ 둘째주 일식/ 셋째주 중식/ 넷째주 양식으로\n로테이션 돌립니다. 식후 디저트 필수임. 첫째주 한식/ 둘째주 일식/ 셋째주 중식/ 넷째주 양식으로 로테이션 돌립니다.`}
        />
      ))}
    </>
  );
}

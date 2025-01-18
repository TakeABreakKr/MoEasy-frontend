'use client';

import { useRef } from 'react';

import { MainCardSectionHeader } from './header';

import * as styles from './section.css';

export type MainCardSectionBaseProps<TData extends unknown = any> = {
  title: string;
  href: string;
  loading?: boolean;
  data?: TData[];
};

export function withMainCartHeader<TData>(
  Component: React.ForwardRefExoticComponent<
    {
      loading?: boolean;
      data?: TData[];
    } & React.RefAttributes<HTMLDivElement>
  >,
) {
  return function MainCardSection({ title, href = '', loading, data }: MainCardSectionBaseProps<TData>) {
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
        <Component ref={cardContainerRef} loading={loading} data={data} />
      </section>
    );
  };
}

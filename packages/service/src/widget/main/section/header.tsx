import Link from 'next/link';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Button } from '@moeasy/storybook/ui/button';
import { ChevronDown } from '@moeasy/storybook/ui/icon';
import { Text } from '@moeasy/storybook/ui/text';

import { MainCardSectionBaseProps } from '.';

type MainCardSectionHeaderProps = Pick<MainCardSectionBaseProps, 'title' | 'href'> & {
  goToNextCard: (toNext?: boolean) => void;
};

export function MainCardSectionHeader({ title = '', href = '', goToNextCard }: MainCardSectionHeaderProps) {
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

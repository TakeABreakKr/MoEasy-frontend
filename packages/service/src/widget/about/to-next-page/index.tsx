'use client';

import { ChevronDown } from '@moeasy/storybook/ui/icon';

import { toNextSection } from './to-next-page.css';

export function AboutToNextPage({ parentRef }: { parentRef?: React.RefObject<HTMLElement> }) {
  return (
    <button
      className={toNextSection}
      aria-label="다음 섹션으로 이동"
      onClick={() => {
        parentRef?.current?.scrollBy({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }}
    >
      <ChevronDown />
    </button>
  );
}

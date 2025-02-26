'use client';

import { useReducer } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { copyText } from '@/shared/utils/copy-text';

import { Checkbox } from '@moeasy/storybook/ui/checkbox';
import { HeartToggle } from '@moeasy/storybook/ui/heart';
import { HeartIcon, ShareIcon, TrashIcon, UserIcon } from '@moeasy/storybook/ui/icon';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Text } from '@moeasy/storybook/ui/text';

import { MeetingType } from '../../type';

import * as styles from '../../meeting-detail.css';
import { buttonWrapper } from './info.css';

export function MeetingDetailInfo({ data }: { data: MeetingType }) {
  const [heart, toggle] = useReducer((e) => !e, false);
  return (
    <section
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        gap: 'large',
      })}
    >
      <article
        className={sprinkles({
          display: 'flex',
          gap: 'medium',
        })}
      >
        <Image className={styles.profileImage} src={data.thumbnail} alt="meeting-thumbnail" width={70} height={70} />
        <div
          className={sprinkles({
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            gap: 'medium',
            justifyContent: 'center',
          })}
        >
          <div className={sprinkles({ display: 'flex', width: '100%', justifyContent: 'space-between' })}>
            <Text title="large">{data.name}</Text>
            <div className={buttonWrapper}>
              <HeartToggle active={heart} onClick={toggle} />
              <button
                onClick={async () => {
                  await copyText({ text: window.location.href });
                  toast('URL이 복사되었습니다', {
                    icon: <Checkbox checked />,
                  });
                }}
              >
                <ShareIcon />
              </button>
              <button>
                <TrashIcon />
              </button>
            </div>
          </div>
          <div className={sprinkles({ display: 'flex', gap: 'small' })}>
            <Tag variant="dark">공예만들기</Tag>
            <Tag variant="light">
              <UserIcon width={12} height={13} />
              {data.members.length}
            </Tag>
            <Tag variant="light">
              <HeartIcon width={14} height={13} />
              100
            </Tag>
          </div>
        </div>
      </article>
      <Text body="medium" asChild>
        <p>{data.explanation}</p>
      </Text>
    </section>
  );
}

import Image from 'next/image';

import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { HeartIcon, OutIcon, ShareIcon, UserIcon } from '@moeasy/storybook/ui/icon';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Text } from '@moeasy/storybook/ui/text';

import { MeetingType } from '../../type';

import * as styles from '../../meeting-detail.css';
import { buttonWrapper } from './info.css';

export function MeetingDetailInfo({ data }: { data: MeetingType }) {
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
              <button>
                <HeartIcon />
              </button>
              <button>
                <ShareIcon />
              </button>
              <button>
                <OutIcon />
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

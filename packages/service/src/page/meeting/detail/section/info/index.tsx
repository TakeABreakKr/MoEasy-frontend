import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { HeartIcon, OutIcon, ShareIcon, UserIcon } from '@moeasy/storybook/ui/icon';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from '../../meeting-detail.css';
import { buttonWrapper } from './info.css';

export function MeetingDetailInfo() {
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
        <div className={styles.profileImage} />
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
            <Text title="large">달력만들기</Text>
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
              172
            </Tag>
            <Tag variant="light">
              <HeartIcon width={14} height={13} />
              100
            </Tag>
          </div>
        </div>
      </article>
      <Text body="medium" asChild>
        <p>
          모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임
          설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임
          설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임
          설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임
          설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임
          설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임
          설명모임 설명모임 설명모임 설명모임 설명모임 설명모임 설명모임
        </p>
      </Text>
    </section>
  );
}

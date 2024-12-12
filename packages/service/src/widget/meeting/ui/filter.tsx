import { sprinkles } from '@/shared/style/sprinkles/index.css';

import { Checkbox } from '@moeasy/storybook/ui/checkbox';

import { MeetingJoinAgreePopup } from './join-agree';

import * as styles from './meeting.css';

export function MeetingListFilter() {
  return (
    <section
      className={sprinkles({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <h1>모임 관리</h1>

      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <div className={styles.meetingFilter}>
          <div className={sprinkles({ display: 'flex', gap: 'medium' })}>
            <label className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'xsmall' })}>
              <Checkbox />
              최신등록순
            </label>
            <label className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'xsmall' })}>
              <Checkbox />
              이름순
            </label>
          </div>
          <div className={sprinkles({ display: 'flex', gap: 'medium' })}>
            <label className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'xsmall' })}>
              <Checkbox rounded={false} />
              모임장
            </label>
            <label className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'xsmall' })}>
              <Checkbox rounded={false} />
              매니저
            </label>
            <label className={sprinkles({ display: 'flex', alignItems: 'center', gap: 'xsmall' })}>
              <Checkbox rounded={false} />
              모임원
            </label>
          </div>
        </div>

        <MeetingJoinAgreePopup />
      </div>
    </section>
  );
}

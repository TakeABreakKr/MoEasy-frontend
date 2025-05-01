import { useState } from 'react';

import { ActivityStepData_TEMP } from '@/entities/activity/api/type';
import { useScopedI18n } from '@/locales/clients';
import * as styles from '@/shared/style/create-form/index.css';
import { sprinkles } from '@/shared/style/sprinkles/index.css';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Tag } from '@moeasy/storybook/ui/tag';

import { ActivityStepNavigation } from '../navigation';

export const ReminderEnumList = [
  ['ON_TIME'],
  ['TEN_M', 'THIRTY_M'],
  ['ONE_H', 'TWO_H', 'THREE_H', 'FOUR_H', 'SIX_H', 'TWELVE_H'],
  ['ONE_D', 'TWO_D', 'THREE_D', 'SEVEN_D'],
] as const;

type ActivityReminderValue = Pick<ActivityStepData_TEMP, 'reminder'>;
type ActivityReminderValueProps = Partial<ActivityReminderValue>;

export function ActivityReminderStep({
  step,
  reminder: reminderProp = [],
  onPrevStep,
  onNextStep,
}: ActivityReminderValueProps & {
  step: number;
  onPrevStep: () => void;
  onNextStep: (param: { reminder: string[] }) => void;
}) {
  const t = useScopedI18n('schedule-create.remainder');
  const [reminder, dispatch] = useState(reminderProp);
  const toggleReminderItem = (key: (typeof ReminderEnumList)[number][number]) => {
    dispatch((prev) => (prev.includes(key) ? prev.filter((remind) => remind !== key) : [...prev, key]));
  };

  return (
    <>
      <div className={formStyles.formGroup}>
        <label>
          <span className={formStyles.label}>리마인드 알림</span>
        </label>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 'small' })}>
          {ReminderEnumList.map((line, index) => (
            <div key={index} className={sprinkles({ display: 'flex', gap: 'small' })}>
              {line.map((time) => (
                <Tag
                  key={time}
                  value={time}
                  type="button"
                  variant={reminder.includes(time) ? 'dark' : 'light'}
                  data-testid="reminder-item"
                  onClick={() => toggleReminderItem(time)}
                >
                  <input readOnly hidden value={time} name="reminder" />
                  {t(time)}
                </Tag>
              ))}
            </div>
          ))}
          <div className={styles.tagListGradient} />
        </div>
      </div>
      <ActivityStepNavigation
        step={step}
        onPrevStep={onPrevStep}
        onNextStep={() => {
          if (reminder.length === 0) {
            return;
          }
          onNextStep({ reminder });
        }}
      />
    </>
  );
}

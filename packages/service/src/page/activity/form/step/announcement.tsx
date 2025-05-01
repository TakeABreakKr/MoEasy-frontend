import { useReducer } from 'react';

import { ActivityStepData_TEMP } from '@/entities/activity/api/type';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { SimpleEditor } from '@/shared/ui/simple-editor';
import { objectReducer } from '@/shared/utils/object-reducer';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Text } from '@moeasy/storybook/ui/text';

import { ActivityStepNavigation } from '../navigation';

type ActivityAnnouncementValue = Pick<ActivityStepData_TEMP, 'announcement'>;
type ActivityAnnouncementValueProps = Partial<ActivityAnnouncementValue>;

const localImageUploader = (file: DataTransferItem | File) => {
  return new Promise<string>((resolve, reject) => {
    const uploadFile = file instanceof File ? file : file.getAsFile();
    if (!uploadFile) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        return;
      }
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(uploadFile);
  });
};

export function ActivityAnnouncementStep({
  step,
  announcement = '',
  onPrevStep,
  onNextStep,
}: ActivityAnnouncementValueProps & {
  step: number;
  onPrevStep: () => void;
  onNextStep: (param: ActivityAnnouncementValue) => void;
}) {
  const [state, dispatch] = useReducer(objectReducer<ActivityAnnouncementValue & { textLength: number }>, null, () => {
    const div = document.createElement('div');
    div.innerHTML = announcement;
    return {
      announcement,
      textLength: div.textContent?.length || 0,
    };
  });
  return (
    <>
      <div className={formStyles.formGroup}>
        <div className={formStyles.label}>
          <span>활동 안내</span>
          <Text body="tiny" className={sprinkles({ display: 'flex', justifyContent: 'flex-end', width: '100%' })}>
            {state.textLength} 자
          </Text>
          <SimpleEditor
            dispatch={({ content, textLength }) => dispatch({ announcement: content, textLength })}
            adapter={localImageUploader}
          />
        </div>
      </div>
      <ActivityStepNavigation
        step={step}
        onPrevStep={onPrevStep}
        onNextStep={() => {
          onNextStep({ announcement: state.announcement });
        }}
      />
    </>
  );
}

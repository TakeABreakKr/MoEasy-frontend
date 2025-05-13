import * as formStyles from '@moeasy/storybook/ui/create/style.css';

import { StepProps } from '../creating-step-form';

import defaultThumbnail from './default-thumbnail.png';
import { ImageUpload } from './uploadThumbnail';

import * as styles from './thumbnail.css';

export function ThumbnailStep({ formData, dispatch }: StepProps) {
  return (
    <div className={formStyles.formGroup}>
      <div className={formStyles.labelWrapper}>
        <div className={formStyles.label}>썸네일 설정</div>
        <div className={styles.thumbnailWrapper}>
          <div className={styles.thumbnail}>
            <ImageUpload
              selectedFile={formData.thumbnail}
              onImageUpload={(thumbnail) => dispatch({ thumbnail })}
              initialPreview={formData.thumbnail ? URL.createObjectURL(formData.thumbnail) : defaultThumbnail.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

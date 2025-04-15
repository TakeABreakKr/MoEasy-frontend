import { ImageUpload } from '@moeasy/storybook/ui/file-upload';
import { Button } from '@moeasy/storybook/ui/button';
import { PlusIcon } from '@moeasy/storybook/ui/icon';
import { StepProps } from '../creating-step-form';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import * as styles from './thumbnail.css';

export function ThumbnailStep({ formData, dispatch }: StepProps) {
  return (
    <div className={formStyles.formGroup}>
      <div className={formStyles.labelWrapper}>
        <div className={formStyles.label}>썸네일 설정</div>
        <div className={styles.thumbnailWrapper}>
          <div className={styles.thumbnail}>
            <ImageUpload selectedFile={formData.thumbnail} onImageUpload={(thumbnail) => dispatch({ thumbnail })} />
          </div>
          <div className={styles.thumbnailDescription}>
            {/* TODO: 사진 변경하기 버튼 구현 */}
            <div className={styles.thumbnailUploadButton}>
              <Button rounded="medium" size="medium" variant="dark">
                <PlusIcon className={styles.plusIcon} width={10} height={10} /> 사진 변경하기
              </Button>
            </div>
            <div className={styles.thumbnailDescriptionText}>
              1:1 비율(500*500 px) 권장 <br /> 1:1 비율이 아닌 이미지는 잘려보일 수 있습니다.
              <br /> 폭력적이거나 선정적인 이미지, 부적절한 단어 및 욕설이 들어간 이미지를 사용할 경우 경고 없이 삭제될
              수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

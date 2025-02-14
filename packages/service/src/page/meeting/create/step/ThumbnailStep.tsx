import { ImageUpload } from '@moeasy/storybook/ui/file-upload';
import { StepProps } from '../CreatingStepForm';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

export default function ThumbnailStep({ formData, dispatch }: StepProps) {
  return (
    <div className={formStyles.formGroup}>
      <ImageUpload selectedFile={formData.thumbnail} onImageUpload={(thumbnail) => dispatch({ thumbnail })} />
      <div>
        <p>
          📌 <strong>1:1 비율 (500×500px) 권장</strong>
        </p>
        <p>1:1 비율이 아닌 이미지는 잘려 보일 수 있습니다.</p>
        <p>폭력적이거나 선정적인 이미지, 부적절한 단어 및 욕설이 들어간 이미지는 삭제될 수 있습니다.</p>
      </div>
    </div>
  );
}

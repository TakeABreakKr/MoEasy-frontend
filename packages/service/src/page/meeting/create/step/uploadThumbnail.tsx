import React, { useId } from 'react';
import { useControlledState } from '@moeasy/storybook/hooks/use-controlled-state';
import { Delay } from '@moeasy/storybook/ui/delay';
import { PlusIcon } from '@moeasy/storybook/ui/icon';

import * as styles from './thumbnail.css';

interface ImageUploadProps {
  name?: string;
  selectedFile?: File | null;
  initialPreview?: string;
  onImageUpload?: (file: File | null) => void;
}

const fileUploadFallback = (
  <div className={styles.uploadButton}>
    <div className={styles.uploadText}>
      1:1 비율
      <br />
      (500*500 px 권장)
    </div>
  </div>
);

export const ImageUpload = ({ name = 'thumbnail', selectedFile, initialPreview, onImageUpload }: ImageUploadProps) => {
  const id = useId();
  const [fileState, setFile] = useControlledState({
    prop: selectedFile,
    defaultProp: null,
    onChange: onImageUpload,
  });

  const preview = useImagePreview({ initialPreview, file: fileState });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length !== 0) {
      const file = event.target.files[0];
      setFile(file);
    }
  };

  return (
    <div className={styles.thumbnailWrapper}>
      <div className={styles.previewBox}>
        <Delay ms={0} fallback={fileUploadFallback}>
          {preview ? <img src={preview} alt="Cropped" className={styles.previewImg} /> : fileUploadFallback}
        </Delay>
      </div>
      <div className={styles.rightSide}>
        <input id={id} type="file" hidden accept="image/*" name={name} onChange={handleFileChange} />
        <label htmlFor={id} className={styles.uploadButtonLabel}>
          <div className={styles.plusIcon}>
            <PlusIcon width={10} height={10} />
          </div>{' '}
          사진 변경하기
        </label>
        <div className={styles.infoBox}>
          <b>1:1 비율 (500×500 px) 권장</b>
          <br />
          1:1 비율이 아닌 이미지는 잘려보일 수 있습니다. 폭력적이거나 선정적인 이미지, 부적절한 단어 및 욕설이 들어간
          이미지를 사용할 경우 경고 없이 삭제될 수 있습니다.
        </div>
      </div>
    </div>
  );
};

function useImagePreview({
  initialPreview = null,
  file = null,
}: {
  initialPreview?: string | null;
  file?: File | null;
}) {
  const [preview, setPreview] = React.useState<string | null>(initialPreview);

  React.useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    setPreview(initialPreview || null);
  }, [file, initialPreview]);

  return preview;
}

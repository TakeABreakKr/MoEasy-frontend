/* eslint-disable @next/next/no-img-element */
import React, { useId } from 'react';

import { useControlledState } from '../../hooks/use-controlled-state';
import { Delay } from '../delay';
import { PlusIcon } from '../icon';

import * as styles from './file-upload.css';

interface ImageUploadProps {
  name?: string;
  selectedFile?: File | null;
  initialPreview?: string;
  onImageUpload?: (file: File | null) => void;
}

const fileUploadFalllback = (
  <div className={styles.uploadButton}>
    <div className={styles.plusIcon}>
      <PlusIcon width={10} height={10} />
    </div>
    <div className={styles.uploadText}>
      1:1 비율
      <br />
      (500*500 px 권장)
    </div>
  </div>
);

export const ImageUpload = ({ name = 'thumbnail', initialPreview, selectedFile, onImageUpload }: ImageUploadProps) => {
  const id = useId();
  const [fileState, setFile] = useControlledState({
    prop: selectedFile,
    defaultProp: null,
    onChange: onImageUpload,
  });

  const preview = useImagePreview({ initialPreview, file: fileState });
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length !== 0) {
      const file = event.target.files[0];
      setFile(file);
    }
  };

  return (
    <div className={styles.imageUploadContainer}>
      <label className={styles.uploadPlaceholder} htmlFor={id} data-testid="file-upload">
        <input type="file" hidden accept="image/*" name={name} onChange={handleFileChange} id={id} />
        <Delay ms={0} fallback={fileUploadFalllback}>
          {preview ? (
            <div className={styles.croppedImageContainer}>
              <img className={styles.croppedImageContainerImg} src={preview} alt="Cropped" width={200} height={200} />
            </div>
          ) : (
            fileUploadFalllback
          )}
        </Delay>
      </label>
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
    setPreview(null);
  }, [file]);

  return preview;
}

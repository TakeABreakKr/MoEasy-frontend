/* eslint-disable @next/next/no-img-element */
import React, { useId, useState } from 'react';

import { PlusIcon } from '../icon';

import * as styles from './file-upload.css';

interface ImageUploadProps {
  selectedFile?: File | null;
  onImageUpload: (file: File) => void;
}

export const ImageUpload = ({ selectedFile, onImageUpload }: ImageUploadProps) => {
  const id = useId();
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      onImageUpload(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.imageUploadContainer}>
      {!selectedFile ? (
        <label className={styles.uploadPlaceholder} htmlFor={id}>
          <input type="file" hidden accept="image/*" onChange={handleFileChange} id={id} data-testid="file-upload" />
          <div className={styles.uploadButton}>
            <span className={styles.plusIcon}>
              <PlusIcon width={30} height={30} />
            </span>
            <div className={styles.uploadText}>
              1:1 비율
              <br />
              (500*500 px 권장)
            </div>
          </div>
        </label>
      ) : null}
      {preview && (
        <div className={styles.croppedImageContainer}>
          <img className={styles.croppedImageContainerImg} src={preview} alt="Cropped" width={300} height={300} />
        </div>
      )}
    </div>
  );
};

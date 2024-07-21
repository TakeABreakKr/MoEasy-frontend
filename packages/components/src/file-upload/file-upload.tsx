/* eslint-disable @next/next/no-img-element */
import React, { useId, useState } from 'react';

import { PlusIcon } from '../icon';

import styles from './file-upload.module.css';

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
    <div className={styles['image-upload-container']}>
      {!selectedFile ? (
        <label className={styles['upload-placeholder']} htmlFor={id}>
          <input type="file" hidden accept="image/*" onChange={handleFileChange} id={id} />
          <div className={styles['upload-button']}>
            <span className={styles['plus-icon']}>
              <PlusIcon width={30} height={30} />
            </span>
            <div className={styles['upload-text']}>
              1:1 비율
              <br />
              (500*500 px 권장)
            </div>
          </div>
        </label>
      ) : null}
      {preview && (
        <div className={styles['cropped-image-container']}>
          <img src={preview} alt="Cropped" width={300} height={300} />
        </div>
      )}
    </div>
  );
};

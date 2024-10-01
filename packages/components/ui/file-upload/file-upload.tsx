/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useId, useState } from 'react';

import { PlusIcon } from '../icon';

import * as styles from './file-upload.css';

interface ImageUploadProps {
  name?: string;
  selectedFile?: File | null;
  onImageUpload: (file: File) => void;
}

export const ImageUpload = ({ name = 'thumbnail', selectedFile, onImageUpload }: ImageUploadProps) => {
  const id = useId();
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      onImageUpload(file);
      // uncontrolled state인 경우에도 thumbnail 업데이트를 진행한다.
      if (!selectedFile) {
        const newThumbnail = await imgFileToDataURL(file);
        setPreview(newThumbnail);
      }
    }
  };

  useEffect(() => {
    if (selectedFile) {
      (async () => {
        const newThumbnail = await imgFileToDataURL(selectedFile);
        setPreview(newThumbnail);
      })();
    }
  }, [selectedFile]);

  return (
    <div className={styles.imageUploadContainer}>
      <label className={styles.uploadPlaceholder} htmlFor={id} data-testid="file-upload">
        <input type="file" hidden accept="image/*" name={name} onChange={handleFileChange} id={id} />
        {preview ? (
          <div className={styles.croppedImageContainer}>
            <img className={styles.croppedImageContainerImg} src={preview} alt="Cropped" width={200} height={200} />
          </div>
        ) : (
          <div className={styles.uploadButton}>
            <div className={styles.plusIcon}>
              <PlusIcon width={16} height={16} />
            </div>
            <div className={styles.uploadText}>
              1:1 비율
              <br />
              (500*500 px 권장)
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

function imgFileToDataURL(file: File) {
  const reader = new FileReader();
  return new Promise<string>((res) => {
    reader.onloadend = () => {
      res(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
}

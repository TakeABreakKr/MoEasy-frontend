/* eslint-disable @next/next/no-img-element */
import React, { useId, useState } from 'react';

import styles from './file-upload.module.css';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const id = useId();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  //   const [crop, setCrop] = useState<Crop>({ unit: '%', width: 30, aspect: 1 });
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  //   const handleImageLoaded = (image: HTMLImageElement) => {
  //     setCrop({ unit: '%', width: 30, aspect: 1 });
  //   };

  //   const handleCropComplete = (crop: Crop, pixelCrop: any) => {
  //     if (selectedFile) {
  //       getCroppedImg(selectedFile, pixelCrop, 'croppedImage.jpeg').then((file) => {
  //         if (file) {
  //           setCroppedImageUrl(URL.createObjectURL(file));
  //           onImageUpload(file);
  //         }
  //       });
  //     }
  //   };

  const getCroppedImg = (file: File, pixelCrop: any, fileName: string): Promise<File | null> => {
    const image = new Image();
    image.src = URL.createObjectURL(file);
    return new Promise((resolve) => {
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height,
          );
        }

        canvas.toBlob((blob) => {
          if (blob) {
            const croppedFile = new File([blob], fileName, { type: 'image/jpeg' });
            resolve(croppedFile);
          } else {
            resolve(null);
          }
        }, 'image/jpeg');
      };
    });
  };

  return (
    <div className={styles['image-upload-container']}>
      {!selectedFile ? (
        <label className={styles['upload-placeholder']} htmlFor={id}>
          <input type="file" hidden accept="image/*" onChange={handleFileChange} id={id} />
          <div className={styles['upload-button']}>
            <span className="plus-icon">+</span>
            <div className="upload-text">
              1개 버튼
              <br />
              (500x500 px 권장)
            </div>
          </div>
        </label>
      ) : null}
      {croppedImageUrl && (
        <div className={styles['cropped-image-container']}>
          <img src={croppedImageUrl} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

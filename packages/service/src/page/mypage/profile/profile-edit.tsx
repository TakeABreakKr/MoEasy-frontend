'use client';

import { useState } from 'react';
import Image from 'next/image';

import { EditIcon } from '@moeasy/storybook/ui/icon';
import { useImagePreview } from '@moeasy/storybook/utils/hooks/use-image-preview';

import * as styles from './profile.css';

export function ProfileEdit({ src }: { src: string }) {
  const [file, setFile] = useState<File | null>(null);
  const preview = useImagePreview({ initialPreview: src, file });
  return (
    <div className={styles.profileWrapper}>
      <Image className={styles.profileRound} src={preview || src} width={120} height={120} alt="Profile" />
      <label className={styles.profileEdit}>
        <EditIcon />
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setFile(file || null);
          }}
        />
      </label>
    </div>
  );
}

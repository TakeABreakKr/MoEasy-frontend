'use client';

import * as styles from '@/shared/style/create-form/index.css';
import CreatingStepForm from './CreatingStepForm';

export default function TeamCreatePage() {
  return (
    <div className={styles.container}>
      <CreatingStepForm />
    </div>
  );
}

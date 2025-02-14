'use client';

import * as styles from '@/shared/style/create-form/index.css';
import CreatingStepForm from './creating-step-form';

export default function TeamCreatePage() {
  return (
    <div className={styles.container}>
      <CreatingStepForm />
    </div>
  );
}

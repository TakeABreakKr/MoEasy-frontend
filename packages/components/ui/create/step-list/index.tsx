import clsx from 'clsx';

import * as styles from './step-list.css';

type CreateStepListProps = {
  steps: string[];
  currentStep: number;
};

export function CreateStepList({ steps, currentStep }: CreateStepListProps) {
  return (
    <aside className={styles.aside}>
      <h1 className={styles.headerH1}>모임 생성</h1>
      <ul className={styles.asideStep}>
        {steps.map((txt, index) => (
          <li key={index} className={clsx(styles.stepLi, currentStep === index + 1 && styles.stepLiSelected)}>
            <span className={clsx(styles.stepNumber, currentStep === index + 1 && styles.numberSelected)}>
              {index + 1}
            </span>
            <span>{txt}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

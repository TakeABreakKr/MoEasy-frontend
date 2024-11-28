import clsx from 'clsx';

import * as styles from './step-list.css';

type CreateStepListProps<T extends Readonly<Array<{ key: string; text: string }>>> = {
  steps: T;
  currentStep: T[number]['key'];
};

export function CreateStepList<T extends Readonly<Array<{ key: string; text: string }>>>({
  steps,
  currentStep,
}: CreateStepListProps<T>) {
  return (
    <aside className={styles.aside}>
      <h1 className={styles.headerH1}>모임 생성</h1>
      <ul className={styles.asideStep}>
        {steps.map((item, index) => (
          <li key={index} className={clsx(styles.stepLi, currentStep === item.key && styles.stepLiSelected)}>
            <span className={clsx(styles.stepNumber, currentStep === item.key && styles.numberSelected)}>
              {index + 1}
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

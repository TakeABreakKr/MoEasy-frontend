import { Separator } from '../../separator';

import * as styles from './step-button.css';

export function FormCreateUnderLine() {
  return (
    <div className={styles.formUnderline}>
      <Separator direction="horizontal" color="#f4f4f4" />
    </div>
  );
}

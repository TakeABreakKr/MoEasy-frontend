import { ComponentProps } from 'react';
import clsx from 'clsx';

import { ChevronDown } from '../../icon';

import * as styles from '../button.css';

type DirectionButtonProps = Omit<ComponentProps<'button'>, 'children'> & {
  direction?: 'left' | 'right';
};

/**
 * 기본 버튼 컴포넌트
 */
function DirectionButton({ className, direction = 'left', ...props }: DirectionButtonProps) {
  return (
    <button className={clsx(styles.directionButton, className)} type="button" {...props}>
      <ChevronDown
        className={styles.directionButtonText}
        transform={direction === 'left' ? 'rotate(90)' : 'rotate(270)'}
      />
      <div className={styles.directionButtonBackground} />
    </button>
  );
}

export { DirectionButton };

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

import { ChevronDown } from '../../icon';

import * as styles from '../button.css';

type DirectionButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'children'> & {
  direction?: 'left' | 'right';
};

/**
 * 기본 버튼 컴포넌트
 */
const DirectionButton = forwardRef<HTMLButtonElement, DirectionButtonProps>(
  ({ className, direction = 'left', ...props }, ref) => {
    return (
      <button className={clsx(styles.directionButton, className)} ref={ref} type="button" {...props}>
        <ChevronDown
          className={styles.directionButtonText}
          transform={direction === 'left' ? 'rotate(90)' : 'rotate(270)'}
        />
        <div className={styles.directionButtonBackground} />
      </button>
    );
  },
);
DirectionButton.displayName = 'DirectionButton';

export { DirectionButton };

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

import { SearchIcon } from '../../icon';

import * as styles from '../../input/input.css';
import { searchButtonStyle } from '../button.css';

type SearchButtonProps = ComponentPropsWithoutRef<'button'>;
/**
 * 기본 버튼 컴포넌트
 */
const SearchButton = forwardRef<HTMLButtonElement, SearchButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <button
      className={clsx(styles.inputVariants(), styles.inputWrapper, searchButtonStyle, className)}
      ref={ref}
      type="button"
      {...props}
    >
      {children}
      <span className={styles.inputCtlWrapper}>
        <SearchIcon width={24} height={24} />
      </span>
    </button>
  );
});
SearchButton.displayName = 'SearchButton';

export { SearchButton };

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

import { SearchIcon } from '../../icon';

import * as styles from '../../input/input.css';
import { searchButtonPlaceHolder, searchButtonStyle } from '../button.css';

type SearchButtonProps = ComponentPropsWithoutRef<'button'> & {
  placeholder?: string;
};
/**
 * 기본 버튼 컴포넌트
 */
const SearchButton = forwardRef<HTMLButtonElement, SearchButtonProps>(
  ({ className, children, placeholder, ...props }, ref) => {
    return (
      <button
        className={clsx(styles.inputVariants.classNames.base, styles.inputWrapper, searchButtonStyle, className)}
        ref={ref}
        type="button"
        {...props}
      >
        {children || <span className={searchButtonPlaceHolder}>{placeholder}</span>}
        <span className={styles.inputCtlWrapper}>
          <SearchIcon width={24} height={24} color="#19191a" />
        </span>
      </button>
    );
  },
);
SearchButton.displayName = 'SearchButton';

export { SearchButton };

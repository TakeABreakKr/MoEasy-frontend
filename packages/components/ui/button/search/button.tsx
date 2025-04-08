import { ComponentProps } from 'react';
import clsx from 'clsx';

import { SearchIcon } from '../../icon';

import * as styles from '../../input/input.css';
import { searchButtonPlaceHolder, searchButtonStyle } from '../button.css';

type SearchButtonProps = ComponentProps<'button'> & {
  placeholder?: string;
};
/**
 * 기본 버튼 컴포넌트
 */
function SearchButton({ className, children, placeholder, ...props }: SearchButtonProps) {
  return (
    <button
      className={clsx(styles.inputVariants.classNames.base, styles.inputWrapper, searchButtonStyle, className)}
      type="button"
      {...props}
    >
      {children || <span className={searchButtonPlaceHolder}>{placeholder}</span>}
      <span className={styles.inputCtlWrapper}>
        <SearchIcon width={24} height={24} color="#19191a" />
      </span>
    </button>
  );
}

export { SearchButton };

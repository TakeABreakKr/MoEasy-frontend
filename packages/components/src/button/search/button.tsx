import { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';

import { SearchIcon } from '../../icon';

import InputStyles from '../../input/input.module.css';
import buttonStyles from '../button.module.css';

type SearchButtonProps = ComponentPropsWithoutRef<'button'>;

/**
 * 기본 버튼 컴포넌트
 */
const SearchButton = forwardRef<HTMLButtonElement, SearchButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <button
      className={clsx(InputStyles.input, InputStyles.wrapper, buttonStyles.search, className)}
      ref={ref}
      {...props}
    >
      {children}
      <span className={InputStyles.span}>
        <SearchIcon width={24} height={24} />
      </span>
    </button>
  );
});
SearchButton.displayName = 'SearchButton';

export { SearchButton };

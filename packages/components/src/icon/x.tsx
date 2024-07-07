import { forwardRef, SVGProps } from 'react';

const XIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
        <path fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" d="M1 1l10 10m0-10L1 11" />
      </svg>
    );
  },
);
XIcon.displayName = 'XIcon';

export default XIcon;

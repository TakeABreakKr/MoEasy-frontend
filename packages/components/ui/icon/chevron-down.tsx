import { forwardRef, SVGProps } from 'react';

const ChevronDown = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="17"
        height="10"
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M15.6492 1.1052L8.57812 8.17627L1.50706 1.1052"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);
ChevronDown.displayName = 'ChevronDown';

export default ChevronDown;

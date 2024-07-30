import { forwardRef, SVGProps } from 'react';

const CrossIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      d="M8.61538 0H5.38462L5.87404 5.87411L0 5.38462V8.61538L5.87404 8.12589L5.38462 14H8.61538L8.12596 8.12589L14 8.61538V5.38462L8.12596 5.87411L8.61538 0Z"
      fill="currentColor"
    />
  </svg>
));
CrossIcon.displayName = 'CrossIcon';

export default CrossIcon;

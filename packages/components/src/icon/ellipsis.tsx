import { forwardRef, SVGProps } from 'react';

const EllipsisIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 33 7" ref={ref} {...props}>
    <circle cx="3.5" cy="3.5" r="3.5" fill="currentColor" />
    <circle cx="16.332" cy="3.5" r="3.5" fill="currentColor" />
    <circle cx="29.168" cy="3.5" r="3.5" fill="currentColor" />
  </svg>
));
EllipsisIcon.displayName = 'EllipsisIcon';

export default EllipsisIcon;

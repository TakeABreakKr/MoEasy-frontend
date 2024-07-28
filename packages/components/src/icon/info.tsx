import { forwardRef, SVGProps } from 'react';

const InfoIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    ref={ref}
    {...props}
  >
    <path d="M12 18v-6" stroke="currentColor"></path>
    <path d="M13 8h-2" stroke="currentColor"></path>
  </svg>
));
InfoIcon.displayName = 'InfoIcon';

export default InfoIcon;

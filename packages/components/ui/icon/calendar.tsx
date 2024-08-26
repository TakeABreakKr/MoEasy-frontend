import { forwardRef, SVGProps } from 'react';

const CalendarIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.4286 5.33333H2.57143V21.3333H21.4286V5.33333ZM0 2.66667V24H24V2.66667H0Z"
      fill="currentColor"
    />
    <path fillRule="evenodd" clipRule="evenodd" d="M4.28571 6.22222V0H7.71429V6.22222H4.28571Z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16.2857 6.22222V0H19.7143V6.22222H16.2857Z" fill="currentColor" />
    <path d="M0.857143 8H23.1429V10.6667H0.857143V8Z" fill="currentColor" />
  </svg>
));
CalendarIcon.displayName = 'CalendarIcon';

export default CalendarIcon;

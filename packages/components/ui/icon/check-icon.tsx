import { forwardRef, SVGProps } from 'react';

const CheckIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.783503 5.78739C1.49484 5.07305 2.64814 5.07305 3.35948 5.78739L9.67284 12.1274C10.3842 12.8417 10.3842 13.9999 9.67284 14.7142C8.9615 15.4286 7.8082 15.4286 7.09686 14.7142L0.783503 8.37424C0.0721657 7.6599 0.0721657 6.50172 0.783503 5.78739Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.9665 0.785755C21.6778 1.50009 21.6778 2.65827 20.9665 3.37261L9.67284 14.7142C8.9615 15.4286 7.8082 15.4286 7.09686 14.7142C6.38553 13.9999 6.38498 12.842 7.09631 12.1276L18.3905 0.785754C19.1019 0.0714151 20.2552 0.0714152 20.9665 0.785755Z"
      fill="currentColor"
    />
  </svg>
));
CheckIcon.displayName = 'CheckIcon';

export default CheckIcon;

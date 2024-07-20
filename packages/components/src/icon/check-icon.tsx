import { forwardRef, SVGProps } from 'react';

const CheckIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12" width="17" height="12" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.426802 4.92991C0.995872 4.35844 1.91852 4.35844 2.48759 4.92991L7.53827 10.0019C8.10734 10.5734 8.10734 11.4999 7.53827 12.0714C6.9692 12.6429 6.04656 12.6429 5.47749 12.0714L0.426802 6.99939C-0.142267 6.42792 -0.142267 5.50138 0.426802 4.92991Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5732 0.928604C17.1423 1.50008 17.1423 2.42661 16.5732 2.99809L7.53827 12.0714C6.9692 12.6429 6.04656 12.6429 5.47749 12.0714C4.90842 11.4999 4.90798 10.5736 5.47705 10.0021L14.5124 0.928604C15.0815 0.357132 16.0041 0.357132 16.5732 0.928604Z"
      fill="currentColor"
    />
  </svg>
));
CheckIcon.displayName = 'CheckIcon';

export default CheckIcon;

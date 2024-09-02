import { forwardRef, SVGProps } from 'react';

const UserIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      d="M14.1201 9.64075C15.2723 8.63257 16 7.15125 16 5.5C16 2.46246 13.5376 0 10.5 0C7.4624 0 5 2.46246 5 5.5C5 7.15125 5.72766 8.63257 6.87988 9.64075C2.86462 11.1155 0 14.9732 0 19.5V24H21V19.5C21 14.9732 18.1354 11.1155 14.1201 9.64075Z"
      fill="currentColor"
    />
  </svg>
));
UserIcon.displayName = 'UserIcon';

export default UserIcon;

import { SVGProps } from 'react';

function DoorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="13"
      height="22"
      viewBox="0 0 13 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Door"
      {...props}
    >
      <rect y="0.5" width="13" height="21" rx="2" fill="currentColor" />
      <circle cx="9.5" cy="11" r="1.5" fill="white" />
    </svg>
  );
}

export default DoorIcon;

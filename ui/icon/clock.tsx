import { SVGProps } from 'react';

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Clock"
      {...props}
    >
      <circle cx="9" cy="9" r="8" fill="#D9D9D9" stroke="currentColor" strokeWidth="2" />
      <path d="M9 6V9.85714H12.4286" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default ClockIcon;

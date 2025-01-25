import { SVGProps } from 'react';

function AlarmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Alarm"
      {...props}
    >
      <path d="M2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6V9H2V6Z" fill="currentColor" />
      <path d="M2 9H14L15.5 12H0.5L2 9Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 13C4.5 14.933 6.067 16.5 8 16.5C9.933 16.5 11.5 14.933 11.5 13L4.5 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default AlarmIcon;

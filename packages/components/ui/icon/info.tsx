import { SVGProps } from 'react';

function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      {...props}
    >
      <path d="M12 18v-6" stroke="currentColor" />
      <path d="M13 8h-2" stroke="currentColor" />
    </svg>
  );
}

export default InfoIcon;

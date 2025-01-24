import { SVGProps } from 'react';

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" {...props}>
      <path d="M4.16667 0H5.83333V10H4.16667V0Z" fill="currentColor" />
      <path d="M10 4.16667V5.83333L0 5.83333L7.28536e-08 4.16667L10 4.16667Z" fill="currentColor" />
    </svg>
  );
}

export default PlusIcon;

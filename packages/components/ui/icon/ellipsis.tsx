import { SVGProps } from 'react';

function EllipsisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 33 7" {...props}>
      <circle cx="3.5" cy="3.5" r="3.5" fill="currentColor" />
      <circle cx="16.332" cy="3.5" r="3.5" fill="currentColor" />
      <circle cx="29.168" cy="3.5" r="3.5" fill="currentColor" />
    </svg>
  );
}

export default EllipsisIcon;

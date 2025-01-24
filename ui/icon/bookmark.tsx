import { SVGProps } from 'react';

function BookMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 1.59961C0 1.04733 0.447715 0.599609 1 0.599609H14C14.5523 0.599609 15 1.04732 15 1.59961V18.332C15 19.1682 14.0347 19.6351 13.3791 19.1159L8.12086 14.9513C7.75709 14.6632 7.24291 14.6632 6.87914 14.9513L1.62086 19.1159C0.965327 19.6351 0 19.1682 0 18.332V1.59961Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default BookMarkIcon;

import { forwardRef, SVGProps } from 'react';

const CraftIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg width="80" height="80" viewBox="0 0 222 222" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      d="M168.189 168.189V110.999H110.999L168.189 53.8086H110.999V110.999L53.8086 53.8086V110.999H110.999L53.8086 168.189H110.999V110.999L168.189 168.189Z"
      fill="#83BEFF"
    />
    <path
      d="M110.999 53.8091V3.40907C110.999 0.899065 107.969 -0.350936 106.199 1.41906L53.8086 53.8091H110.999Z"
      fill="#0071FE"
    />
    <path d="M110.999 53.8086H53.8086L110.999 110.999V53.8086Z" fill="#0071FE" />
    <path
      d="M168.188 110.999H218.587C221.097 110.999 222.347 107.969 220.577 106.199L168.188 53.8086V110.999Z"
      fill="#0071FE"
    />
    <path d="M168.19 110.999V53.8086L111 110.999H168.19Z" fill="#0071FE" />
    <path d="M168.19 168.188H111V218.587C111 221.097 114.03 222.347 115.8 220.577L168.19 168.188Z" fill="#0071FE" />
    <path d="M168.19 168.19L111 111V168.19H168.19Z" fill="#0071FE" />
    <path d="M53.8091 111H3.40907C0.899065 111 -0.350936 114.03 1.41906 115.8L53.8091 168.19V111Z" fill="#0071FE" />
    <path d="M53.8086 111V168.19L110.999 111H53.8086Z" fill="#0071FE" />
  </svg>
));
CraftIcon.displayName = 'CraftIcon';

export default CraftIcon;

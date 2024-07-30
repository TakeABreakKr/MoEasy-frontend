import { forwardRef, SVGProps } from 'react';

const XIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="8"
        height="9"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.525274 1.02625C0.871472 0.680051 1.43277 0.680051 1.77897 1.02625L7.47259 6.71991C7.81879 7.06612 7.81879 7.62742 7.47259 7.97362C7.12639 8.31982 6.5651 8.31982 6.2189 7.97362L0.525274 2.27996C0.179075 1.93376 0.179075 1.37245 0.525274 1.02625Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.47264 1.02625C7.81884 1.37245 7.81884 1.93376 7.47264 2.27996L1.77902 7.97362C1.43282 8.31982 0.871523 8.31982 0.525324 7.97362C0.179126 7.62742 0.179126 7.06611 0.525324 6.71991L6.21895 1.02625C6.56515 0.680051 7.12644 0.680051 7.47264 1.02625Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);
XIcon.displayName = 'XIcon';

export default XIcon;

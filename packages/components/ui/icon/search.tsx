import { forwardRef, SVGProps } from 'react';

const SearchIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" ref={ref} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.79 9.42259C13.3064 7.04047 13 3.87571 10.871 1.80983C8.38409 -0.603277 4.35205 -0.603277 1.86516 1.80983C-0.621722 4.22294 -0.621722 8.13536 1.86516 10.5485C4.11666 12.7332 7.63465 12.94 10.1259 11.1688L12.9499 13.9091L14.6818 12.2286L11.79 9.42259ZM9.48547 3.15424C11.2072 4.82485 11.2072 7.53345 9.48547 9.20407C7.76378 10.8747 4.97236 10.8747 3.25067 9.20407C1.52898 7.53345 1.52898 4.82485 3.25067 3.15424C4.97236 1.48362 7.76378 1.48362 9.48547 3.15424Z"
      fill="currentColor"
    />
  </svg>
));
SearchIcon.displayName = 'SearchIcon';

export default SearchIcon;

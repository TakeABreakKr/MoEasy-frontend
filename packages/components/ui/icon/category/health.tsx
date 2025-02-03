import { SVGProps } from 'react';

function HealthIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Health"
      {...props}
    >
      <path
        d="M171.37 66.3906H128.62C118.24 66.3906 109.82 74.8006 109.82 85.1906V105.391H122.35V86.9606C122.35 81.9906 126.38 77.9606 131.35 77.9606H168.62C173.59 77.9606 177.62 81.9906 177.62 86.9606V105.391H190.15V85.1906C190.15 74.8106 181.74 66.3906 171.35 66.3906H171.37Z"
        fill="#FF8B00"
        stroke="#FF8B00"
        strokeMiterlimit="10"
      />
      <path
        d="M74.1797 94.6719H225.82C232.72 94.6719 238.32 100.272 238.32 107.172V210.292C238.32 211.672 237.2 212.792 235.82 212.792H64.1797C62.7997 212.792 61.6797 211.672 61.6797 210.292V107.172C61.6797 100.272 67.2797 94.6719 74.1797 94.6719Z"
        fill="#FFCB27"
      />
      <path d="M160.5 118.5H139.5V193.5H160.5V118.5Z" fill="#FF8B00" />
      <path d="M112.5 145.5V166.5H187.5V145.5H112.5Z" fill="#FF8B00" />
    </svg>
  );
}

export default HealthIcon;

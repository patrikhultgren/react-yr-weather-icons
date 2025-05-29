import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ClearSkyPolarTwilight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_01m_svg__a = React.useId();
  const id_01m_svg__b = React.useId();
  const id_01m_svg__c = React.useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5rem"
      height="2.5rem"
      fill="none"
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        fillRule="evenodd"
        clipPath={`url(#${id_01m_svg__a})`}
        clipRule="evenodd"
      >
        <path
          fill={`url(#${id_01m_svg__b})`}
          d="m91 41-15.4 6.9 9.9 13.5-16.8-1.7 1.8 16.7-13.7-9.8L50 82l-6.9-15.4-13.6 9.9 1.7-16.8-16.7 1.8 9.9-13.7L9 41z"
        />
        <path
          fill="#FFD348"
          d="M62.493 62.715c-12.004 6.805-27.307 2.702-34.21-9.206A24.9 24.9 0 0 1 25 41h50c.005 8.695-4.447 17.145-12.507 21.715"
        />
        <path
          fill={`url(#${id_01m_svg__c})`}
          d="M29 41a20.7 20.7 0 0 0 2.804 10.498c5.799 9.998 18.696 13.497 28.694 7.698C67.193 55.313 70.974 48.247 71 41z"
        />
        <path
          fill="#374759"
          d="M5 39.5A1.5 1.5 0 0 1 6.5 38h87a1.5 1.5 0 0 1 0 3h-87A1.5 1.5 0 0 1 5 39.5"
        />
      </g>
      <defs>
        <radialGradient
          id={id_01m_svg__b}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(41 0 0 41 50 41)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.514} stopColor="#D6B849" />
          <stop offset={0.652} stopColor="#FFCE47" />
          <stop offset={1} stopColor="#FFDB73" />
        </radialGradient>
        <linearGradient
          id={id_01m_svg__c}
          x1={36.5}
          x2={63.499}
          y1={24.912}
          y2={57.089}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAF22" />
          <stop offset={0.99} stopColor="#F09900" />
        </linearGradient>
        <clipPath id={id_01m_svg__a}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ClearSkyPolarTwilight;

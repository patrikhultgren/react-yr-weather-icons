import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ClearSkyDay = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_01d_svg__a = React.useId();
  const id_01d_svg__b = React.useId();
  const id_01d_svg__c = React.useId();
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
      <g clipPath={`url(#${id_01d_svg__a})`}>
        <path
          fill={`url(#${id_01d_svg__b})`}
          d="M75.6 56.9 91 50l-15.4-6.8 9.8-13.7-16.7 1.8 1.7-16.8-13.6 9.9L50 9l-6.8 15.4-13.7-9.9 1.8 16.7-16.8-1.7 9.9 13.6L9 50l15.4 6.8-9.9 13.7 16.7-1.8-1.7 16.8 13.6-9.9L50 91l6.8-15.4 13.7 9.8-1.8-16.7 16.8 1.7z"
        />
        <path
          fill="#FFD348"
          d="M28.284 62.509c6.901 11.908 22.205 16.01 34.208 9.206S78.497 49.5 71.695 37.491c-6.902-11.908-22.206-16.01-34.21-9.206-11.901 6.905-16.002 22.315-9.2 34.224z"
        />
        <path
          fill={`url(#${id_01d_svg__c})`}
          d="M31.8 60.493c5.798 9.998 18.695 13.497 28.693 7.699 9.998-5.799 13.497-18.696 7.699-28.694C62.393 29.5 49.496 26 39.498 31.799 29.5 37.6 26 50.496 31.799 60.493z"
        />
      </g>
      <defs>
        <radialGradient
          id={id_01d_svg__b}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(41 0 0 41 50 50)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.514} stopColor="#D6B849" />
          <stop offset={0.652} stopColor="#FFCE47" />
          <stop offset={1} stopColor="#FFDB73" />
        </radialGradient>
        <linearGradient
          id={id_01d_svg__c}
          x1={36.496}
          x2={63.495}
          y1={33.908}
          y2={66.084}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAF22" />
          <stop offset={0.99} stopColor="#F09900" />
        </linearGradient>
        <clipPath id={id_01d_svg__a}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ClearSkyDay;

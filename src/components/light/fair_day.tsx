import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FairDay = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_02d_svg__a = React.useId();
  const id_02d_svg__b = React.useId();
  const id_02d_svg__c = React.useId();
  const id_02d_svg__d = React.useId();
  const id_02d_svg__e = React.useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      viewBox="0 0 100 100"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath={`url(#${id_02d_svg__a})`}>
        <path
          fill={`url(#${id_02d_svg__b})`}
          fillRule="evenodd"
          d="M79.698 37.47 85.4 29.5l-16.7 1.8 1.7-16.8-13.6 9.9L50 9l-6.8 15.4-13.7-9.9 1.8 16.7-16.8-1.7 9.9 13.6L9 50l15.4 6.8-9.9 13.7 16.7-1.8-1.7 16.8 13.6-9.9L50 91l6.8-15.4 13.7 9.8-1.35-12.524H53.466c-3.222 0-6.258-1.177-8.55-3.408-2.417-2.292-3.718-5.39-3.78-8.737v-.123c0-3.16 1.24-6.135 3.47-8.365a12.25 12.25 0 0 1 8.117-3.718c1.673-2.417 4.461-3.842 7.497-3.842h.682C64.248 39.974 69.762 37 75.649 37c1.384 0 2.741.163 4.05.47z"
          clipRule="evenodd"
        />
        <path
          fill="#FFD348"
          fillRule="evenodd"
          d="M60.178 72.876c-11.59 5.094-25.43.788-31.894-10.367-6.802-11.909-2.701-27.32 9.202-34.224 11.991-6.798 27.276-2.71 34.188 9.17a18.36 18.36 0 0 0-10.772 7.228h-.682c-3.036 0-5.824 1.425-7.497 3.842a12.25 12.25 0 0 0-8.117 3.718 11.77 11.77 0 0 0-3.47 8.365v.123c.062 3.346 1.363 6.445 3.78 8.737 2.292 2.23 5.328 3.408 8.55 3.408z"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_02d_svg__c})`}
          fillRule="evenodd"
          d="M46.356 70.665C40.454 69.61 35.027 66.058 31.8 60.493c-5.798-9.998-2.3-22.895 7.699-28.694 9.774-5.669 22.32-2.45 28.294 7.038a18.4 18.4 0 0 0-6.89 5.846h-.682c-3.036 0-5.824 1.425-7.497 3.842a12.25 12.25 0 0 0-8.117 3.718 11.77 11.77 0 0 0-3.47 8.365v.123c.062 3.346 1.363 6.445 3.78 8.737q.68.66 1.44 1.197z"
          clipRule="evenodd"
        />
        <path
          fill="#DDD"
          fillRule="evenodd"
          d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.7 5.7 0 0 0-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.054-.062-2.54 0-4.895.992-6.63 2.788-1.672 1.735-2.602 3.966-2.602 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.382 2.603H87.98c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614z"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_02d_svg__d})`}
          fillRule="evenodd"
          d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.7 5.7 0 0 0-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.054-.062-2.54 0-4.895.992-6.63 2.788-1.672 1.735-2.602 3.966-2.602 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.382 2.603H87.98c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614z"
          clipRule="evenodd"
          opacity={0.6}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <g
          filter={`url(#${id_02d_svg__e})`}
          opacity={0.3}
          style={{
            mixBlendMode: "multiply",
          }}
        >
          <path
            fill="#B6B6B6"
            d="M58.176 65.503c1.107 0 15.396-.789 16.407-1.24 1.382-.616-1.481-4.32 0-4.628.669-.139 1.652-.575 1.652-.575s2.698-.992 3.163-.992.232-1.837.086-2.98l-.086-.819c0-.539-1.606-1.657-1.86-3.017-.175-.947.263-2.221.172-2.459 0 0-.032-.017-.023-.02q.014-.003.023.02c.07.033.571.203.571.203 1.207.409 3.116 1.078 4.834 2.256 1.028.704 2.442 2.053 2.442 2.053s1.02.788 1.276 1.045c.62.62 2.478 2.478 3.718 2.478h3.098l1.394.985.31 1.99c0 4.895-4.028 8.86-8.923 8.86H51.36s2.788-3.16 6.816-3.16"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={id_02d_svg__c}
          x1={36.496}
          x2={63.495}
          y1={33.908}
          y2={66.084}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAF22" />
          <stop offset={0.99} stopColor="#F09900" />
        </linearGradient>
        <linearGradient
          id={id_02d_svg__d}
          x1={69.329}
          x2={70.568}
          y1={49.702}
          y2={69.902}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.484} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#B3B2B2" />
        </linearGradient>
        <radialGradient
          id={id_02d_svg__b}
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
        <clipPath id={id_02d_svg__a}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
        <filter
          id={id_02d_svg__e}
          width={52.668}
          height={28.565}
          x={47.022}
          y={44.435}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_149_1382"
            stdDeviation={2.169}
          />
        </filter>
      </defs>
    </svg>
  );
};
export default FairDay;

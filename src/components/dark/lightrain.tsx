import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LightRain = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_46_svg__a = React.useId();
  const id_46_svg__b = React.useId();
  const id_46_svg__c = React.useId();
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
      <g clipPath={`url(#${id_46_svg__a})`}>
        <path
          fill="#CCC"
          fillRule="evenodd"
          d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_46_svg__b})`}
          fillRule="evenodd"
          d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9"
          clipRule="evenodd"
          opacity={0.6}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <g
          filter={`url(#${id_46_svg__c})`}
          opacity={0.3}
          style={{
            mixBlendMode: "multiply",
          }}
        >
          <path
            fill="#B6B6B6"
            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602.374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032q.021-.006.036.032c.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64"
          />
        </g>
        <path
          fill="#00B8F1"
          d="M35.5 99c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5m24-9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5"
        />
      </g>
      <defs>
        <linearGradient
          id={id_46_svg__b}
          x1={47.5}
          x2={49.5}
          y1={38.5}
          y2={71.1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.484} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#B3B2B2" />
        </linearGradient>
        <clipPath id={id_46_svg__a}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
        <filter
          id={id_46_svg__c}
          width={85}
          height={46.101}
          x={11.5}
          y={30}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_1334_8265"
            stdDeviation={3.5}
          />
        </filter>
      </defs>
    </svg>
  );
};
export default LightRain;

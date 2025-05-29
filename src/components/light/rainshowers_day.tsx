import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const RainShowersDay = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_05d_svg__a = React.useId();
  const id_05d_svg__b = React.useId();
  const id_05d_svg__c = React.useId();
  const id_05d_svg__d = React.useId();
  const id_05d_svg__e = React.useId();
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
      <g clipPath={`url(#${id_05d_svg__a})`}>
        <path
          fill={`url(#${id_05d_svg__b})`}
          fillRule="evenodd"
          d="m52.315 18.517 1.757-2.457-11.356 1.224L43.872 5.86l-9.248 6.732L30 2.12l-4.624 10.472L16.06 5.86l1.224 11.356L5.86 16.06l6.732 9.248L2.12 30l10.472 4.624L5.86 43.94l.57-.061q.554-.662 1.17-1.279c3.5-3.6 8.1-5.7 13.1-6 2.7-3.9 7.2-6.2 12.1-6.2h1.1c4.363-6.14 11.011-10.453 18.415-11.883"
          clipRule="evenodd"
        />
        <path
          fill="#FFD348"
          fillRule="evenodd"
          d="M14.867 37.83A20 20 0 0 1 20.7 36.6c2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.7 29.7 0 0 1 10.672-9.21c-4.775-7.863-15.023-10.525-23.082-5.956-7.87 4.565-10.725 14.6-6.623 22.597z"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_05d_svg__c})`}
          fillRule="evenodd"
          d="M17.565 37.034c1.022-.224 2.07-.37 3.135-.434 2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.6 29.6 0 0 1 8.287-7.849c-4.026-6.562-12.633-8.81-19.328-4.927-6.765 3.923-9.155 12.626-5.294 19.41"
          clipRule="evenodd"
        />
        <path
          fill="#B2B2B2"
          fillRule="evenodd"
          d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_05d_svg__d})`}
          fillRule="evenodd"
          d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9"
          clipRule="evenodd"
          opacity={0.6}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <g
          filter={`url(#${id_05d_svg__e})`}
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
          fill="#006EDB"
          d="M35.5 90c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5m13 9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5m15-9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5"
        />
      </g>
      <defs>
        <linearGradient
          id={id_05d_svg__c}
          x1={20.817}
          x2={39.177}
          y1={19.057}
          y2={40.937}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAF22" />
          <stop offset={0.99} stopColor="#F09900" />
        </linearGradient>
        <linearGradient
          id={id_05d_svg__d}
          x1={47.5}
          x2={49.5}
          y1={38.5}
          y2={71.1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.484} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#B3B2B2" />
        </linearGradient>
        <radialGradient
          id={id_05d_svg__b}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="translate(30 30)scale(27.88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.514} stopColor="#D6B849" />
          <stop offset={0.652} stopColor="#FFCE47" />
          <stop offset={1} stopColor="#FFDB73" />
        </radialGradient>
        <clipPath id={id_05d_svg__a}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
        <filter
          id={id_05d_svg__e}
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
            result="effect1_foregroundBlur_149_1389"
            stdDeviation={3.5}
          />
        </filter>
      </defs>
    </svg>
  );
};
export default RainShowersDay;

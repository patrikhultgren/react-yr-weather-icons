import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SleetShowersAndThunderDay = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_20d_svg__a = React.useId();
  const id_20d_svg__b = React.useId();
  const id_20d_svg__c = React.useId();
  const id_20d_svg__d = React.useId();
  const id_20d_svg__e = React.useId();
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
      <g clipPath={`url(#${id_20d_svg__a})`}>
        <path
          fill={`url(#${id_20d_svg__b})`}
          fillRule="evenodd"
          d="m52.315 18.517 1.757-2.457-11.356 1.224L43.872 5.86l-9.248 6.732L30 2.12l-4.624 10.472L16.06 5.86l1.224 11.356L5.86 16.06l6.732 9.248L2.12 30l10.472 4.624L5.86 43.94l.57-.061A20 20 0 0 1 7.6 42.6c3.5-3.6 8.1-5.7 13.1-6 2.7-3.9 7.2-6.2 12.1-6.2h1.1c4.363-6.14 11.011-10.453 18.415-11.883"
          clipRule="evenodd"
        />
        <path
          fill="#FFD348"
          fillRule="evenodd"
          d="M14.867 37.83A20 20 0 0 1 20.7 36.6c2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.7 29.7 0 0 1 10.672-9.21c-4.775-7.863-15.023-10.525-23.082-5.956-7.87 4.565-10.725 14.6-6.623 22.597z"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_20d_svg__c})`}
          fillRule="evenodd"
          d="M17.565 37.034c1.022-.224 2.07-.37 3.135-.434 2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.6 29.6 0 0 1 8.287-7.849c-4.026-6.562-12.633-8.81-19.328-4.927-6.765 3.923-9.155 12.626-5.294 19.41"
          clipRule="evenodd"
        />
        <path
          fill="#B2B2B2"
          fillRule="evenodd"
          d="M57.7 23c11.7 0 21.7 8.6 23.6 19.9C87.5 44.5 92 50.2 92 56.8c0 7.9-6.5 14.3-14.4 14.3H61.363c-.406-1.049-1.097-1.815-2.163-2.3l-4-1.7 2.2-12.3c.4-1.9-.8-3.8-2.6-4.5q-.6-.3-1.2-.3c-1.4 0-2.8.8-3.5 2.1l-10.328 19H21.9c-3.9 0-7.6-1.5-10.3-4.2-2.9-2.7-4.5-6.4-4.6-10.5v-.2c0-3.8 1.5-7.4 4.2-10.2 2.8-2.9 6.6-4.5 10.7-4.5.6 0 1.1 0 1.7.1 1.4-3.7 5-6.2 9.2-6.2 1.2 0 2.4.2 3.6.7 4-8 12.2-13.1 21.3-13.1"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_20d_svg__d})`}
          fillRule="evenodd"
          d="M57.7 23c11.7 0 21.7 8.6 23.6 19.9C87.5 44.5 92 50.2 92 56.8c0 7.9-6.5 14.3-14.4 14.3H61.363c-.406-1.049-1.097-1.815-2.163-2.3l-4-1.7 2.2-12.3c.4-1.9-.8-3.8-2.6-4.5q-.6-.3-1.2-.3c-1.4 0-2.8.8-3.5 2.1l-10.328 19H21.9c-3.9 0-7.6-1.5-10.3-4.2-2.9-2.7-4.5-6.4-4.6-10.5v-.2c0-3.8 1.5-7.4 4.2-10.2 2.8-2.9 6.6-4.5 10.7-4.5.6 0 1.1 0 1.7.1 1.4-3.7 5-6.2 9.2-6.2 1.2 0 2.4.2 3.6.7 4-8 12.2-13.1 21.3-13.1"
          clipRule="evenodd"
          opacity={0.6}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <g
          filter={`url(#${id_20d_svg__e})`}
          opacity={0.3}
          style={{
            mixBlendMode: "multiply",
          }}
        >
          <path
            fill="#B6B6B6"
            fillRule="evenodd"
            d="M44.073 63.187c-6.589.45-13.618.813-14.573.813-6.5 0-11 5.1-11 5.1h22.359zm12.412-3.27L57.4 54.8q.076-.365.077-.727c.648-.239 1.17-.47 1.17-.47s4.352-1.602 5.103-1.602.374-2.963.14-4.81l-.14-1.32c0-.362-.448-.885-1-1.53-.777-.908-1.762-2.057-2-3.34-.175-.94.026-2.082.172-2.91.091-.516.16-.91.104-1.058.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H59.758a5 5 0 0 0-.558-.301l-4-1.7.926-5.178c.556-.355.562-1.108.359-2.004m4.505-22.916q.021-.006.036.032s-.05-.029-.036-.032"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="#FF9D00"
          fillRule="evenodd"
          d="M50.8 69.4 53.6 54 43 73.5l7.1 3L45.5 94l12.2-21.6z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="M37.7 82.5h-2.8l1.4-2.5c.4-.6.2-1.5-.5-1.8-.7-.4-1.5-.2-1.9.5l-1.4 2.4-1.4-2.4c-.4-.7-1.2-.9-1.8-.5-.4.2-.6.5-.7.8s0 .7.1 1l1.4 2.4h-2.7c-.8.1-1.4.7-1.4 1.4s.6 1.4 1.4 1.4h2.8l-1.4 2.4c-.2.3-.2.7-.1 1s.3.6.6.8c.6.4 1.5.1 1.8-.5l1.4-2.4 1.4 2.5c.2.4.7.7 1.2.7.2 0 .5-.1.7-.2.6-.4.9-1.2.5-1.8l-1.4-2.5h2.8c.7 0 1.4-.6 1.4-1.4s-.7-1.3-1.4-1.3"
        />
        <path
          fill="#00B8F1"
          d="M67.5 92c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5m-14 7c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5"
        />
      </g>
      <defs>
        <linearGradient
          id={id_20d_svg__c}
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
          id={id_20d_svg__d}
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
          id={id_20d_svg__b}
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
        <clipPath id={id_20d_svg__a}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
        <filter
          id={id_20d_svg__e}
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
            result="effect1_foregroundBlur_1334_7294"
            stdDeviation={3.5}
          />
        </filter>
      </defs>
    </svg>
  );
};
export default SleetShowersAndThunderDay;

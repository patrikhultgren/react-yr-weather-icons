import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ClearSkyNight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_01n_svg__a = React.useId();
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
      <path
        fill={`url(#${id_01n_svg__a})`}
        d="M51.4 21c2.4 4.2 3.9 9.1 3.9 14.3 0 15.8-12.8 28.6-28.6 28.6-1.3 0-2.5-.1-3.7-.3C28 72.2 37.2 78 47.7 78c15.8 0 28.6-12.8 28.6-28.6 0-14.6-10.8-26.6-24.9-28.4"
      />
      <defs>
        <linearGradient
          id={id_01n_svg__a}
          x1={34.425}
          x2={71.181}
          y1={75.492}
          y2={31.689}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C7B789" />
          <stop offset={0.989} stopColor="#E1C578" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default ClearSkyNight;

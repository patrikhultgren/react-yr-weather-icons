import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FairNight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_02n_svg__a = React.useId();
  const id_02n_svg__b = React.useId();
  const id_02n_svg__c = React.useId();
  const id_02n_svg__d = React.useId();
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
      <g clipPath={`url(#${id_02n_svg__a})`}>
        <path
          fill={`url(#${id_02n_svg__b})`}
          fillRule="evenodd"
          d="M48.3 32.3c0-5.2-1.5-10.1-3.9-14.3 11.477 1.465 20.767 9.688 23.827 20.57a18.4 18.4 0 0 0-7.461 6.113h-.682c-3.036 0-5.824 1.425-7.497 3.842a12.25 12.25 0 0 0-8.117 3.718A11.77 11.77 0 0 0 41 60.608v.123c.062 3.346 1.363 6.445 3.78 8.737 1.917 1.866 4.355 2.995 6.986 3.314A28.5 28.5 0 0 1 40.7 75C30.2 75 21 69.2 16 60.6c1.2.2 2.4.3 3.7.3 15.8 0 28.6-12.8 28.6-28.6"
          clipRule="evenodd"
        />
        <path
          fill="#DDD"
          fillRule="evenodd"
          d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.7 5.7 0 0 0-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.053-.062-2.541 0-4.896.992-6.63 2.788-1.674 1.735-2.603 3.966-2.603 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.383 2.603h34.512c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_02n_svg__c})`}
          fillRule="evenodd"
          d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.7 5.7 0 0 0-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.053-.062-2.541 0-4.896.992-6.63 2.788-1.674 1.735-2.603 3.966-2.603 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.383 2.603h34.512c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614"
          clipRule="evenodd"
          opacity={0.6}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <g
          filter={`url(#${id_02n_svg__d})`}
          opacity={0.3}
          style={{
            mixBlendMode: "multiply",
          }}
        >
          <path
            fill="#B6B6B6"
            d="M58.176 65.503c1.107 0 15.396-.789 16.407-1.24 1.382-.616-1.481-4.32 0-4.628.669-.139 1.652-.575 1.652-.575s2.698-.992 3.163-.992.232-1.837.086-2.98l-.086-.819c0-.539-1.606-1.657-1.86-3.017-.175-.947.263-2.221.172-2.459 0 0-.032-.017-.022-.02q.013-.003.022.02c.07.033.571.203.571.203 1.207.409 3.116 1.078 4.834 2.256 1.028.704 2.442 2.053 2.442 2.053s1.02.788 1.276 1.045c.62.62 2.478 2.478 3.718 2.478h3.098l1.394.985.31 1.99c0 4.895-4.028 8.86-8.923 8.86H51.36s2.788-3.16 6.816-3.16"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={id_02n_svg__b}
          x1={27.425}
          x2={64.181}
          y1={72.492}
          y2={28.689}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#686E73" />
          <stop offset={0.989} stopColor="#6A7075" />
        </linearGradient>
        <linearGradient
          id={id_02n_svg__c}
          x1={69.329}
          x2={70.568}
          y1={49.702}
          y2={69.902}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.484} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#B3B2B2" />
        </linearGradient>
        <clipPath id={id_02n_svg__a}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
        <filter
          id={id_02n_svg__d}
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
            result="effect1_foregroundBlur_149_1384"
            stdDeviation={2.169}
          />
        </filter>
      </defs>
    </svg>
  );
};
export default FairNight;

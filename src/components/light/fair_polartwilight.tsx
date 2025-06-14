import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FairPolarTwilight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  const id_02m_svg__a = React.useId();
  const id_02m_svg__b = React.useId();
  const id_02m_svg__c = React.useId();
  const id_02m_svg__d = React.useId();
  const id_02m_svg__e = React.useId();
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
      <g clipPath={`url(#${id_02m_svg__a})`}>
        <path
          fill={`url(#${id_02m_svg__b})`}
          fillRule="evenodd"
          d="M64.248 41H9l15.4 6.8-9.9 13.7 16.7-1.8-1.7 16.8 13.212-9.618c-1.088-1.834-1.671-3.938-1.712-6.15v-.124c0-3.16 1.24-6.135 3.47-8.365a12.25 12.25 0 0 1 8.117-3.718c1.673-2.417 4.461-3.842 7.497-3.842h.682A18.3 18.3 0 0 1 64.248 41M44.044 68.707 50 82l4.029-9.124h-.699c-3.222 0-6.258-1.177-8.55-3.408a12 12 0 0 1-.736-.76zm21.53 4.17L70.5 76.4l-.38-3.524zm22.608-30.614q-.673-.668-1.412-1.263H91z"
          clipRule="evenodd"
        />
        <path
          fill="#171F28"
          fillRule="evenodd"
          d="M69.659 38H6.5a1.5 1.5 0 0 0 0 3h57.748a18.4 18.4 0 0 1 5.41-3zm17.111 3a18.2 18.2 0 0 0-5.394-3H93.5a1.5 1.5 0 0 1 0 3z"
          clipRule="evenodd"
        />
        <path
          fill="#FFD348"
          fillRule="evenodd"
          d="M64.248 41a18.3 18.3 0 0 0-3.482 3.683h-.682c-3.036 0-5.824 1.425-7.497 3.842a12.25 12.25 0 0 0-8.117 3.718A11.77 11.77 0 0 0 41 60.608v.123a12.8 12.8 0 0 0 .652 3.834c-5.447-1.913-10.26-5.693-13.368-11.056A24.9 24.9 0 0 1 25 41z"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_02m_svg__c})`}
          fillRule="evenodd"
          d="M64.248 41a18.3 18.3 0 0 0-3.482 3.683h-.682c-3.036 0-5.824 1.425-7.497 3.842a12.25 12.25 0 0 0-8.117 3.718 11.76 11.76 0 0 0-3.453 7.72 21 21 0 0 1-9.213-8.465A20.7 20.7 0 0 1 29 41z"
          clipRule="evenodd"
        />
        <path
          fill="#DDD"
          fillRule="evenodd"
          d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.7 5.7 0 0 0-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.053-.062-2.541 0-4.896.992-6.63 2.788-1.674 1.735-2.603 3.966-2.603 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.383 2.603h34.512c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614"
          clipRule="evenodd"
        />
        <path
          fill={`url(#${id_02m_svg__d})`}
          fillRule="evenodd"
          d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.7 5.7 0 0 0-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.053-.062-2.541 0-4.896.992-6.63 2.788-1.674 1.735-2.603 3.966-2.603 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.383 2.603h34.512c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614"
          clipRule="evenodd"
          opacity={0.6}
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <g
          filter={`url(#${id_02m_svg__e})`}
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
          id={id_02m_svg__c}
          x1={36.5}
          x2={63.499}
          y1={24.912}
          y2={57.089}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAF22" />
          <stop offset={0.99} stopColor="#F09900" />
        </linearGradient>
        <linearGradient
          id={id_02m_svg__d}
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
          id={id_02m_svg__b}
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
        <clipPath id={id_02m_svg__a}>
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
        <filter
          id={id_02m_svg__e}
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
            result="effect1_foregroundBlur_149_1383"
            stdDeviation={2.169}
          />
        </filter>
      </defs>
    </svg>
  );
};
export default FairPolarTwilight;

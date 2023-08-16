import React, { forwardRef } from 'react';
import { SVGProps } from '../../types';

export const Named = forwardRef<SVGSVGElement, SVGProps>((props, ref) => {
  const {
    fill = 'currentColor',
    stroke = 'currentColor',
    color,
    c,
    h,
    w,
    strokeWidth = '0',
    height = '1em',
    width = '1em',
    ...rest
  } = props;

  return (
    <svg
      ref={ref}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      height={h || height}
      width={w || width}
      color={c || color}
      aria-hidden="true"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="" />
    </svg>
  );
});

Named.displayName = 'ioeri-icons/Named';

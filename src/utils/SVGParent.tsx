import React from 'react';
import { SVGProps, getSv } from './index';

export const SVGParent = (props: SVGProps) => {
  const {
    fill = 'currentColor',
    stroke = 'currentColor',
    color,
    c,
    h,
    w,
    viewBox = '0 0 48 48',
    strokeWidth = '0',
    height = '1em',
    width = '1em',
    children,
    size,
    eb,
    ...rest
  } = props;
  const arm_sz = size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl' || size === 'xxl' || size === 'xxxl';
  const val_sz = getSv(size);
  const hand_sz = arm_sz ? val_sz : typeof size === 'number' ? `${size}px` : size;
  const hand_h = typeof h === 'number' ? `${h}px` : h;
  const hand_w = typeof w === 'number' ? `${w}px` : w;
  const addProps: { [key: string]: string } = {};
  if (eb) {
    addProps.version = '1';
    addProps.enableBackground = 'new 0 0 48 48';
  }
  return (
    <svg
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      height={hand_sz || hand_h || height}
      width={hand_sz || hand_w || width}
      color={c || color}
      aria-hidden="true"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...addProps}
      {...rest}
    >
      {children}
    </svg>
  );
};

SVGParent.displayName = 'ioeri-icons/SVGParent';

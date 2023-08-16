import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandCSS3 = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent {...rest}>
      <path d="M5.48,3l3.37,37.8,15.13,4.2,15.16-4.2L42.52,3H5.48Zm9.52,30.97l-.75-7.5h4.5l.75,3.75,4.5,1.5,4.5-1.5,.75-6H14.25l-.75-5.25,10.5-3.28,1.5-.47H13.5l-.75-4.5h23.25l-.75,5.25-9.75,3.75h9l-1.5,14.25-9,3-9-3Z" />
      <polygon points="25.5 15.22 24 15.69 24 15.22 25.5 15.22" />
      <polygon points="28.5 30.22 24 31.72 24 24.22 29.25 24.22 28.5 30.22" />
      <polygon points="39.14 6.09 36.25 38.39 24 41.79 24 36.97 33 33.97 34.5 19.72 25.5 19.72 35.25 15.97 36 10.72 24 10.72 24 6.09 39.14 6.09" />
    </SVGParent>
  );
};

BrandCSS3.displayName = 'ioeri-icons/BrandCSS3';

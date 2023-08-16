import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandHTML5 = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent {...rest}>
      <path d="M5.48,3l3.37,37.8,15.13,4.2,15.16-4.2L42.52,3H5.48Zm30.01,8.97l-.21,2.35-.1,1.04H17.44l.43,4.75h16.89l-.11,1.25-1.09,12.2-.07,.78-9.49,2.63h-.02s-9.5-2.63-9.5-2.63l-.65-7.27h4.66l.33,3.69,5.16,1.4h.02s5.15-1.4,5.15-1.4l.54-6.01h-5.69s-.02-.01-.02-.01h0s-10.35,.01-10.35,.01l-1.14-12.78-.12-1.24h23.23l-.11,1.24Z" />
      <polygon points="29.15 30.76 24 32.15 24 24.75 29.69 24.75 29.15 30.76" />
      <polygon points="39.14 6.09 36.25 38.39 24 41.79 24 36.97 33.49 34.34 33.56 33.56 34.65 21.36 34.76 20.11 24 20.11 24 15.36 35.18 15.36 35.28 14.32 35.49 11.97 35.6 10.73 24 10.73 24 6.09 39.14 6.09" />
    </SVGParent>
  );
};

BrandHTML5.displayName = 'ioeri-icons/BrandHTML5';

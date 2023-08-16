import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandInstagramGradientColor = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent eb {...rest}>
      <linearGradient
        id="linear-gradient"
        gradientUnits="userSpaceOnUse"
        x1="21.33"
        y1="27.8"
        x2="26.66"
        y2="20.18"
      >
        <stop offset="0" stopColor="#ffe082" />
        <stop offset=".3" stopColor="#ff5722" />
        <stop offset=".55" stopColor="#d81b60" />
        <stop offset="1" stopColor="#304ffe" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        xlinkHref="#linear-gradient"
        x1="15.31"
        y1="36.41"
        x2="32.69"
        y2="11.59"
      />
      <linearGradient
        id="linear-gradient-3"
        x1="11.56"
        y1="41.78"
        x2="36.51"
        y2="6.15"
        xlinkHref="#linear-gradient"
      />
      <circle fill="url(#linear-gradient)" cx="24" cy="23.99" r="4.65" />
      <path
        fill="url(#linear-gradient-2)"
        d="M31.24,11.97h-14.48c-3.23,0-4.79,1.57-4.79,4.79v14.48c0,3.23,1.57,4.79,4.79,4.79h14.48c3.23,0,4.79-1.57,4.79-4.79v-14.48c0-3.23-1.57-4.79-4.79-4.79Zm-7.24,19.68c-4.22,0-7.65-3.43-7.65-7.65s3.43-7.65,7.65-7.65,7.65,3.43,7.65,7.65-3.43,7.65-7.65,7.65Zm7.18-13.67c-1.2,0-2.18-.98-2.18-2.18s.98-2.18,2.18-2.18,2.18,.98,2.18,2.18-.98,2.18-2.18,2.18Z"
      />
      <path
        fill="url(#linear-gradient-3)"
        d="M32.5,5.54H15.57c-5.5,0-9.96,4.46-9.96,9.96v16.93c0,5.5,4.46,9.96,9.96,9.96h16.93c5.5,0,9.96-4.46,9.96-9.96V15.5c0-5.5-4.46-9.96-9.96-9.96Zm6.53,25.7c0,4.88-2.91,7.79-7.79,7.79h-14.48c-4.88,0-7.79-2.91-7.79-7.79v-14.48c0-4.88,2.91-7.79,7.79-7.79h14.48c4.88,0,7.79,2.91,7.79,7.79v14.48Z"
      />
    </SVGParent>
  );
};

BrandInstagramGradientColor.displayName = 'ioeri-icons/BrandInstagramGradientColor';

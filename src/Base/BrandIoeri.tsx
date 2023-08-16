import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandIoeri = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent {...rest}>
      <path d="M28.1,28.86h-8.16c-1.09,0-1.91,.82-1.91,1.91s.82,1.91,1.91,1.91h8.2c1.09,0,1.91-.82,1.91-1.91-.04-1.08-.86-1.91-1.95-1.91Z" />
      <path d="M13.95,29.69c-1.2,0-2.21-1.01-2.21-2.21v-4.97c0-3.96,3.22-7.18,7.19-7.18h4.98c1.2,0,2.21,1.01,2.21,2.21s-1.01,2.21-2.21,2.21h-4.98c-1.53,0-2.77,1.23-2.77,2.77v4.97c-.07,1.2-1.01,2.21-2.21,2.21Z" />
      <path d="M31.58,17.72c-2.58,0-4.72,2.09-4.72,4.71s2.1,4.71,4.72,4.71,4.72-2.09,4.72-4.71-2.06-4.71-4.72-4.71Zm0,7.07c-1.31,0-2.32-1.08-2.32-2.32,0-1.31,1.09-2.32,2.32-2.32,1.31,0,2.32,1.08,2.32,2.32,.07,1.23-1.01,2.32-2.32,2.32Z" />
      <path d="M31.58,5h-15.16c-6.33,0-11.42,5.09-11.42,11.41v15.19c0,6.28,5.09,11.41,11.38,11.41h15.2c6.29,0,11.42-5.09,11.42-11.41v-15.19c0-6.32-5.09-11.41-11.42-11.41Zm7.64,26.56c0,4.15-3.41,7.56-7.56,7.56h-15.24c-4.16,0-7.56-3.4-7.56-7.56v-15.15c0-4.15,3.41-7.56,7.56-7.56h15.2c4.23,0,7.56,3.4,7.56,7.56v15.15h.04Z" />
    </SVGParent>
  );
};

BrandIoeri.displayName = 'ioeri-icons/BrandIoeri';

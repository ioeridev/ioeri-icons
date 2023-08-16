import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandTailwind = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent {...rest}>
      <path d="M34.5,28.2c-1.4,5.6-4.9,8.4-10.5,8.4-5.21,0-7.59-2.42-9.65-4.51-1.26-1.28-2.4-2.44-4-2.84-2.8-.7-5.25,.35-7.35,3.15,1.4-5.6,4.9-8.4,10.5-8.4,5.21,0,7.59,2.42,9.65,4.51,1.26,1.28,2.4,2.44,4,2.84,2.8,.7,5.25-.35,7.35-3.15Z" />
      <path d="M45,15.6c-1.4,5.6-4.9,8.4-10.5,8.4-5.21,0-7.59-2.42-9.65-4.51-1.26-1.28-2.4-2.44-4-2.84-2.8-.7-5.25,.35-7.35,3.15,1.4-5.6,4.9-8.4,10.5-8.4,5.21,0,7.59,2.42,9.65,4.51,1.26,1.28,2.4,2.44,4,2.84,2.8,.7,5.25-.35,7.35-3.15Z" />
    </SVGParent>
  );
};

BrandTailwind.displayName = 'ioeri-icons/BrandTailwind';

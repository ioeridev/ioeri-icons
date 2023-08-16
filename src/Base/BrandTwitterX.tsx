import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandTwitterX = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent {...rest}>
      <path d="M34.93,6.83h5.83l-12.73,14.55,14.98,19.8h-11.73l-9.18-12.01-10.51,12.01H5.75l13.62-15.56L5,6.83h12.02l8.3,10.98,9.6-10.98Zm-2.05,30.86h3.23L15.27,10.13h-3.46l21.08,27.56Z" />
    </SVGParent>
  );
};

BrandTwitterX.displayName = 'ioeri-icons/BrandTwitterX';

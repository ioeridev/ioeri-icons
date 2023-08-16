import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandTiktok = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent {...rest}>
      <path d="M40.25,20.37c-.31,.03-.62,.05-.93,.05-3.42,0-6.61-1.72-8.49-4.59v15.62c0,6.38-5.17,11.55-11.55,11.55s-11.55-5.17-11.55-11.55,5.17-11.55,11.55-11.55h0c.24,0,.48,.02,.71,.04v5.69c-.24-.03-.47-.07-.71-.07-3.25,0-5.89,2.64-5.89,5.89s2.64,5.89,5.89,5.89,6.13-2.56,6.13-5.82l.06-26.53h5.44c.51,4.88,4.45,8.69,9.34,9.05v6.32" />
    </SVGParent>
  );
};

BrandTiktok.displayName = 'ioeri-icons/BrandTiktok';

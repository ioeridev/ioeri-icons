import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandChakraUI = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent {...rest}>
      <path d="M24,3C12.37,3,3,12.37,3,24s9.37,21,21,21,21-9.37,21-21S35.63,3,24,3Zm4.9,7.58c.23,0,.43,.24,.3,.49l-5.33,9.76c-.09,.16-.03,.36,.13,.44,.05,.03,.1,.04,.15,.04h9.21c.3,0,.44,.36,.22,.57l-16.14,15.06c-.29,.27-.72-.11-.49-.43l7.64-10.54c.11-.15,.07-.35-.08-.46-.06-.04-.12-.06-.19-.06H14.6c-.18,0-.33-.15-.33-.33,0-.09,.04-.17,.1-.23l14.32-14.22c.06-.06,.14-.1,.22-.1h0Z" />
    </SVGParent>
  );
};

BrandChakraUI.displayName = 'ioeri-icons/BrandChakraUI';

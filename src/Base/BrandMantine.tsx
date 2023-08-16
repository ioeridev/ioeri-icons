import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const BrandMantine = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent {...rest}>
      <path d="M24,3C12.4,3,3,12.4,3,24s9.4,21,21,21,21-9.4,21-21S35.6,3,24,3Zm-6.24,20.36c0-1.32,1.07-2.39,2.39-2.39s2.39,1.07,2.39,2.39-1.07,2.39-2.39,2.39-2.39-1.07-2.39-2.39Zm11.33,8.76h-4.63c-.86,1-1.88,1.88-3.04,2.6-.25,.15-.53,.23-.81,.23-.52,0-1.02-.26-1.31-.73-.45-.72-.23-1.67,.49-2.12,2.92-1.82,4.66-4.76,4.66-8.21s-1.85-6.59-4.95-8.38c-.73-.42-.99-1.36-.56-2.1,.42-.73,1.36-.99,2.1-.56,1.29,.75,2.45,1.71,3.41,2.83h4.63c.85,0,1.54,.69,1.54,1.54s-.69,1.54-1.54,1.54h-2.66c.73,1.61,1.11,3.33,1.11,5.14s-.39,3.55-1.11,5.15h2.67c.85-.01,1.54,.68,1.54,1.53s-.69,1.54-1.54,1.54Z" />
    </SVGParent>
  );
};

BrandMantine.displayName = 'ioeri-icons/BrandMantine';
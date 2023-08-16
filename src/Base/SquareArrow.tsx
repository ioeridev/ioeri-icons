import React from 'react';
import { SVGProps } from '../utils';
import { SVGParent } from '../utils/SVGParent';

export const SquareArrow = (props: Omit<SVGProps, 'eb' | 'children'>) => {
  const { ...rest } = props;
  return (
    <SVGParent viewBox="0 0 24 24" {...rest}>
      <path d="M23.9,.81c-.13-.32-.39-.57-.71-.71-.16-.07-.33-.1-.5-.1h-7.29c-.72,0-1.31,.59-1.31,1.31s.59,1.31,1.31,1.31h4.13L7.18,14.97c-.51,.51-.51,1.34,0,1.85,.26,.26,.59,.38,.93,.38s.67-.13,.93-.38L21.38,4.47v4.13c0,.72,.59,1.31,1.31,1.31s1.31-.59,1.31-1.31V1.31c0-.17-.03-.34-.1-.5Z" />
      <path d="M21.38,12.06c-.72,0-1.31,.59-1.31,1.31v8.01H2.62V3.93H10.63c.72,0,1.31-.59,1.31-1.31s-.59-1.31-1.31-1.31H1.75c-.96,0-1.75,.78-1.75,1.75V22.25c0,.96,.78,1.75,1.75,1.75H20.94c.96,0,1.75-.78,1.75-1.75V13.37c0-.72-.59-1.31-1.31-1.31Z" />
    </SVGParent>
  );
};

SquareArrow.displayName = 'ioeri-icons/SquareArrow';

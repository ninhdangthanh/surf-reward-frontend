'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

import { BoxAnimationProps } from './type';

const BoxAnimation = (props: BoxAnimationProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(boxRef);

  return (
    <div
      ref={boxRef}
      {...props}
      className={`transition-all duration-700 ${
        isInView ? 'scale-100 opacity-1 transform-none' : 'scale-90 opacity-0 translate-y-[50px]'
      } ${props.className}`}
    ></div>
  );
};

export default BoxAnimation;

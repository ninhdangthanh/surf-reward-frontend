'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { SectionDividerProps } from './type';
import './index.scss';

const SectionDivider = ({
  prefix,
  suffix,
  reverse,
  limitWidth = true,
  position = 'center',
  middle,
}: SectionDividerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    margin: '-200px -200px -200px -200px',
  });

  return (
    <div
      className={`flex items-center space-x-4 my-4 ${
        position === 'center' ? 'justify-center' : position === 'right' ? 'justify-end' : ''
      }`}
      ref={containerRef}
    >
      {position !== 'left' && (
        <div
          className={`divider rotate-180 ${position !== 'center' && limitWidth && 'max-w-[50%]'} ${
            isInView ? 'flex-1' : 'w-0'
          }`}
        ></div>
      )}
      <p className={`text-[0.815rem] font-semibold space-x-2 tracking-widest w-max`}>
        <span className={reverse ? 'text-gray-400' : 'text-gray-300'}>{prefix} </span>
        <span className="text-[#acb8c4]">{middle} </span>
        <span className={reverse ? 'text-gray-300' : 'text-gray-400'}>{suffix}</span>
      </p>
      <p className={`text-[0.815rem] font-semibold space-x-2 tracking-widest w-max`}></p>
      {position !== 'right' && (
        <div
          className={`divider ${position !== 'center' && limitWidth && 'max-w-[50%]'} ${
            isInView ? 'flex-1' : 'w-0'
          }`}
        ></div>
      )}
    </div>
  );
};

export default SectionDivider;

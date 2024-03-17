'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

import BoxAnimation from '../BoxAnimation';
import SectionDivider from '../SectionDivider';
import CheckSvg from '@/assets/svg/check.svg';
import CheckWiderSvg from '@/assets/svg/check-wider.svg';
import { RoadMapItemProps } from './type';

const RoadMapItem = ({ prefix, suffix, contents }: RoadMapItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    margin: '-200px -200px -200px -200px',
  });

  return (
    <div ref={containerRef} className="flex">
      <div
        className={`mt-[2.1rem] w-[45px] h-[45px] lg:w-[3.15rem] lg:h-[3.15rem] ring-[6px] shadow-current shadow rounded-full flex items-center justify-center ${
          isInView ? 'ring-[#312e81] bg-[#4f46e5]' : 'ring-[#353535] bg-[#535353]'
        }`}
      >
        <Image
          src={CheckWiderSvg}
          alt="check wider"
          className="w-[1.6rem] h-[16rem] object-contain"
        />
      </div>
      <BoxAnimation className="bg-[#151b22] p-[2.1rem] rounded-xl flex-1 ml-[2.1rem]">
        <div className="mb-[1.9rem]">
          <SectionDivider
            reverse
            position="left"
            prefix={prefix}
            suffix={suffix}
            limitWidth={false}
          />
          {contents?.map((content, index) => (
            <div key={index} className="flex items-center ml-3 mt-2.5">
              <Image src={CheckSvg} alt="Check Svg" className="w-3 object-contain" />
              <p className="text-base text-gray-400 pl-4">{content}</p>
            </div>
          ))}
        </div>
      </BoxAnimation>
    </div>
  );
};

export default RoadMapItem;

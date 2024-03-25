import Image from 'next/image';

import './index.scss';
import { SliderShowProps } from './type';

const SliderShow = ({ logos, isLarge, title }: SliderShowProps) => {
  return (
    <div className="bg-[#1f2a37] overflow-hidden py-[30px]">
      {title && <p className="text-gray-400 text-base xl:text-lg text-center">{title}</p>}
      <div className="flex w-full">
        <div className="items-holder">
          <div className="items">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`item2 ${isLarge ? 'w-[260px] mx-5' : 'w-[160px] mx-0.5'}`}
              >
                <Image
                  key={index}
                  src={logo}
                  className={`image cursor-pointer ${
                    isLarge ? 'w-[260px]' : 'max-w-[100px] max-h-[120px]'
                  }`}
                  alt="Logo"
                />
              </div>
            ))}
          </div>
          <div className="items">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`item2 ${isLarge ? 'w-[260px] mx-5' : 'w-[160px] mx-0.5'}`}
              >
                <Image
                  key={index}
                  src={logo}
                  className={`image cursor-pointer ${
                    isLarge ? 'w-[260px]' : 'max-w-[100px] max-h-[120px]'
                  }`}
                  alt="Logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderShow;

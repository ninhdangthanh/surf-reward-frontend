import Image from 'next/image';

import FireIcon from '@/assets/images/fire-icon.jpg';
import CheckWiderIcon from '@/assets/svg/check-wider.svg';
import './index.scss';
import { BonusSpecialItemsProps } from './type';
import { BoxAnimation } from '..';

const BonusSpecialItems = ({
  title,
  subtitle,
  price,
  suffix,
  contents,
}: BonusSpecialItemsProps) => {
  return (
    <BoxAnimation className="border border-white rounded-lg p-10 xl:p-11 mx-1 bg-[#151b22] flex flex-col">
      <div className="text-gray-400 font-semibold text-[26px] flex items-center mb-4">
        {title} <Image src={FireIcon} alt="Fire Icon" className="w-5 h-5 object-contain ml-2" />
      </div>
      <p className="text-gray-400 text-base lg:text-lg xl:text-[1.25rem] font-bold">{subtitle}</p>
      <div className="pricing-plan mt-4 text-[32px] xl:text-[2.6rem]">
        {price}
        <span className="text-base font-normal ml-2.5">{suffix}</span>
      </div>
      <div className="border-t border-[#00000033] mb-10 space-y-4 pt-4 flex-1">
        {contents.map((content, index) => (
          <div className="flex items-center flex-row" key={index}>
            <Image
              src={CheckWiderIcon}
              alt="Check Wider Icon"
              className="w-4 h-4 xl:w-7 xl:h-7 mr-4 mt-0.5"
            />
            <p className="text-gray-400 text-sm xl:text-[1.125rem]">{content}</p>
          </div>
        ))}
      </div>
      <div className="text-white bg-black p-5 text-[18px] text-center font-semibold button-gradient rounded-xl cursor-pointer transition-all">
        Buy now
      </div>
    </BoxAnimation>
  );
};

export default BonusSpecialItems;

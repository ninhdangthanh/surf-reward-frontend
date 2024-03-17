import { useEffect, useRef, useState } from 'react';
import './index.scss';

interface PricingStructureProductItemProps {
  title: string;
  status?: string;
  content: {
    'Token Price'?: string;
    'Increase Price'?: string;
    'Increase Duration'?: string;
    Availability?: string;
    'Minimum Invest'?: string;
    'Maximum Invest'?: string;
    'Exchange Type'?: string;
    'Initial Market Cap'?: string;
    [key: string]: any;
  };
  isActive?: boolean;
  onChangeActiveKey?: () => void;
  [key: string]: any;
}
const INITIAL_DEG = 78;

const PricingStructureProductItem = ({
  content,
  status,
  title,
  isActive,
  onChangeActiveKey,
}: PricingStructureProductItemProps) => {
  const pricingStructureItemRef = useRef<any>(null);
  const [deg, setDeg] = useState<number>(INITIAL_DEG);

  useEffect(() => {
    const timer = setInterval(() => {
      if (deg > 344) {
        setDeg(INITIAL_DEG);
        return;
      }
      if (deg >= INITIAL_DEG) {
        setDeg(deg + 7);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [deg]);

  useEffect(() => {
    isActive
      ? (pricingStructureItemRef.current.style = `filter: saturate(100%) hue-rotate(${deg}deg)`)
      : false;
  }, [deg, isActive]);

  return (
    <div
      ref={pricingStructureItemRef}
      className={`!text-white flex flex-1 flex-col  border border-[#1a1f26] rounded-2xl w-full ${
        isActive ? 'pricing-structure-item' : ''
      }`}
      onClick={onChangeActiveKey}
    >
      <div className="bg-[#181818] flex justify-start items-center flex-col h-[100px] xl:h-[140px] rounded-tl-2xl rounded-tr-2xl">
        <span
          className={`font-semibold text-[19px] mt-4 mb-2 ${
            status === 'FINISHED' ? 'text-[#3aecba]' : ''
          }`}
        >
          {status}
        </span>
        <h3
          ref={pricingStructureItemRef}
          className={`text-[#899099] font-semibold text-xl xl:text-[26px] ${!status ? 'mt-6' : ''}`}
        >
          {title}
        </h3>
      </div>
      <div className="px-[28px] pt-[28px] pb-[48px] space-y-[19px] min-h-[400px]">
        {Object.keys(content).map((key) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-[#77818b] font-bold text-base xl:text-[22px]">{key}</span>
            <span className="text-[#77818b] font-[300] text-sm xl:text-[20px]">
              {content?.[key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingStructureProductItem;

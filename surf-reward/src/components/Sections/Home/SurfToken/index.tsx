'use client';

import Image from 'next/image';

import Container from '../../../Container';
import TokenPieImage from '@/assets/images/token-pie.png';
import QueryStatsSvg from '@/assets/svg/query-stats.svg';
import CopySvg from '@/assets/svg/copy.svg';

import BoxAnimation from '../../../BoxAnimation';
import SectionDivider from '../../../SectionDivider';
import './index.scss';

const SurfToken = () => {
  const tokenDetails = [
    {
      label: 'Symbol',
      value: 'SURF',
    },
    {
      label: 'Name',
      value: 'SURF Reward',
    },
    {
      label: 'Platform',
      value: 'BEP-20 / Binance Smart Chain (BSC)',
    },
    {
      label: 'Total Supply',
      value: '1,000,000,000',
    },
    {
      label: 'Token in PreSale',
      value: '200,000,000',
    },
    {
      label: 'Softcap',
      value: '$1,500,000',
    },
    {
      label: 'Hardcap',
      value: '$5,000,000',
    },
    {
      label: 'Listing price',
      value: '$0.05',
    },
  ];
  return (
    <div className="max-w-[1450px] mx-auto">
      <BoxAnimation className="grid lg:grid-cols-2 rounded-xl overflow-hidden mx-4">
        <Image
          src={TokenPieImage}
          alt="Token Pie Image"
          sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 96vw"
          className="w-full object-cover h-full max-h-[330px] md:max-h-[440px] lg:max-h-max"
        />
        <div className="p-10 md:p-12 xl:p-[3.9rem] bg-[#151b22]">
          <SectionDivider prefix="04" suffix="SURF TOKEN" position="left" />
          <div className="grid grid-cols-[3fr_8fr] md:grid-cols-2 lg:grid-cols-[2fr_8fr] gap-4">
            <div className="grow-and-search-icon p-[18px]">
              <Image
                src={QueryStatsSvg}
                alt="Query Stats Svg"
                className="w-[55px] h-[55px] xl:w-full xl:h-full"
              />
            </div>
            <h2 className="title">
              Our <span className="title-gradient">Economics</span>
            </h2>
            <div></div>
            <div className="text-lg lg:text-xl text-[1.65rem] text-gray-400">
              PreSale 20%
              <br />
              Staking 8%
              <br />
              Project Rewards 39%
              <br />
              Liquidity &amp; Marketing 25%
              <br />
              Development Reserve 6%
              <br />
              Partner &amp; Advisor 2%
              <br />
              <span className="text-red-600">0% Fees!!</span>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-[#c5cfd9] text-[36px] md:text-[34px] lg:text-[40px] xl:text-[3.3rem] font-bold">
              Contract address:
            </h3>
            <div className="flex justify-between items-center mt-2.5">
              <div className="text-gray-400 bg-[#1e344a] flex items-center justify-center p-3 text-xs xl:text-[1.02rem] w-3/4 rounded line-clamp-1 h-12">
                0x53f1e15ed3Cea8c1d4Adc4BE2DDE4BA33715a922
              </div>
              <div className="text-white flex flex-row justify-center items-center bg-[#585b6c] py-3 px-4 rounded cursor-pointer text-xs xl:text-[1.02rem] h-12">
                <Image
                  src={CopySvg}
                  alt="Copy Svg"
                  className="w-[14px] h-[14px] object-contain mr-3"
                />
                Copy
              </div>
            </div>
          </div>
        </div>
      </BoxAnimation>
      <Container className="bg-world-map py-[6.5rem] mt-[9rem]">
        <h3 className="text-[#c5cfd9] text-[22px] md:text-[24px] lg:text-[1.95rem] mb-10 font-semibold text-center">
          Token Details:
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {tokenDetails.map((token, index) => (
            <div key={index} className={`grid-item`}>
              {(index + 1) % 4 !== 0 && (
                <div
                  className={`border-left hidden lg:block ${
                    index >= 3 ? 'mb-0 bottom-[-10px]' : 'mb-[10px] bottom-0'
                  }`}
                ></div>
              )}
              {(index + 1) % 2 !== 0 && (
                <div
                  className={`border-left hidden md:block ${
                    index >= 3 ? 'mb-0 bottom-[-10px]' : 'mb-[10px] bottom-0'
                  }`}
                ></div>
              )}
              {index <= 3 && <div className="hidden lg:block border-bottom"></div>}
              {index <= 5 && <div className="hidden md:block lg:hidden border-bottom"></div>}
              {index <= 6 && <div className="md:hidden border-bottom"></div>}
              <p className="text-[#c5cfd9] text-[1.25rem] font-semibold">{token.label}</p>
              <p className="text-gray-400 text-[1.125rem] mt-2">{token.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SurfToken;

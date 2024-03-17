'use client';

import { ButtonPrimary, Container } from '@/components';
import DefaultLayout from '@/layout/DefaultLayout';
import ArrowDownSvg from '@/assets/svg/arrow-down.svg';
import './index.scss';
import Image from 'next/image';

const StackingPage = () => {
  return (
    <DefaultLayout>
      <div className='bg-underline'>
        <Container>
          <p className="text-[yellow] text-center text-lg md:text-xl xl:text-[22px] my-6">
            Welcome to our staking app.
            <br /> If you have any questions, please let us know. And now: Stake it and enjoy it!
          </p>
          <div className="bg-white lg:max-w-[406px] mx-auto p-4 lg:p-0 rounded-xl my-16">
            <div className="bg-[#2563eb] w-full max-w-[500px] mx-auto text-white p-4 lg:m-0 rounded-xl text-xl md:text-[30px] font-bold text-center box-title -translate-y-1/2 lg:translate-y-0">
              DASHBOARD
            </div>
            <div className="p-10 flex flex-col items-center">
              <div className="flex items-center justify-between text-base w-full">
                <span>YOUR BALANCE</span>
                <span className="">
                  <span className="font-bold text-[#4473fa] mr-2 inline-block">0</span>
                  <span className="font-semibold text-[#b16cea]">SURF</span>
                </span>
              </div>
              <div className="flex input-shadow h-[50px] rounded-lg w-full">
                <input
                  type="number"
                  placeholder="Enter stack amount"
                  className="flex-1 bg-transparent outline-none border-none h-full px-4 placeholder:text-zinc-400 placeholder:font-normal"
                />
                <span className="text-xl font-bold text-black block mr-2">MAX</span>
              </div>
              <Image src={ArrowDownSvg} alt="Arrow Down Svg" className="w-[27px] h-[27px] my-3" />
              <p className="text-gray-400 text-base">Estimated Yield</p>
              <p className="text-[#4473fa] text-[30px] mb-5">APY 11%</p>
              <p className="text-base text-black border-b-2 border-[#4473fa] w-[80%] lg:w-full text-center mt-1">
                APY = ANNUAL PERCENTAGE YIELD
              </p>
              <p className="text-base text-black border-b-2 border-[#664dcc] w-[70%] lg:w-full text-center mt-1">
                MONTHLY = APY / 12
              </p>
              <p className="text-base text-black border-b-2 border-[#b16cea] w-[60%] lg:w-full text-center mt-1">
                DAILY = APY / 365
              </p>
              <ButtonPrimary className="h-[42px] flex items-center justify-center mt-6">
                Connect
              </ButtonPrimary>
            </div>
          </div>
          <div className="bg-white lg:max-w-[852px] mx-auto p-4 lg:p-0 rounded-xl my-20">
            <div className="bg-[#2563eb] w-full max-w-[500px] mx-auto text-white p-4 rounded-xl text-xl md:text-[30px] font-bold text-center box-title -translate-y-1/2">
              YOUR STATISTICS
            </div>
            <div className="p-6 flex flex-col items-center">
              <div className="flex items-center justify-between text-base w-full mt-8">
                <span>YOUR BALANCE</span>
                <span className="">
                  <span className="font-bold text-[#4473fa] mr-2 inline-block">0</span>
                  <span className="font-semibold text-[#b16cea]">SURF</span>
                </span>
              </div>
              <div className="flex input-shadow h-[50px] rounded-lg w-full">
                <input
                  type="number"
                  placeholder="Enter stack amount"
                  className="flex-1 bg-transparent outline-none border-none h-full px-4 placeholder:text-zinc-400 placeholder:font-normal"
                />
                <span className="text-xl font-bold text-black block mr-2">MAX</span>
              </div>
              <Image src={ArrowDownSvg} alt="Arrow Down Svg" className="w-[27px] h-[27px] my-3" />
              <p className="text-gray-400 text-base">Estimated Yield</p>
              <p className="text-[#4473fa] text-[30px] mb-5">APY 11%</p>
              <p className="text-base text-black border-b-2 border-[#4473fa] w-[80%] lg:w-full text-center mt-1">
                APY = ANNUAL PERCENTAGE YIELD
              </p>
              <p className="text-base text-black border-b-2 border-[#664dcc] w-[70%] lg:w-full text-center mt-1">
                MONTHLY = APY / 12
              </p>
              <p className="text-base text-black border-b-2 border-[#b16cea] w-[60%] lg:w-full text-center mt-1">
                DAILY = APY / 365
              </p>
              <ButtonPrimary className="h-[42px] flex items-center justify-center mt-6">
                Connect
              </ButtonPrimary>
            </div>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  );
};

export default StackingPage;

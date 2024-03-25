'use client';

import Image from 'next/image';

import ArrowDownSvg from '@/assets/svg/arrow-down.svg';
import { ButtonPrimary, Container } from '@/components';
import DefaultLayout from '@/layout/DefaultLayout';
import './index.scss';
import { usePathname, useRouter } from 'next/navigation';

const StackingPage = () => {
  const path = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    console.log("router", path);

    let thisLanguage = path.slice(1, 3);
    let newPath = path.slice(3, )
    if (thisLanguage == 'vi') {
      newPath = "/en" + newPath
    } else {
      newPath = "/vi" + newPath
    }
    
    router.push(newPath);
  };
  
  return (
    <DefaultLayout>
      <div className="bg-underline">
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
            <div className="overflow-auto">
              <div className="grid grid-cols-[1fr_1fr_2fr_2fr_2fr] gap-2 px-4 pt-4">
                <p className="p-4 text-lg text-black text-center">STAKED</p>
                <p className="p-4 text-lg text-black text-center">REWARD</p>
                <p className="p-4 text-lg text-black text-center">WITHDRAWAL TIME </p>
                <p className="p-4 text-lg text-black text-center">UNSTAKE</p>
                <p className="p-4 text-lg text-black text-center">CLAIM</p>
              </div>
              <div className="grid grid-cols-[1fr_1fr_2fr_2fr_2fr] gap-2 items-center border-t border-zinc-200 px-4 pb-4">
                <p className="p-4 text-lg text-black text-center">0.00</p>
                <p className="p-4 text-lg text-black text-center">0</p>
                <p className="p-4 text-lg text-black text-center">N/A</p>
                <div className="p-4 flex justify-center">
                  <div className="px-[35px] py-2.5 rounded-full bg-zinc-200">Unstake</div>
                </div>
                <div className="p-4 flex justify-center">
                  <div className="px-[35px] py-2.5 rounded-full bg-zinc-200">Claim</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  );
};

export default StackingPage;

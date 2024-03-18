'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import { HomeSection } from '@/components';
import { STORAGE } from '@/constants';
import DefaultLayout from '@/layout/DefaultLayout';
import Loading from '@/components/Loading';

const { PreSale, About, HowItWork, BonusSpecials, SurfToken, RoadMap, Team, FAQs } = HomeSection;

const isConnectWallet = sessionStorage.getItem(STORAGE.IS_CONNECT_WALLET)
  ? JSON.parse(sessionStorage.getItem(STORAGE.IS_CONNECT_WALLET)!)
  : '';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isConnectWallet) {
      sessionStorage.setItem(STORAGE.IS_CONNECT_WALLET, 'false');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NextUIProvider>
      <main className="w-full bg-gray-900 min-h-screen">
        <div className="h-[60px] bg-blue-500 flex justify-center items-center">
          <span className="text-white text-xs font-semibold uppercase text-center">
            WELCOME TO SURF REWARD - BIGGEST PRESALE 2023! WHAT DO YOU THINK? 100X OR MORE!?
          </span>
        </div>
        <DefaultLayout>
          <PreSale />
          <About />
          <HowItWork />
          <BonusSpecials />
          <SurfToken />
          <RoadMap />
          <Team />
          <FAQs />
        </DefaultLayout>
        {/* {isLoading && <Loading />} */}
      </main>
    </NextUIProvider>
  );
}

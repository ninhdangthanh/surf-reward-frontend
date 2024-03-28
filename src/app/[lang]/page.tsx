'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import { HomeSection } from '@/components';
import { STORAGE } from '@/constants';
import DefaultLayout from '@/layout/DefaultLayout';
import Loading from '@/components/Loading';
import useTranslate from '@/hooks/useTranslate';
import dynamic from 'next/dynamic';

const { PreSale, About, HowItWork, BonusSpecials, SurfToken, Team, FAQs } = HomeSection;

const isConnectWallet = true;

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const currentLocale = useTranslate(lang);

  useEffect(() => {
    if (!isConnectWallet) {
      // sessionStorage.setItem(STORAGE.IS_CONNECT_WALLET, 'false');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const RoadMap = dynamic(
    () => import('@/components/Sections/Home/RoadMap'), {
    ssr: false
  });
  const PreSale = dynamic(
    () => import('@/components/Sections/Home/PreSale'), {
    ssr: false
  });

  return (
    <NextUIProvider>
      <main className="w-full bg-gray-900 min-h-screen">
        <div className="h-[60px] bg-blue-500 flex justify-center items-center px-4">
          <span className="text-white text-xs font-semibold uppercase text-center">
            {currentLocale.header.greeting}
          </span>
        </div>
        <DefaultLayout>
          <PreSale />
          <About />
          <HowItWork />
          <BonusSpecials />
          <SurfToken />
          {/* {(typeof window !== 'undefined') ? <></> : <RoadMap />} */}
          <RoadMap />
          <Team />
          <FAQs />
        </DefaultLayout>
        {/* {isLoading && <Loading />} */}
      </main>
    </NextUIProvider>
  );
}

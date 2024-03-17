'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';

import { HomeSection } from '@/components';
import { STORAGE } from '@/constants';
import DefaultLayout from '@/layout/DefaultLayout';

const { Header, PreSale, About, HowItWork, BonusSpecials, SurfToken, RoadMap, Team, FAQs, Footer } =
  HomeSection;


export default function Home() {

  return (
    <NextUIProvider>
      <main className="w-full bg-gray-900 min-h-screen">
        <div className="h-[60px] bg-blue-500 flex justify-center items-center">
          <span className="text-white text-xs font-semibold uppercase">
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
      </main>
    </NextUIProvider>
  );
}

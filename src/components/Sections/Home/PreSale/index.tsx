'use client';

import { useEffect, useRef, useState } from 'react';

import './index.scss';
import PreSaleWallet from './components/PreSaleWallet';
import ButtonPrimary from '../../../ButtonPrimary';

// updated

import { config } from '@/config/config';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';

const queryClient = new QueryClient();

const PreSale = () => {
  const [activeText, setActiveText] = useState<string>('SURF');
  const timerChangeColorText = useRef<any>();

  const preSaleText = ['SURF', '2', 'EARN'];

  useEffect(() => {
    timerChangeColorText.current = setInterval(() => {
      const currentIndex = preSaleText.findIndex((item) => item === activeText);
      if (currentIndex !== -1) {
        if (currentIndex === preSaleText.length - 1) {
          setActiveText(preSaleText[0]);
        } else {
          setActiveText(preSaleText[currentIndex + 1]);
        }
      }
    }, 1700);

    return () => clearInterval(timerChangeColorText.current);
  }, [activeText]);

  return (
    <div className="presale-grid-view">
      <div className="grid lg:grid-cols-2 container mx-auto pb-[96px]">
        <div className="flex flex-col justify-center items-center w-full px-10">
          <div className="py-10 lg:py-[100px] flex flex-col justify-center items-center">
            {preSaleText.map((item, index) => (
              <h1
                key={index}
                className={`leading-[0.85] text-[96px] md:text-[144px] lg:text-[175px] font-bold transition duration-1000 delay-500 ease-linear text-[#20262d] ${
                  activeText === item ? `presale-gradient-text-${activeText}` : ''
                } `}
              >
                {item}
              </h1>
            ))}
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 pb-[96px]">
            <ButtonPrimary className="btn btn-whitepaper flex items-center justify-center">
              <div>Whitepaper</div>
            </ButtonPrimary>
            <ButtonPrimary className="btn btn-audit !bg-transparent border-1">
              Token Audit
            </ButtonPrimary>
            <ButtonPrimary className="btn btn-pitch flex items-center justify-center">
              <div>Pitch Deck</div>
            </ButtonPrimary>
          </div>
        </div>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <PreSaleWallet />
          </QueryClientProvider>
        </WagmiProvider>
      </div>
    </div>
  );
};

export default PreSale;

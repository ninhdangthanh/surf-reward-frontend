"use client";

import { useEffect, useRef, useState } from "react";

import "./index.scss";
import PreSaleWallet from "./components/PreSaleWallet";
import ButtonPrimary from "../../../ButtonPrimary";

import { config } from '@/config/config';
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";


const queryClient = new QueryClient() 

const PreSale = () => {
  const path = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    let thisLanguage = path.slice(1, 3);
    let newPath = path.slice(3, )
    if (thisLanguage == 'vi') {
      newPath = "/en" + newPath
    } else {
      newPath = "/vi" + newPath
    }
    
    router.push(newPath);
  };
  
  
  const [activeText, setActiveText] = useState<string>("SURF");
  const timerChangeColorText = useRef<any>();

  const preSaleText = ["SURF", "2", "EARN"];

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
      <div className=" flex flex-col xl:flex-row justify-center items-center xl:justify-between container mx-auto pb-[96px] px-28">
        <div className="flex flex-col justify-center items-center w-full xl:w-2/5">
          <div className="py-[100px] flex flex-col justify-center items-center">
            {preSaleText.map((item, index) => (
              <h1
                key={index}
                className={`leading-[0.85] text-[175px] font-bold transition duration-1000 delay-500 ease-linear text-[#20262d] ${
                  activeText === item
                    ? `presale-gradient-text-${activeText}`
                    : ""
                } `}
              >
                {item}
              </h1>
            ))}
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 pb-[96px]">
            <ButtonPrimary className="btn btn-whitepaper flex items-center justify-center">
              <div>Whitepaper</div>
            </ButtonPrimary>
            <ButtonPrimary className="btn btn-audit !bg-transparent border-1">
              Token Audit
            </ButtonPrimary>
            <ButtonPrimary className="btn btn-pitch">Pitch Deck</ButtonPrimary>
            <button style={{color: 'white', borderColor: 'white'}} onClick={() => handleLanguageChange('vi')}> Switch language</button>
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

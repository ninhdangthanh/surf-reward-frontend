'use client';

import { Input, useDisclosure } from '@nextui-org/react';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import TokenS from '@/assets/images/token-S.png';
import TokenT from '@/assets/images/token-T.png';
import CopyIcon from '@/assets/svg/copy.svg';
import { STORAGE } from '@/constants';
import ButtonInk from '../../../../../ButtonInk';
import ConnectWalletModal from '../../../../../ConnectWalletModal';
import TokenETH from '@/assets/images/token-eth.png';
import './index.scss';

const tokenByType: {
  [key: string]: {
    img: StaticImageData;
    label: string;
  };
} = {
  ETH: {
    img: TokenETH,
    label: 'ETH',
  },
  USDT: {
    img: TokenT,
    label: 'USDT',
  },
};

const isConnectWallet = sessionStorage.getItem(STORAGE.IS_CONNECT_WALLET)
  ? JSON.parse(sessionStorage.getItem(STORAGE.IS_CONNECT_WALLET)!)
  : '';

const PreSaleWallet = () => {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(315703);
  const [switchToken, setSwitchToken] = useState<string>('ETH');

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 800);

    return () => {
      clearInterval(timer);
    };
  });

  const time = useMemo(() => {
    const days = Math.floor(remainingSeconds / (60 * 60 * 24));
    const hours = Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
    const seconds = remainingSeconds % 60;

    return [
      {
        label: 'Day',
        value: days && days < 10 ? `0${days}` : days,
      },
      {
        label: 'Hours',
        value: hours,
      },
      {
        label: 'Minutes',
        value: minutes,
      },
      {
        label: 'Seconds',
        value: seconds,
      },
    ];
  }, [remainingSeconds]);
  const [startFocusBtnConnectWallet, setStartFocusBtnConnectWallet] = useState<boolean>(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    let timer: any = null;
    timer = setTimeout(() => {
      setStartFocusBtnConnectWallet(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [startFocusBtnConnectWallet]);

  return (
    <>
      <div className="w-fit flex flex-col justify-center self-center xl:self-stretch  mr-4">
        <div className={`w-[500px] ${isConnectWallet ? 'mt-24' : 'mt-6'}`}>
          <div className="bg-blue-700 pb-4 rounded-tl-2xl rounded-tr-2xl px-4 pt-2">
            <div className="text-white">
              <div className="flex flex-row justify-center items-center gap-4">
                {time.map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center">
                      <span className="text-[35px] font-semibold flex flex-row items-center">
                        {item.value}
                        {index !== time.length - 1 && (
                          <span
                            className={`inline-block ${index !== time.length - 1 ? 'ml-4' : ''}`}
                          >
                            :
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`r-4 block text-[15px] text-white font-[300] ${
                        index !== time.length - 1 ? 'mr-4' : ''
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="meter">
              <span></span>
              <div className="meter-label">38.392%</div>
            </div>
          </div>
          <div className="bg-white rounded-bl-2xl rounded-br-2xl pb-6">
            <div className="flex justify-evenly items-center p-4">
              <Image src={TokenS} alt="" className="w-[33px] h-auto" />
              <div className="px-[10px] flex flex-col items-center justify-center presale-wallet-body">
                <span className="text-[#e0e0e0] text-[20px]">1 SURF = $0.0325</span>
                <span className="text-[#e0e0e0] text-[20px]">Listing = $0.05</span>
              </div>
              <Image src={TokenT} alt="" className="w-[44px] h-auto" />
            </div>
            <div className="flex flex-col text-center space-y-3 px-[12px]">
              <span className="text-[17px] font-[400] text-[#808080] block">
                USDT RAISED - $690,426/$1,100,000
              </span>
              <div className="text-[#acb8c4] text-center flex flex-col">
                <div className="text-[#acb8c4] text-center flex flex-col">
                  <span className="font-[300] text-[19px]">
                    Please reload if you cannot see raised Amount
                  </span>
                  <span className="font-[300] text-[19px]">
                    For ETH buyers: Switch to BNB/BSC to activate claiming button
                  </span>
                </div>
              </div>

              {isConnectWallet && (
                <div>
                  <div className="flex flex-row justify-between items-center px-12 py-2">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-gray-500 font-[400] text-lg">Your ETH Balance</span>
                      <span className="text-gray-500 font-[400] text-[15px]">0</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-gray-500 font-[400] text-lg">Your SURF Balance</span>
                      <span className="text-gray-500 font-[400] text-[15px]">0</span>
                    </div>
                  </div>

                  <div className="pt-1 border-t-2 border-gray-1 py-2 px-2">
                    <h3 className="text-blue-700 font-medium text-[18.5px] my-3">
                      Switch network to buy with BNB
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.keys(tokenByType).map((key, index) => (
                        <ButtonInk
                          onClick={() => setSwitchToken(tokenByType[key].label)}
                          key={index}
                          className={`border-2  rounded-xl flex flex-row justify-center items-center p-1 ${
                            switchToken === tokenByType[key].label
                              ? 'border-blue-700'
                              : 'border-[#dfdfdf]'
                          }`}
                        >
                          <Image
                            src={tokenByType[key].img}
                            alt={tokenByType[key].label}
                            className="w-8 h-8 mr-2"
                          />
                          <span
                            className={`font-normal text-base uppercase ${
                              switchToken === tokenByType[key].label
                                ? 'text-blue-700'
                                : 'text-black'
                            }`}
                          >
                            {tokenByType[key].label}
                          </span>
                        </ButtonInk>
                      ))}
                    </div>

                    <div className="py-6 space-y-12">
                      <Input
                        type="email"
                        label={`${tokenByType[switchToken].label} you will pay`}
                        placeholder="Enter amount"
                        labelPlacement="outside"
                        size="lg"
                        endContent={
                          <Image
                            src={tokenByType[switchToken].img}
                            alt={tokenByType[switchToken].label}
                            className="w-8 h-8 mr-2"
                          />
                        }
                      />

                      <Input
                        type="email"
                        label="SURF you will get"
                        placeholder="Enter amount"
                        labelPlacement="outside"
                        size="lg"
                        endContent={<Image src={TokenS} alt="SURF" className="w-8 h-8 mr-2" />}
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <ButtonInk
                        className="bg-blue-700 rounded-xl w-full py-3 px-2 text-white text-xl"
                        onClick={onOpen}
                      >
                        Buy Now
                      </ButtonInk>
                      <ButtonInk className="presale-btn-connect-wallet" onClick={onOpen}>
                        0xb6e...047F57
                      </ButtonInk>
                    </div>
                  </div>
                </div>
              )}

              {!isConnectWallet && (
                <div className="px-6 space-y-5 mt-10">
                  <ButtonInk className="presale-btn-connect-wallet" onClick={onOpen}>
                    Connect Wallet
                  </ButtonInk>
                  <div className="flex flex-row flex-1 relative shadow-[gray_3px_5px_5px_1px] rounded-lg">
                    <div className="bg-[#dfdfdf] h-[48px] rounded-lg w-full py-[10px] pl-4 pr-14 flex justify-start items-center">
                      <span className="text-black font-[300] text-start text-[14.5px] line-clamp-1">
                        If you want to admit an attribute like classname, the code would be
                        something like this
                      </span>
                    </div>
                    <div
                      className={`w-[42px] h-[48px] bg-blue-700 rounded-lg flex justify-center items-center absolute top-0 right-0 bottom-0 ${
                        !isConnectWallet ? 'cursor-not-allowed' : 'cursor-pointer'
                      }`}
                    >
                      <Image className="w-[30px] h-[30px]" src={CopyIcon} alt="" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ConnectWalletModal visible={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default PreSaleWallet;

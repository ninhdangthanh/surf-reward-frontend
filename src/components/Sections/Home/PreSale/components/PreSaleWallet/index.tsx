'use client';

import { Button, Input, useDisclosure } from '@nextui-org/react';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import TokenS from '@/assets/images/token-S.png';
import TokenT from '@/assets/images/token-T.png';
import CopyIcon from '@/assets/svg/copy.svg';
import { STORAGE } from '@/constants';
import ButtonInk from '../../../../../ButtonInk';
import ConnectWalletModal from '../../../../../ConnectWalletModal';
import TokenETH from '@/assets/images/token-eth.png';
import TokenBNB from '@/assets/images/binance.png';
import './index.scss';
import { useAccount, useDisconnect, useReadContract, useSendTransaction, useSwitchChain, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { config } from '@/config/config';
import SwitchNetworkModal from '@/components/SwithNetworkModal';
import {sellTokenABIjson} from "@/abi/sellTokenABIjson"
import {abi as sellTokenABI} from "@/abi/sellTokenABI"
import {ethers} from "ethers"
import { parseEther } from 'viem' 
import Loading from '@/components/Loading';
import { MetaMaskInpageProvider } from '@metamask/providers';



// CONST
// const eth_mainnet_network = 1
const eth_mainnet_network = 11155111

// const bnb_mainnet_network = 1
const bnb_mainnet_network = 5



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
  BNB: {
    img: TokenBNB,
    label: 'BNB',
  },
  USDT: {
    img: TokenT,
    label: 'USDT',
  },
};

const PreSaleWallet = () => {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(315703);
  const [isETH, setIsETH] = useState(true) // quan ly network
  const [switchToken, setSwitchToken] = useState<string>(isETH ? 'ETH' : 'BNB'); // quan ly button mua

  const ETHprovider = new ethers.providers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
  const BNBprovider = new ethers.providers.JsonRpcProvider("https://bsc-testnet-rpc.publicnode.com")

  const ETHtokenAddress = "0x1CE8b92c599c4b45306D33309d1EbD47dbCA7bf3";
  const BNBtokenAddress = "0x1CE8b92c599c4b45306D33309d1EbD47dbCA7bf3";
  const USDTaAddress = "0x29ed8cE3cA1CcF72838AdC691726603b42d8b799";

  const tokenABI = sellTokenABIjson;

  const ETHtokenContract = new ethers.Contract(ETHtokenAddress, tokenABI, ETHprovider);
  const BNBtokenContract = new ethers.Contract(BNBtokenAddress, tokenABI, BNBprovider);

  const USDTcontract = new ethers.Contract(USDTaAddress, tokenABI, ETHprovider);

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
  
  const [isNetworkCorrect, setIsNetworkCorrect] = useState(false)
  const { address, isConnected, chainId  } = useAccount({config: config})
  const { chains, switchChain } = useSwitchChain()
  const [ethToToken, setEthToToken] = useState(0.0)
  const [tokenCount, setTokenCount] = useState(0.0)

  const isSwitchNetwork = useMemo(() => { 
    // console.log("chainId == bnb_mainnet_network", chainId , bnb_mainnet_network);
    if (isConnected) {
      if(isETH) {
        return chainId == eth_mainnet_network
      } else {
        return chainId == bnb_mainnet_network
      }
    }
    return true
  }, [chainId, isConnected]);

  async function switchToMainnet() {
    onChangeAmountInput(0)
    try {
      const ethereum = window.ethereum as MetaMaskInpageProvider;
      // Sepolia
      await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0xaa36a7' }] });
      setIsETH(true)
      setSwitchToken('ETH')
    } catch (error) {
      console.error("Lỗi khi chuyển mạng:", error);
    }
  }
  
  async function switchToBNB() {
    try {
      const ethereum = window.ethereum as MetaMaskInpageProvider;
      // Goerli
      await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x5' }] });
      setIsETH(false)
      setSwitchToken('BNB')
    } catch (error) {
      console.error("Lỗi khi chuyển mạng:", error);
    }
  }

  async function sendETH() {
    try {
      const ethereum = window.ethereum;
  
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const amountToSend = ethers.utils.parseEther("0.3");

      const tx = {
          to: ETHtokenAddress,
          // to: '0xe0012A0aEf3BaC2F1751c6b60999a4d039A31809',
          value: amountToSend,
          gasLimit: BigInt(10000000) 
      };

      const txResponse = await signer.sendTransaction(tx);

      console.log("tx hash: ", txResponse);
      

      await txResponse.wait();

      console.log("Transaction sent successfully.");
  
    } catch (error) {
      console.error("Error sending:", error);
    }
  }
  

  const [isOpenModelSelectNetwork, setIsOpenModelSelectNetwork] = useState(false)
  const [amountInput, setAmountInput] = useState(0.0)
  const [inputApprove, setInputApprove] = useState(0.0)
  const [oneUsdToToken, setOneUsdToToken] = useState(0)
  const [ETHprice, setETHprice] = useState(0)
  const [allowanceUSDTShow, setAllowanceUSDTShow] = useState(0)
  const [allowaneLoading, setAllowaneLoading] = useState(false)

  const { data: hash, sendTransaction } = useSendTransaction() 

  const { disconnect } = useDisconnect()
  const [isConnectedWallet, setIsConnectedWallet] = useState(false)

  useEffect(() => {
    setIsNetworkCorrect(isSwitchNetwork)
    if(isConnected == false) {
      setIsNetworkCorrect(true)
    }
  }, [chainId, isConnected])
  
  const getUSDprice = async () => {
    const oneUsdToToken = await ETHtokenContract.oneUsdToToken();
    setOneUsdToToken(Number(oneUsdToToken))
    const getChainlinkDataFeedLatestAnswer = await ETHtokenContract.getChainlinkDataFeedLatestAnswer();
    setETHprice(Number(getChainlinkDataFeedLatestAnswer))
  }

  const getAllowanceUSDT = async () => {
    const allowanceUSDT = await USDTcontract.allowance(address, ETHtokenAddress);
    const USDTallowance = Number(allowanceUSDT) / (10 ** 18)
    setAllowanceUSDTShow(USDTallowance)
  }

  const buyTokenWithETH = async () => {
    try {
      console.log("send buyTokenWithETH");
      setAllowaneLoading(true);

      // let amount = amountInput * (10 ** 18);
      
      sendTransaction({ to: ETHtokenAddress, value: parseEther(`${amountInput}`) })
    } catch (error) {
      setAllowaneLoading(false);
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  useEffect(() => {
    // if (isConfirming == false && isConfirmed == true) {
    //   getAllowanceUSDT()
    // }

    if(isConfirming == true) {
      setAllowaneLoading(false)
    }
  }, [isConfirming, isConfirmed])

  const buyTokenWithUSDT = async () => {
    try {
      setAllowaneLoading(true);
      writeContract({
        address: ETHtokenAddress,
        abi: sellTokenABI,
        functionName: 'buyTokenWithUSDT',
        args: [amountInput],
      })
      getAllowanceUSDT()
      onChangeAmountInput(0)
    } catch (error) {
      
    }
  }

  const { isLoading: isConfirmingBuyTokenWithUSDT, isSuccess: isConfirmdBuyTokenWithUSDT } = 
  useWaitForTransactionReceipt({ 
    hash, 
  }) 

  useEffect(() => {
    // if (isConfirming == false && isConfirmed == true) {
    //   getAllowanceUSDT()
    // }

    if(isConfirmingBuyTokenWithUSDT == true) {
      setAllowaneLoading(false)
    }
  }, [isConfirmingBuyTokenWithUSDT, isConfirmdBuyTokenWithUSDT])
  
  useEffect(() => {
    getUSDprice()
  }, [])
  
  useEffect(() => {
    setIsConnectedWallet(isConnected)
    if(isConnected == true) {
      setIsOpenModelSelectNetwork(false)
    }
  }, [isConnected])

  useEffect(() => {
    let timer: any = null;
    timer = setTimeout(() => {
      setStartFocusBtnConnectWallet(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [startFocusBtnConnectWallet]);


  const onChangeAmountInput = async (value: number) => {
    setAmountInput(value);
    let token;
    if(chainId ==  eth_mainnet_network) {
      // ETH
      if (switchToken == 'ETH') {
        token =  value * oneUsdToToken * ETHprice;
      } else {
        token = value * oneUsdToToken;
      }
    } else {
      // BNB
      if (switchToken == 'BNB' || switchToken == 'ETH') {
        token =  value * oneUsdToToken * ETHprice / 6.25;
      } else {
        token = value * oneUsdToToken;
      }
    }
    
    setTokenCount(token)
  }

  const { 
    data: approveHash, 
    error, 
    isPending, 
    writeContract 
  } = useWriteContract()

  const approveAllowce = async () => { 
    setAllowaneLoading(true);
    writeContract({
      address: USDTaAddress,
      abi: sellTokenABI,
      functionName: 'approve',
      args: [ETHtokenAddress, BigInt(inputApprove * 10 ** 18)],
    })
  } 

  const { isLoading: isConfirmingApproveHash, isSuccess: isConfirmedApproveHash } = 
    useWaitForTransactionReceipt({ 
      hash: approveHash, 
    }) 

  useEffect(() => {
    // console.log("confirmming");
    
    if (isConfirmingApproveHash == false && isConfirmedApproveHash == true) {
      getAllowanceUSDT()
    }

    if(isConfirmingApproveHash == true) {
      setAllowaneLoading(false)
    }
  }, [isConfirmingApproveHash, isConfirmedApproveHash])



  return (
    <>
      {allowaneLoading && <Loading />}
      <div className="w-fit flex flex-col justify-center self-center xl:self-stretch  mr-4">
        <div className={`w-[500px] mt-24`}>
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
                    For {isETH? "ETH" : "BNB"} buyers: Switch to {isETH? "BNB/BSC" : "ETH"} to activate claiming button
                  </span>
                </div>
              </div>

                {
                  isConnectedWallet && <div>
                  <div className="flex flex-row justify-between items-center px-12 py-2">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-gray-500 font-[400] text-lg">Your {isETH ? "ETH" : "BNB"} Balance</span>
                      <span className="text-gray-500 font-[400] text-[15px]">0</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-gray-500 font-[400] text-lg">Your SURF Balance</span>
                      <span className="text-gray-500 font-[400] text-[15px]">0</span>
                    </div>
                  </div>

                  <div className="pt-1 border-t-2 border-gray-1 py-2 px-2">
                    <div onClick={async () => {
                      try {
                        isETH ? await switchToBNB() : await switchToMainnet()
                        onChangeAmountInput(0)
                      } catch (error) {
                      }
                      
                    }} className="cursor-pointer text-blue-700 font-medium text-[18.5px] my-3">
                      {isETH ? "Switch network to buy with BNB" : "Switch network to buy with ETH"}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {isETH ?  <ButtonInk
                          onClick={() => setSwitchToken(tokenByType.ETH.label)}
                          key={1}
                          className={`border-2  rounded-xl flex flex-row justify-center items-center p-1 ${
                            switchToken === tokenByType.ETH.label
                              ? 'border-blue-700'
                              : 'border-[#dfdfdf]'
                          }`}
                        >
                          <Image
                            src={tokenByType.ETH.img}
                            alt={tokenByType.ETH.label}
                            className="w-8 h-8 mr-2"
                          />
                          <span
                            className={`font-normal text-base uppercase ${
                              switchToken === tokenByType.ETH.label
                                ? 'text-blue-700'
                                : 'text-black'
                            }`}
                          >
                            {tokenByType.ETH.label}
                          </span>
                        </ButtonInk> : 
                          <ButtonInk
                          onClick={() => setSwitchToken(tokenByType.BNB.label)}
                          key={1}
                          className={`border-2  rounded-xl flex flex-row justify-center items-center p-1 ${
                            switchToken === tokenByType.BNB.label
                              ? 'border-blue-700'
                              : 'border-[#dfdfdf]'
                          }`}
                        >
                          <Image
                            src={tokenByType.BNB.img}
                            alt={tokenByType.BNB.label}
                            className="w-8 h-8 mr-2"
                          />
                          <span
                            className={`font-normal text-base uppercase ${
                              switchToken === tokenByType.BNB.label
                                ? 'text-blue-700'
                                : 'text-black'
                            }`}
                          >
                            {tokenByType.BNB.label}
                          </span>
                        </ButtonInk>}
                        <ButtonInk
                          onClick={() => {
                            getAllowanceUSDT()
                            setSwitchToken(tokenByType.USDT.label)
                            onChangeAmountInput(0)
                          }}
                          key={2}
                          className={`border-2  rounded-xl flex flex-row justify-center items-center p-1 ${
                            switchToken === tokenByType.USDT.label
                              ? 'border-blue-700'
                              : 'border-[#dfdfdf]'
                          }`}
                        >
                          <Image
                            src={tokenByType.USDT.img}
                            alt={tokenByType.USDT.label}
                            className="w-8 h-8 mr-2"
                          />
                          <span
                            className={`font-normal text-base uppercase ${
                              switchToken === tokenByType.USDT.label
                                ? 'text-blue-700'
                                : 'text-black'
                            }`}
                          >
                            {tokenByType.USDT.label}
                          </span>
                        </ButtonInk>
                    </div>

                    {switchToken == 'USDT' && <div className='mt-[60px] mb-10'>
                      <div className='text-start mt-0'>Confirm the number of tokens you are about to purchase</div>
                        <div className='text-start mt-0'>Amount allowance: <strong>{allowanceUSDTShow} USDT</strong></div>
                        <Input
                          hidden={false}
                          type="number"
                          value={`${inputApprove}`}
                          onChange={(e) => setInputApprove(Number(e.target.value))}
                          placeholder="Enter amount"
                          labelPlacement="outside"
                          size="lg"
                          step="0.001"
                          className='mt-2'
                        />
                        
                        <button
                          onClick={() => approveAllowce()}
                          className={"bg-blue-600 leading-[0px] h-[22px] mt-4 block rounded-xl w-full py-5 px-2 text-white text-xl"}                          
                        >
                          Confirm
                        </button>
                    </div>}

                    <div className="py-6 space-y-12">
                      {isETH ? <Input
                        type="number"
                        label={`ETH you will pay`}
                        value={`${amountInput}`}
                        onChange={(e) => onChangeAmountInput(Number(e.target.value))}
                        placeholder="Enter amount"
                        labelPlacement="outside"
                        size="lg"
                        step="0.001"
                        endContent={
                          <Image
                            src={tokenByType[switchToken].img}
                            alt={tokenByType[switchToken].label}
                            className="w-8 h-8 mr-2"
                          />
                        }
                      /> :  
                      <Input
                        type="number"
                        label={`BNB you will pay`}
                        value={`${amountInput}`}
                        onChange={(e) => onChangeAmountInput(Number(e.target.value))}
                        placeholder="Enter amount"
                        labelPlacement="outside"
                        size="lg"
                        step="0.001"
                        endContent={
                          <Image
                            src={tokenByType[switchToken].img}
                            alt={tokenByType[switchToken].label}
                            className="w-8 h-8 mr-2"
                          />
                        }
                      />}

                      <Input
                        type="number"
                        value={`${tokenCount}`}
                        disabled
                        label="SURF you will get"
                        placeholder="0"
                        labelPlacement="outside"
                        size="lg"
                        endContent={<Image src={TokenS} alt="SURF" className="w-8 h-8 mr-2" />}
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      {switchToken == 'ETH' ? <Button
                        className={amountInput <= 0 ? "bg-gray-600 h-[66px] block rounded-xl w-full py-5 px-2 text-white text-xl":
                        "bg-blue-700 h-[66px] block rounded-xl w-full py-5 px-2 text-white text-xl"}
                        onClick={() => sendETH()}
                        disabled={amountInput <= 0}
                      >
                        Buy Now
                      </Button> :
                      <Button
                        className={(amountInput <= 0 || amountInput > allowanceUSDTShow) ? "bg-gray-600 h-[66px] block rounded-xl w-full py-5 px-2 text-white text-xl":
                        "bg-blue-700 h-[66px] block rounded-xl w-full py-5 px-2 text-white text-xl"}
                        onClick={() => buyTokenWithUSDT()}
                        disabled={(amountInput <= 0 || amountInput > allowanceUSDTShow)}
                      >
                        Buy Now
                      </Button>}
                    </div>
                  </div>
                </div>
                }
              <div className="px-6 space-y-5 mt-10">
                {
                  !isConnectedWallet && <ButtonInk className="presale-btn-connect-wallet" onClick={() => setIsOpenModelSelectNetwork(true)}>
                  Connect Wallet
                </ButtonInk>
                }
                {
                  isConnectedWallet && <div className="presale-btn-connect-wallet" >
                    {`${address?.slice(0, 5)}...${address?.slice(37, )}`}
                  </div>
                }
                {
                  isConnectedWallet && <ButtonInk className="presale-btn-connect-wallet" onClick={() => disconnect()}>
                  Disconnect
                </ButtonInk>
                }
                {/* <div className="flex flex-row flex-1 relative shadow-[gray_3px_5px_5px_1px] rounded-lg">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConnectWalletModal visible={isOpenModelSelectNetwork} setIsOpenModelSelectNetwork={setIsOpenModelSelectNetwork} />
      {!isNetworkCorrect && <SwitchNetworkModal switchToMainnet={switchToMainnet} switchToBNB={switchToBNB} isETH={isETH} />}
    </>
  );
};

export default PreSaleWallet;

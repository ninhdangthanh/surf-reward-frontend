import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import Image from 'next/image';

import CategorySvg from '@/assets/svg/category.svg';
import QuestionMaskSvg from '@/assets/svg/question-mark.svg';
import TimesSvg from '@/assets/svg/times.svg';
import CoinBase from '@/assets/webp/coinbase.webp';
import MetaMask from '@/assets/webp/metamask.webp';
import WalletConnect from '@/assets/webp/sufrreward-wallet-connect.webp';
import TrustWallet from '@/assets/webp/trust-wallet.webp';
import { STORAGE } from '@/constants';

interface ConnectWalletModalProps {
  visible?: boolean;
  onOpenChange?: () => void;
}

const modalBody = [
  {
    title: 'WalletConnect',
    src: WalletConnect,
    renderRight: (
      <div className="px-[6px] py-[3px] rounded-md text-[#47a1ff] bg-[#243240] w-fit ml-auto text-[11px]">
        QR CODE
      </div>
    ),
  },
  {
    title: 'MetaMask',
    src: MetaMask,
  },
  {
    title: 'Trust Wallet',
    src: TrustWallet,
  },
  {
    title: 'Coinbase',
    src: CoinBase,
  },
];

const ConnectWalletModal = ({ onOpenChange, visible }: ConnectWalletModalProps) => {
  const handleConnectWallet = (cb: () => void) => {
    cb();
    sessionStorage.setItem(STORAGE.IS_CONNECT_WALLET, 'true');
    location.reload();
  };
  return (
    <>
      <Modal isOpen={visible} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent className=" max-w-[360px]">
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center items-center gap-1 bg-[#191a1a] px-[16px] py-[18px] flex-row relative">
                <div className="w-8 h-8 rounded-full hover:bg-[#ffffff0d] hover:cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 flex justify-center items-center">
                  <Image src={QuestionMaskSvg} alt="" className="w-[18px] h-[18px] text-white" />
                </div>
                <span className="text-white font-medium text-base text-center">Connect Wallet</span>
                <div
                  className="w-8 h-8 rounded-full hover:bg-[#ffffff0d] hover:cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 flex justify-center items-center"
                  onClick={onOpenChange}
                >
                  <Image src={TimesSvg} alt="" className="w-[26px] h-[26px] text-white" />
                </div>
              </ModalHeader>
              <ModalBody className="bg-[#1e1e1e]">
                {modalBody.map((modalItem, index) => (
                  <div
                    key={index}
                    className=" bg-[#ffffff05] hover:bg-[#ffffff0d] rounded-xl flex flex-row items-center pr-4 cursor-pointer"
                    onClick={() => handleConnectWallet(onClose)}
                  >
                    <div className="flex items-center justify-start flex-row rounded-[8px] gap-3 py-[7px]  pl-[8px] cursor-pointer">
                      <div className="w-[40x] h-[40px] rounded-xl">
                        <Image
                          src={modalItem.src}
                          alt={modalItem.title}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                      <span className="text-base text-white font-[300]">{modalItem.title}</span>
                    </div>

                    {modalItem?.renderRight && modalItem.renderRight}
                  </div>
                ))}

                <div className=" bg-[#ffffff05] hover:bg-[#ffffff0d] rounded-xl flex flex-row items-center pr-4 cursor-pointer">
                  <div className="flex items-center justify-start flex-row rounded-[8px] gap-3 py-[7px]  pl-[8px] cursor-pointer">
                    <div className="w-[40x] h-[40px] bg-[#222b35] border border-[#26374a] flex justify-center items-center rounded-xl p-2">
                      <Image
                        src={CategorySvg}
                        alt="All Wallets"
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                    <span className="text-base text-white font-[300] flex flex-1">All Wallets</span>
                  </div>

                  <div className="bg-[#343535] text-gray-400 px-[6px] py-[3px] rounded-md w-fit ml-auto text-[11.2px] ">
                    380+
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectWalletModal;

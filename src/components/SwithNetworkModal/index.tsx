import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import Image from 'next/image';

import QuestionMaskSvg from '@/assets/svg/question-mark.svg';
import TimesSvg from '@/assets/svg/times.svg';
import WalletConnect from '@/assets/webp/sufrreward-wallet-connect.webp';
import { STORAGE } from '@/constants';
import { useConnect, useSwitchChain } from 'wagmi';
import { config } from '@/config/config';
import { useEffect, useState } from 'react';



const SwitchNetworkModal = (props: any) => {
  const { chains, switchChain } = useSwitchChain()
  
  return (
    <>
      <Modal isOpen={true} onOpenChange={() => {}} hideCloseButton style={{borderColor: "black"}}>
        <ModalContent className=" max-w-[450px]">
          <div className='border-[1px] px-8 py-4 flex items-center justify-between'>
            Please switch network to buy token <span onClick={() => {
              if(props.isETH) {
                switchChain({ chainId: 11155111 })
              } else {
                switchChain({ chainId: 11155111 })
              }
            }} className='text-blue-700 ml-4 cursor-pointer'>Swith network</span>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SwitchNetworkModal;

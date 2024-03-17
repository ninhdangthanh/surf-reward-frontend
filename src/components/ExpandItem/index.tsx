'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import AddSvg from '@/assets/svg/add.svg';
import MinusSvg from '@/assets/svg/minus.svg';
import { ExpandItemProps } from './type';

const ITEM_HEIGHT = 1;

const ExpandItem = ({ label, content, onClick, isActive }: ExpandItemProps) => {
  return (
    <AnimatePresence>
      <motion.div
        onClick={onClick}
        className="bg-[#151b22] p-4 rounded-xl cursor-pointer overflow-hidden select-none"
        initial={{
          // height: ITEM_HEIGHT,
          paddingTop: 12,
        }}
        animate={{
          // height: !isActive ? ITEM_HEIGHT : 'auto',
          paddingTop: !isActive ? 12 : 20,
        }}
        exit={{
          // height: ITEM_HEIGHT,
          paddingTop: 12,
        }}
      >
        <div className="flex items-center">
          <p className="text-white flex-1 py-2 px-4 text-xl font-bold">{label}</p>
          <motion.div
            className="w-[25px] h-[25px] bg-white rounded-full p-0.5"
            initial={{
              transform: 'rotate(0deg)',
            }}
            animate={{
              transform: !isActive ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
            exit={{
              transform: 'rotate(0deg)',
            }}
          >
            <Image
              src={isActive ? MinusSvg : AddSvg}
              alt="add svg"
              className="w-full h-full transition-all"
            />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{
              height: ITEM_HEIGHT,
              visibility: 'collapse',
              padding: 0,
              marginBottom: 0,
            }}
            animate={{
              height: !isActive ? ITEM_HEIGHT : 'auto',
              visibility: !isActive ? 'collapse' : 'visible',
              padding: !isActive ? 0 : 16,
              marginBottom: !isActive ? 0 : 40,
            }}
            exit={{
              height: ITEM_HEIGHT,
              visibility: 'collapse',
              padding: 0,
              marginBottom: 0,
            }}
            className={`text-white`}
          >
            {content}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExpandItem;

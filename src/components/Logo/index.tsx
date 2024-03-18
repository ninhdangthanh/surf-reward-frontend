'use client';
import { useRouter } from 'next/navigation';

import { PATH_NAME } from '@/constants';
import './index.scss';

const Logo = () => {
  const router = useRouter();

  return (
    <div className="logo" onClick={() => router.push(PATH_NAME.HOME)}>
      <h1 className="text-[48px] font-bold m-0 tracking-wider leading-[42px]">SURF</h1>
      <h3 className="text-[11.5px] font-[400] tracking-[13px]">REWARD</h3>
    </div>
  );
};

export default Logo;

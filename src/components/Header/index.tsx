'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Logo from '@/assets/images/surf-reward-logo.png';
import ButtonPrimary from '../ButtonPrimary';

const navigation = [
  {
    label: 'What is SURF?',
    slug: '#about',
  },
  {
    label: 'How it works',
    slug: '#how-it-works',
  },
  {
    label: 'Bonus Specials',
    slug: '#specials',
  },
  {
    label: 'RoadMap',
    slug: '#roadmap',
  },
  {
    label: 'Team',
    slug: '#team',
  },
  {
    label: 'Contact',
    slug: '#contact-us',
  },
  {
    label: 'Staking',
    slug: 'stake',
  },
  {
    label: 'Jobs',
    slug: '/jobs',
  },
  {
    label: 'Demo',
    slug: '',
    path: 'https://docs.surfreward.io',
  },
];

const Header = () => {
  const [keyActive, setKeyActive] = useState<number>();

  const router = useRouter();

  return (
    <div className="bg-gray-1 flex justify-center items-center h-[80px]">
      <div className="w-[1200px] flex justify-between items-center px-2">
        <Image
          src={Logo}
          alt="SURF Reward"
          className="w-[130px] h-auto"
          onClick={() => router.push('/')}
        />
        <ul className="flex flex-row gap-3">
          {navigation.map((nav, index) => (
            <li key={index} onClick={() => setKeyActive(index)}>
              <a
                href={nav?.slug || nav?.path}
                className={` text-sm mr-[10px] transition duration-200 ease-linear p-1 cursor-pointer  ${
                  keyActive === index ? 'text-[#3b82f6]' : 'text-[#C5CFC9]'
                }`}
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonPrimary className="h-[46px] w-fit !text-[15.5px] flex justify-center items-center">
          Buy now
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Header;

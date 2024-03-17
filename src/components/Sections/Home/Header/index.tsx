'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './index.scss';

import Logo from '@/assets/images/surf-reward-logo.png';
import { PATH_NAME } from '@/constants';
import SECTION_HOME_PAGE_KEY from '@/constants/sectionsKey';
import ButtonPrimary from '../../../ButtonPrimary';

const navigation = [
  {
    label: 'What is SURF?',
    slug: SECTION_HOME_PAGE_KEY.WHAT_IS_SURF,
  },
  {
    label: 'How it works',
    slug: SECTION_HOME_PAGE_KEY.HOW_IT_WORK,
  },
  {
    label: 'Bonus Specials',
    slug: SECTION_HOME_PAGE_KEY.BONUS_SPECIALS,
  },
  {
    label: 'RoadMap',
    slug: SECTION_HOME_PAGE_KEY.ROAD_MAP,
  },
  {
    label: 'Team',
    slug: SECTION_HOME_PAGE_KEY.TEAM,
  },
  {
    label: 'Contact',
    slug: SECTION_HOME_PAGE_KEY.CONTACT,
  },
  {
    label: 'Staking',
    path: PATH_NAME.STAKING,
  },
  {
    label: 'Jobs',
    path: PATH_NAME.JOBS,
  },
  {
    label: 'Demo',
    path: PATH_NAME.DEMO,
  },
];

const Header = () => {
  const router = useRouter();

  const [keyActive, setKeyActive] = useState<number>();

  const handleScrollToSectionPage = (sectionId: string) => {
    const targetPageSection = document.getElementById(sectionId);

    if (targetPageSection) {
      targetPageSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-gray-1 flex h-[90px]">
      <div className="container mx-auto flex flex-row justify-between items-center px-12 bg-gray-1">
        <Image
          src={Logo}
          alt="SURF Reward"
          className="w-[160px] h-auto"
          onClick={() => router.push('/')}
        />
        <ul className="flex flex-row gap-3">
          {navigation.map((nav, index) => (
            <li
              key={index}
              onClick={() => {
                setKeyActive(index);
                nav?.slug && handleScrollToSectionPage(nav.slug);
              }}
            >
              <a
                href={nav?.slug ? `#` : nav?.path}
                className={` text-base mr-[10px] transition duration-200 ease-linear p-1 cursor-pointer  ${
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

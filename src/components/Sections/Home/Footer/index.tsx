'use client';

import Image from 'next/image';
import router from 'next/router';
import Link from 'next/link';

import Logo from '@/assets/images/surf-reward-logo.png';
import Building from '@/assets/images/building.jpg';
import TwitterIcon from '@/assets/svg/twitter.svg';
import GmailIcon from '@/assets/svg/gmail.svg';
import FlyIcon from '@/assets/svg/fly.svg';
import Container from '../../../Container';
import './index.scss';
import SECTION_HOME_PAGE_KEY from '@/constants/sectionsKey';

const Footer = () => {
  const linkMenus = [
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

  const handleScrollToSectionPage = (sectionId: string) => {
    const targetPageSection = document.getElementById(sectionId);

    if (targetPageSection) {
      targetPageSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const bottomMenus = ['AML & CFT Policy', 'Privacy Policy'];

  return (
    <Container className="pb-10 footer">
      <div className="grid md:grid-cols-5 gap-10">
        <Image src={Logo} alt="SURF Reward" className="logo" onClick={() => router.push('/')} />
        <div className="menu-container">
          <div className="space-y-1 flex flex-col items-center md:items-start">
            <p className="menu-title">LINKS</p>
            {linkMenus?.map((menu, index) => (
              <div
                key={index}
                onClick={() => handleScrollToSectionPage(menu?.slug)}
                className="menu-link"
              >
                {menu.label}
              </div>
            ))}
          </div>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <p className="menu-title">CONTACT</p>
            <p className="menu-text">SURF Reward</p>
            <p className="menu-text text-center md:text-left">
              <span className="block">A project of:</span> Abelius Capital AG Dreischeibenhaus 1
              D-40211 Düsseldorf info@surfreward.io
            </p>
            <div className="space-x-4 flex justify-between md:justify-start">
              <Image src={TwitterIcon} alt="twitter icon" className="menu-icon" />
              <Image src={GmailIcon} alt="gmail icon" className="menu-icon" />
              <Image src={FlyIcon} alt="fly icon" className="menu-icon" />
            </div>
          </div>
          <Image
            src={Building}
            alt="SURF Building"
            className="w-full h-auto object-contain col-span-2"
          />
        </div>
      </div>
      <div className="space-y-10 mt-24">
        <div
          className="h-[3px]"
          style={{
            backgroundImage: 'linear-gradient(269deg, #7458e8, #d625f8)',
            boxShadow: '0 0 14px 1px rgba(214, 37, 248, 0.7)',
          }}
        ></div>
        <div className="space-x-4">
          {bottomMenus?.map((menu, index) => (
            <Link key={index} href="#" className="menu-link">
              {menu}
            </Link>
          ))}
        </div>
        <p className="menu-link">
          © 2019-2023 by SURF Reward. A Project of Abelius Capital AG - All rights reserved
        </p>
      </div>
    </Container>
  );
};

export default Footer;

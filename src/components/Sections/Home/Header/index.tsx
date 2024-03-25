"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import "./index.scss";
import Logo from "@/assets/images/surf-reward-logo.png";
import CloseSvg from "@/assets/svg/close.svg";
import MenuSvg from "@/assets/svg/menu.svg";
// import Logo from "@/components/Logo";
import { PATH_NAME } from "@/constants";
import SECTION_HOME_PAGE_KEY from "@/constants/sectionsKey";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import ButtonPrimary from "../../../ButtonPrimary";

// updated

const navigation = [
  {
    label: "What is SURF?",
    slug: SECTION_HOME_PAGE_KEY.WHAT_IS_SURF,
  },
  {
    label: "How it works",
    slug: SECTION_HOME_PAGE_KEY.HOW_IT_WORK,
  },
  {
    label: "Bonus Specials",
    slug: SECTION_HOME_PAGE_KEY.BONUS_SPECIALS,
  },
  {
    label: "RoadMap",
    slug: SECTION_HOME_PAGE_KEY.ROAD_MAP,
  },
  {
    label: "Team",
    slug: SECTION_HOME_PAGE_KEY.TEAM,
  },
  {
    label: "Contact",
    slug: SECTION_HOME_PAGE_KEY.CONTACT,
  },
  {
    label: "Staking",
    path: PATH_NAME.STAKING,
  },
  {
    label: "Jobs",
    path: PATH_NAME.JOBS,
  },
  {
    label: "Demo",
    path: PATH_NAME.DEMO,
  },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const menuContainer = useRef<HTMLDivElement>(null);

  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const [keyActive, setKeyActive] = useState<number>();

  useEffect(() => {
    window.addEventListener("resize", handleCloseSidebarWhenResize);

    return () =>
      window.removeEventListener("resize", handleCloseSidebarWhenResize);
  }, [isOpenSidebar]);

  useOnClickOutside(menuContainer, (e) => setIsOpenSidebar(false));

  const handleScrollToSectionPage = (sectionId: string) => {
    const targetPageSection = document.getElementById(sectionId);

    if (targetPageSection) {
      targetPageSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleCloseSidebarWhenResize = (value: any) => {
    // console.log('🚀 ~ handleCloseSidebarWhenResize ~ value:', value);
    if (
      value.currentTarget &&
      value.currentTarget?.innerWidth &&
      value.currentTarget.innerWidth > 1024 &&
      isOpenSidebar
    ) {
      setIsOpenSidebar(false);
    }
  };

  const toggleOpenSidebar = () => setIsOpenSidebar(!isOpenSidebar);

  const handleScrollCurrentSectionOrNavigationCurrentPath = (nav: {
    label: string;
    slug: SECTION_HOME_PAGE_KEY;
    path?: undefined;
  }) => {
    if (nav?.slug) {
      if (pathname !== PATH_NAME.HOME) {
        setTimeout(() => {
          router.push(`http://localhost:3000/#${nav.slug}`);
        }, 200);
      }
      router.push(`#${nav.slug}`);
      return;
    }

    if (nav?.path) {
      router.push(nav.path);
    }
  };

  return (
    <div className="bg-[#0d1118] flex h-[70px] lg:h-[90px] sticky top-0 z-10">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center relative select-none">
        <Image
          src={Logo}
          alt="SURF Reward"
          className="w-[100px] md:w-[130px] xl:w-[150px] h-auto cursor-pointer"
          onClick={() => router.push(PATH_NAME.HOME)}
        />
        {/* <Logo /> */}
        <ul className="flex-row gap-1 xl:gap-2 hidden lg:flex justify-between">
          {navigation.map((nav, index) => (
            <li
              key={index}
              onClick={() => {
                setKeyActive(index);
                nav?.slug && handleScrollToSectionPage(nav.slug);
              }}
            >
              <a
                onClick={() =>
                  handleScrollCurrentSectionOrNavigationCurrentPath(nav as any)
                }
                className={`text-[15.5px] hover:text-[#3b82f6] transition duration-200 ease-linear p-1 cursor-pointer  ${
                  keyActive === index || pathname === nav.path
                    ? "text-[#3b82f6]"
                    : "text-[#C5CFC9]"
                }`}
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center space-x-4">
          <ButtonPrimary className="!px-7 !py-2 w-fit !text-[13.5px] lg:!text-[15.5px] flex justify-center items-center">
            Buy now
          </ButtonPrimary>
          <Image
            onClick={toggleOpenSidebar}
            src={isOpenSidebar ? CloseSvg : MenuSvg}
            alt="Menu Svg"
            className={`w-12 h-12 p-3 object-contain cursor-pointer lg:hidden transition-all duration-250 select-none ${
              isOpenSidebar && "pointer-events-none"
            }`}
          />
        </div>
        {isOpenSidebar && (
          <div
            ref={menuContainer}
            className="absolute top-full -left-4 -right-4 bg-black p-[30px] lg:hidden"
          >
            <ul className="">
              {navigation.map((nav, index) => (
                <li
                  key={index}
                  onClick={() => {
                    toggleOpenSidebar();
                    setKeyActive(index);
                  }}
                >
                  <a
                    onClick={() =>
                      handleScrollCurrentSectionOrNavigationCurrentPath(
                        nav as any
                      )
                    }
                    className={`py-2.5 block cursor-pointer  hover:text-[#3b82f6] transition-all text-sm w-fit ${
                      keyActive === index ? "text-[#3b82f6]" : "text-[#C5CFC9]"
                    }`}
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

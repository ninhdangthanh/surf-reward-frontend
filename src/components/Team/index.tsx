import Image from 'next/image';

import Container from '../Container';
import TeamOfSurfRewardImage from '@/assets/images/team-of-surf-reward.png';
import KoeImage1 from '@/assets/images/koe-image.png';
import KoeImage2 from '@/assets/images/KOE-0728.png';
import KoeImageAvt from '@/assets/images/gruppe-43.png';
import LinkedIn from '@/assets/svg/linkedin.svg';
import Twitter from '@/assets/svg/twitter.svg';
import Xing from '@/assets/svg/xing.svg';
import AndreasHinzImage from '@/assets/images/andreas_hinz.png';
import IanScarffeImage from '@/assets/images/ian_scarffe_color-modified.png';
import './index.scss';
import ButtonPrimary from '../ButtonPrimary';
import BoxAnimation from '../BoxAnimation';
import SectionDivider from '../SectionDivider';

const Team = () => {
  const ourAdvisors = [
    {
      image: AndreasHinzImage,
      name: 'Andreas Hinz',
      position: 'External Advisor',
      social: [LinkedIn, Xing],
    },
    {
      image: IanScarffeImage,
      name: 'Andreas Hinz',
      position: 'External Advisor',
      social: [LinkedIn, Twitter],
    },
  ];
  return (
    <Container>
      <SectionDivider prefix="06" suffix="TEAM" />
      <div className="grid-box">
        <h2 className="section-title mt-10">
          <span>Team of </span>
          <span className="section-title-gradient-second">SURF Reward</span>
        </h2>
      </div>
      <BoxAnimation>
        <div className="team-image-container">
          <Image
            loading="lazy"
            src={TeamOfSurfRewardImage}
            alt="Team Of Surf Reward Image"
            className="px-3"
            sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 90vw, 89vw"
          />
        </div>
      </BoxAnimation>
      <p className="text-[#acb8c4] p-2.5 my-[0.815rem] text-[0.815rem] mx-[1.95rem]">
        Mia (Marketing - Acquisition of Advertiser & Cooperation Partners), Moritz (Intern in the
        Company), Kishokanth (WEB3-Applications Developer), Nina (Marketing - Head of Marketing),
        Viktor (Network professional), Peter (Translator), Anna (Backoffice - Service assistant),
        Till (Full Stack Blockchain Developer), Armin (Founder), Andreas (Adviser), Tobias (System
        Administrator), Lisa (Supporter), Erdin (Technician), Klara (Supporter), Oliver (Full Stack
        Frontend Developer), Natalia (Press inquiries), Katharina (Backoffice), Sami (Project
        Manager)
      </p>
      <div className="-mt-10">
        <BoxAnimation className="w-[30%]">
          <Image
            src={KoeImage1}
            alt="Koe Image"
            className="w-full object-contain translate-y-[110%] rounded-lg"
          />
        </BoxAnimation>
        <BoxAnimation>
          <div className="bg-[#151b22] rounded-xl py-[7.8rem] pl-[10.4rem] pr-[5.2rem] mt-[5.2rem] w-[72%] ml-auto">
            <h2 className="text-gray-100 text-[3.91rem]">About us</h2>
            <p className="text-[1.63rem] text-gray-400">
              <span>SURF Reward is a new project of Abelius Capital AG.</span>
              <br />
              <span className="mt-6 block">
                Abelius Capital AG is a public limited company founded in 2019 under German law with
                headquarters in Düsseldorf, Germany. So far the focus has been on investing in
                global and large scale real estate projects. SURF Reward is their new (blockchain)
                project for which they have assembled a large and strong team. All employees are
                local, which allows for direct communication and cooperation.
              </span>
            </p>
            <ButtonPrimary>Check out the team</ButtonPrimary>
          </div>
        </BoxAnimation>
      </div>
      <div className="grid grid-cols-2 gap-28 mt-14 px-[1.6rem]">
        <BoxAnimation>
          <div className="relative">
            <Image src={KoeImage2} alt="Koe Image 2" className="w-full object-contain" />
            <div className="absolute bottom-8 left-8">
              <p className="bg-[#0d1117] px-2 pt-1 pb-1.5 text-gray-400 text-[1.65rem] font-bold">
                Armin Heinrichs
              </p>
              <p className="bg-[#0d1117] py-1.5 px-1 text-gray-300 text-xs w-fit flex items-center">
                <span className="px-2">Founder of SURF Reward</span>
                <Image
                  src={LinkedIn}
                  className="w-[0.93rem] h-[0.93rem] object-contain"
                  alt="Linked In"
                />
              </p>
            </div>
          </div>
        </BoxAnimation>
        <div>
          <Image src={KoeImageAvt} alt="Koe Image Avt" className="w-10 h-10 rounded-full" />
          <h2 className="text-[2.9rem] font-semibold text-gray-100 mt-5 mb-3">
            "List of benefits <span className="text-gradient">is long</span>"
          </h2>
          <i className="text-gray-400 text-[1.63rem] leading-relaxed">
            SURF Reward makes advertising on websites interesting again. Users no longer
            automatically hide ads, but are demonstrably more interested. We also reach audiences
            that often use ad blockers and are harder to reach for certain products. Provider
            restrictions can be circumvented. In many countries, advertising on certain topics is
            banned, and this opens up completely new avenues. SURF Reward is not just a product,
            SURF Reward is innovation!
          </i>
        </div>
      </div>
      <div className="py-[6.5rem]">
        <h2 className="section-title-2">
          Our <span className="section-title-gradient">Advisors</span>
        </h2>
        <div className="grid grid-cols-4 gap-6">
          <div></div>
          {ourAdvisors.map((advisor, index) => (
            <BoxAnimation>
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={advisor.image}
                  alt={`advisor ${index}`}
                  className="w-full aspect-square object-contain rounded-lg"
                />
                <p className="text-gray-400 text-[1.625rem] font-bold mt-4">{advisor.name}</p>
                <p className="text-gray-300 text-[1.25rem]">{advisor.position}</p>
                <div className="flex items-center justify-center gap-4 mt-2">
                  {advisor.social.map((item, index) => (
                    <Image
                      key={index}
                      src={item}
                      alt={`social ${index}`}
                      className="w-5 h-5 object-contain"
                    />
                  ))}
                </div>
              </div>
            </BoxAnimation>
          ))}
          <div></div>
        </div>
      </div>
    </Container>
  );
};

export default Team;

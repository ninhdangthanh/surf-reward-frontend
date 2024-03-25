import Image from 'next/image';

import SliderShow from '../../../SliderShow';
import AcerLogo from '@/assets/images/acer.png';
import BoseLogo from '@/assets/images/bose.png';
import BrotherLogo from '@/assets/images/brother.png';
import DellLogo from '@/assets/images/dell.png';
import BookingComLogo from '@/assets/images/booking_com.png';
import FedexLogo from '@/assets/images/fedex.png';
import McafeeLogo from '@/assets/images/mcafee.png';
import NordvpnLogo from '@/assets/images/nordvpn.png';
import NikeLogo from '@/assets/images/nike.png';
import AdidasLogo from '@/assets/images/adidas.png';
import SwissLogo from '@/assets/images/swiss.png';
import EmiratesLogo from '@/assets/images/emirates.png';
import LgLogo from '@/assets/images/lg.png';
import BoLogo from '@/assets/images/bo.png';
import LacosteLogo from '@/assets/images/lacoste.png';
import AvgLogo from '@/assets/images/avg.png';
import NortonLogo from '@/assets/images/norton.png';
import ExpediaLogo from '@/assets/images/expedia.png';
import MomondoLogo from '@/assets/images/momondo.png';
import Thenorthface2Logo from '@/assets/images/thenorthface2.png';
import ChartSvg from '@/assets/svg/chart.svg';
import BgFadePink from '@/assets/svg/fade-bg-pink.svg';
import HowItWorkKoe from '@/assets/images/how-it-work-koe.png';
import Container from '../../../Container';
import SectionDivider from '../../../SectionDivider';
import './index.scss';
import BoxAnimation from '../../../BoxAnimation';
import SECTION_HOME_PAGE_KEY from '@/constants/sectionsKey';

const HowItWork = () => {
  const brandLogo = [
    AcerLogo,
    BoseLogo,
    BrotherLogo,
    DellLogo,
    BookingComLogo,
    FedexLogo,
    McafeeLogo,
    NordvpnLogo,
    NikeLogo,
    AdidasLogo,
    SwissLogo,
    EmiratesLogo,
    LgLogo,
    BoLogo,
    LacosteLogo,
    AvgLogo,
    NortonLogo,
    ExpediaLogo,
    MomondoLogo,
    Thenorthface2Logo,
  ];

  return (
    <div id={SECTION_HOME_PAGE_KEY.HOW_IT_WORK}>
      <Container className="flex flex-col-reverse lg:grid grid-cols-2 gap-10 py-10 xl:py-[6.5rem] mb-[6.5rem] -mt-[2rem] w-4/5 md:w-3/5 lg:w-full">
        <div>
          <SectionDivider prefix="02" suffix="HOW IT WORKS" position="left" limitWidth={false} />
          <Image src={ChartSvg} alt="Chart Svg" className="w-[69px] h-[69px] my-5 block" />
          <h2 className="how-it-work-title">
            Why should I <span className="how-it-work-title-gradient">invest?</span>
          </h2>
          <div className="text-gray-400 text-lg md:text-xl xl:text-[1.65rem]">
            SURF Reward uses a large portion of its advertising revenue to fund its liquidity pool,
            ensuring a constant increase in the value of the SURF token.
            <br />
            <span className="pt-8 inline-block">
              This makes the SURF token lucrative for everyone. Whether you are an investor, an
              advertising partner, a pre-sale buyer, a hodler or a user of the SURF Reward
              Extension.
            </span>
            <br />
            See our new video about our system{' '}
            <span className="font-bold underline cursor-pointer">here.</span>
          </div>
        </div>
        <BoxAnimation>
          <div className="pt-[63%] relative rounded-xl overflow-hidden mt-28">
            <Image
              src={BgFadePink}
              alt="Bg Fade Pink"
              className="absolute top-0 left-0 right-0 bottom-0 object-contain object-center"
            />
            <Image
              src={HowItWorkKoe}
              alt="Bg Fade Pink"
              className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded"
            />
          </div>
        </BoxAnimation>
      </Container>
      <SliderShow
        logos={brandLogo}
        title="Some of our partners who already trust us and for whom we will advertise"
      />
    </div>
  );
};

export default HowItWork;

import Image from "next/image";

import TokenSSvg from "@/assets/svg/Gruppe-7.svg";
import SectionDivider from "../../../SectionDivider";
import AboutCoin from "@/assets/images/about-coin.jpeg";
import BgFadeBlue from "@/assets/svg/fade-bg-blue.svg";

import FinanceBrokerageLogo from "@/assets/images/finance_brokerage.png";
import BitcoinComFarbe2Logo from "@/assets/images/bitcoin_com_farbe2.png";
import AmbCryptoFarbe3Logo from "@/assets/images/amb_crypto_farbe3.png";
import BitcoinistFarbeLogo from "@/assets/images/bitcoinist_farbe.png";
import NewsbtcFarbeLogo from "@/assets/images/newsbtc_farbe.png";
import CoinspeakerFarbe2Logo from "@/assets/images/coinspeaker_farbe2.png";
import DigitalJournalFarbeLogo from "@/assets/images/digital_journal_farbe.png";
import MarketwatchFarbe2Logo from "@/assets/images/marketwatch_farbe2.png";
import YahooFinanceFarbeLogo from "@/assets/images/yahoo_finance_farbe.png";
import ZycryptoFarbeLogo from "@/assets/images/zycrypto_farbe.png";
import "./index.scss";
import SliderShow from "../../../SliderShow";
import Container from "../../../Container";
import SECTION_HOME_PAGE_KEY from "@/constants/sectionsKey";

// updated

const About = () => {
  const brandLogos = [
    FinanceBrokerageLogo,
    BitcoinComFarbe2Logo,
    AmbCryptoFarbe3Logo,
    BitcoinistFarbeLogo,
    NewsbtcFarbeLogo,
    CoinspeakerFarbe2Logo,
    DigitalJournalFarbeLogo,
    MarketwatchFarbe2Logo,
    YahooFinanceFarbeLogo,
    ZycryptoFarbeLogo,
  ];
  return (
    <div id={SECTION_HOME_PAGE_KEY.WHAT_IS_SURF}>
      <div className="section-about">
        <Container>
          <div className="container mx-auto py-16 xl:py-[96px] px-8">
            <div className="grid lg:grid-cols-2 justify-end items-center mt-9 w-4/5 md:3/5 lg:w-full mx-auto">
              <div>
                <SectionDivider
                  prefix="01"
                  suffix="SURF REWARD"
                  middle="·"
                  position="left"
                />
                <Image
                  src={TokenSSvg}
                  alt=""
                  className="token-t w-[69px] h-[69px]"
                  loading="lazy"
                />

                <div className="max-w-[542px]">
                  <div className="flex flex-row gap-2.5 leading-[1.8]">
                    <h3 className="text-gray-100 text-[30px] md:text-[36px] xl:text-[41px] font-semibold">
                      What is{' '}
                      <span className="text-[30px] md:text-[36px] xl:text-[43px] font-semibold text-gradient">
                        SURF Reward?
                      </span>
                    </h3>
                  </div>
                  <p className="text-xl xl:text-[23px] text-gray-400 mb-9 leading-[1.5]">
                    SURF Reward offers an extension for all major browsers. It
                    removes a large part of the advertising on the Internet and
                    exchanges individual advertising spaces with its own
                    advertising partners. From now on, the profit goes not to
                    the webmaster, but to you!
                  </p>
                  <p className="text-xl xl:text-[23px] text-[#008000] leading-[1.5]">
                    By the way: Did you know that after the press release, over
                    30 websites in 6 languages wrote over 50 articles about us
                    and recommended us?
                  </p>
                </div>
              </div>
              <div className="relative pt-[58%] w-full mt-5 lg:mt-0 lg:w-[85%] mx-auto lg:ml-auto mr-4 bg-[#3aecba45] rounded-xl overflow-hidden">
                <Image
                  src={BgFadeBlue}
                  alt=""
                  loading="lazy"
                  className="absolute top-0 left-0 right-0 bottom-0 object-cover"
                />
                <Image
                  src={AboutCoin}
                  alt=""
                  loading="lazy"
                  className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <SliderShow logos={brandLogos} isLarge />
      <div className="section-video">
        <Container>
          <div className="mt-[7.8rem] mx-[1rem] relative pt-[56.1702%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXof9kXTVX0k%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXof9kXTVX0k&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXof9kXTVX0k%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
              scrolling="no"
              title="SURF Reward - Explanatory video"
            ></iframe>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;

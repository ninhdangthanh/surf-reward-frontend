'use client';

import { useEffect, useRef, useState } from 'react';

import Container from '../../../Container';
import RoadMapItem from '../../../RoadMapItem';
import SectionDivider from '../../../SectionDivider';
import './index.scss';
import SECTION_HOME_PAGE_KEY from '@/constants/sectionsKey';

const RoadMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY);
    });

    return () => {
      removeEventListener('scroll', () => {});
    };
  }, []);

  const roadmaps = [
    {
      prefix: 'Q 3',
      suffix: '2019',
      contents: [
        'Abelius Capital AG a public limited company incorporated under German law in 2019 with its registered office in Düsseldorf, Germany is founded',
      ],
    },
    {
      prefix: 'Q 2',
      suffix: '2021',
      contents: [
        'The idea of SURF Reward is developed',
        'First ideas are collated',
        'A business plan and white paper are drawn up',
        'Market analysis & strategy building begins',
      ],
    },
    {
      prefix: 'Q 3',
      suffix: '2021',
      contents: ['Start of programming work'],
    },
    {
      prefix: 'Q 4',
      suffix: '2021',
      contents: ['Further development', 'The project name "SURF Reward" is born'],
    },
    {
      prefix: 'Q 1',
      suffix: '2022',
      contents: [
        'Start of website development',
        'Presentation of SURF Reward Extension demo and start of development of final version',
      ],
    },
    {
      prefix: 'Q 4',
      suffix: '2022',
      contents: [
        'Token created',
        'Token audit',
        'Project publication',
        'First marketing steps starts',
        'Contract with external Blockchain Advisor Ian Scarffe (Ian Scarffe is the number 1 Blockchain Advisor in the Global list of Blockchain Advisors)',
      ],
    },
    {
      prefix: 'Q 1',
      suffix: '2023',
      contents: ['First Press Release', 'Whitepaper publishing', 'Partnerships', 'Acquisition'],
    },
    {
      prefix: 'Q 4',
      suffix: '2023',
      contents: ['PreSale starts', 'Staking starts'],
    },
    {
      prefix: 'Q 1',
      suffix: '2024',
      contents: [
        'Beta Test „SURF Reward“ Extension',
        'SURF Token Listing',
        'Next Marketing Steps',
        'Start of our Self Service Advertising Platform',
      ],
    },
  ];

  return (
    <div className="roadmap-bg" id={SECTION_HOME_PAGE_KEY.ROAD_MAP}>
      <Container className="mt-[7rem]">
        <SectionDivider prefix="05" suffix="ROADMAP" />
        <div
          ref={containerRef}
          className="lg:mx-6 xl:mx-[11rem] md:py-10 lg:px-[60px] xl:py-[5.25rem] relative"
        >
          <div
            className="absolute left-[22.5px] lg:left-[25px] top-0 bg-[#312e81] w-0.5 z-0 transition-all duration-700"
            style={{
              height: Math.min(
                scrollHeight - (containerRef.current?.offsetTop || 0) + window.innerHeight - 100,
                (containerRef.current?.offsetHeight || 0) + (containerRef.current?.scrollTop || 0),
              ),
            }}
          ></div>
          <div className="z-1 relative space-y-[40px]">
            {roadmaps.map((roadmap, index) => (
              <RoadMapItem key={index} {...roadmap} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoadMap;

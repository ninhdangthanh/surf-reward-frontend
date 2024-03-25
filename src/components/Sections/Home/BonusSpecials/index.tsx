import SECTION_HOME_PAGE_KEY from '@/constants/sectionsKey';
import BonusSpecialItems from '../../../BonusSpecialItems';
import Container from '../../../Container';
import SectionDivider from '../../../SectionDivider';
import './index.scss';
import PricingStructure from './components/PricingStructure';

const BonusSpecials = () => {
  const bonusItems = [
    {
      title: 'Referral Bonus',
      subtitle: 'Use your personal referral code and get your bonus!',
      price: 'get +5%',
      suffix: 'extra',
      contents: ['5% bonus for you', '5% bonus for your friend', 'personal referral Code'],
    },
    {
      title: 'Reward Booster',
      subtitle: 'Buy more and get more SURF token rewards as an extension user',
      price: 'up to 250%',
      suffix: '/rewards',
      contents: [
        '10% more rewards from $100',
        '50% more rewards from $500',
        '100% more rewards from $1000',
        '250% more rewards from $2000',
        'For PreSale customers only!',
      ],
    },
    {
      title: 'Staking Bonus',
      subtitle: 'Stake now without lock time!',
      price: 'up to 5000%',
      suffix: '/APY',
      contents: [
        'Buy, claim and stake',
        'get up to 5000% APY',
        'No lock time',
        'APY decreases with each user. So: Stake now and secure the a high APY! Your start APY will stay. No reduction. Start now and get the highest profit. Just earn your first tokens during the PreSale!',
      ],
    },
  ];

  return (
    <div className="bg-black pt-[140px]" id={SECTION_HOME_PAGE_KEY.BONUS_SPECIALS}>
      <Container className="xl:py-[96px]">
        <SectionDivider prefix="03" suffix="BONUS SPECIALS" />
        <h2 className="bonus-special-title">
          One, Two, Three Bonuses:
          <br />
          Just Fulfill the <span className="bonus-special-title-gradient">Criteria!</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-4 xl:max-w-[1200px] mt-[120px] mb-[45px] mx-auto">
          {bonusItems.map((item, index) => (
            <BonusSpecialItems key={index} {...item} />
          ))}
        </div>
      </Container>
      <PricingStructure />
    </div>
  );
};

export default BonusSpecials;

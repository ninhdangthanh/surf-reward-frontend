'use client';

import React, { useState } from 'react';
import PricingStructureProductItem from '../PricingStructureProductItem';

const data = [
  {
    title: 'Private PreSale',
    status: 'FINISHED',
    content: {
      'Token Price': '$0.01 per 1 SURF',
      'Increase Price': '+ $0.001 per 1 SURF',
      'Increase Duration': '14 days',
      Availability: 'Whitelist',
    },
  },
  {
    title: 'Public PreSale',
    status: 'ACTIVE',
    content: {
      'Token Price': '$0.02 per 1 SURF',
      'Increase Price': '+ $0.00025 per 1 SURF',
      'Increase Duration': '7 days',
      'Minimum Invest': './.',
      'Maximum Invest': './.',
    },
  },
  {
    title: 'Listing price',
    content: {
      'Exchange Type': 'DEX + CEX',
      'Token Price': '$0.05 per 1 SURF',
      'Initial Market Cap': '$10,000,000',
    },
  },
];

const PricingStructureProductList = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className="pt-[60px] xl:pt-[96px] pb-[160px] xl:pb-[236px] mx-[13%] md:mx-[20%] lg:mx-0 xl:mx-14 px-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <PricingStructureProductItem
            key={index}
            {...item}
            isActive={active === index}
            onChangeActiveKey={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingStructureProductList;

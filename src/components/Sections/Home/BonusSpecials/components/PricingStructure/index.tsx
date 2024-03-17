import React from 'react';
import PricingStructureProductList from '../PricingStructureProductList';
import { Container } from '@/components';

const PricingStructure = () => {
  return (
    <div className="bg-[#0d1116]">
      <div className="container mx-auto px-10 md:px-14 xl:px-24">
        <h3 className="text-lg md:text-xl xl:text-3xl font-normal text-center w-fit m-auto text-gray-400 py-[60px]">
          Take a look at our pricing structure and take advantage of this unique opportunity to join
          us from the beginning and enjoy the benefits.
        </h3>
      </div>

      <PricingStructureProductList />
    </div>
  );
};

export default PricingStructure;

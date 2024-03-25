'use client';

import React, { useState } from 'react';

import Container from '../../../Container';
import ExpandItem from '../../../ExpandItem';
import './index.scss';
import SECTION_HOME_PAGE_KEY from '@/constants/sectionsKey';

const FAQs = () => {
  const [expandKey, setExpandKey] = useState<React.Key>('');

  const faqs = [
    {
      key: '0',
      label: 'When and how do I get my tokens?',
      content: (
        <p className="space-y-4 flex flex-col">
          <span>
            The PreSale ends on 12/04/2023, but after purchase you can directly claim your tokens
            and if you want use our staking app.
          </span>
          <span>
            If you purchased in our alternative purchase app, we will automatically send you the
            tokens to the address you provide in your Account (directly during approval).
          </span>
          <span>
            BSC buyers: A claiming button appear after the purchase. The tokens can be staked
            directly after claiming. Buyers on Ethereum: After the purchase, switch to the BNB/BSC
            blockchain. Your claiming button will then appear there.
          </span>
          <span>
            Alternatively, you can join our Telegram group. If you want, we can send you your SURF
            tokens manually.
          </span>
        </p>
      ),
    },
    {
      key: '1',
      label: 'How i can add the SURF token to Metamask?',
      content: (
        <p>
          <span className="text-yellow-400">Click here</span> or add our contract address in your
          Wallet. Please note that you must be connected to the Binance Smart Chain.
        </p>
      ),
    },
    {
      key: '2',
      label: 'When will the SURF Token be listed?',
      content: (
        <p>
          The SURF Token will be listed shortly after the PreSale. The exact date will be announced.
        </p>
      ),
    },
    {
      key: '3',
      label: 'When will the SURF Token be listed?',
      content: (
        <p>
          The SURF Token will be listed on DEX (decentralised exchanges), such as Pancakeswap, and
          CEX (centralised exchanges). We will announce the exact list of our partner exchanges and
          the date shortly.
        </p>
      ),
    },
  ];

  return (
    <Container className="my-20" id={SECTION_HOME_PAGE_KEY.CONTACT}>
      <h2 className="section-title-gradient">Frequently Ask Question</h2>
      <div className="grid md:grid-cols-2 gap-4 lg:gap-8 mt-8 items-start">
        {faqs.map((faq) => (
          <ExpandItem
            {...faq}
            key={faq.key}
            isActive={expandKey === faq.key}
            onClick={() => setExpandKey(expandKey === faq.key ? '' : faq.key)}
          />
        ))}
      </div>
    </Container>
  );
};

export default FAQs;

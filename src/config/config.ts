"use client";

import { http, createConfig } from 'wagmi'
import { base, mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet } from 'wagmi/connectors'
import { metaMask } from '@wagmi/connectors'
import { walletConnect } from '@wagmi/connectors'


export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    walletConnect({
      projectId: 'relaxapp',
    }),
    metaMask(),
    coinbaseWallet({
      appName: 'Relax App',
    }),
  ],
  // ssr: true,
  batch: { multicall: true }, 
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id]: http(),
  },
})
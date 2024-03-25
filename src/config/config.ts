"use client";

import { http, createConfig, webSocket } from '@wagmi/core'
import { base, mainnet, sepolia, goerli } from '@wagmi/core/chains'
import { coinbaseWallet } from '@wagmi/connectors'
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
    [mainnet.id]: webSocket('wss://ethereum-rpc.publicnode.com'),
    [sepolia.id]: webSocket('wss://ethereum-sepolia-rpc.publicnode.com'),
    [goerli.id]: webSocket('wss://goerli.gateway.tenderly.co')
  },
})
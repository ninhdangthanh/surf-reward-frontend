import { Abi } from "viem";

export const abi : Abi = [
    {
        type: 'constructor',
        inputs: [{ name: 'initialSupply', type: 'uint256' }],
        stateMutability: 'nonpayable'
    },
    {
        type: 'event',
        name: 'Approval',
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
            { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ]
    },
    {
        type: 'event',
        name: 'Buy',
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'buyer', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ]
    },
    {
        type: 'event',
        name: 'BuyWithUSDT',
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'buyer', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'address', name: 'from', type: 'address' },
            { indexed: true, internalType: 'address', name: 'to', type: 'address' },
            { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
        ]
    },
    {
        type: 'function',
        name: 'allowance',
        inputs: [
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' }
        ],
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'approve',
        inputs: [
            { internalType: 'address', name: 'spender', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'balanceOf',
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'buyToken',
        inputs: [],
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'buyTokenWithUSDT',
        inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'decimals',
        inputs: [],
        outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'getChainlinkDataFeedLatestAnswer',
        inputs: [],
        outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'name',
        inputs: [],
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'nonce',
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'oneUsdToToken',
        inputs: [],
        outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'ownerAddress',
        inputs: [],
        outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'setExchangeRate',
        inputs: [{ internalType: 'uint32', name: 'rateUsdToToken', type: 'uint32' }],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'symbol',
        inputs: [],
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'totalSupply',
        inputs: [],
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'transfer',
        inputs: [
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' },
            { internalType: 'uint256', name: 'userNonce', type: 'uint256' }
        ],
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'transferFrom',
        inputs: [
            { internalType: 'address', name: 'from', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'uint256', name: 'value', type: 'uint256' }
        ],
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'usdtAddress',
        inputs: [],
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view'
    },
    {
        type: 'function',
        name: 'withdraw',
        inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
        outputs: [],
        stateMutability: 'nonpayable'
    },
    {
        type: 'function',
        name: 'withdrawUSDT',
        inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
        outputs: [],
        stateMutability: 'nonpayable'
    }
] as const;
export const networkIds = {
  CTEX: 13375
}

const networks = {
  [networkIds.CTEX]: {
    chainId: '0x343F',
    chainName: 'Ctex Coin',
    nativeCurrency: {
      name: 'Ctex',
      symbol: 'CTEX',
      decimals: 18
    },
    rpc: 'https://mainnet-rpc.ctexscan.com',
    explorer: 'https://ctexscan.com'
  }
}

export const getNetwork = (networkId) => networks[networkId]

import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet, sepolia } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const queryClient = new QueryClient()

const projectId = 'f9408ea32f95d56ffa9d640d719e09c2'

const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com', 
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const networks = [mainnet, arbitrum, sepolia]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    email: false,
    socials: [],
    analytics: true 
  },
  allWallets: "HIDE",
  enableWalletConnect: false,
  enableWalletGuide: true
})

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
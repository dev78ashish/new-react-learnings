import React from 'react'
import { useAccount, useBalance } from 'wagmi'
import ConnectButton from './components/ConnectButton'
import NetworkSwitcher from './components/NetworkSwitcher'

const App = () => {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({ address })

  return (
    <div>
      <header className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">My Web3 App</h2>
        <div className="min-w-[240px] text-right">
          <ConnectButton />
        </div>
      </header>

      <main className="p-6 text-center">
        <h3 className="text-lg font-medium mb-4">Welcome to the Web3 AppKit Demo</h3>
        <NetworkSwitcher />

        {isConnected && (
          <div className="mt-6">
            <div className="mb-2">
              <strong>Address:</strong> {address.slice(0, 6)}...{address.slice(-4)}
            </div>
            <div>
              <strong>Balance:</strong> {balance?.formatted} {balance?.symbol}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

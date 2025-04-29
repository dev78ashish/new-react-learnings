import React from 'react'
import ConnectButton from './components/ConnectButton'
import NetworkSwitcher from './components/NetworkSwitcher'

const App = () => {
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
      </main>
    </div>
  )
}

export default App

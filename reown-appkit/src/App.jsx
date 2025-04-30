import React from 'react'
import { useAccount, useBalance } from 'wagmi'
import ConnectButton from './components/ConnectButton'
import NetworkSwitcher from './components/NetworkSwitcher'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

const App = () => {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({ address })

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // You could add a toast notification here
        console.log('Copied to clipboard')
      })
  }

  const formatAddress = (addr) => {
    if (!addr) return ''
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-center px-4 py-3 border-b border-gray-300 gap-2">
        <h2 className="text-xl font-semibold">My Web3 App</h2>
        <div className="w-full md:w-auto">
          <ConnectButton />
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 max-w-4xl mx-auto w-full">
        <h3 className="text-lg font-medium mb-4 text-center">Welcome to the Web3 AppKit Demo</h3>
        
        <div className="mb-6">
          <NetworkSwitcher />
        </div>

        {isConnected && (
          <Card className="mt-6 shadow-md">
            <CardHeader className="pb-2">
              <h3 className="text-lg font-medium">Wallet Information</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="py-1">Address</Badge>
                    {/* <span className="font-mono text-blue-500">{address}</span> */}
                    <span className="font-mono text-blue-500">{formatAddress(address)}</span> 
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 gap-1"
                    onClick={() => copyToClipboard(address)}
                  >
                    <Copy size={14} />
                    <span className="text-xs">Copy</span>
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="py-1">Balance</Badge>
                    <span className="font-medium">{balance?.formatted || '0.00'}</span>
                    <span className="text-gray-500">{balance?.symbol}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}

export default App
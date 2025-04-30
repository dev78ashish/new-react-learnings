import React from 'react'
import { useSwitchChain, useAccount } from 'wagmi'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const NetworkSwitcher = () => {
  const { chains, switchChain } = useSwitchChain()
  const { isConnected, chain } = useAccount()

  if (!isConnected) {
    return (
      <Card className="w-full border border-dashed">
        <CardContent className="p-4 text-center text-gray-500">
          <p>Connect your wallet to switch networks</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <h3 className="text-base font-medium">Select Network</h3>
        <p className="text-sm text-gray-500">Choose a blockchain network to connect to</p>
      </CardHeader>
      <CardContent>
        {chain && (
          <h2 className='mb-2'>You are currently connected to <span className='bg-gray-50 text-green-700'>${chain.name}</span></h2>
        )}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {chains.map((chain) => (
            <Button 
              key={chain.id} 
              onClick={() => switchChain({ chainId: chain.id })}
              variant="outline"
              size="sm"
              className="flex items-center gap-1 cursor-pointer"
            >
              {chain.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default NetworkSwitcher
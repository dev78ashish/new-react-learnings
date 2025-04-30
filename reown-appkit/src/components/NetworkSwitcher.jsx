import React from 'react'
import { useSwitchChain, useAccount } from 'wagmi'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'

const NetworkSwitcher = () => {
  const { chains, switchChain, isPending } = useSwitchChain()
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

  const handleSwitch = async (chainId) => {
    await switchChain({ chainId })
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <h3 className="text-base font-medium">Select Network</h3>
        <p className="text-sm text-gray-500">Choose a blockchain network to connect to</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {chains.map((c) => (
            <Button
              key={c.id}
              onClick={() => handleSwitch(c.id)}
              variant={c.id === chain?.id ? "default" : "outline"}
              size="sm"
              disabled={isPending}
              className="flex items-center gap-1"
            >
              {c.name}
            </Button>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2">
          {isPending ? (
            <>
              <Loader2 className="animate-spin w-4 h-4" />
              <span>Please wait...</span>
            </>
          ) : (
            <span>
              You are currently connected to{' '}
              <span className="bg-gray-50 text-green-700 px-2 py-1 rounded">{chain?.name}</span>
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default NetworkSwitcher

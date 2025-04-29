import React, { useState, useEffect } from 'react'
import { useAppKit } from '@reown/appkit/react'

export default function NetworkSwitcher() {
  const appKit = useAppKit()
  const [currentChain, setCurrentChain] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [pendingChainId, setPendingChainId] = useState(null)
  const [error, setError] = useState(null)

  // Get the configured networks from AppKit
  const networks = appKit?.config?.networks || []

  console.log(networks)
  
  useEffect(() => {
    // Get current chain when component mounts
    const fetchCurrentChain = async () => {
      try {
        if (appKit?.provider) {
          const chainId = await appKit.provider.getChainId()
          setCurrentChain(chainId)
        }
      } catch (err) {
        console.error('Error fetching chain:', err)
      }
    }

    fetchCurrentChain()
    
    // Set up event listener for chain changes
    const handleChainChanged = (chainId) => {
      setCurrentChain(chainId)
      setIsLoading(false)
      setPendingChainId(null)
    }
    
    if (appKit?.provider) {
      appKit.provider.on?.('chainChanged', handleChainChanged)
    }

    return () => {
      // Clean up listeners
      if (appKit?.provider) {
        appKit.provider.off?.('chainChanged', handleChainChanged)
      }
    }
  }, [appKit])

  // Get the network name from its ID
  const getNetworkName = (chainId) => {
    const network = networks.find(n => n.chainId === Number(chainId))
    return network ? network.name : 'Unknown'
  }

  const switchNetwork = async (chainId) => {
    if (!appKit?.provider) {
      setError({ message: 'Provider not available' })
      return
    }
    
    setIsLoading(true)
    setPendingChainId(chainId)
    setError(null)

    try {
      await appKit.provider.switchChain(chainId)
      // The chain change event will update the UI
    } catch (err) {
      console.error('Error switching chain:', err)
      setError({ message: err.message || 'Failed to switch network' })
      setIsLoading(false)
      setPendingChainId(null)
    }
  }

  if (!appKit?.provider) {
    return <p>Please connect your wallet first</p>
  }

  return (
    <div>
      <p>Connected to: <strong>{currentChain ? getNetworkName(currentChain) : 'Unknown'}</strong></p>

      {networks.map((network) => (
        Number(network.chainId) === Number(currentChain) ? null : (
          <button
            key={network.chainId}
            onClick={() => switchNetwork(network.chainId)}
            disabled={isLoading && pendingChainId === network.chainId}
            className="mr-2 px-3 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading && pendingChainId === network.chainId 
              ? 'Switching...' 
              : `Switch to ${network.name}`}
          </button>
        )
      ))}

      {error && <p className="text-red-500 mt-2">{error.message}</p>}
    </div>
  )
}
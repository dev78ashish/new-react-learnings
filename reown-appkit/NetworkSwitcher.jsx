import React, { useState, useEffect } from 'react';
import { useAppKit } from '@reown/appkit/react';

export default function NetworkSwitcher() {
  const appKit = useAppKit();
  const [currentChain, setCurrentChain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pendingChainId, setPendingChainId] = useState(null);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Get the configured networks from AppKit
  const networks = appKit?.config?.networks || [];
  
  useEffect(() => {
    // Check if wallet is connected
    const checkConnection = async () => {
      try {
        if (appKit?.provider) {
          const accounts = await appKit.provider.getAccounts();
          setIsConnected(accounts && accounts.length > 0);
          
          if (accounts && accounts.length > 0) {
            const chainId = await appKit.provider.getChainId();
            setCurrentChain(chainId);
          }
        }
      } catch (err) {
        console.error('Error checking connection:', err);
        setIsConnected(false);
      }
    };

    checkConnection();
    
    // Set up event listeners
    const handleChainChanged = (chainId) => {
      console.log('Chain changed to:', chainId);
      setCurrentChain(chainId);
      setIsLoading(false);
      setPendingChainId(null);
    };
    
    const handleAccountsChanged = (accounts) => {
      console.log('Accounts changed:', accounts);
      setIsConnected(accounts && accounts.length > 0);
    };
    
    if (appKit?.provider) {
      appKit.provider.on?.('chainChanged', handleChainChanged);
      appKit.provider.on?.('accountsChanged', handleAccountsChanged);
    }

    return () => {
      // Clean up listeners
      if (appKit?.provider) {
        appKit.provider.off?.('chainChanged', handleChainChanged);
        appKit.provider.off?.('accountsChanged', handleAccountsChanged);
      }
    };
  }, [appKit]);

  // Get the network name from its ID
  const getNetworkName = (chainId) => {
    if (!chainId) return 'Unknown';
    const network = networks.find(n => n.chainId === Number(chainId));
    return network ? network.name : `Chain ID: ${chainId}`;
  };

  const switchNetwork = async (chainId) => {
    if (!appKit?.provider) {
      setError({ message: 'Provider not available' });
      return;
    }
    
    setIsLoading(true);
    setPendingChainId(chainId);
    setError(null);

    try {
      // Some wallets use this method
      if (typeof appKit.provider.switchChain === 'function') {
        await appKit.provider.switchChain(chainId);
      } 
      // For wallets that implement EIP-3326 (MetaMask, etc.)
      else if (typeof appKit.provider.request === 'function') {
        await appKit.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${Number(chainId).toString(16)}` }],
        });
      } else {
        throw new Error('Wallet does not support network switching');
      }
      // The chain change event will update the UI
    } catch (err) {
      console.error('Error switching chain:', err);
      setError({ message: err.message || 'Failed to switch network' });
      setIsLoading(false);
      setPendingChainId(null);
    }
  };

  const connectWallet = async () => {
    if (!appKit?.provider) {
      setError({ message: 'Provider not available' });
      return;
    }

    try {
      setError(null);
      if (typeof appKit.connect === 'function') {
        await appKit.connect();
      } else if (typeof appKit.provider.request === 'function') {
        await appKit.provider.request({ method: 'eth_requestAccounts' });
      }
      setIsConnected(true);
      
      // Get current chain after connecting
      const chainId = await appKit.provider.getChainId();
      setCurrentChain(chainId);
    } catch (err) {
      console.error('Error connecting wallet:', err);
      setError({ message: err.message || 'Failed to connect wallet' });
    }
  };

  if (!appKit) {
    return <div className="p-4 bg-red-100 text-red-700 rounded">AppKit not initialized</div>;
  }

  if (!isConnected) {
    return (
      <div className="p-4 bg-gray-100 rounded">
        <p className="mb-2">Please connect your wallet first</p>
        <button 
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Connect Wallet
        </button>
        {error && <p className="text-red-500 mt-2">{error.message}</p>}
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100 rounded">
      <div className="mb-4">
        <p>Connected to: <span className="font-bold">{currentChain ? getNetworkName(currentChain) : 'Unknown'}</span></p>
      </div>

      <div className="flex flex-wrap gap-2">
        {networks.length > 0 ? (
          networks.map((network) => (
            Number(network.chainId) === Number(currentChain) ? null : (
              <button
                key={network.chainId}
                onClick={() => switchNetwork(network.chainId)}
                disabled={isLoading && pendingChainId === network.chainId}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
              >
                {isLoading && pendingChainId === network.chainId 
                  ? 'Switching...' 
                  : `Switch to ${network.name}`}
              </button>
            )
          ))
        ) : (
          <p>No networks configured</p>
        )}
      </div>

      {error && <p className="text-red-500 mt-2">{error.message}</p>}
      
      {networks.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          <p>Available networks: {networks.map(n => n.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
}
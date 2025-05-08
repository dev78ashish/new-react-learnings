import React, { useState, useEffect } from 'react';

const PhantomWalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isPhantomInstalled, setIsPhantomInstalled] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const checkIfPhantomIsInstalled = () => {
      const isPhantomInstalled = window.phantom?.solana?.isPhantom;
      setIsPhantomInstalled(isPhantomInstalled);
      if (isPhantomInstalled) {
        setStatus('✅');
      } else {
        setStatus('❌');
      }
    };

    checkIfPhantomIsInstalled();
    window.addEventListener('focus', checkIfPhantomIsInstalled);
    return () => window.removeEventListener('focus', checkIfPhantomIsInstalled);
  }, []);

  const connectWallet = async () => {
    try {
      setStatus('Connecting to wallet...');
      const { solana } = window.phantom;

      const response = await solana.connect();
      // console.log(response.publicKey);
      setWalletAddress(response.publicKey.toString());
      setStatus('Wallet connected successfully!');
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      setStatus(`Error connecting: ${error.message}`);
    }
  };

  const disconnectWallet = async () => {
    try {
      setStatus('Disconnecting...');
      const { solana } = window.phantom;

      await solana.disconnect();
      setWalletAddress(null);
      setStatus('Wallet disconnected.');
    } catch (error) {
      console.error('Error disconnecting from wallet:', error);
      setStatus(`Error disconnecting: ${error.message}`);
    }
  };


  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Phantom Wallet Integration</h2>

      <div className="mb-4">
        <p className="text-gray-700">Status: {status}</p>
        {walletAddress && (
          <p className="text-gray-700 mt-2">
            Connected Address: <code className="bg-gray-100 p-1 rounded">{walletAddress}</code>
          </p>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        {isPhantomInstalled ? (
          <>
            {!walletAddress ? (
              <button
                onClick={connectWallet}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
              >
                Connect to Phantom
              </button>
            ) : (
              <button
                onClick={disconnectWallet}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Disconnect Wallet
              </button>
            )}
          </>
        ) : (
          <div>Phantom not installed.</div>
        )}
      </div>
    </div>
  );
};

export default PhantomWalletConnect;
import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Loader2 } from "lucide-react";
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";

const WalletConnectButton = () => {
  const { publicKey, connecting, connected, disconnect, connect, wallet, select } = useWallet();
  const [balance, setBalance] = useState(null);
  const [fetchingBalance, setFetchingBalance] = useState(false);

  const fetchBalance = async () => {
    if (!publicKey) return;

    try {
      setFetchingBalance(true);
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

      const balanceInLamports = await connection.getBalance(publicKey);

      const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

      setBalance(balanceInSOL);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBalance(null);
    } finally {
      setFetchingBalance(false);
    }
  };

  useEffect(() => {
    if (connected && publicKey) {
      fetchBalance();
    } else {
      setBalance(null);
    }
  }, [connected, publicKey]);

  const handleConnect = async () => {
    if (!wallet) {
      await select('Phantom');
    }

    try {
      await connect();
    } catch (e) {
      console.log(`Connection error: ${e}`);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (e) {
      console.log(`Disconnection error: ${e}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center min-w-32"
          onClick={handleConnect}
          disabled={connecting || connected}
        >
          {!connected && !connecting && "Connect Wallet"}
          {connected && !connecting && (publicKey.toString())}
          {connecting && (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Connecting...</span>
            </div>
          )}
        </button>

        {connected && (
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            onClick={handleDisconnect}
          >
            Disconnect
          </button>
        )}
      </div>

      {connected && (
        <div className="mt-2 text-center">
          <div className="font-medium">
            {fetchingBalance ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Fetching balance...</span>
              </div>
            ) : balance !== null ? (
              <span>Balance: {balance.toFixed(4)} SOL</span>
            ) : (
              <span>Failed to fetch balance</span>
            )}
          </div>

          <button
            onClick={fetchBalance}
            className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm py-1 px-3 rounded-md transition-colors duration-200"
          >
            Refresh Balance
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;
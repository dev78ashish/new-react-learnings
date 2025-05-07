import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp , X } from "lucide-react";
import { useAccount, useBalance } from "wagmi";
import Loader from "../../Loader";

const dummyTokens = [
  { name: "USDC", network: "Ethereum" },
  { name: "USDC", network: "Binance chain" },
  { name: "USDC", network: "Arbitrum" },
  { name: "USDT", network: "Ethereum" },
  { name: "USDT", network: "Binance chain" },
];

export default function WalletChecker() {

  const [initiated, setInitiated] = useState(false)

  const [showPopup, setShowPopup] = useState(false);
  const [selectedToken, setSelectedToken] = useState({
    name: "USDC",
    network: "Ethereum",
  });
  const [isOpen, setIsOpen] = useState(false);

  const { address, isConnected, isConnecting } = useAccount();
  const { data: balanceData } = useBalance({
    address,
    token: selectedToken.name === "USDC" 
      ? "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" 
      : "0xdAC17F958D2ee523a2206206994597C13D831ec7", 
    enabled: isConnected && showPopup,
  });

  useEffect(() => {
    console.log(isConnected);
  }, [isConnected]);

  const handleCheck = () => {
    setInitiated(true);
    setTimeout(() => {
      setShowPopup(true);
      setInitiated(false);
    }, 1500);
  };

  const formatAddress = (addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };



  return (
    <div className="max-w-[675px] mx-auto bg-white rounded-2xl shadow-lg p-6">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-white border border-gray-200 rounded-full px-4 py-3 text-3xl mb-8 h-22 cursor-pointer flex items-center"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <img
              src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
              alt={selectedToken.name}
              className="w-5 h-5"
            />
            <span className="text-gray-800 font-medium">{selectedToken.name}</span>
            <span className="bg-purple-100 text-purple-700 text-xl font-semibold px-2 py-0.5 rounded-full">
              {selectedToken.network === "Ethereum"
                ? "ETH"
                : selectedToken.network.split(" ")[0].toUpperCase()}
            </span>
          </div>
          {isOpen ? (
            <ChevronUp className="w-10 h-10 text-gray-700" />
          ) : (
            <ChevronDown className="w-10 h-10 text-gray-700" />
          )}
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto z-10">
            <div className="p-3 text-xl font-semibold">Select an asset</div>
            <ul>
              {dummyTokens.map((token, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedToken(token);
                    setIsOpen(false);
                  }}
                  className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={
                      token.name === "USDC"
                        ? "https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                        : "https://cryptologos.cc/logos/tether-usdt-logo.png"
                    }
                    alt={token.name}
                    className="w-5 h-5 mr-2"
                  />
                  <div>
                    <div className="text-base font-medium">{token.name}</div>
                    <div className="text-sm text-gray-500">
                      {token.name} ({token.network})
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
        <div className="w-full flex justify-center items-center">
          {initiated && <Loader />}
        </div>

      <button className="w-full bg-[#2A2A42] h-22 text-white text-3xl font-medium py-5 rounded-full hover:bg-[#3a295d] cursor-pointer transition" disabled={!isConnected} onClick={handleCheck} >
        {isConnected ? ('Check wallet') : ('Connect First')}
      </button>
      <appkit-button />
      

      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-xl font-bold mb-6">Wallet Details</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Wallet Address</p>
                <p className="font-medium break-all">{formatAddress(address)}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Selected Token</p>
                <div className="flex items-center space-x-2">
                  <img
                    src="/api/placeholder/24/24"
                    alt={selectedToken.name}
                    className="w-6 h-6"
                  />
                  <span className="font-medium">{selectedToken.name}</span>
                  <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-2 py-0.5 rounded-full">
                    {selectedToken.network === "Ethereum"
                      ? "ETH"
                      : selectedToken.network.split(" ")[0].toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Balance</p>
                <p className="text-xl font-bold">
                  {balanceData ? 
                    `${parseFloat(balanceData.formatted).toFixed(4)} ${balanceData.symbol}` : 
                    '0.0000'
                  }
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#2A2A42] text-white font-medium py-3 mt-6 rounded-full hover:bg-[#3a295d]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

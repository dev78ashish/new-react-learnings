import React from 'react';
// import { useWallet } from '@solana/wallet-adapter-react'
import { AppWindowMacIcon } from 'lucide-react';
import WalletConnectButton from './components/WalletConnectButton';

const Login = () => {
 


  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex min-h-full flex-1 flex-col px-6 py-12s lg:px-8">
        <div className="mt-14">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <AppWindowMacIcon className="h-24 w-24 mx-auto text-indigo-600" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-600">
              Sign in to your account by connecting your{" "}
              <span className="text-indigo-600 font-semibold">wallet</span>
            </h2>
          </div>

          <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-xs">
            <div className="flex items-center justify-center">
              <WalletConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;












































// const { disconnect, publicKey, connected, wallet, connect, select } = useWallet();
// const [balance, setBalance] = useState(null);

// const handleConnect = async () => {
//   if (!wallet) {
//     await select('Phantom');
//   }

//   try {
//     await connect(); 
//   } catch (e) {
//     console.log(`Connection error: ${e}`);
//   }
// };

// useEffect(() => {
//   if (connected && publicKey) {
//     const getBalance = async () => {
//       const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
//       const balance = await connection.getBalance(publicKey); 
//       setBalance(balance / 1e9); 
//     };

//     getBalance();
//   }
// }, [connected, publicKey]);
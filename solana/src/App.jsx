import React from 'react';
import Login from './components/Login/Login';
import SolanaWalletProvider from './contexts/SolanaWalletProvider';

const App = () => {
  return (
    <SolanaWalletProvider>
      <Login />
    </SolanaWalletProvider>
  );
};

export default App;

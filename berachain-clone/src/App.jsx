import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
import LiquidityComp from './components/LiquidityComp'
import ProofLiquidity from './components/ProofLiquidity'
import CorePrinciples from './components/CorePrinciples'
import BeraEcosystem from './components/BeraEcosystem'
import BeaconUFO from './components/BeaconUFO'

const App = () => {
  return (
    <div className='h-screen w-full bg-[#7BBDEA]'>
      <Navbar />
      <BeaconUFO />
      <BeraEcosystem />
      <CorePrinciples />
      <ProofLiquidity />
      <LiquidityComp />
      <Home />
    </div>
  )
}

export default App
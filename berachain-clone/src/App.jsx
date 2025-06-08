import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'
import LiquidityComp from './components/LiquidityComp'
import ProofLiquidity from './components/ProofLiquidity'
import CorePrinciples from './components/CorePrinciples'
import BeraEcosystem from './components/BeraEcosystem'
import BeaconUFO from './components/BeaconUFO'
import CharacterScroller from './components/CharacterScroller'
import Careers from './components/Careers'
import Contact from './components/Contact'

const App = () => {

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
    });
  }, []); 


  return (
    <div className='h-screen w-full custom-font bg-[#7BBDEA]'>
      <Contact />
      <Careers />
      <CharacterScroller />
      <BeaconUFO />
      <BeraEcosystem />
      <CorePrinciples />
      <ProofLiquidity />
      <LiquidityComp />
      <Home />
      <Navbar />
    </div>
  )
}

export default App
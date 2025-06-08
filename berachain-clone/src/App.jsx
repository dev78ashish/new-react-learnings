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
import ScrollAnimation from './components/ScrollAnimation'
import Careers from './components/Careers'
import Contact from './components/Contact'

const App = () => {

  useEffect(() => {
    console.log(document.body.scrollHeight)
  }, []);


  return (
    <div className='h-screen w-full bg-[#7BBDEA]'>
      {/* <Contact />
      <Careers />
      <BeaconUFO />
      <BeraEcosystem /> */}
      {/* <CharacterScroller /> */}
      <ScrollAnimation />
      <CorePrinciples />
      <ProofLiquidity />
      <LiquidityComp />
      <Home />
      <Navbar />
    </div>
  )
}

export default App
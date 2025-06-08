import React from 'react'
import '../components/styles/LiquidityComp.css'
import teddy from '../assets/proof/teddy.jpg'
import ball from '../assets/proof/ball.jpg'
import cloud1 from '../assets/proof/cloudBottom.jpg'
import logos from '../assets/companies'
import '../components/styles/ProofLiquidity.css'
import cloud2 from '../assets/proof/cloud.jpg'

const BallText = ({ text }) => {
  return (
    <div className='flex floating flex-col items-center mb-6 sm:mb-8'>
      <p className='outlined-text text-white font-extrabold text-base sm:text-lg md:text-xl backdrop-blur-md bg-white/20 px-3 py-1 rounded-lg mb-3 text-center'>
        {text}
      </p>
      <img src={ball} alt="ball" className='h-16 sm:h-20 w-auto' />
    </div>
  )
}

const ProofLiquidity = () => {
  const logoArray = Object.values(logos)

  return (
    <div className='w-full relative bg-[#4FA1E3] overflow-hidden'>

      <div className='w-full py-6 px-4 sm:px-7 mb-[150px] sm:mb-[250px]'>
        <p className='outlined-text m-auto max-w-max text-white font-extrabold text-2xl sm:text-4xl md:text-5xl text-center mb-10 sm:mb-14'>
          Backed by the best
        </p>

        <div className='relative w-full overflow-hidden'>
          <div className='flex w-max animate-scroll gap-6 sm:gap-10 items-center'>
            {[...logoArray, ...logoArray].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className='h-6 sm:h-10 w-auto object-contain'
              />
            ))}
          </div>
        </div>
      </div>

      <img src={cloud2} alt="cloud" className='absolute hidden md:block left-1/2 transform -translate-x-1/2 top-[280px] h-28 w-auto floating' />

      <div className='mb-10 sm:mb-[50px]'>
        <BallText text={'Solve stake centralization'} />
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-10 sm:mb-[50px] px-4'>
        <BallText text={'Systematically build liquidity'} />
        <div>
          <img alt='teddy' src={teddy} className='w-40 sm:w-60 md:w-72 h-auto' />
        </div>
        <BallText text={'Align protocols and validators'} />
      </div>

      <div className='outlined-text text-white text-center font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl px-4 relative z-10'>
        <span className='text-[#EFD7A8]'>Proof Of Liquidity</span> creates a cooperative economy that rewards working <br className='hidden md:inline' />
        capital by aligning incentives across the network
      </div>

      <img src={cloud1} alt="cloud bottom" className='absolute bottom-0 left-0 w-auto h-32 sm:h-50 floating' />
    </div>
  )
}

export default ProofLiquidity

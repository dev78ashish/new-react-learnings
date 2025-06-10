import React from 'react';
import logos from '../assets/principle';

const CorePrinciples = () => {
  return (
    <div className='bg-gradient-to-b w-full pb-50' style={{ backgroundImage: 'linear-gradient(to bottom, #3A5D88, #4FA1E3)' }}>
      
      <p className='outlined-text text-white font-extrabold m-auto max-w-max text-4xl sm:text-5xl md:text-6xl mb-10 text-center'>
        Core Principles
      </p>

      <div className='flex flex-wrap justify-center gap-6 m-auto px-4 max-w-[95vw] md:max-w-[80vw] lg:max-w-[80vw]'>

        <div className='w-[90vw] md:w-[300px] backdrop-blur-md bg-white/20 rounded-xl md:h-[550px] relative flex flex-col justify-between'>
          <div className='p-6 md:w-full w-[60vw]'>
            <p className='text-white text-2xl sm:text-3xl outlined-text font-extrabold mb-4 text-left'>
              Defragmenting liquidity
            </p>
            <p className='text-white text-[17px] mb-10 md:mb-0  sm:text-[19px] font-extrabold text-left'>
              Simple DeFi legos (AMM, Perps, Lend) and pools built into the chain and powered by
              <span className='text-[#F0D8A7]'> validators</span>
            </p>
          </div>
          <img
            src={logos.logo1}
            alt="logo"
            className='absolute bottom-0 right-0 md:left-1/2 md:-translate-x-1/2 w-auto h-[120px] md:h-[40%]'
          />
        </div>

        <div className='w-[90vw] md:w-[300px] backdrop-blur-md bg-white/20 rounded-xl md:h-[550px] relative flex flex-col justify-between'>
          <div className='p-6 md:w-full w-[60vw]'>
            <p className='text-white text-2xl sm:text-3xl outlined-text font-extrabold mb-4 text-left'>
              Turbocharging Applications
            </p>
            <p className='text-white text-[17px] sm:text-[19px] mb-10 md:mb-0 font-extrabold text-left'>
              Validators
              <span className='text-[#F0D8A7]'> direct network emissions </span>
              towards decentralized dApps building on Berachain
            </p>
          </div>
          <img
            src={logos.logo2}
            alt="logo"
            className='absolute bottom-0 right-0 md:left-1/2 md:-translate-x-1/2 w-auto h-[120px] md:h-[40%]'
          />
        </div>

        <div className='w-[90vw] md:w-[300px] backdrop-blur-md bg-white/20 rounded-xl md:h-[550px] relative flex flex-col justify-between'>
          <div className='p-6 md:w-full w-[60vw]'>
            <p className='text-white text-2xl sm:text-3xl outlined-text font-extrabold mb-4 text-left'>
              Highly Accessible
            </p>
            <p className='text-white text-[17px] mb-10 md:mb-0  sm:text-[19px] font-extrabold text-left'>
              <span className='text-[#F0D8A7]'> EVM-identical blockchain </span>
              compatible with all existing ethereum ERCs and opcodes
            </p>
          </div>
          <img
            src={logos.logo3}
            alt="logo"
            className='absolute bottom-0 right-0 md:left-1/2 md:-translate-x-1/2 w-auto h-[120px] md:h-[40%]'
          />
        </div>

      </div>
    </div>
  );
};

export default CorePrinciples;

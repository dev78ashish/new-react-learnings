import React from 'react';
import wallet from '../../assets/wallet-icons.png';
import './Main.css'
import WalletChecker from './components/WalletChecker';
import HowWorksSection from './components/HowWorksSection';
import EmailSignup from './components/EmailSignup';
import FAQ from './components/FAQ';
import logo1 from '../../assets/all logos/1.png'
import logo2 from '../../assets/all logos/2.png'
import logo3 from '../../assets/all logos/3.png'
import logo4 from '../../assets/all logos/4.png'
import logo5 from '../../assets/all logos/5.png'
import wallet1 from '../../assets/wallet/wallet1.png'
import wallet2 from '../../assets/wallet/wallet2.png'
import mobile1 from '../../assets/mobile/mobile1.png'
import mobile2 from '../../assets/mobile/mobile2.png'
import Footer from './components/Footer';

const Main = () => {
  return (
    <div className='bg-[#F9F9FB] rounded-4xl py-8 px-8'>

      <section className="flex items-center justify-center md:px-8 flex-col">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center leading-tight">
          <span className="text-[#7E6AF0] main-heading">Check wallet risks</span> and <br />
          <div className="flex justify-center items-center gap-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            <span>protect your crypto</span>
            <img src={wallet} alt="Wallet icon" />
          </div>
        </h1>
        <p className='opacity-50 my-3 sm:text-lg md:text-xl lg:text-2xl max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[55%] lg:text-center'>Prevent USDT, Bitcoin, Ethereum, and 8000+ assets from being frozen by exchanges or custody services</p>
      </section>

      <WalletChecker />

      <section className='w-full text-center py-7'>
        <p className='text-2xl opacity-50 mb-5'>We use the same trusted sources as</p>
        <div className='flex gap-2 flex-wrap h-auto w-full items-center justify-center'>
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo4} alt="logo" />
          <img src={logo5} alt="logo" />
        </div>
      </section>

      <section className='py-20 sm:py-44'>
        <h1 className='font-bold text-center text-3xl sm:text-5xl lg:text-7xl'>
          <span className='text-[#55A07A]'>Protect your <br /> funds</span>&nbsp;when you
        </h1>

        <div className='flex flex-col sm:flex-row text-center items-center py-10 justify-evenly gap-10'>
          <div className='relative bg-[#F0F0F5] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem] rounded-2xl sm:rounded-3xl lg:rounded-4xl transition-all'>
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl my-10 font-bold px-4'>
              <span className='text-[#55A07A]'>Make</span> a P2P trade
            </p>
            <img src={wallet2} alt="wallet" className='absolute bottom-0 right-0' />
          </div>

          <div className='relative bg-[#F0F0F5] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[35rem] lg:h-[35rem] rounded-2xl sm:rounded-3xl lg:rounded-4xl transition-all'>
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl my-10 font-bold px-4'>
              Accept crypto <span className='text-[#55A07A]'>as a payment</span>
            </p>
            <img src={wallet1} alt="wallet" className='absolute bottom-0 right-0' />
          </div>
        </div>
      </section>

      <section className='bg-[#55A07A] w-full text-center py-12 rounded-4xl'>
        <h1 className='text-[#2A2A42] font-bold text-4xl md:text-6xl lg:text-7xl'>
          Be on the right side
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl opacity-40 my-8'>
          Use StarCheck to reduce the risk of <br /> interacting with the counterparty
        </p>
        <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
          <img
            src={mobile2}
            alt="mobile"
            className='rounded-4xl w-3/4 sm:w-2/3 md:w-1/3 lg:w-1/4'
          />
          <img
            src={mobile1}
            alt="mobile"
            className='rounded-4xl w-3/4 sm:w-2/3 md:w-1/3 lg:w-1/4'
          />
        </div>
      </section>

      <HowWorksSection />

      <FAQ />

      <EmailSignup />

      <Footer />

    </div>
  );
};

export default Main;

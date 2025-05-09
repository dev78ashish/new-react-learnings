import React from 'react'
import '../styles/Home.css'
import droplet from '../assets/droplet.png'
import drop from '../assets/drop.png'
import rectangle from '../assets/rectangle.svg'

const Home = () => {
  return (
    <div className='bg-[#150813] relative w-full min-h-screen flex items-center justify-center text-white flex-col px-4 text-center'>
      <div className='absolute top-0 right-[10%]'>
        <img className='h-20 md:h-36 lg:h-44 w-auto' src={droplet} alt="droplet" />
      </div>

      <div className='absolute top-5 left-[6%]'>
        <img className='h-14 md:h-16 w-auto' src={droplet} alt="droplet" />
      </div>

      <div className='absolute top-[8%] left-[4%] w-[200px] md:w-[260px] lg:w-[314px] h-[300px] md:h-[380px] lg:h-[450px]'>
        <div className='relative w-full h-full'>
          <img className='absolute top-0 left-[40%] w-6 md:w-8' src={drop} alt="drop" />
          <img className='absolute right-[10%] top-[30%] w-6 md:w-8' src={drop} alt="drop" />
          <img className='absolute top-[20%] left-[40%] w-6 md:w-8' src={drop} alt="drop" />
          <img className='h-10 md:h-14 w-auto absolute bottom-0 left-[50%]' src={droplet} alt="droplet" />
        </div>
      </div>

      <p className='text-[48px] sm:text-[72px] md:text-[120px] lg:text-[170px] font-bold leading-none'>
        WHITEPAPER
      </p>

      <p className='text-base sm:text-lg md:text-xl lg:text-2xl mt-4 mb-6 max-w-[90%] md:max-w-[60%] lg:max-w-[30%]'>
        Revolutionizing the Meme Economy by Leveraging AI and Smart Contracts for Fair, Decentralized Rewards
      </p>

      <div className='absolute left-0 top-0 h-full'>
        <img src={rectangle} alt="gradient" className='h-full w-full object-cover' />
      </div>

      <div className='absolute right-0 top-0 h-full'>
        <img
          src={rectangle}
          alt="gradient"
          className="h-full w-full object-cover rotate-180"
        />
      </div>
    </div>
  )
}

export default Home

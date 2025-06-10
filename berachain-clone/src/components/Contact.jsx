import React from 'react'
import SOCIAL_ICONS from '../assets/social-icons/index.js'
import BlinkingBackground from './BlinkingBackground.jsx'

const Contact = () => {
  return (
    <div className='w-full bg-[#15161F] pt-[200px] pb-72 relative lg:pt-24'>
      <div className='absolute inset-0'>
        <BlinkingBackground dotCount={50} />

      </div>
      {/* Center Main Community Image */}
      <div className='lg:w-[33vw] w-[200px] mx-auto z-10'>
        <img src={SOCIAL_ICONS.community} alt="community" className='w-full h-auto' />
      </div>

      {/* Floating Icons */}
      {/* Twitter */}
      <div className='absolute floating top-[140px] lg:top-[70px] left-[44%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.twitter} alt="twitter" className='w-full h-auto' />
      </div>

      {/* Discord */}
      <div className='absolute floating top-[150px] right-[28%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.discord} alt="discord" className='w-full h-auto' />
      </div>

      {/* Settings */}
      <div className='absolute floating top-[240px] left-[29%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.settings} alt="settings" className='w-full h-auto' />
      </div>

      {/* GitHub */}
      <div className='absolute floating bottom-[250px] left-[30%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.github} alt="github" className='w-full h-auto' />
      </div>

      {/* Opensea */}
      <div className='absolute floating bottom-[170px] left-[47%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.opensea} alt="opensea" className='w-full h-auto' />
      </div>

      {/* Teddy */}
      <div className='absolute floating top-[52%] right-[28%] md:w-[17vw] w-36'>
        <img src={SOCIAL_ICONS.teddy} alt="teddy" className='w-full h-auto' />
      </div>

      {/* Telegram */}
      <div className='absolute floating top-[50%] right-[35%] md:w-[5vw] w-10'>
        <img src={SOCIAL_ICONS.telegram} alt="telegram" className='w-full h-auto' />
      </div>
    </div>
  )
}

export default Contact

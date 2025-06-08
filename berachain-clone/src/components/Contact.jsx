import React from 'react'
import SOCIAL_ICONS from '../assets/social-icons/index.js'

const Contact = () => {
  return (
    <div className='w-full bg-[#15161F] pt-24 pb-72 relative'>
      {/* Center Main Community Image */}
      <div className='w-[80%] md:w-[30vw] mx-auto'>
        <img src={SOCIAL_ICONS.community} alt="community" className='w-full h-auto' />
      </div>

      {/* Floating Icons */}
      {/* Twitter */}
      <div className='absolute floating top-[6%] left-[44%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.twitter} alt="twitter" className='w-full h-auto' />
      </div>

      {/* Discord */}
      <div className='absolute floating top-[25%] right-[28%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.discord} alt="discord" className='w-full h-auto' />
      </div>

      {/* Settings */}
      <div className='absolute floating top-[34%] left-[29%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.settings} alt="settings" className='w-full h-auto' />
      </div>

      {/* GitHub */}
      <div className='absolute floating bottom-[30%] left-[30%] md:w-[6vw] w-12'>
        <img src={SOCIAL_ICONS.github} alt="github" className='w-full h-auto' />
      </div>

      {/* Opensea */}
      <div className='absolute floating bottom-[20%] left-[47%] md:w-[6vw] w-12'>
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

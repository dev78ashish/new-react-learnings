import React, { useState } from 'react';
import { Menu, X, ChevronUp, ChevronDown } from 'lucide-react';
import logo_white from '../assets/logo_white.svg'
import logo_black from '../assets/logo_black.svg'
import rocket from '../assets/nav_icons/rocket.png'
import banner from '../assets/nav_icons/banner-text.png'
import berachain from '../assets/nav_icons/berachain.svg'
import fly from '../assets/nav_icons/fly.svg'
import bee from '../assets/nav_icons/bee.svg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['dApps', 'Community', 'Developers', 'Ecosystem', 'Foundation', 'Socials'];

  return (
    <>
      {/* Bottom navbar only for md and smaller */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-2 backdrop-blur-md bg-white/10 h-15 md:flex lg:hidden">
        <img src={logo_white} alt="logo" className="h-4 w-auto" />
        <Menu className="text-white cursor-pointer" size={24} onClick={() => setIsOpen(true)} />
      </div>

      {/* Full-screen slide-in menu for mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
      >
        <div className="flex justify-between p-6">
          <img src={logo_black} className='w-auto h-8' alt="logo" />
          <X className="cursor-pointer" size={28} onClick={() => setIsOpen(false)} />
        </div>
        <ul className="flex flex-col items-start gap-8 mt-20 text-xl font-bold">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-300 ml-6 flex items-center cursor-pointer transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item} <ChevronDown />
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar for larger screens (lg and above) */}
      <div className="hidden lg:flex fixed bottom-0 left-0 right-0 z-50 items-center justify-center backdrop-blur-md bg-white/10 py-4">
        <img src={logo_white} alt="logo" className="h-7 mr-3 w-auto" />
        <ul className="flex gap-12 text-white text-sm font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className={`items-center font-bold flex cursor-pointer transition-colors duration-200 ${item === 'dApps' ? 'bg-white text-black rounded-lg px-3 py-1' : ''}`}>
              {item} <ChevronUp />
            </li>
          ))}
        </ul>
      </div>
      <div className='fixed top-0 lg:top-auto lg:bottom-[60px] lg:pb-0 pb-5 bg-[#8AC5EA] items-center w-full justify-center z-16 flex flex-wrap'>
        <img src={rocket} className='w-auto h-14' alt="rocket" />
        <img src={banner} className='w-auto h-8' alt="banner" />
        <div className='flex justify-center gap-2 flex-wrap ml-15'>
          <button className='flex border border-white text-white rounded-lg px-2 py-1 gap-2'>
            <img src={berachain} alt="berachain" className='w-auto h-5' /> Claim Airdrop
          </button>
          <button className='flex border border-white text-white rounded-lg px-2 py-1 gap-2'>
            <img src={bee} alt="berachain" className='w-auto h-5' /> Visit BeraHub
          </button>
          <button className='flex border border-white text-white rounded-lg px-2 py-1 gap-2'>
            <img src={fly} alt="berachain" className='w-auto h-5' /> Bridge Funds
          </button>
        </div>
      </div>

    </>
  );
};

export default Navbar;
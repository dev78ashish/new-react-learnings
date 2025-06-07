import React from 'react'
import screenLayout from '../assets/layoutimage.jpg'
import mobileLayout from '../assets/layout-mobile.jpg'
import { ArrowUp } from 'lucide-react'
import '../components/styles/Home.css'

const Home = () => {
    return (
        <div className='relative bg-[#7BBDEA]'>
            <h1 className='floating-text absolute opacity-35 font-extrabold flex items-center bottom-20 text-6xl z-15'>
                Up Only <ArrowUp size={65} />
            </h1>

            {/* Desktop Image */}
            <img
                src={screenLayout}
                alt="desktop layout"
                className='hidden md:block z-10 relative w-full'
            />

            {/* Mobile Image */}
            <img
                src={mobileLayout}
                alt="mobile layout"
                className='block md:hidden z-10 relative w-full'
            />
        </div>
    )
}

export default Home

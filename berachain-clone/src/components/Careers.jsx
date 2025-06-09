import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import rock2 from '../assets/rocks/rock2.jpg'
import rock3 from '../assets/rocks/rock3.jpg'
import rock1 from '../assets/rocks/rock1.jpg'
import man from '../assets/man.jpg'
import BlinkingBackground from './BlinkingBackground'

const Careers = () => {
    return (
        <div className='bg-[#15161F] w-full text-white h-[120vh] relative'>
            <div className='absolute inset-0'>
                <BlinkingBackground dotCount={40} />
            </div>

            <div className='text-center pt-10'>
                <p className='text-5xl font-extrabold outlined-text'>Want to join us?</p>
                <p className='flex m-auto justify-center items-center gap-2 mt-4 text-lg'>View Careers <ArrowRightIcon size={16} /></p>
            </div>

            <div className='flex justify-between items-center px-12 mt-20 z-10'>
                {/* Left Rocks */}
                <div className='relative w-[25vw] h-[60vh]'>
                    <img src={rock1} className='absolute top-[-25%] rotate-125 left-[35%] w-[12vw] h-auto floating' alt="rock" />
                    <img src={rock2} className='absolute top-[40%] left-[3%] w-[12vw] h-auto floating' alt="rock" />
                    <img src={rock1} className='absolute bottom-[-10%] right-[-60%] w-[20vw] h-auto floating' alt="rock" />
                </div>

                {/* Man */}
                <img className='floating-man h-[60vh] w-auto z-10 ' src={man} alt="man" />

                {/* Right Rocks */}
                <div className='relative w-[25vw] h-[60vh]'>
                    <img src={rock3} className='absolute top-[-30%] left-[5%] w-[12vw] rotate-130 floating h-auto ' alt="rock" />
                    <img src={rock2} className='absolute top-[25%] right-[12%] w-[14vw] h-auto floating -rotate-90' alt="rock" />
                    <img src={rock3} className='absolute bottom-0 left-[-60%] floating w-[18vw] h-auto ' alt="rock" />
                </div>
            </div>


        </div>
    )
}

export default Careers

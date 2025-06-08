import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import rock2 from '../assets/rocks/rock2.jpg'
import rock3 from '../assets/rocks/rock3.jpg'
import rock1 from '../assets/rocks/rock1.jpg'
import man from '../assets/man.jpg'

const Careers = () => {
    return (
        <div className='bg-[#15161F] w-full text-white h-[120vh]'>
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
                <img className='floating-man h-[60vh] w-auto ' src={man} alt="man" />

                {/* Right Rocks */}
                <div className='relative w-[25vw] h-[60vh]'>
                    <img src={rock3} className='absolute top-[-30%] left-[5%] w-[12vw] rotate-130 floating h-auto ' alt="rock" />
                    <img src={rock2} className='absolute top-[25%] right-[12%] w-[14vw] h-auto floating -rotate-90' alt="rock" />
                    <img src={rock3} className='absolute bottom-0 left-[-60%] floating w-[18vw] h-auto ' alt="rock" />
                </div>
            </div>

            <div className="absolute inset-0 ">
                {/* Repeat these dots with random positions */}
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,1)] absolute top-[10%] left-[20%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,1)] absolute top-[25%] left-[70%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.6)] absolute top-[60%] left-[40%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_9px_2px_rgba(255,255,255,0.7)] absolute top-[80%] left-[10%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.9)] absolute top-[50%] left-[85%]"></div>
            </div>

            <div className="absolute inset-0 ">
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,1)] absolute top-[35%] left-[22%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,1)] absolute top-[96%] left-[40%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.6)] absolute top-[22%] left-[44%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_9px_2px_rgba(255,255,255,0.7)] absolute top-[32%] left-[77%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.9)] absolute top-[55%] left-[25%]"></div>
            </div>
            <div className="absolute inset-0 ">
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,1)] absolute top-[30%] left-[69%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,1)] absolute top-[23%] left-[82%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.6)] absolute top-[33%] left-[43%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_9px_2px_rgba(255,255,255,0.7)] absolute top-[87%] left-[32%]"></div>
                <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.9)] absolute top-[11%] left-[13%]"></div>
            </div>
        </div>
    )
}

export default Careers

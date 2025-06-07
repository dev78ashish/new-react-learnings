import React from 'react'
import ufo from '../assets/ufo/ufo.jpg'
import ufoLight from '../assets/ufo/ufoLight.jpg'
import arrow from '../assets/ufo/emoji_arrow.svg'
import bee from '../assets/ufo/emoji_bee.svg'
import honeycomb from '../assets/ufo/emoji_honeycomb.svg'

const BeaconUFO = () => {
    return (
        <div
            className='bg-gradient-to-b h-[600px] w-full'
            style={{
                backgroundImage: 'linear-gradient(to bottom, #14161F, #233147)'
            }}
        >
            <div className='relative floating w-full flex justify-center items-start'>
                <div className='relative w-[400px]'>
                    <img src={ufo} alt="ufo" className='w-full h-auto' />
                    <img
                        src={ufoLight}
                        alt="ufolight"
                        className='w-full h-auto absolute top-[70%] left-[45%] -translate-x-1/2'
                    />
                </div>
            </div>

            <div className='flex gap-7 justify-center absolute left-1/2 -translate-x-1/2 bottom-[80px]'>
                <div className='border rounded-lg text-white border-[rgb(239,232,122)] w-[195px] h-[200px] flex flex-col items-center p-4 hover:border-white hover:-rotate-4 transition-transform duration-300 delay-100'>
                    <img src={bee} alt="bee" />
                    <p className='text-4xl font-extrabold -rotate-4'>Berahub</p>
                    <p className='font-extrabold text-center text-sm -rotate-4 my-3'>Swaps, Pools, Reward Vaults & Validators</p>
                    <img src={arrow} alt="arrow" />
                </div>

                <div className='border rounded-lg text-white border-[rgb(236,138,24)] w-[195px] h-[200px] flex flex-col items-center p-4 hover:border-white hover:-rotate-4 transition-transform duration-300 delay-100'>
                    <img src={honeycomb} alt="honeycomb" />
                    <p className='text-4xl font-extrabold -rotate-4'>HONEY</p>
                    <p className='font-extrabold text-center text-sm -rotate-4 my-3'>Minting & Redeeming HONEY</p>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    )
}

export default BeaconUFO

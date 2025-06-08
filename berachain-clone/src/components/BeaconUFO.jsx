import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ufo from '../assets/ufo/ufo.jpg'
import ufoLight from '../assets/ufo/ufoLight.jpg'
import arrow from '../assets/ufo/emoji_arrow.svg'
import bee from '../assets/ufo/emoji_bee.svg'
import honeycomb from '../assets/ufo/emoji_honeycomb.svg'

gsap.registerPlugin(ScrollTrigger)

const BeaconUFO = () => {
  const componentRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        triggerRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }, componentRef)

    return () => ctx.revert() // kills only this component's triggers
  }, [])

  return (
    <section
      ref={componentRef}
      className='relative z-10 isolate' // isolate stacking & z-index
    >
      <div
        className='h-[600px] w-full'
        style={{
          backgroundImage: 'linear-gradient(to bottom, #14161F, #233147)',
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

        <div
          ref={triggerRef}
          className='flex flex-col md:flex-row gap-4 md:gap-7 justify-center absolute left-1/2 -translate-x-1/2 bottom-[20px] md:bottom-[80px] px-4'
        >
          {/* First Card */}
          <div className='border rounded-lg text-white border-[rgb(239,232,122)] w-full max-w-[280px] md:w-[195px] h-[180px] md:h-[200px] flex flex-col items-center p-3 md:p-4 hover:border-white hover:-rotate-4 transition-transform duration-300 delay-100 mx-auto'>
            <img src={bee} alt="bee" className='w-8 h-8 md:w-auto md:h-auto' />
            <p className='text-2xl md:text-4xl font-extrabold -rotate-4'>Berahub</p>
            <p className='font-extrabold text-center text-xs md:text-sm -rotate-4 my-2 md:my-3'>
              Swaps, Pools, Reward Vaults & Validators
            </p>
            <img src={arrow} alt="arrow" className='w-6 h-6 md:w-auto md:h-auto' />
          </div>

          {/* Second Card */}
          <div className='border rounded-lg text-white border-[rgb(236,138,24)] w-full max-w-[280px] md:w-[195px] h-[180px] md:h-[200px] flex flex-col items-center p-3 md:p-4 hover:border-white hover:-rotate-4 transition-transform duration-300 delay-100 mx-auto'>
            <img src={honeycomb} alt="honeycomb" className='w-8 h-8 md:w-auto md:h-auto' />
            <p className='text-2xl md:text-4xl font-extrabold -rotate-4'>HONEY</p>
            <p className='font-extrabold text-center text-xs md:text-sm -rotate-4 my-2 md:my-3'>
              Minting & Redeeming HONEY
            </p>
            <img src={arrow} alt="arrow" className='w-6 h-6 md:w-auto md:h-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeaconUFO

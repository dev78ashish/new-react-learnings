import React, { useRef, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import cloud1 from '../assets/proof/cloud.jpg'
import cloud2 from '../assets/proof/cloudTop.jpg'
import cloud3 from '../assets/proof/cloudBottom.jpg'
import plane from '../assets/desktop-plane.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BeraEcosystem = () => {
    const planeRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        const planeEl = planeRef.current
        const sectionEl = sectionRef.current

        if (planeEl && sectionEl) {
            gsap.fromTo(planeEl,
                { x: '-100vw' },
                {
                    x: '100vw',
                    scrollTrigger: {
                        trigger: sectionEl,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                }
            )
        }
    }, [])

    return (
        <div
            ref={sectionRef}
            className='bg-gradient-to-b w-full h-[1000px] relative overflow-hidden'
            style={{
                backgroundImage: 'linear-gradient(to bottom, #233147, #3A5D88)'
            }}
        >
            <div ref={planeRef} className='absolute top-[40%] -translate-y-1/2 w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-auto'>
                <img src={plane} alt="plane" className='w-full h-auto' />
            </div>

            <img
                src={cloud1}
                alt="cloud"
                className='absolute floating h-[60px] sm:h-[80px] md:h-[100px] lg:h-40 left-[10vw] sm:left-[15vw] md:left-[18vw]'
            />

            <div className='m-auto px-4 max-w-max text-white pt-16 sm:pt-20 text-center'>
                <p className='font-extrabold text-3xl sm:text-4xl md:text-5xl mb-2'>The Bera Ecosystem</p>
                <p className='flex justify-center items-center gap-2 font-extrabold text-sm sm:text-base md:text-lg'>
                    View Projects <ArrowRight size={18} className='mt-[2px]' />
                </p>
            </div>

            <img
                src={cloud2}
                alt="cloud"
                className='absolute floating h-[15%] sm:h-[20%] md:h-[25%] top-[30%] -right-4 sm:-right-5'
            />
            <img
                src={cloud3}
                alt="cloud"
                className='absolute floating h-[14%] sm:h-[18%] md:h-[22%] top-[50%] left-0'
            />
        </div>
    )
}

export default BeraEcosystem

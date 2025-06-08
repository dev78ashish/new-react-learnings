import React, { useEffect, useRef } from 'react'
import screenLayout from '../assets/layoutimage.jpg'
import mobileLayout from '../assets/layout-mobile.jpg'
import { ArrowUp } from 'lucide-react'
import logo from '../assets/logo_white.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
    const logoRef = useRef(null)
    const textRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top center',
                end: '+=200',
                scrub: true,
            }
        })

        tl.fromTo(
            [logoRef.current, textRef.current],
            {
                opacity: 0,
                scale: 0.6,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
            }
        )
    }, [])

    return (
        <div ref={containerRef} className='relative bg-[#7BBDEA]'>
            <h1 className='floating-text absolute opacity-35 font-extrabold flex items-center bottom-20 text-6xl z-15'>
                Up Only <ArrowUp size={65} />
            </h1>

            <img
                src={screenLayout}
                alt="desktop layout"
                className='hidden md:block z-10 relative w-full'
            />

            <img
                src={mobileLayout}
                alt="mobile layout"
                className='block md:hidden z-10 relative w-full'
            />

            <div className='fixed left-1/2 top-1/2 -translate-x-1/2 flex flex-col justify-center items-center'>
                <img ref={logoRef} src={logo} className='w-auto h-10' alt="logo" />
                <p ref={textRef} className='outlined-text font-extrabold text-8xl text-white'>Berachain</p>
            </div>
        </div>
    )
}

export default Home

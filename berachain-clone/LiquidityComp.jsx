import React, { useEffect, useRef } from 'react'
import '../components/styles/LiquidityComp.css'
import cloud1 from '../assets/clouds/cloud1.jpg'
import cloud2 from '../assets/clouds/cloud2.jpg'
import cloud4 from '../assets/clouds/cloud4.jpg'
import teddy from '../assets/teddy.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LiquidityComp = () => {
    const containerRef = useRef(null);
    const teddyRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const teddyElement = teddyRef.current;

        if (container && teddyElement) {
            gsap.set(teddyElement, {
                x: "80vw",
                y: "-100vh",
                z: 0
            });

            gsap.to(teddyElement, {
                x: "-100vw",
                y: "150vh",
                z: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className='w-full relative h-[150vh] overflow-x-clip bg-gradient-to-b'
            style={{ backgroundImage: 'linear-gradient(to bottom, #4FA1E3, #7BBDEA)' }}>

            {/* Animated teddy - hidden on tablets and smaller */}
            <div
                ref={teddyRef}
                className='absolute h-full w-full inset-0 max-w-[60vw] mx-auto hidden md:block'
            >
                <img
                    src={teddy}
                    alt='teddy'
                    className='h-auto w-90'
                />
            </div>

            {/* Static teddy - only shown on tablets and smaller */}
            <img
                src={teddy}
                alt='teddy-static'
                className='block md:hidden absolute bottom-0 left-0 w-36 h-auto z-10'
            />

            <img src={cloud4} alt="cloud4" className='absolute floating right-70 top-60' />

            <div className='outlined-text text-white text-4xl font-extrabold max-w-[60vw] left-1/2 -translate-x-1/2 top-[700px] text-center relative z-10'>
                An EVM-identical L1 aligning security and liquidity powered by <span className='text-[#EFD7A8]'>Proof Of <br />Liquidity</span>
                <img src={cloud2} alt="cloud2" className='absolute bottom-0 floating left-2 opacity-50 h-auto w-50' />
            </div>

            <img src={cloud1} alt="cloud1" className='absolute bottom-0 floating left-18 ove h-auto w-80' />
        </div>
    )
}

export default LiquidityComp

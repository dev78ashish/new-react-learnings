import React, { useEffect, useRef } from 'react'
import cloud1 from '../assets/clouds/cloud1.jpg'
import cloud2 from '../assets/clouds/cloud2.jpg'
import cloud3 from '../assets/clouds/cloud3.jpg'
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
            // Clear any existing animations
            gsap.killTweensOf(teddyElement);
            
            // Responsive starting position based on screen size
            const isLargeScreen = window.innerWidth >= 1024;
            const startX = isLargeScreen ? "80vw" : "70vw";
            const startY = isLargeScreen ? "-100vh" : "-80vh";
            const endX = isLargeScreen ? "-100vw" : "-80vw";
            const endY = isLargeScreen ? "150vh" : "120vh";

            gsap.set(teddyElement, {
                x: startX,
                y: startY,
                z: 0
            });

            gsap.to(teddyElement, {
                x: endX,
                y: endY,
                z: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    refreshPriority: -1,
                }
            });
        }

        // Handle resize
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className='w-full relative overflow-x-clip bg-gradient-to-b min-h-screen'
            style={{ 
                background: 'linear-gradient(to bottom, #4FA1E3, #7BBDEA)',
                height: 'clamp(100vh, 150vh, 200vh)'
            }}
        >
            <div
                ref={teddyRef}
                className='absolute inset-0 hidden lg:block pointer-events-none'
                style={{ 
                    maxWidth: 'min(60vw, 400px)',
                    margin: '0 auto'
                }}
            >
                <img
                    src={teddy}
                    alt='teddy'
                    className='h-auto w-full max-w-none'
                    style={{ width: 'clamp(200px, 25vw, 360px)' }}
                />
            </div>

            <img
                src={teddy}
                alt='teddy-static'
                className='block lg:hidden absolute top-0 left-0 h-auto w-[300px] z-10'
            />

            <img 
                src={cloud4} 
                alt="cloud4" 
                className='absolute floating z-5 w-auto h-[35vh] right-[25%] top-[10%]'
            />

            <div className='relative z-10 px-4 sm:px-6 lg:px-8'>
                <div 
                    className='outlined-text text-white font-extrabold text-center mx-auto'
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                        maxWidth: 'min(90vw, 800px)',
                        marginTop: '0',
                        lineHeight: '1.2',
                        paddingTop: '500px'
                    }}
                >
                    An EVM-identical L1 aligning security and liquidity powered by{' '}
                    <span className='text-[#EFD7A8]'>
                        Proof Of<br className='hidden sm:inline' />{' '}
                        <span className='sm:inline block'>Liquidity</span>
                    </span>
                    
                    <img 
                        src={cloud2} 
                        alt="cloud2" 
                        className='absolute floating opacity-50 bottom-[20px] w-auto h-[120px]'
                    />
                </div>
            </div>

            <img 
                src={cloud1} 
                alt="cloud1" 
                className='absolute floating z-5'
                style={{
                    bottom: '0px',
                    left: 'clamp(20px, 8vw, 72px)',
                    width: 'clamp(200px, 35vw, 320px)',
                    height: 'auto'
                }}
            />

            <img src={cloud3} className='w-auto h-[25vh] floating absolute right-0 bottom-[20%]' alt='cloud3'/>
        </div>
    )
}

export default LiquidityComp
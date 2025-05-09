import React from 'react'
import '../styles/Overview.css'
import tilted from '../assets/image.png'
import robo from '../assets/robo1.png'
import architecture from '../assets/architecture.png'

const Overview = () => {
    return (
        <div className='w-full relative bg-[#150813] px-6 py-10 md:px-16 lg:px-24 xl:px-30'>
            <div className='absolute right-0 top-10'>
                <img className='w-[120px] md:w-[160px] lg:w-[200px] h-auto' src={tilted} alt="" />
            </div>

            <section className='flex flex-col lg:flex-row w-full justify-between gap-10'>
                <div className='w-full lg:max-w-[45%]'>
                    <p className='text-[#FF83A7] text-4xl md:text-5xl font-bold mb-5'>Overview</p>
                    <p className='text-white text-base md:text-lg'>
                        MAGAX is a decentralized platform using AI to detect viral memes and reward creators and promoters with the $MAGAX token. It blends Web2 ease with Web3 infrastructure to form a transparent, automated ecosystem.
                    </p>
                </div>

                <div className='w-full lg:max-w-[45%] text-white flex flex-col gap-4'>
                    <div className='p-5 rounded-3xl w-full h-auto shadow-box bg-[#2C12288A]'>
                        <p>Goal</p>
                        <p className='font-bold'>Reward viral influence fairly</p>
                    </div>
                    <div className='p-5 rounded-3xl w-full h-auto shadow-box bg-[#2C12288A]'>
                        <p>Core</p>
                        <p className='font-bold'>AI detection + smart contract incentives.</p>
                    </div>
                </div>
            </section>

            <div className='my-12 md:my-16'>
                <img src={architecture} alt="architecture" className='w-full h-auto' />
            </div>

            <section className='my-20 flex flex-col lg:flex-row w-full justify-between gap-10'>
                <div className='w-full lg:max-w-[45%]'>
                    <p className='text-[#FF83A7] text-4xl md:text-5xl font-bold mb-5'>AI-Powered Meme Detection</p>
                    <p className='text-white text-base md:text-lg'>
                        MAGAX’s AI engine scans social platforms in real time to identify trending memes. Using models like GPT-4 and CLIP, it evaluates both image content and context to assign a virality score, filtering out bots and spam to ensure only authentic, high-impact memes earn rewards.
                    </p>
                </div>

                <div className="bg-[#2C12288A] text-white p-5 md:p-6 py-6 md:py-8 rounded-lg shadow-box w-full lg:max-w-[45%]">
                    <div className="flex border-b border-white/20 pb-2 mb-2 font-semibold text-sm md:text-base">
                        <div className="border-r border-white/20 pr-2 w-[30%]">Step</div>
                        <div className="pl-4">Description</div>
                    </div>
                    <div className="text-sm">
                        {[
                            ["Meme Ingest", "Pulled from Twitter/APIs"],
                            ["Visual/Text Analysis", "CLIP for images, GPT-4 for captions"],
                            ["Virality Scoring", "Based on reach, engagement, trends"],
                            ["Authenticity Check", "AI filters bots/fake activity"],
                            ["Reward Signal", "Passes to smart contract if score is valid"],
                        ].map(([step, desc], index) => (
                            <div key={index} className='flex'>
                                <div className="border-r w-[30%] pr-2 py-3 md:py-4 border-b border-white/20">{step}</div>
                                <div className="pl-4 py-3 md:py-4 w-[70%] border-b border-white/20">{desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className='w-full flex  mt-10'>
                <img className='h-[300px] md:h-[400px] lg:h-[450px] w-auto' src={robo} alt="robo" />
            </div>
        </div>
    )
}

export default Overview

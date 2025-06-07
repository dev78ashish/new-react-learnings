import React from 'react'
import '../components/styles/LiquidityComp.css'
import teddy from '../assets/proof/teddy.jpg'
import ball from '../assets/proof/ball.jpg'
import cloud1 from '../assets/proof/cloudBottom.jpg'
import logos from '../assets/companies'
import '../components/styles/ProofLiquidity.css'
import cloud2 from '../assets/proof/cloud.jpg'



const BallText = ({ text }) => {

    return (
        <div className='flex floating flex-col items-center '>
            <p className='outlined-text text-white font-extrabold text-xl backdrop-blur-md bg-white/20 px-3 rounded-lg mb-3'>{text}</p>
            <img src={ball} alt="ball" className='h-auto w-20' />
        </div>
    )
}


const ProofLiquidity = () => {

    const logoArray = Object.values(logos);


    return (
        <div className='w-full relative bg-[#4FA1E3]'>

            <div className='w-full overflow-hidden py-6 px-7 mb-[250px]'>
                <p className='outlined-text m-auto max-w-max  text-white font-extrabold text-5xl mb-14'>
                    Backed by the best
                </p>

                <div className='relative w-full overflow-hidden'>
                    <div className='flex w-max animate-scroll gap-10 items-center'>
                        {[...logoArray, ...logoArray].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`logo-${index}`}
                                className='h-10 w-auto object-contain'
                            />
                        ))}
                    </div>
                </div>
            </div>

            <img src={cloud2} alt="cloud image" className='absolute floating left-75 top-[280px] h-35 w-auto' />


            <div className='mb-[50px]'>
                <BallText text={'Solve stake centralization'} />
            </div>


            <div className='flex justify-evenly max-w-max m-auto mb-[50px]'>
                <BallText text={'Systematically build liquidity'} />
                <div>
                    <img alt='teddy' src={teddy} className='h-auto w-70' />
                </div>
                <BallText text={'Align protocols and validators'} />
            </div>


            <div className='outlined-text text-white text-2xl font-extrabold text-center relative z-10'><span className='text-[#EFD7A8]'>
                Proof Of Liquidity</span> creates a cooperative economy that rewards working <br /> capital by aligning incentives across the network
            </div>

            <img src={cloud1} alt="cloud" className='absolute bottom-0 left-0 floating w-auto h-50' />
        </div>
    )
}

export default ProofLiquidity
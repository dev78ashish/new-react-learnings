import React from 'react'
import robo from '../assets/robo2.png'
import graph from '../assets/image copy.png'
import icon1 from '../assets/icons/icon1.svg'
import icon2 from '../assets/icons/icon2.svg'
import icon3 from '../assets/icons/icon3.svg'
import icon4 from '../assets/icons/icon4.svg'

const SmartContract = () => {
    return (
        <div className='w-full pb-40 relative bg-[#150813]'>
            <div className='absolute right-0 top-0'>
                <img src={robo} className='h-[250px] w-auto' alt="robo" />
            </div>

            <section className='px-6 md:px-20 py-16 flex flex-col md:flex-row w-full justify-between gap-10 relative'>
                <div className='md:max-w-[45%]'>
                    <p className='text-[#FF83A7] text-4xl md:text-5xl font-bold mb-5'>Smart Contract Incentives</p>
                    <p className='text-white text-lg md:max-w-[80%]'>Rewards are automatically distributed through smart contracts based on meme performance, ensuring fair, transparent payouts to creators and promoters—no manual claims, no middlemen.</p>
                </div>

                <div className='bg-[#2C12288A] text-white p-6 py-8 rounded-lg shadow-box w-full md:w-[50%]'>
                    <div className='flex flex-col md:flex-row border-b border-white/20 pb-2 mb-2 font-semibold'>
                        <div className='border-b md:border-b-0 md:border-r border-white/20 pr-2 md:w-[30%]'>Action</div>
                        <div className='border-b md:border-b-0 md:border-r border-white/20 px-4 md:w-[30%]'>Reward Triggered</div>
                        <div className='pl-4'>Details</div>
                    </div>
                    <div className='text-sm'>
                        {[
                            ["Meme goes viral", "Yes", "Based on generated virality score"],
                            ["User boosts content", "Yes", "Extra tokens via booster mechanics"],
                            ["Referral joins", "Yes", "Both parties get bonus"],
                            ["Late claim", "Reduced", "Penalty for inactivity"],
                        ].map(([action, reward, details], i) => (
                            <div className='flex flex-col md:flex-row' key={i}>
                                <div className='border-b md:border-b border-r md:w-[30%] pr-2 py-4 border-white/20'>{action}</div>
                                <div className='border-b md:border-b border-r px-4 md:w-[30%] py-4 border-white/20'>{reward}</div>
                                <div className='pl-4 py-4 w-full md:w-[40%] border-b border-white/20'>{details}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='px-6 md:px-0 max-w-[90%] mx-auto relative z-10'>
                <h1 className='text-center text-3xl md:text-4xl text-[#FF83A7] font-bold mb-6'>Tokenomics Survey</h1>
                <div className='flex justify-center items-center'>
                    <img src={graph} alt="graph" className='w-full max-w-[600px] h-auto' />
                </div>
            </section>

            <section className='px-6 md:px-0 flex flex-col md:flex-row w-full max-w-[90%] mx-auto justify-between my-16 gap-10 relative z-10'>
                <div className='md:max-w-[45%]'>
                    <p className='text-[#FF83A7] text-4xl md:text-5xl font-bold mb-5'>Security Layer</p>
                    <p className='text-white text-lg'>MAGAX prioritizes security with multi-layered defenses, including wallet authentication, anti-bot measures, and AI-powered fraud detection. All transactions and rewards are secured via smart contracts, ensuring transparency and trust. Additionally, the platform adheres to industry standards for data protection and compliance.</p>
                </div>
                <div className='md:w-[50%] w-full text-white space-y-4'>
                    {[
                        [icon1, 'Wallet auth & anti-bot measures'],
                        [icon2, 'CAPTCHA & rate limits'],
                        [icon3, 'AI-driven fraud detection'],
                        [icon4, 'Modular upgrade paths for compliance (KYC/AML optional tier)']
                    ].map(([icon, text], i) => (
                        <div key={i} className='p-5 flex rounded-3xl shadow-box bg-[#2C12288A] items-start'>
                            <img src={icon} className='mr-4 w-6 h-6' alt={`icon${i + 1}`} />
                            <p className='font-bold'>{text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default SmartContract

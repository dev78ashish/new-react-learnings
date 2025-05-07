import React from 'react'
import screen1 from '../../../assets/mobilescreens/slide-1.webp'
import screen2 from '../../../assets/mobilescreens/slide-2.webp'
import screen3 from '../../../assets/mobilescreens/slide-3.webp'
import screen4 from '../../../assets/mobilescreens/slide-4.webp'

const DisplaySection = ({ image, num, text }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 px-4 py-6 lg:py-10 ">
            <div className="w-full sm:w-1/3 lg:w-2/5">
                <img src={image} alt="Mobile UI" className="rounded-xl shadow-lg w-full" />
            </div>

            <div className="text-center w-full sm:w-2/3 lg:w-3/5 lg:text-left mt-4 lg:mt-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600">
                        <span className='flex items-center justify-center h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-[#F0F0F5]'>{num}</span>
                    </div>
                    <div className='text-2xl md:text-3xl lg:text-5xl'>
                        <h2>{text}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HowWorksSection = () => {
    return (
        <div className="py-10 lg:py-16 my-34">
            <h1 className="text-4xl md:text-5xl lg:text-6xl opacity-80 font-bold text-center mb-10 lg:mb-12">HOW IT WORKS</h1>
            <div className='w-full max-w-7xl mx-auto px-4'>
                <DisplaySection image={screen1} num={1} text={'Paste the wallet address'} />
                <DisplaySection image={screen2} num={2} text={'Select an asset'} />
                <DisplaySection image={screen3} num={3} text={'Press the Check button'} />
                <DisplaySection image={screen4} num={4} text={'Get the risk score'} />
            </div>
        </div>
    )
}

export default HowWorksSection
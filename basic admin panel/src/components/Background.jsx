import React from 'react'
import gradient from '../assets/gradient.png'
import droplet from '../assets/droplet.png'
import drop from '../assets/drop.png'

const Background = () => {
  return (
    <div className='bg-[#150813] absolute top-0 left-0 -z-10 w-full h-full'>
        <div className='absolute top-0 left-0 -z-10 w-full h-screen overflow-hidden'>
            <img
                src={gradient}
                alt="gradient"
                className="w-full h-full object-cover opacity-90 transition-opacity duration-[8000ms] hover:opacity-100"
            />
        </div>
        
        <div 
            className="absolute top-[20%] left-[15%]"
            style={{
                animation: 'float1 15s ease-in-out infinite',
            }}
        >
            <img src={droplet} className='h-auto w-2' alt="droplet" />
        </div>
        
        <div 
            className="absolute right-[20%] bottom-[15%]"
            style={{
                animation: 'float2 20s ease-in-out infinite',
            }}
        >
            <img src={droplet} className='h-auto w-2' alt="droplet" />
        </div>
        
        <div 
            className="absolute bottom-[20%] left-[15%]"
            style={{
                animation: 'float3 18s ease-in-out infinite',
            }}
        >
            <img src={droplet} className='h-auto w-2' alt="droplet" />
        </div>
        
        <div 
            className="absolute bottom-[18%] left-[10%]"
            style={{
                animation: 'float1 22s ease-in-out infinite',
            }}
        >
            <img src={drop} className='h-auto w-2' alt="droplet" />
        </div>
        
        <div 
            className="absolute bottom-[25%] left-[8%]"
            style={{
                animation: 'float2 17s ease-in-out infinite',
            }}
        >
            <img src={drop} className='h-auto w-2' alt="droplet" />
        </div>
        
        <style jsx>{`
  @keyframes float1 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes float2 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(20px); }
  }

  @keyframes float3 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(15px, -15px); }
  }
`}</style>

    </div>
  )
}

export default Background
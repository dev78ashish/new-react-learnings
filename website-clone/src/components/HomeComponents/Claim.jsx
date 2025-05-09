import React from 'react'
import { Button } from "@/components/ui/button"
import logo from '../../assets/claimlogo.png'


const Claim = () => {
  return (
    <div>
      <header className="p-4 text-white shadow flex items-center justify-between">
        <p className='text-2xl'>Claim</p>
        <Button className='button-connect rounded-full p-6 '>Connect wallet</Button>
      </header>

      <main className='w-full h-screen flex text-center text-white items-center justify-center'>
        <div className='claim-container rounded-2xl flex items-center justify-center flex-col w-[40%]'>
          <img src={logo} className='h-32 m-auto mt-10 mb-8 w-32' alt="logo"  />
          <p>You're eligible to claim</p>
          <p className='m-5 text-2xl'>0.00</p>
          <p className=' border-[0.1px] border-[#777676] py-4 mb-10 rounded-4xl w-[65%]'>Claim will be available at the TGE</p>
        </div>
      </main>
    </div>
  )
}

export default Claim
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import mlogo from '../../assets/icons/mlogo.png'
import dollar from '../../assets/icons/dollar.png'
import dollargreen from '../../assets/icons/dollargreen.png'
import dollarblue from '../../assets/icons/dollarblue.png'
import referal from '../../assets/icons/referal.png'
import roi from '../../assets/icons/roi.png'
import arrow from '../../assets/icons/arrow.png'
import ethicon from '../../assets/icons/ethicon.png'
import magax from '../../assets/icons/magax.png'
import fulllogo from '../../assets/fullicon.png'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Graph from '../Graph'




const Dashboard = () => {



  const cardData = [
    { icon: mlogo, title: "Amount in MAGAX", amount: "0.00" },
    { icon: dollar, title: "Amount in USD", amount: "0.00" },
    { icon: referal, title: "Referal Earnings", amount: "0.00" },
    { icon: roi, title: "Current ROI", amount: "0.00" },
  ];

  return (
    <div>
      <header className="p-4 text-white shadow flex items-center justify-between">
        {/* <SidebarTrigger /> */}
        <p className='text-2xl'>Dashboard</p>
        <Button className='button-connect rounded-full p-6 '>Connect wallet</Button>
      </header>

      <main className="p-4">
        <div className="flex w-full flex-wrap justify-center md:justify-between">
          {cardData.map((card, index) => (
            <div key={index} className="text-white m-2 rounded-xl p-4  w-[280px]  amount-card">
              <div className="flex items-center mb-2">
                <img src={card.icon} className="h-8 w-8 mr-2" alt="icon" />
                <p>{card.title}</p>
              </div>
              <p className="font-bold text-3xl">{card.amount}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <Card className="border-[0.1px] border-[#777676] pay-box text-white w-full lg:w-1/2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <p className="text-xl">You pay</p>
                <div className="flex items-center rounded-2xl border-[0.1px] border-[#777676] bg-[#382635] px-2">
                  <img src={ethicon} className="h-8 w-8 -ml-2 mr-2" alt="eth" />
                  <p>ETH</p>
                  <span className='text-[8px]'>(198.03)</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-3 text-2xl rounded-xl border-[0.1px] border-[#777676] bg-[#382635]">
                <p>0.00</p>
                <p>$0</p>
              </div>
              <p className="my-2">Min. Amount to Purchase: $20</p>
              <div>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl">You receive</p>
                <div className="flex items-center rounded-3xl px-3 py-1 border-[0.1px] border-[#777676] bg-[#382635]">
                  <img src={magax} className="-ml-2 h-8 w-8 mr-2" alt="eth" />
                  <p>MAGAX</p>
                </div>
              </div>
              <div className="p-3 text-2xl rounded-xl border-[0.1px] border-[#777676] bg-[#382635] mt-2">
                <p>0.00</p>
                <p>$0</p>
              </div>

              <Button className='button-connect rounded-full p-6 w-full mt-4'>Connect Wallet</Button>
            </CardContent>
            <CardFooter>
              <Input placeholder='Promo Code' className='rounded-4xl p-4 py-8' />
            </CardFooter>
          </Card>

          <div className="w-full lg:w-1/2">
            <Graph />
          </div>
        </div>


        <div className="flex w-full gap-6 p-4  text-white font-sans">
          <div className="w-[70%] bg-[#2C12288A] border-[0.1px] border-[#777676] rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-lg font-medium">Calculate your profits on coin launch</h2>

            <div className="box-gradient border-[0.1px] border-[#777676] rounded-2xl text-center p-4">
              <div className="text-xs text-purple-300 mb-1">Stage & Price</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-bold">0.025</span>
                <span className="text-gray-400">MAGAX</span>
              </div>
            </div>

            <div className="flex w-full justify-between mt-2">
              
              <div className='w-[48%] bg-[#321F2F] p-2 border-[0.1px] border-[#777676] rounded-full flex items-center gap-2 text-2xl'>
                <img className='h-10 w-10' src={magax} alt="" />
                <p>0,00</p>
              </div>
              <div className='w-[48%] bg-[#321F2F] p-2 border-[0.1px] border-[#777676] rounded-full flex items-center gap-2 text-2xl'>
                <img className='h-10 w-10' src={dollargreen} alt="" />
                <p>0,00</p>
              </div>
            </div>

            <div className='w-full bg-[#321F2F] p-2 border-[0.1px] border-[#777676] rounded-full flex items-center gap-2 text-2xl'>
                <img className='h-10 w-10' src={dollarblue} alt="" />
                <p>0,00</p>
              </div>

            <div className="text-xs text-purple-300 mt-1">
              Your total amount in USD as listed
            </div>
          </div>

          <div className="w-1/2 border-[0.1px] border-[#777676] relative bg-[#2C12288A] rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Last Transactions</h2>

            <div className="text-center text-gray-400 py-8">
              No transactions yet
            </div>
            <div className="absolute -top-4 -right-4">
            <img src={fulllogo} className='h-15 w-15' alt="logo" />
          </div>
          </div>

          
        </div>

      </main>

    </div>
  )
}

export default Dashboard
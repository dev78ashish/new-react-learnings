import React from 'react'
import { Button } from "@/components/ui/button"
import Leaderboard from './Leaderboard'
import LeaderboardContent from './LeaderboardContent';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import arrow from '../../assets/icons/arrow.png'
import ethicon from '../../assets/icons/ethicon.png'
import magax from '../../assets/icons/magax.png'
import progress from '../../assets/progressimage.png'
import { Input } from "@/components/ui/input"
import image from '../../assets/cardimages/image.png'
import image2 from '../../assets/cardimages/image2.png'
import image3 from '../../assets/cardimages/image3.png'
import image4 from '../../assets/cardimages/image4.png'


const Deposit = () => {

  const steps = [
    {
      title: 'Connect Your Wallet',
      image: image, // Replace with your image path
      description: 'Start by connecting your cryptocurrency wallet. This ensures a smooth and secure transaction process.',
    },
    {
      title: 'Choose Payment Method',
      image: image2, // Replace with your image path
      description: 'Select your preferred payment method from over 50 popular cryptocurrencies. We support a wide range of coins for your convenience.',
    },
    {
      title: 'Confirm the Payment',
      image: image3, // Replace with your image path
      description: 'Once you’ve chosen your crypto, confirm the transaction in your wallet. Double-check the payment details before confirming the transfer.',
    },
    {
      title: 'Receive coins',
      image: image4, // Replace with your image path
      description: 'After completing your purchase, your coins will be reflected in your balance on the website.',
    },
  ];



  const totalCoinsSold = 32301715;
  const totalCoinSales = 540937.728;
  const currentPrice = 0.025;
  const nextPrice = 0.028;



  const leaderboardData = [
    { rank: 1, address: "0x018cd6b873c1e...", transactions: 55912.008 },
    { rank: 2, address: "0x018cd6b873c1e...", transactions: 55912.008 },
    { rank: 3, address: "0x018cd6b873c1e...", transactions: 55912.008 },
    { rank: 4, address: "0x018cd6b873c1e...", transactions: 55912.008 },
    { rank: 6, address: "0x018cd6b873c1e...", transactions: 55912.008 },
    { rank: 7, address: "0x018cd6b873c1e...", transactions: 55912.008 },
    { rank: 8, address: "0x018cd6b873c1e...", transactions: 55912.008 },
    { rank: 9, address: "0x018cd6b873c1e...", transactions: 55912.008 },
    { rank: 9, address: "0x018cd6b873c1e...", transactions: 55912.008 },
  ];

  return (
    <div>
      <header className="p-4 text-white shadow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className='text-2xl'>Referal</p>
        <Button className='button-connect rounded-full p-6'>Connect wallet</Button>
      </header>

      <main className="p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <Card className="border-[0.1px] border-[#777676] pay-box text-white w-full lg:w-1/2">
            <CardHeader>



              <div className="bg-[#382535] p-6 rounded-xl text-white max-w-md mx-auto space-y-6 font-sans">
                <div className="grid grid-cols-2 gap-4">
                  <div className=" p-4 bg-[#31222f] rounded-lg text-center">
                    <p className="text-sm text-gray-300">Total Coins Sold</p>
                    <p className="text-xl font-bold">{totalCoinsSold.toLocaleString()} <span className="text-sm font-normal">MAGAX</span></p>
                  </div>
                  <div className=" p-4 bg-[#31222f] rounded-lg text-center">
                    <p className="text-sm text-gray-300">Total Coin Sales</p>
                    <p className="text-xl font-bold">${totalCoinSales.toLocaleString()}</p>
                  </div>
                </div>

                <div className=" p-4 rounded-lg">
                  <img src={progress} alt="progress" />
                </div>

                <div className="flex justify-between text-sm">
                  <p>
                    1 MAGAX <span className="font-bold">${currentPrice.toFixed(3)}</span>
                  </p>
                  <p>
                    Next Stage <span className="font-bold">${nextPrice.toFixed(3)}</span>
                  </p>
                </div>
              </div>



              <div className="flex justify-between items-center">
                <p className="text-xl">You pay</p>
                <div className="flex items-center rounded-xl border-[0.1px] border-[#777676] bg-[#382635] px-2">
                  <img src={ethicon} className="h-8 w-8 mr-2" alt="eth" />
                  <p>ETH</p>
                  <span>(198.03)</span>
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
                <div className="flex items-center rounded-4xl p-2 border-[0.1px] border-[#777676] bg-[#382635]">
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
              <Input placeholder='Copy and paste promo code to get a bonus ' className='rounded-4xl p-4 py-8 text-center text-3xl' />
            </CardFooter>
          </Card>
          <div className="w-full lg:w-1/2">
            <LeaderboardContent leaderboardData={leaderboardData} />
          </div>
        </div>

      </main>

      <div className=" text-white py-5 px-2 md:px-10 border-[0.1px] border-[#777676]  m-10 rounded-xl">
        <h2 className="text-2xl font-bold mb-5 ">How To Buy</h2>
        <div className="flex gap-2 flex-wrap">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#2A0033] border-[0.1px] border-[#777676]  w-[255px] rounded-2xl p-6 shadow-lg "
            >
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <div className="flex justify-center mb-4">
                <img src={step.image} alt={step.title} className="w-auto h-28" />
              </div>
              <p className="text-sm  text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Deposit
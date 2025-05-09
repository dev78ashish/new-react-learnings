import React from 'react'
import { Button } from "@/components/ui/button"
import twitter from '../../assets/icons/twitter.png'
import telegram from '../../assets/icons/telegram.png'
import fullicon from '../../assets/fullicon.png'

const Profile = () => {
  return (
    <div>
      <header className="p-4 text-white shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className='text-2xl'>Profile</p>
        <Button className='button-connect rounded-full px-6 py-3'>Connect wallet</Button>
      </header>

      <main>
        <div className="min-h-screen text-white p-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

            <div className="bg-[#2C12288A] p-6 rounded-xl shadow-md space-y-4 w-full lg:w-1/3">
              <h2 className="text-xl font-semibold">General info</h2>
              <div className="space-y-6">
                {[
                  { label: "Name", type: "text" },
                  { label: "Email", type: "email" },
                  { label: "Phone Number", type: "text" }
                ].map((item, i) => (
                  <div className="space-y-1" key={i}>
                    <label className="text-sm text-gray-300 pl-2">{item.label}</label>
                    <input type={item.type} className="w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 focus:outline-none" />
                  </div>
                ))}

                <div className="space-y-1">
                  <label className="text-sm text-gray-300 pl-2">X Link</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 pl-12 focus:outline-none" />
                    <div className="absolute top-1 left-1 bg-gray-700 p-1 rounded-full">
                      <img src={twitter} className='h-6 w-6' alt="twitter" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-300 pl-2">Telegram Link</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-transparent border border-gray-600 rounded-full px-4 py-2 pl-12 focus:outline-none" />
                    <div className="absolute top-1 left-1 bg-gray-700 p-1 rounded-full">
                      <img src={telegram} className='h-6 w-6' alt="telegram" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-[0.1px] border-[#777676] wallet-container w-full p-6 rounded-xl shadow-md space-y-4 relative">
              <div className='absolute -bottom-8 -right-4'>
                <img src={fullicon} className='h-16 w-16' alt="icon" />
              </div>
              <h2 className="text-xl font-semibold">Wallet</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card title="Total MAGAX Balance" value="0 MAGAX" />
                <Card title="Current Coin worth" value="$ 0" />
                <Card title="Coin Spent Amount" value="$ 0" />
                <Card title="Your Coin worth at Launch" value="$ 0" />
                <Card title="Referral Earnings" value="$ 0" />
                <Card title="Referral URL" value="Connect your wallet to get your referral link" small />
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, value, small }) => (
  <div className="bg-[#3C2839] border-[0.1px] border-[#777676] h-40 flex items-center flex-col rounded-xl p-4 justify-center text-center shadow">
    <p className="text-sm text-gray-300">{title}</p>
    <p className={`font-semibold ${small ? 'text-sm' : 'text-lg'} mt-1 break-words`}>{value}</p>
  </div>
);

export default Profile;

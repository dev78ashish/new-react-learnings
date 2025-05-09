import React from "react"
import { ArrowLeft, ArrowRight } from 'lucide-react';


const LeaderboardContent = ({leaderboardData}) => {
    return(
     <div className="min-h-screen bg-[#2C12288A] border-[0.1px] border-[#777676] text-white p-6 rounded-2xl">
         <h2 className="text-xl font-bold mb-1">LeaderBoard</h2>
         <p className="text-sm mb-6 text-gray-300">Top 50 Holders</p>
         <div className="space-y-4">
           {leaderboardData.map((item, index) => (
             <div
               key={index}
               className="flex justify-between items-center bg-[#382535] rounded-xl p-4"
             >
               <div>
                 <p className="text-sm text-pink-400 font-bold">#{item.rank}</p>
                 <p className="font-semibold">{item.address}</p>
               </div>
               <div className="text-right">
                 <p className="text-xs text-gray-300">Total Transactions</p>
                 <p className="font-bold">${item.transactions}</p>
               </div>
             </div>
           ))}
         </div>
         <div className="flex justify-end mt-6 space-x-2">
           <button disabled className="bg-[#4C2A57]  border-[0.1px] border-[#777676] opacity-60 p-2 px-3 rounded-full text-white hover:bg-[#5e3c6e]">
             <ArrowLeft size={18} />
           </button>
           <button className="bg-[#4C2A57]  border-[0.1px] border-[#777676] p-2 px-3 rounded-full text-white hover:bg-[#5e3c6e]">
             <ArrowRight size={18} />
           </button>
         </div>
       </div>
    )
 }

 export default LeaderboardContent
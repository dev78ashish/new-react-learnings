import React from 'react'
import { Button } from "@/components/ui/button"
import LeaderboardContent from './LeaderboardContent';

const Leaderboard = () => {

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
      <header className="p-4 text-white shadow flex items-center justify-between">
        <p className='text-2xl'>Leaderboard</p>
        <Button className='button-connect rounded-full p-6 '>Connect wallet</Button>
      </header>

      <LeaderboardContent leaderboardData={leaderboardData} />

    </div>
  )
}



export default Leaderboard


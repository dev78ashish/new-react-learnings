import { Button } from "@/components/ui/button"
import ticon from '../../assets/icons/ticon.png'
import roi from '../../assets/icons/roi.png'
import rewards from '../../assets/icons/rewards.png'
import one from '../../assets/numbers/one.png'
import two from '../../assets/numbers/two.png'
import three from '../../assets/numbers/three.png'
import linkicon from '../../assets/icons/linkicon.png'
import fullicon from '../../assets/fullicon.png'

const Referal = () => {
  const steps = [
    {
      number: one,
      title: 'Connect Your wallet',
      description: 'Get your unique referral link by connect to your wallet',
    },
    {
      number: two,
      title: 'Share your referal link',
      description: 'Share your code with friends or your community to start earning rewards',
    },
    {
      number: three,
      title: 'Earn cashback instantly',
      description: 'Earn 10% USDT (BEP-20) cashback for every purchase made through your affiliate code!',
    },
  ];

  return (
    <div>
      <header className="p-4 text-white shadow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className='text-2xl'>Referal</p>
        <Button className='button-connect rounded-full p-6'>Connect wallet</Button>
      </header>

      <main className="m-4">
        <section className="w-full border-[0.1px] border-[#777676] rounded-2xl p-6 sm:p-10 text-white referal-container-top">
          <p className="text-2xl sm:text-3xl w-full sm:w-[45%]">EARN USDT INSTANTLY WITH MOONSHOT MAGAX!</p>
          <p className="text-sm my-5 sm:my-7">Share your affiliate link and watch your rewards grow. <br />
            Now its 10% USDT cashback rate for each transaction!</p>
          <p className="text-sm">Start sharing and earning today!</p>
        </section>

        <div className="flex flex-col lg:flex-row gap-4 text-white my-4">
          <div className="flex flex-col sm:flex-row w-full lg:w-[50%] refereal-middle-boxes rounded-xl p-5 justify-between items-start sm:items-center gap-4">
            <div>
              <p className="flex items-center">
                <img src={ticon} className="h-10 w-10 mr-2" alt="icon" />
                Your Rewards
              </p>
              <p className="mt-2 text-2xl">0.00</p>
            </div>
            <div className="w-full sm:w-[230px] p-5 bg-[#221520] text-center rounded-xl">
              <p className="text-sm text-left mb-2">No rewards yet? Refer a friend to earn on their MAGAX purchase.</p>
              <Button className='button-connect w-full rounded-full p-6'>Connect wallet</Button>
            </div>
          </div>

          <div className="w-full sm:w-[280px] bg-[#160814] flex flex-col justify-center border-[0.1px] border-[#777676] rounded-xl p-5">
            <div className="flex items-center">
              <img className="h-10 w-10 mr-2" src={rewards} alt="icon" />
              <p>Your Referrals</p>
            </div>
            <p className="mt-2 text-2xl">0.00</p>
          </div>

          <div className="w-full sm:w-[280px] bg-[#160814] flex flex-col justify-center border-[0.1px] border-[#777676] rounded-xl p-5">
            <div className="flex items-center">
              <img className="h-10 w-10 mr-2" src={roi} alt="icon" />
              <p>Referral Value</p>
            </div>
            <p className="mt-2 text-2xl">0.00</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="backdrop-blur-[20px] bg-white/10 text-white p-6 rounded-xl max-w-md mx-auto space-y-6 mt-6">
            <h2 className="text-center text-lg font-semibold">How to Earn Rewards In 3 days Steps</h2>
            {steps.map((step, index) => (
              <div key={index} className="relative pl-14">
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <img src={step.number} alt='' className="w-6 h-auto" />

                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="bg-[#2C12288A] backdrop-blur-[20px] text-white p-6 rounded-2xl max-w-xl mx-auto shadow-lg max-h-max relative">
            <p className="text-lg font-medium mb-4">
              Grab your unique link and share it with friends or your community to start earning rewards today!
            </p>

            <div className="flex items-center gap-2 bg-[#2a1d47] rounded-full px-4 border border-purple-500 mb-6">
              <div className=" rounded-full">
                <img src={linkicon} alt="link" className="w-14 h-14 -ml-4" />
              </div>
              <input
                type="text"
                value="https://dashboard.nexchain.ai//?r=********"
                readOnly
                className="bg-transparent text-white w-full outline-none"
              />
            </div>

            <div className="relative">
              <Button className='button-connect rounded-full p-6 w-full'>Connect wallet</Button>

            </div>

            <img
              src={fullicon}
              alt="logo"
              className="absolute bottom-3 right-4 w-18 h-18"
            />
          </div>





        </div>
      </main>
    </div>
  )
}

export default Referal

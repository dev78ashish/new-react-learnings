import React from 'react'
import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { Outlet } from 'react-router-dom'
import { AppSidebar } from '../components/AppSidebar'
import gradient from '../assets/gradient.png'
import droplet from '../assets/droplet.png'
import drop from '../assets/drop.png'

const Home = () => {
    return (
        <SidebarProvider>
            <div className="flex relative w-full min-h-screen overflow-hidden">
                <div className='bg-[#150813] absolute top-0 left-0 -z-10 w-full h-screen'>
                    <div className='absolute top-0 left-0 -z-10 w-full h-screen overflow-hidden'>
                        <img
                            src={gradient}
                            alt="gradient"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-[20%] left-[15%]">
                        <img src={droplet} className='h-auto w-2' alt="droplet" />
                    </div>
                    <div className="absolute right-[20%] bottom-[15%]">
                        <img src={droplet} className='h-auto w-2' alt="droplet" />
                    </div>
                    <div className="absolute bottom-[20%] left-[15%]">
                        <img src={droplet} className='h-auto w-2' alt="droplet" />
                    </div>
                    <div className="absolute bottom-[18%] left-[10%]">
                        <img src={drop} className='h-auto w-2' alt="droplet" />
                    </div>
                    <div className="absolute bottom-[25%] left-[8%]">
                        <img src={drop} className='h-auto w-2' alt="droplet" />
                    </div>
                </div>

                <AppSidebar />
                <SidebarTrigger className='text-white' />
                <div className="flex-1 w-full flex flex-col overflow-y-auto max-h-screen">
                    <Outlet />
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Home

import React from 'react'
import TierSection from './TierSection'
import { Button } from "@/components/ui/button";
import { LogOut, LayoutDashboard } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import ReferralSection from './ReferralSection';
import BlogSection from './BlogSection/BlogSection';
import Background from './Background';

const Home = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="relative h-screen overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Background />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="sticky top-0 z-50 backdrop-blur-md bg-[#150813]/70 border-b border-[#FE3D76]/30 px-6 py-4">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#FE3D76] p-2 rounded-lg shadow-lg shadow-[#FE3D76]/20">
                                <LayoutDashboard className="h-6 w-6 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleLogout}
                                className="bg-[#FE3D76] shadow-custom hover:bg-[#FE3D76]/80 text-white hover:text-white border-none"
                            >
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pt-6 pb-12">
                    <div className="flex flex-col lg:flex-row w-full gap-6 px-6 mx-auto">
                        <div className="w-full lg:w-[65%]">
                            <BlogSection />
                        </div>

                        <div className="w-full lg:w-[35%] flex flex-col gap-6">
                            <ReferralSection />
                            <TierSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

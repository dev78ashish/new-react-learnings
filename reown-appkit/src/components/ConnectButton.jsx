import React from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function ConnectButton() {
    const { isConnected } = useAccount()
    const { disconnect } = useDisconnect()

    if (!isConnected) {
        return (
            <div className="w-full flex justify-center md:justify-end">
                <appkit-button /> 
            </div>
        )
    }

    return (
        <div className="w-full flex justify-center md:justify-end">
            <Button 
                onClick={() => disconnect()}
                className="flex items-center gap-2 px-4 py-2 cursor-pointer"
                variant="destructive"
            >
                
                <LogOut size={16} />
                <span>Disconnect</span>
            </Button>
        </div>
    )
}
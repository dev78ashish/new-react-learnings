import React from 'react'
import { useAccount, useDisconnect } from 'wagmi'

export default function ConnectButton() {
    const { isConnected } = useAccount()
    const { disconnect } = useDisconnect()

    if (!isConnected) {
        return <appkit-button /> // Assuming this renders your Connect button
    }

    return (
        <button
            onClick={() => disconnect()}
            style={{ padding: '6px 12px', cursor: 'pointer' }}
        >
            Disconnect
        </button>
    )
}

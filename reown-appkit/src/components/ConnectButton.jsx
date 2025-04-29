import React from 'react'
import { useAccount, useDisconnect, useBalance } from 'wagmi'

export default function ConnectButton() {
    const { address, isConnected } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: balance } = useBalance({ address })

    if (!isConnected) {
        return <appkit-button />
    }

    return (
        <div style={{ textAlign: 'right' }}>
            <div style={{ marginBottom: '8px' }}>
                <strong>Address:</strong> {address.slice(0, 6)}...{address.slice(-4)}
            </div>
            <div style={{ marginBottom: '8px' }}>
                <strong>Balance:</strong> {balance?.formatted} {balance?.symbol}
            </div>
            <button onClick={() => disconnect()} style={{ padding: '6px 12px', cursor: 'pointer' }}>
                Disconnect
            </button>
        </div>
    )
}

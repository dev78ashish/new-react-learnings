import React from 'react'
import logo from '../assets/apple-touch-icon.png'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md">
            <div className="mx-4 py-3 flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-6 w-6 rounded-full" />
                <h1 className="font-bold text-xl">StarCheck</h1>
            </div>
        </header>
    )
}

export default Header

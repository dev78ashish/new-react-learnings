import React from 'react'
import logo from '../assets/logo_white.svg'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 backdrop-blur-md bg-white/10 h-15">
      <img src={logo} alt="logo" className="h-4 w-auto" />
      <Menu className="text-white" />
    </div>
  )
}

export default Navbar

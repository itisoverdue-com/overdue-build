"use client"
import { useState } from "react"

import Logo from "./Logo"
import MobileSelect from "./MobileSelect"
import NavBar from "./NavBar"

export default function Header() {
   const [showNav, setShowNav] = useState(false)
   return (
      <header className="w-full bg-black/90">
         <div className="flex justify-between items-center py-1.5 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6">
            <Logo />
            <MobileSelect showNav={showNav} setShowNav={setShowNav} />
            <NavBar showNav={showNav} setShowNav={setShowNav} />
         </div>
      </header>
   )
}

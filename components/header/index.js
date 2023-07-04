"use client"
import { useState } from "react"

import Brand from "../Brand"
import MobileSelect from "./MobileSelect"
import NavBar from "./NavBar"

export default function Header() {
   const [showNav, setShowNav] = useState(false)
   return (
      <header className="w-full bg-black/75">
         <div className="flex justify-between items-center py-1.5 px-3 md:px-6 md:py-3">
            <div className="z-50">
               <Brand styles="w-[80px] md:w-[120px]" />
            </div>
            <MobileSelect showNav={showNav} setShowNav={setShowNav} />
            <NavBar showNav={showNav} setShowNav={setShowNav} />
         </div>
      </header>
   )
}

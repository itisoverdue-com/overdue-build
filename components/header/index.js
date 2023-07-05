"use client"
import { useState } from "react"

import Brand from "../Brand" // default size = w 136, h 70
import MobileSelect from "./MobileSelect"
import NavBar from "./NavBar"

export default function Header() {
   const [showNav, setShowNav] = useState(false)
   return (
      <header className="w-full bg-black/75">
         <div className="flex justify-between items-center py-1.5 px-3 md:px-6 md:py-3 border border-blue-500">
            <div className="z-50">
               <Brand styles="w-[calc(136px*0.6)] md:w-[calc(136px*0.9)]" />
            </div>
            <MobileSelect showNav={showNav} setShowNav={setShowNav} />
            <NavBar showNav={showNav} setShowNav={setShowNav} />
         </div>
      </header>
   )
}

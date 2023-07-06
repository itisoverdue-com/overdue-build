"use client"
import { useState } from "react"

import Brand from "../Brand" // default size = w 117, h 60
import MobileSelect from "./MobileSelect"
import NavBar from "./NavBar"

export default function Header() {
   const [showNav, setShowNav] = useState(false)
   return (
      <header className="w-full bg-black/90">
         <div className="flex justify-between items-center py-1.5 px-3 md:px-6 md:py-3">
            <div className="z-50 lg:z-0 w-[calc(136px*0.7)] md:w-[calc(136px*0.85)] lg:w-[136px] lg:basis-auto lg:shrink-0 lg:grow-0">
               <Brand styles="w-full h-full object-cover" />
            </div>
            <MobileSelect showNav={showNav} setShowNav={setShowNav} />
            <NavBar showNav={showNav} setShowNav={setShowNav} />
         </div>
      </header>
   )
}

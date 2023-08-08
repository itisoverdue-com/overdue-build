"use client"
import { useState } from "react"
import Link from "next/link"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"

import Brand from "../Brand"
import NavBar from "./NavBar"

export default function Header() {
   const [showNav, setShowNav] = useState(false)
   return (
      <header className="w-full bg-black/90">
         <div className="flex justify-between items-center py-1.5 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6 min-[3440px]:px-10 min-[3440px]:py-5">
            {/* --- itisOVERDUE LOGO --- */}
            <div
               className={`z-50 lg:z-0 w-[108px] md:w-[124px] lg:w-[136px] lg:basis-auto lg:shrink-0 lg:grow-0`}
               onClick={() => setShowNav(false)}
            >
               <Link href="/">
                  <Brand styles="w-full h-full object-cover" />
               </Link>
            </div>
            {/* --- MOBILE SELECT ICONS --- */}
            <div className="lg:hidden z-50 flex items-center">
               <button onClick={() => setShowNav(showNav ? false : true)}>
                  {showNav ? (
                     <div>
                        <XMarkIcon className="h-10 w-10 md:h-14 md:w-14 text-white" />
                     </div>
                  ) : (
                     <div>
                        <Bars3Icon className="h-10 w-10 md:h-14 md:w-14 text-white" />
                     </div>
                  )}
               </button>
            </div>
            {/* --- NAV BAR --- */}
            <NavBar showNav={showNav} setShowNav={setShowNav} />
         </div>
      </header>
   )
}

"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
   XMarkIcon,
   Bars3Icon,
   SunIcon,
   MoonIcon,
} from "@heroicons/react/24/outline"

import Brand from "../Brand"
import NavBar from "./NavBar"

export default function Header() {
   const [showNav, setShowNav] = useState(false)

   // dark mode
   const [isDark, setIsDark] = useState(false)
   const handleClick = () => {
      isDark
         ? (localStorage.colorScheme = "light")
         : (localStorage.colorScheme = "dark")
      setIsDark((prev) => !prev)
   }
   useEffect(() => {
      if (
         localStorage.colorScheme === "dark" ||
         (window.matchMedia("(prefers-color-scheme: dark").matches &&
            !localStorage.colorScheme)
      ) {
         document.body.classList.add("dark")
         setIsDark(true)
      } else {
         document.body.classList.remove("dark")
         setIsDark(false)
      }
   }, [isDark])

   return (
      <header className="w-full bg-black/90">
         <div className="flex items-center justify-between px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 min-[3440px]:px-10 min-[3440px]:py-5">
            {/* --- logo --- */}
            <div
               className={`z-50 order-1 w-[108px] md:w-[124px] lg:z-0 lg:w-[136px] lg:shrink-0 lg:grow-0 lg:basis-auto`}
               onClick={() => setShowNav(false)}
            >
               <Link href="/">
                  <Brand styles="w-full h-full object-cover" />
               </Link>
            </div>
            {/* --- mobile icons --- */}
            <div className="z-50 order-2 flex items-center gap-x-4 lg:order-3">
               {/* --- select nav shelf --- */}
               <button
                  onClick={() => setShowNav(showNav ? false : true)}
                  className="lg:hidden"
               >
                  {showNav ? (
                     <div>
                        <XMarkIcon className="h-10 w-10 text-white md:h-14 md:w-14" />
                     </div>
                  ) : (
                     <div>
                        <Bars3Icon className="h-10 w-10 text-white md:h-14 md:w-14" />
                     </div>
                  )}
               </button>
               {/* --- select dark mode --- */}
               <button>
                  {isDark ? (
                     <MoonIcon
                        className="h-8 w-8 text-white md:h-10 md:w-10"
                        onClick={handleClick}
                     />
                  ) : (
                     <SunIcon
                        className="h-8 w-8 text-white md:h-10 md:w-10"
                        onClick={handleClick}
                     />
                  )}
               </button>
            </div>
            {/* --- nav bar --- */}
            <NavBar showNav={showNav} setShowNav={setShowNav} />
         </div>
      </header>
   )
}

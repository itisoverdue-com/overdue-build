"use client"
import { useState, useEffect } from "react"
import {
   PlayIcon,
   PauseIcon,
   ArrowLeftCircleIcon,
   ArrowRightCircleIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import { SUPPORTERS } from "@/lib/data"

/**
 * MembersCarousel Component
 * Displays a carousel of supporter members with navigation controls.
 */
export default function MembersCarousel() {
   // State variables
   const [currentIndex, setCurrentIndex] = useState(0)
   const [isPlaying, setIsPlaying] = useState(true)
   const ITEM_WIDTH = 310 // 250px width + 10px right padding

   // Navigate to the next item
   function next() {
      setCurrentIndex((prev) => (prev + 1) % SUPPORTERS.length)
   }

   // Navigate to the previous item
   function prev() {
      setCurrentIndex((prev) => {
         const newIndex = prev - 1
         return newIndex < 0 ? SUPPORTERS.length - 1 : newIndex
      })
   }

   // Auto-slide functionality when playing
   useEffect(() => {
      let timer
      if (isPlaying) timer = setInterval(next, 3000)
      return () => timer && clearInterval(timer)
   }, [isPlaying, currentIndex])

   return (
      <div className="mt-12 flex w-full flex-col overflow-hidden md:mt-20 xl:px-12">
         <h2 className="mx-auto md:mx-0 md:text-left">Our Members!</h2>
         <div className="mx-auto my-4 w-20 rounded-full border-t-8 border-primary dark:border-white md:mx-0 md:my-5 md:w-28" />
         <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * ITEM_WIDTH}px)` }}
         >
            {SUPPORTERS.map((item) => (
               <div
                  key={item.id}
                  className="flex-none"
                  style={{ width: `${ITEM_WIDTH}px` }}
               >
                  {/* 
                     // Image component has a bug when scroll load in this carousel, so we use <img> instead
                  <Image                            
                     src={item.profile}
                     alt={item.name}
                     className="rounded-3xl object-cover"
                     width={250}
                     height={333}
                     quality={50}
                  /> */}
                  <img 
                     src={item.profile}
                     alt={item.name}
                     className="rounded-3xl"
                     width={300}
                     height={350}
                  />
                  <h3 className="text-dark-grey pt-4">{item.name}</h3>
                  <div className="font-regular max-w-[280px] text-sm ">
                     <p className="text-grey">{item.designation}</p>
                     <p className="text-light-grey">{item.location}</p>
                  </div>
               </div>
            ))}
         </div>
         <div className="mt-2 flex w-full flex-row items-center justify-center overflow-hidden dark:text-white xl:px-12">
            <button onClick={prev}>
               <ArrowLeftCircleIcon className="h-12 w-12" />
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)}>
               {isPlaying ? (
                  <PauseIcon className="h-12 w-12" />
               ) : (
                  <PlayIcon className="h-12 w-12" />
               )}
            </button>
            <button onClick={next}>
               <ArrowRightCircleIcon className="h-12 w-12" />
            </button>
         </div>
      </div>
   )
}

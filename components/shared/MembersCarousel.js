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
   const ITEM_WIDTH = 260 // 250px width + 10px right padding

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
      <div className="flex flex-col w-full xl:px-12 overflow-hidden mt-12 md:mt-20">
         <h2 className="md:text-left mx-auto md:mx-0">Our Members!</h2>
         <div className="border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28 mx-auto md:mx-0" />
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
                  <Image
                     src={item.profile}
                     alt={item.name}
                     className="object-cover rounded-3xl"
                     width={250}
                     height={333}
                  />
                  <h3 className="text-dark-grey">{item.name}</h3>
                  <div className="font-regular text-sm max-w-[235px]">
                     <p className="text-grey">{item.designation}</p>
                     <p className="text-light-grey">{item.location}</p>
                  </div>
               </div>
            ))}
         </div>
         <div className="flex flex-row w-full justify-center items-center xl:px-12 overflow-hidden mt-2">
            <button onClick={prev}>
               <ArrowLeftCircleIcon className="w-12 h-12" />
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)}>
               {isPlaying ? (
                  <PauseIcon className="w-12 h-12" />
               ) : (
                  <PlayIcon className="w-12 h-12" />
               )}
            </button>
            <button onClick={next}>
               <ArrowRightCircleIcon className="w-12 h-12" />
            </button>
         </div>
      </div>
   )
}

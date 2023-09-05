"use client"
import { useState, useEffect } from "react"
import {
   PlayIcon,
   PauseIcon,
   ArrowLeftCircleIcon,
   ArrowRightCircleIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import { TESTIMONIALS as testimonialsData } from "@/lib/data"

/**
 * TestimonialCarousel Component
 * Displays a carousel of testimonials with navigation controls, showing only one card at a time.
 */
export default function TestimonialCarousel() {
   // State variables
   const [currentIndex, setCurrentIndex] = useState(0)
   const [isPlaying, setIsPlaying] = useState(true)

   // Navigate to the next item
   function next() {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
   }

   // Navigate to the previous item
   function prev() {
      setCurrentIndex((prev) => {
         const newIndex = prev - 1
         return newIndex < 0 ? testimonialsData.length - 1 : newIndex
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
         <h2 className="mx-auto md:mx-0 md:text-left">What People Say</h2>
         <div className="mx-auto my-4 w-20 rounded-full border-t-8 border-primary md:mx-0 md:my-5 md:w-28" />
         <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         >
            {testimonialsData.map((item) => (
               <div
                  key={item.id}
                  className="w-full flex-none rounded-3xl bg-gradient-to-b from-primary p-4 md:p-8"
               >
                  <blockquote className="italic text-dark-grey ">
                     {item.quote}
                  </blockquote>
                  <div className="flex items-center">
                     <Image
                        src={item.profile}
                        alt={item.name}
                        className="rounded-3xl object-cover"
                        width={80}
                        height={80}
                     />
                     <h3 className="ml-4">{item.name}</h3>
                  </div>
               </div>
            ))}
         </div>
         <div className="mt-2 flex w-full flex-row items-center justify-center overflow-hidden xl:px-12">
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

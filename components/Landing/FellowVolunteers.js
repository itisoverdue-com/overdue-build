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
 * Purpose: Display a carousel of testimonials with navigation controls.
 * Features: Shows one card at a time with autoplay functionality.
 */
export default function TestimonialCarousel() {
   const [currentIndex, setCurrentIndex] = useState(0)
   const [isPlaying, setIsPlaying] = useState(true)

   /**
    * Navigate to the next testimonial.
    */
   function next() {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
   }

   /**
    * Navigate to the previous testimonial.
    */
   function prev() {
      setCurrentIndex((prev) => {
         const newIndex = prev - 1
         return newIndex < 0 ? testimonialsData.length - 1 : newIndex
      })
   }

   /**
    * Set timer for automatic sliding if autoplay is enabled.
    */
   useEffect(() => {
      let timer
      if (isPlaying) {
         timer = setInterval(next, 3000)
      }
      // Clean up timer when component is unmounted or if autoplay changes.
      return () => timer && clearInterval(timer)
   }, [isPlaying, currentIndex])

   /**
    * Renders the navigation button for the carousel.
    * @param {Function} action - The action the button will perform.
    * @param {JSX.Element} Icon - The icon to display on the button.
    */
   function RenderButton(action, Icon) {
      return (
         <button onClick={action}>
            <Icon className="h-12 w-12" />
         </button>
      )
   }

   return (
      <div className="mt-12 flex w-full flex-col overflow-hidden md:mt-20">
         <h2 className="mx-auto md:mx-0 md:text-left">Fellow Volunteers!</h2>
         <span className="mx-auto my-4 w-20 rounded-full border-t-8 border-primary md:mx-0 md:my-5 md:w-28"></span>

         <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col overflow-hidden md:w-2/5">
               <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
               >
                  {testimonialsData.map((item) => (
                     <div
                        key={item.id}
                        className="w-full flex-none rounded-3xl bg-gradient-to-b from-primary p-4 md:p-8"
                     >
                        <blockquote className="italic text-dark-grey dark:text-white">
                           {item.quote}
                        </blockquote>
                        <div className="mt-4 flex items-center">
                           <Image
                              src={item.profile}
                              alt={item.name}
                              className="rounded-xl border-4 border-white object-cover"
                              width={80}
                              height={80}
                           />
                           <h3 className="ml-4">{item.name}</h3>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mt-2 flex w-full flex-row items-center justify-center overflow-hidden dark:text-white xl:px-12">
                  {RenderButton(prev, ArrowLeftCircleIcon)}
                  {RenderButton(
                     () => setIsPlaying(!isPlaying),
                     isPlaying ? PauseIcon : PlayIcon
                  )}
                  {RenderButton(next, ArrowRightCircleIcon)}
               </div>
            </div>
            <div className="grid grid-cols-[4fr,1fr,3fr,1fr,3fr,1fr,4fr] grid-rows-[1fr,8fr] md:w-3/5">
               <Image
                  src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441393/testimonials/showcase1_r9gbb6.jpg"
                  alt="Image 1"
                  className="col-span-2 col-start-1 row-span-2 row-start-1 block h-auto w-full rounded-lg  border-4 border-white object-cover"
                  width={100}
                  height={100}
                  quality={60}
               />
               <Image
                  src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441393/testimonials/showcase2_zgxxgp.jpg"
                  alt="Image 2"
                  className="col-span-3 col-start-2 row-span-2 row-start-2 block h-auto w-full rounded-lg border-4 border-white object-cover "
                  width={100}
                  height={100}
                  quality={60}
               />
               <Image
                  src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441393/testimonials/showcase3_d4xg34.jpg"
                  alt="Image 3"
                  className="col-span-3 col-start-4 row-span-2 row-start-1 block h-auto w-full rounded-lg border-4 border-white object-cover "
                  width={100}
                  height={100}
                  quality={60}
               />
               <Image
                  src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441394/testimonials/showcase4_iygaye.jpg"
                  alt="Image 4"
                  className="col-span-2 col-start-6 row-span-2 row-start-2 block h-auto w-full rounded-lg border-4 border-white object-cover"
                  width={100}
                  height={100}
                  quality={60}
               />
            </div>
         </div>
      </div>
   )
}

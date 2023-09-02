"use client"
import React, { useState } from "react"
import FullBleedContainer from "../Layout/Container/FullBleedContainer"

export default function SubscribeToNewsletter() {
   const [email, setEmail] = useState("")
   const [location, setLocation] = useState("")

   const handleSubmit = async (e) => {
      e.preventDefault()
      // TODO: Implement Brevo API call here.
   }

   return (
      <FullBleedContainer
         sx=""
         backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441393/backgrounds/subscribe_rsxz6i.jpg"
         childSx="flex sm:items-start sm:justify-center sm:pl-20 items-center justify-center  flex-col h-full relative text-white
     md:text-4xl lg:text-5xl xl:text-6xl font-bold flex-col space-y-5"
      >
         <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
         <p>Get the latest updates about our ongoing and upcoming events!</p>
         <form onSubmit={handleSubmit} className="mt-4">
            <select
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               className="mb-2 p-2"
            >
               <option value="" disabled>
                  Select location
               </option>
               <option value="New York">New York</option>
               // Add more options as needed
            </select>
            <input
               type="email"
               placeholder="Enter your email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="mb-2 w-full p-2"
            />
            <button type="submit">Subscribe</button>
         </form>
      </FullBleedContainer>
   )
}

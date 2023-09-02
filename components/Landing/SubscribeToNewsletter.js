"use client"
import React, { useState } from "react"
import FullBleedContainer from "../Layout/Container/FullBleedContainer"
import Button from "../shared/Button"

export default function SubscribeToNewsletter() {
   const [email, setEmail] = useState("")
   const [location, setLocation] = useState("")

   const handleSubmit = async (e) => {
      e.preventDefault()
      // TODO: Implement Brevo API call here.
   }

   return (
      <FullBleedContainer
         // add red border
         sx="border-2 border-red-500 py-16"
         backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441393/backgrounds/subscribe_rsxz6i.jpg"
         childSx="flex flex-col space-y-2 px-6"
      >
         <h2 className="text-4xl font-normal text-lightest-grey">
            Subscribe to our Newsletter
         </h2>
         <p className="text- text-lg text-lighter-grey">
            Get the latest updates about our ongoing and upcoming events!
         </p>
         <form
            onSubmit={handleSubmit}
            className="mb-4 mt-4 flex flex-col space-y-2"
         >
            <select
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               className="mb-2 rounded-md p-4"
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
               className="mb-2 rounded-md p-4"
            />
            <Button
               variant="dark"
               size="xl"
               darkVariant="grey"
               type="submit"
               sx=" font-normal"
            >
               Subscribe
            </Button>
         </form>
      </FullBleedContainer>
   )
}

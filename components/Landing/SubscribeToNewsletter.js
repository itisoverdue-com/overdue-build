"use client"
import { useState } from "react"
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
         sx="py-20"
         backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441393/backgrounds/subscribe_rsxz6i.jpg"
         childSx="flex flex-col  
          items-center 
         md:flex-row md:justify-between gap-10 px-6 lg:px-12"
      >
         <div className="flex flex-col ">
            <h2 className="text-4xl font-normal text-lightest-grey">
               Subscribe to our Newsletter
            </h2>
            <p className="text-lg text-lighter-grey">
               Get the latest updates about our ongoing and upcoming events!
            </p>
         </div>

         <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 lg:flex-row"
         >
            <select
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               className="flex rounded-md p-5"
            >
               <option value="" disabled>
                  Select location
               </option>
               <option value="SFV">San Fernando Valley, CA</option>
            </select>
            <div className="n flex	justify-center rounded-md bg-white p-1">
               <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2"
               />
               <Button
                  variant="dark"
                  size="lg"
                  darkVariant="grey"
                  fullWidth={true}
                  type="submit"
                  sx="font-normal"
               >
                  Subscribe
               </Button>
            </div>
         </form>
      </FullBleedContainer>
   )
}

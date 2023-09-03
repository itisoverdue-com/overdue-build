"use client"
import { useState } from "react"
import FullBleedContainer from "../Layout/Container/FullBleedContainer"
import Button from "../shared/Button"

export default function SubscribeToNewsletter() {
   const [email, setEmail] = useState("")
   const [location, setLocation] = useState("")

   const handleSubmit = async (e) => {
      e.preventDefault()
   }

   return (
      <FullBleedContainer
         sx="py-10"
         backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441393/backgrounds/subscribe_rsxz6i.jpg"
         childSx="flex flex-col  
          items-center 
         md:flex-row md:justify-between gap-6 px-2 md:px-6 lg:px-12"
      >
         <div className="flex flex-col">
            <h2 className="text-4xl font-normal text-lightest-grey">
               Subscribe to our Newsletter
            </h2>
            <p className="text-lg text-lighter-grey">
               Get the latest updates about our ongoing and upcoming events!
            </p>
         </div>
         <div
            style={{
               position: "relative",
               height: "380px",
               width: "100%",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               overflow: "hidden",
            }}
         >
            <iframe
               style={{
                  width: "100%",
                  height: "100%",
               }}
               src="https://b9f7feb2.sibforms.com/serve/MUIFAFwiFEM9nwjq3EOwKxl-zv-fR9j4trEiltFi0cUcbZFiYjs8OzETq1vE6YUrCMNoMREJ0yy0c1sgn8h6R5nBcnpoyxQtl6P9QHDTlTOzzqcihN1BDfCSvRLle-wuA_DsmKH7v-MVcSHck1CRCc6YHtCRGNDmLPKqOuI-X6LqIqAhOmM2UBTm_XXGkI1-6qWlanP81sYAH6T-"
            ></iframe>
         </div>
      </FullBleedContainer>
   )
}

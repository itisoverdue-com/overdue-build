import Image from "next/image"
import Hero from "@/components/Landing/Hero"
import Card from "@/components/shared/Card"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"

export default function Home() {
   return (
      <main>
         <Hero  
            page="IT IS OVERDUE"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441392/landing/hero_yntaig.jpg"
         />
         <FullBleedContainer sx="h-96 bg-blue-200">
         </FullBleedContainer>
      </main>
   )
}

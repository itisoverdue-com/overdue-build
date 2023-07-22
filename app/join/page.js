import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Image from "next/image"

export default function Join() {
   return (
      <div>
         <PageHero
            route="join"
            header="Join Our Team"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441392/backgrounds/volunteer_jo6rbb.jpg"
         />
         <FullBleedContainer
            sx="bg-background"
            childSx="py-20 lg:py-32 flex flex-col justify-center items-center  text-center"
         >
            {/* Title, Accent Line, Subheader */}
            <>
               <h2>Be Apart of Overdue</h2>
               <div className="border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28" />
            </>

            {/* Image, Link to Apply Now */}
            <div className="relative aspect-video"></div>
         </FullBleedContainer>
      </div>
   )
}

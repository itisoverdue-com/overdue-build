import Image from "next/image"

import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Card from "@/components/shared/Card"

export default function About() {
   return (
      <div>
         <PageHero
            page="about us"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/backgrounds/about_avmkds.jpg"
         />
         {/* <FullBleedContainer
            sx="bg-background"
            childSx="py-28 flex flex-col justify-center items-center text-center md:py-32"
         > */}
         <FullBleedContainer sx="bg-background" childSx="py-28 md:py-32">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center">
               {/* Title, Accent Line, Subheader */}
               <div className="md:w-full">
                  <h2 className="text-4xl md:text-5xl font-bold">
                     IT IS OVERDUE
                  </h2>
                  <div className="border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28 mx-auto md:ml-4" />
                  <h3 className="mx-auto mt-8 text-xl md:text-4xl md:leading-[3rem] font-medium text-left px-8 md:px-6">
                     OVERDUE is a collective of individuals who pick up trash
                     together to make their communities cleaner, greener and
                     friendlier.
                  </h3>
               </div>
               <div className="my-12">
                  <Card variant="image" imgWidth="w-[85%] lg:w-full">
                     <Image
                        alt="text"
                        src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/about/intro_ixa5ny.jpg"
                        width={700}
                        height={500}
                     />
                  </Card>
                  <Card
                     variant="text"
                     sx="w-[95%] top-[-35px] md:top-3/4 md:left-0"
                  >
                     <p className="md:text-lg md:leading-10 text-left">
                        We started in October 2020 in the San Fernando Valley,
                        CA and have picked up over 58,000 lbs of trash ever
                        since. Our goal is to develop a network of empowered
                        leaders of all ages who are taking responsibility in
                        their neighborhoods.
                     </p>
                  </Card>
               </div>
            </div>
         </FullBleedContainer>
      </div>
   )
}

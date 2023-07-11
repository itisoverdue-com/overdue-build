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
         <FullBleedContainer
            sx="bg-background border"
            childSx="py-28 md:py-32 px-6 lg:px-12"
         >
            {/* Section 1 */}
            <div className="flex flex-col justify-center items-center text-center md:flex-row md:flex-wrap xl:px-12">
               {/* Subheader */}
               <div className="md:w-[55%] md:pr-12 xl:pr-4 lg:w-[45%]">
                  <h2 className="md:text-left">IT IS OVERDUE</h2>
                  <div className="border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28 mx-auto md:mx-0" />
                  <h3 className="mx-auto mt-8 px-4 sm:px-8 md:px-0 sm:text-2xl md:text-3xl md:leading-[3rem] font-medium text-left">
                     OVERDUE is a collective of individuals who pick up trash
                     together to make their communities cleaner, greener and
                     friendlier.
                  </h3>
               </div>

               {/* Image Card */}
               <Card
                  variant="image"
                  sx="w-[75vw] aspect-[7/5] mt-8 md:h-[400px] md:w-[45%] md:mt-0 lg:w-[55%] lg:max-w-[560px] lg:mr-0"
               >
                  <Image
                     alt="text"
                     src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/about/intro_ixa5ny.jpg"
                     fill
                     style={{
                        objectFit: "cover",
                     }}
                  />
               </Card>

               {/* Text Card */}
               <Card
                  variant="text"
                  sx="top-[-35px] md:top-0 md:mt-8 lg:top-[-50px] lg:mr-12 min-[1512px]:top-[-100px]"
               >
                  <p>
                     We started in October 2020 in the San Fernando Valley, CA
                     and have picked up over 58,000 lbs of trash ever since. Our
                     goal is to develop a network of empowered leaders of all
                     ages who are taking responsibility in their neighborhoods.
                  </p>
               </Card>
            </div>
            {/* Section 2 */}
            <div>
               {/* How We Got Started */}
               <div></div>

               {/* Our Philosophy */}
               <div></div>
            </div>
         </FullBleedContainer>
      </div>
   )
}

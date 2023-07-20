"use client"
import Image from "next/image"

import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Card from "@/components/shared/Card"
import WhatWeDo from "@/components/Pages/WhatWeDo"
import SectionSubheader from "@/components/Pages/SectionSubheader"

export default function About() {
   return (
      <div>
         <PageHero
            route="about"
            header="About Us"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/backgrounds/about_avmkds.jpg"
         />
         <FullBleedContainer
            sx="bg-background border"
            childSx="py-28 md:py-32 px-6 lg:px-12"
         >
            {/* IT IS OVERDUE */}
            <section id="about-it-is-overdue">
               {/* Subsection 1 */}
               <div className="flex flex-col justify-center items-center text-center md:flex-row md:flex-wrap xl:px-12">
                  <SectionSubheader
                     header="IT IS OVERDUE"
                     sx="md:w-[55%] md:pr-12 lg:w-[45%] xl:pr-4"
                     headerSx="md:text-left"
                  >
                     <h3 className="mx-auto mt-8 px-4 sm:px-8 md:px-0 sm:text-2xl md:text-3xl md:leading-[3rem] font-medium text-left">
                        OVERDUE is a collective of individuals who pick up trash
                        together to make their communities cleaner, greener and
                        friendlier.
                     </h3>
                  </SectionSubheader>
                  <Card
                     variant="image"
                     sx="w-[75vw] aspect-[7/5] mt-8 md:h-[400px] md:w-[45%] md:mt-0 lg:w-[55%] lg:max-w-[560px] lg:mr-0"
                  >
                     <Image
                        alt="itisOVERDUE team gathered outside"
                        src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/about/intro_ixa5ny.jpg"
                        fill
                        style={{
                           objectFit: "cover",
                        }}
                     />
                  </Card>
                  <Card
                     variant="text"
                     sx="mt-[-35px] md:top-0 md:mt-8 lg:mt-[-15px] lg:mr-12 xl:mt-[-35px] min-[1512px]:mt-[-70px]"
                  >
                     <p>
                        We started in October 2020 in the San Fernando Valley,
                        CA and have picked up over 58,000 lbs of trash ever
                        since. Our goal is to develop a network of empowered
                        leaders of all ages who are taking responsibility in
                        their neighborhoods.
                     </p>
                  </Card>
               </div>

               {/* Subsection 2 */}
               <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:items-start xl:px-12">
                  {/* How We Got Started */}
                  <div className="relative w-full mt-16 lg:w-1/2 lg:px-4 xl:mt-24 min-[1512px]:px-8">
                     <h2 className="text-3xl sm:text-5xl lg:text-4xl lg:text-left xl:text-5xl">
                        How We Got Started?
                     </h2>
                     <Card
                        variant="image"
                        sx="w-[65vw] max-w-[352px] aspect-[440/629] mt-8 md:ml-0"
                     >
                        <Image
                           alt="Faithful itisOVERDUE dog resting outside"
                           src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/about/started_fakhjz.jpg"
                           fill
                           style={{ objectFit: "cover" }}
                        />
                     </Card>
                     <Card
                        variant="text"
                        sx="mt-[-115px] max-w-none sm:mt-[-175px] md:w-[90%] md:mr-0 min-[1512px]:mt-[-180px]"
                     >
                        <p>It all begins with one person.</p>
                        <p className="my-4">
                           OVERDUE was created out of a necessity to take on the
                           issue of trash that we all see around us. When our
                           founder Max and our furry co-founder Leon almost
                           stepped on a hypodermic needle. From there, the first
                           volunteers were recruited. Max and Leon&apos;s
                           roommates Devin, Noah and Igor joined the team and
                           our group truly began.
                        </p>
                        <p>
                           Since then, an amazing community of people have come
                           together to make a difference in the community.
                           Holding trash pickups every week, OVERDUE has been
                           dedicated from the start to doing great things.
                        </p>
                     </Card>
                  </div>

                  {/* Our Philosophy */}
                  <div className="relative w-full mt-16 lg:w-1/2 lg:px-4 xl:mt-24 min-[1512px]:px-8">
                     <h2 className="text-3xl sm:text-5xl lg:text-4xl lg:text-left xl:text-5xl">
                        Our Philosophy
                     </h2>
                     <Card
                        variant="image"
                        sx="w-[75vw] max-w-[620px] aspect-[620/412] mt-8 md:ml-0 lg:w-[90%] min-[1512px]:w-4/5"
                     >
                        <Image
                           alt="itisOVERDUE team gathered outside"
                           src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441386/about/philosophy_espfa8.jpg"
                           fill
                           style={{ objectFit: "cover" }}
                        />
                     </Card>
                     <Card
                        variant="text"
                        sx="mt-4 max-w-none md:mr-0 md:w-[90%] lg:mx-auto"
                     >
                        <p>
                           Our philosophy is that if people don&apos;t see
                           litter around, they will feel less inclined to toss
                           it on the street.
                        </p>
                        <p className="italic mt-4">
                           Power in the people is greater than people in power.
                        </p>
                        <p className="text-right">&mdash; Wael Ghonim</p>
                     </Card>
                  </div>
               </div>
            </section>

            {/* WHAT WE DO */}
            <WhatWeDo variant="about" />
         </FullBleedContainer>
      </div>
   )
}

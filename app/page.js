import Image from "next/image"
import Hero from "@/components/Landing/Hero"
import Card from "@/components/shared/Card"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Button from "@/components/shared/Button"
import EffortStats from "@/components/Landing/EffortStats"
import MembersCarousel from "@/components/shared/MembersCarousel"
import SectionSubheader from "@/components/Pages/SectionSubheader"
import WhatWeDo from "@/components/Pages/WhatWeDo"
import WaysToHelp from "@/components/Pages/WaysToHelp"

export default function Home() {
   return (
      <main>
         <Hero
            page="IT IS OVERDUE"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441392/landing/hero_yntaig.jpg"
         />
         <FullBleedContainer
            sx="bg-background dark:bg-darkest-grey"
            childSx="py-28 md:py-32 px-6 lg:px-12"
         >
            {/* Who Are We? section */}
            <div className="flex flex-col items-center justify-center text-center md:flex-row md:flex-wrap xl:px-12">
               {/* Who are we - section */}
               <SectionSubheader
                  header="Who Are We?"
                  sx="md:w-[55%] md:pr-12 lg:w-[45%] xl:pr-4"
                  headerSx="md:text-left"
               >
                  <h3 className="mx-auto mt-8 px-4 text-left font-medium sm:px-8 sm:text-2xl md:px-0 md:text-3xl md:leading-[3rem]">
                     OVERDUE is a collective of individuals who pick up trash
                     together to make their communities cleaner, greener and
                     friendlier.
                  </h3>
                  <p className="sm:text-l md:text-xlfont-regular mx-auto mt-4 px-4 text-left sm:px-8 md:px-0">
                     Our philosophy is that if people don&apos;t see litter
                     around, they will feel less inclined to toss it on the
                     street.
                  </p>
                  <div
                     // when in md do not display the button
                     className="hidden flex-col items-start  justify-start md:flex "
                  >
                     <Button
                        variant="dark"
                        darkVariant="grey"
                        href="/about"
                        size="md"
                        style={{
                           marginTop: "14px",
                           width: "fit-content",
                        }}
                     >
                        Know More About Us
                     </Button>
                  </div>
               </SectionSubheader>
               <Card
                  sx="hidden md:flex aspect-[1/1] mt-8  md:h-[400px] md:w-[45%] md:mt-0 lg:w-[55%] lg:max-w-[560px] lg:mr-0"
                  variant="image"
               >
                  <Image
                     alt="itisOVERDUE team gathered outside"
                     src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/landing/about1_sxanuf.jpg"
                     fill
                     sizes="55vw"
                     className="object-cover"
                     quality={75}
                  />
               </Card>
            </div>
            <EffortStats />
            <WhatWeDo variant="home" />
            <WaysToHelp />
            {/* Latest Updates & Blogs section */}
            {/* Fellow Volunteers! section */}
            {/* Our Partners section */}
            {/* Become a Sponsor section */}
            {/* Subscribe to Newsletter section */}
            <MembersCarousel />
         </FullBleedContainer>
      </main>
   )
}

import Image from "next/image"

import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import SectionSubheader from "@/components/Pages/SectionSubheader"
import Card from "@/components/shared/Card"
import Button from "@/components/shared/Button"

export default function Sponsor() {
   return (
      <div>
         <PageHero
            route="sponsor"
            header="Sponsorship"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441388/backgrounds/sponsor_vaguav.jpg"
         />
         <FullBleedContainer
            sx="bg-background"
            childSx="py-28 md:py-32 px-6 lg:px-12"
         >
            {/* <------- BECOME A SPONSOR -------> */}
            <section id="become-a-sponsor">
               <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap">
                  <SectionSubheader
                     header="Become a Sponsor"
                     sx="w-full"
                     headerSx="text-center md:text-left"
                  />
                  <div className="w-full md:w-[45%] md:pl-6 md:pr-8 lg:w-2/5 lg:pl-12 xl:pl-20 xl:pr-16">
                     <h3 className="mt-4 text-2xl sm:text-3xl sm:text-center sm:mt-8 md:text-left">
                        Together
                     </h3>
                     <div className="max-md:hidden border-t-8 border-primary w-20 rounded-full my-2 mx-0" />
                     <p className="mt-4 text-left sm:max-md:text-center">
                        Inspire and educate the community to take action for a
                        better tomorrow.
                     </p>
                     <div className="mt-8 max-md:hidden">
                        <Button variant="primary" size="xl">
                           Become a Sponsor
                        </Button>
                     </div>
                  </div>
                  <Card
                     variant="image"
                     sx="w-[85vw] max-w-[550px] aspect-[800/388] mt-8 md:w-[55%] md:h-[270px] lg:w-3/5 lg:h-full lg:max-w-[720px]"
                  >
                     <Image
                        alt="itisOVERDUE team gathered outside"
                        src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1689971775/sponsor_iinfeq.jpg"
                        fill
                        className="object-cover scale-125 lg:scale-100"
                     />
                  </Card>
                  <div className="mt-8 md:hidden">
                     <Button variant="primary" size="xl">
                        Become a Sponsor
                     </Button>
                  </div>
               </div>
            </section>

            {/* <------- JOIN OUR SPONSORS -------> */}
            <section id="join-our-sponsors"></section>
         </FullBleedContainer>
      </div>
   )
}

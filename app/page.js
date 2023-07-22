import Image from "next/image"
import Hero from "@/components/Landing/Hero"
import Card from "@/components/shared/Card"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Button from "@/components/shared/Button"
import EffortStats from "@/components/Landing/EffortStats"
import MembersCarousel from "@/components/shared/MembersCarousel"

export default function Home() {
   return (
      <main>
         <Hero  
            page="IT IS OVERDUE"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441392/landing/hero_yntaig.jpg"
         />
         <FullBleedContainer 
            sx="bg-background border"
            childSx="py-28 md:py-32 px-6 lg:px-12"
         >
            {/* Who are we - section */}
            <div className="flex flex-col justify-center items-center text-center md:flex-row md:flex-wrap xl:px-12">
               {/* Subheader */}
               <div className="flex flex-col items-center justify-center md:w-[55%] md:pr-12 xl:pr-4 lg:w-[45%]">
                  <h2 className="md:text-left">Who are We?</h2>
                  <div className="border-t-8 border-primary w-20 rounded-full my-4 md:my-5 md:w-28 mx-auto md:mx-0" />
                  <h3 className="mx-auto mt-8  sm:text-xl md:text-2xl md:leading-[3rem] font-medium text-left">
                     <span className="font-bold">OVERDUE</span> is a collective of individuals who pick up trash
                     together to make their communities cleaner, greener and
                     friendlier.
                  </h3>
                  <p className="mx-auto mt-4  md:leading-[2rem] font-normal text-left">
                     Our philosophy is that if people don&apos;t see litter
                     around, they will feel less inclined to toss it on the
                     street.
                  </p>
                  <Button 
                     variant="dark" 
                     href="/about" 
                     size="lg"
                     style={{ marginTop: "14px" }}
                     >
                     Know More About Us
                  </Button>
               </div>
               {/* Image Card */}
               <Card
                  sx="w-[75vw] aspect-[1/1] mt-8  md:h-[400px] md:w-[45%] md:mt-0 lg:w-[55%] lg:max-w-[560px] lg:mr-0"
                  variant="image"
               >
                  <Image
                     alt="itisOVERDUE team gathered outside"
                     src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/landing/about1_sxanuf.jpg"
                     fill
                     style={{
                        objectFit: "cover",
                     }}
                  />
               </Card>
            </div>
            <EffortStats />
            <MembersCarousel />
         </FullBleedContainer>
      </main>
   )
}

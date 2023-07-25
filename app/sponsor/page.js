import { useMemo } from "react"
import Image from "next/image"

import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import SectionSubheader from "@/components/Pages/SectionSubheader"
import Card from "@/components/shared/Card"
import Button from "@/components/shared/Button"

export default function Sponsor() {
   const sponsors = [
      {
         id: 1,
         name: "yelp",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/yelp_vgatkb.png",
         width: 1550,
         height: 625,
         containerSx: "w-full max-w-[400px]",
      },
      {
         id: 4,
         name: "mercedez benz of calabasas",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/mercedes-benz-of-calabasas_bki1d6.jpg",
         width: 200,
         height: 200,
         containerSx: "w-1/2 max-w-[200px]",
         imgSx: "",
      },
      {
         id: 3,
         name: "uniqlo",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/uniqlo_pufdzo.png",
         containerSx: "w-1/2 max-w-[200px]",
         imgSx: "",
         width: 849,
         height: 846,
      },
      {
         id: 2,
         name: "the well",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/the-well_fmbeue.webp",
         containerSx: "w-1/2 max-w-[200px]",
         imgSx: "",
         width: 1097,
         height: 1118,
      },
      {
         id: 5,
         name: "8 one 8",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/8-one-8_g3qawz.png",
         containerSx: "w-1/2 max-w-[200px]",
         imgSx: "",
         width: 400,
         height: 400,
      },
      {
         id: 6,
         name: "intermix",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/intermix_vbabnv.png",
         containerSx: "w-full",
         imgSx: "",
         width: 900,
         height: 130,
      },
      {
         id: 8,
         name: "my valley pass",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/my-valley-pass_brmldx.png",
         containerSx: "w-1/2",
         imgSx: "",
         width: 194,
         height: 161,
      },
      {
         id: 7,
         name: "prostainable",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/prostainable_nnocpx.png",
         containerSx: "",
         imgSx: "",
         width: 1500,
         height: 260,
      },
      {
         id: 10,
         name: "dentsu",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/dentsu_rcmnp4.png",
         containerSx: "w-1/2",
         imgSx: "",
         width: 1250,
         height: 269,
      },
      {
         id: 11,
         name: "redone",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/redone_d4jc5m.png",
         containerSx: "w-1/2",
         imgSx: "",
         width: 1200,
         height: 263,
      },
      {
         id: 9,
         name: "carat a dentsu company",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/carat-dentsu_pnbntp.png",
         containerSx: "w-1/2",
         imgSx: "",
         width: 1305,
         height: 429,
      },
      {
         id: 12,
         name: "topanga new times",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/topanga-new-times_aneghe.png",
         containerSx: "",
         imgSx: "",
         width: 1854,
         height: 190,
      },
   ]

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
            <section id="join-our-sponsors" className="mt-24">
               <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap">
                  <SectionSubheader header="Join our Sponsors" />
                  <div className="flex flex-wrap justify-evenly items-center w-full">
                     {sponsors
                        .sort((a, b) => a.id - b.id)
                        .map((logo) => {
                           return (
                              <div
                                 key={logo.id}
                                 className={`my-6 px-4 ${logo.containerSx}`}
                              >
                                 <Image
                                    alt={`${logo.name} logo`}
                                    src={logo.imgSrc}
                                    width={logo.width}
                                    height={logo.height}
                                    className={logo.imgSx}
                                 />
                              </div>
                           )
                        })}
                  </div>
               </div>
            </section>
         </FullBleedContainer>
      </div>
   )
}

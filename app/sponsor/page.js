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
         // width: 1550,
         // height: 625,
         outerSx: "order-1 w-2/3 sm:w-1/3 md:w-2/5",
         innerSx: "max-w-[300px] aspect-[1550/625]",
      },
      {
         id: 2,
         name: "mercedez benz of calabasas",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/mercedes-benz-of-calabasas_bki1d6.jpg",
         // width: 200,
         // height: 200,
         outerSx: "order-5 w-1/3 sm:w-1/3 md:w-1/4",
         innerSx: "max-w-[150px] aspect-square",
      },
      {
         id: 3,
         name: "uniqlo",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/uniqlo_pufdzo.png",
         // width: 849,
         // height: 846,
         outerSx: "order-2 w-1/3 sm:order-3 md:w-1/5",
         innerSx: "max-w-[150px] aspect-[849/846]",
      },
      {
         id: 4,
         name: "the well",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/the-well_fmbeue.webp",

         // width: 1097,
         // height: 1118,
         outerSx: "order-4 w-1/3 md:w-1/5",
         innerSx: "max-w-[150px] aspect-[1097/1118]",
      },
      {
         id: 5,
         name: "8 one 8",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/8-one-8_g3qawz.png",
         // width: 400,
         // height: 400,
         outerSx: "order-3 w-1/3 sm:order-2 sm:w-1/3 md:w-1/5",
         innerSx: "max-w-[150px] aspect-square",
      },
      {
         id: 6,
         name: "intermix",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/intermix_vbabnv.png",
         // width: 900,
         // height: 130,
         outerSx: "order-6 w-2/3 sm:w-1/3 sm:order-7 md:w-1/2",
         innerSx: "max-w-[400px] aspect-[900/130]",
      },
      {
         id: 7,
         name: "my valley pass",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/my-valley-pass_brmldx.png",
         // width: 194,
         // height: 161,
         outerSx: "order-7 w-1/3 sm:order-10 sm:order-6 sm:w-1/3 md:w-1/4",
         innerSx: "max-w-[150px] aspect-[194/161]",
      },
      {
         id: 8,
         name: "prostainable",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/prostainable_nnocpx.png",
         // width: 1500,
         // height: 260,
         outerSx: "order-8 w-2/3 sm:order-10 md:order-8 md:w-1/2",
         innerSx: "max-w-[440px] aspect-[1500/260] sm:max-w-[500px]",
      },
      {
         id: 9,
         name: "dentsu",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/dentsu_rcmnp4.png",
         // width: 1250,
         // height: 269,
         outerSx: "order-10 w-1/2 sm:order-8 sm:w-1/3 md:order-11 md:w-1/3",
         innerSx: "max-w-[200px] aspect-[1250/269]",
      },
      {
         id: 10,
         name: "redone",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/redone_d4jc5m.png",
         // width: 1200,
         // height: 263,
         outerSx: "order-9 w-1/3 sm:order-11 sm:w-1/3 md:order-10",
         innerSx: "max-w-[200px] aspect-[1200/263]",
      },
      {
         id: 11,
         name: "carat a dentsu company",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/carat-dentsu_pnbntp.png",
         // width: 1305,
         // height: 429,
         outerSx: "order-11 w-1/2 sm:order-9 sm:w-1/3 md:order-12 md:w-1/3",
         innerSx: "max-w-[200px] aspect-[1305/429]",
      },
      {
         id: 12,
         name: "topanga new times",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/topanga-new-times_aneghe.png",
         // width: 1854,
         // height: 190,
         outerSx: "order-12 w-full md:order-9 md:w-1/2",
         innerSx: "max-w-[420px] aspect-[1854/190] sm:max-w-[600px]",
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
                  <SectionSubheader
                     header="Join our Sponsors"
                     sx="w-full"
                     headerSx="text-center md:text-left"
                  />
                  {/* SPONSOR LOGOS */}
                  <div className="flex flex-wrap items-center w-full mt-4 lg:px-12 xl:px-20">
                     {sponsors.map((logo) => {
                        return (
                           <div
                              key={logo.id}
                              className={`p-4 sm:p-6 ${logo.outerSx}`}
                           >
                              <div
                                 className={`mx-auto relative ${logo.innerSx}`}
                              >
                                 <Image
                                    alt={`${logo.name} logo`}
                                    src={logo.imgSrc}
                                    fill
                                    className="object-contain"
                                 />
                              </div>
                           </div>
                        )
                     })}
                  </div>
                  {/* WHY CORPORATE CLEANUP */}
                  <div className="w-full mt-12 lg:mt-16 xl:px-12">
                     <div className="relative flex flex-col justify-center items-center w-full md:flex-row md:gap-x-4">
                        <Card
                           variant="text"
                           sx="flex flex-col justify-center basis-full max-w-none md:basis-[70%] xl:basis-3/4 xl:min-h-[428px]"
                        >
                           <h3 className="text-xl sm:text-2xl">
                              Why Corporate Cleanup?
                           </h3>
                           <p className="mt-4 mb-6">
                              We love giving back to the community, and you know
                              what? A lot of businesses feel the same way, but
                              they typically have a hard time finding local
                              volunteer activities in which they can participate
                              as a group. That is how we started offering
                              corporate sponsorship to open up the cleanup/
                              education event to those wonderful corporate
                              partners.
                           </p>
                           <p>
                              Having the same goal is a great way to build a
                              strong team. With our clean-up and environmental
                              education event, the team will have a greater
                              sense of environmentalism toward a better future.
                           </p>
                        </Card>
                        <Card
                           variant="image"
                           sx="basis-[70vw] max-h-[508px] aspect-[381/508] mt-[-25px] md:basis-[30%] md:mt-0 md:max-h-[428px] xl:basis-1/4"
                        >
                           <Image
                              alt="itisOVERDUE volunteers working outside"
                              src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690326666/sponsor/sponsor_mr8h5d.jpg"
                              fill
                              className="object-contain md:object-cover"
                           />
                        </Card>
                     </div>
                  </div>
                  {/* PRIVATE EVENT */}
                  <div className="w-full mt-12 md:mt-20 xl:mt-24 xl:px-12">
                     <div className="relative flex flex-col justify-center items-center w-full md:flex-row md:gap-x-4">
                        <Card
                           variant="text"
                           sx="flex flex-col justify-center basis-full max-w-none md:basis-[70%] lg:order-2 xl:basis-3/4 lg:min-h-[428px]"
                        >
                           <h3 className="text-xl sm:text-2xl">
                              Private Event
                           </h3>
                           <p className="text-lg py-4">
                              $1250 tax deductible donation:
                           </p>
                           <div className="px-4">
                              <ul className="list-disc">
                                 <li className="">You pick the location</li>
                                 <li className="">
                                    You can bring as many as 50 people. If more
                                    than 50 people, additional $5/ person.
                                 </li>
                                 <li className="">
                                    OVERDUE will post on our social media
                                    during, and after about the event.
                                 </li>
                                 <li className="">
                                    OVERDUE will include your logo on our
                                    website.
                                 </li>
                              </ul>
                           </div>
                        </Card>
                        <Card
                           variant="image"
                           sx="basis-[70vw] max-h-[508px] aspect-[381/557] mt-[-50px] md:basis-[30%] md:max-h-[428px] md:mt-0 lg:order-1 xl:basis-1/4"
                        >
                           <Image
                              alt="itisOVERDUE volunteers working outside"
                              src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690347288/sponsor/sponsor_c2f3a3.jpg"
                              fill
                              className="object-contain md:object-cover md:object-bottom"
                           />
                        </Card>
                     </div>
                  </div>
               </div>
            </section>
         </FullBleedContainer>
      </div>
   )
}

import Image from "next/image"
import {
   EnvelopeIcon,
   PhoneIcon,
   AtSymbolIcon,
} from "@heroicons/react/24/outline"

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
         outerSx: "order-1 w-2/3 sm:w-1/3 md:w-2/5",
         innerSx: "max-w-[300px] aspect-[1550/625]",
      },
      {
         id: 2,
         name: "mercedez benz of calabasas",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/mercedes-benz-of-calabasas_bki1d6.jpg",
         outerSx: "order-5 w-1/3 sm:w-1/3 md:w-1/4",
         innerSx: "max-w-[150px] aspect-square",
      },
      {
         id: 3,
         name: "uniqlo",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/uniqlo_pufdzo.png",
         outerSx: "order-2 w-1/3 sm:order-3 md:w-1/5",
         innerSx: "max-w-[150px] aspect-[849/846]",
      },
      {
         id: 4,
         name: "the well",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/the-well_fmbeue.webp",
         outerSx: "order-4 w-1/3 md:w-1/5",
         innerSx: "max-w-[150px] aspect-[1097/1118]",
      },
      {
         id: 5,
         name: "8 one 8",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/8-one-8_g3qawz.png",
         outerSx: "order-3 w-1/3 sm:order-2 sm:w-1/3 md:w-1/5",
         innerSx: "max-w-[150px] aspect-square",
      },
      {
         id: 6,
         name: "intermix",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/intermix_vbabnv.png",
         outerSx: "order-6 w-2/3 sm:w-1/3 sm:order-7 md:w-1/2",
         innerSx: "max-w-[400px] aspect-[900/130]",
      },
      {
         id: 7,
         name: "my valley pass",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/my-valley-pass_brmldx.png",
         outerSx: "order-7 w-1/3 sm:order-10 sm:order-6 sm:w-1/3 md:w-1/4",
         innerSx: "max-w-[150px] aspect-[194/161]",
      },
      {
         id: 8,
         name: "prostainable",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/prostainable_nnocpx.png",
         outerSx: "order-8 w-2/3 sm:order-10 md:order-8 md:w-1/2",
         innerSx: "max-w-[440px] aspect-[1500/260] sm:max-w-[500px]",
      },
      {
         id: 9,
         name: "dentsu",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/dentsu_rcmnp4.png",
         outerSx: "order-10 w-1/2 sm:order-8 sm:w-1/3 md:order-11 md:w-1/3",
         innerSx: "max-w-[200px] aspect-[1250/269]",
      },
      {
         id: 10,
         name: "redone",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238619/sponsor/redone_d4jc5m.png",
         outerSx: "order-9 w-1/3 sm:order-11 sm:w-1/3 md:order-10",
         innerSx: "max-w-[200px] aspect-[1200/263]",
      },
      {
         id: 11,
         name: "carat a dentsu company",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/carat-dentsu_pnbntp.png",
         outerSx: "order-11 w-1/2 sm:order-9 sm:w-1/3 md:order-12 md:w-1/3",
         innerSx: "max-w-[200px] aspect-[1305/429]",
      },
      {
         id: 12,
         name: "topanga new times",
         imgSrc:
            "https://res.cloudinary.com/di7ejl8jx/image/upload/v1690238618/sponsor/topanga-new-times_aneghe.png",
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
         <FullBleedContainer sx="bg-background" childSx="py-20 lg:py-32">
            {/* --- Become a Sponsor --- */}
            <section>
               <div className="flex flex-col items-center justify-center px-4 md:flex-row md:flex-wrap min-[1400px]:px-0">
                  <SectionSubheader
                     header="Become a Sponsor"
                     sx="w-full"
                     headerSx="text-center"
                     borderSx="md:mx-auto"
                  />
                  <div className="w-full md:w-[45%] md:pr-8 lg:w-2/5">
                     <h3 className="mt-4 text-center text-2xl sm:mt-8 sm:text-3xl md:text-left">
                        Together
                     </h3>
                     <p className="mt-4 text-center font-normal text-dark-grey md:text-left">
                        Inspire and educate the community to take action for a
                        better tomorrow.
                     </p>
                     <div className="mt-8 w-fit max-md:hidden">
                        <Button
                           href="https://docs.google.com/forms/d/e/1FAIpQLSepzdvzdtVuukRfvJOAFOVyJQOK6JHnLa8Pt5RqwoAX96gTYw/viewform?usp=sharing"
                           variant="primary"
                           size="xl"
                        >
                           Become a Sponsor
                        </Button>
                     </div>
                  </div>
                  <Card
                     variant="image"
                     sx="w-full max-w-[550px] aspect-[800/388] mt-8 md:w-[55%] md:h-[270px] md:mr-0 lg:w-3/5 lg:h-full lg:max-w-[720px]"
                  >
                     <Image
                        alt="itisOVERDUE team gathered outside"
                        src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1689971775/sponsor/sponsor_iinfeq.jpg"
                        fill
                        className="object-cover"
                     />
                  </Card>
                  <div className="mt-8 md:hidden">
                     <Button
                        href="https://docs.google.com/forms/d/e/1FAIpQLSepzdvzdtVuukRfvJOAFOVyJQOK6JHnLa8Pt5RqwoAX96gTYw/viewform?usp=sharing"
                        variant="primary"
                        size="xl"
                     >
                        Become a Sponsor
                     </Button>
                  </div>
               </div>
            </section>

            {/* --- Join Our Sponsors --- */}
            <section className="mt-24">
               <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap">
                  <SectionSubheader
                     header="Join our Sponsors"
                     sx="w-full"
                     headerSx="text-center"
                     borderSx="md:mx-auto"
                  />
                  {/* --- Sponsor Logos --- */}
                  <div className="mt-4 flex w-full flex-wrap items-center lg:px-12 xl:px-20">
                     {sponsors.map((logo) => {
                        return (
                           <div
                              key={logo.id}
                              className={`p-4 sm:p-6 ${logo.outerSx}`}
                           >
                              <div
                                 className={`relative mx-auto ${logo.innerSx}`}
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
                  {/* --- Why Corporate Cleanup --- */}
                  <div className="mt-12 w-full lg:mt-16">
                     <div className="relative flex w-full flex-col items-center justify-center md:flex-row md:gap-x-4">
                        <Card
                           variant="text"
                           sx="flex flex-col justify-center basis-full max-w-none md:basis-[70%] xl:basis-3/4 xl:min-h-[428px]"
                        >
                           <h3 className="text-xl sm:text-2xl">
                              Why Corporate Cleanup?
                           </h3>
                           <p className="mb-6 mt-4">
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
                  <div className="mt-12 w-full md:mt-20 xl:mt-24">
                     {/* --- Private Event --- */}
                     <div className="relative flex w-full flex-col items-center justify-center md:flex-row md:gap-x-4">
                        <Card
                           variant="text"
                           sx="flex flex-col justify-center basis-full max-w-none md:basis-[70%] lg:order-2 xl:basis-3/4 lg:min-h-[428px]"
                        >
                           <h3 className="text-xl sm:text-2xl">
                              Private Event
                           </h3>
                           <p className="py-4 text-lg">
                              $1250 tax deductible donation:
                           </p>
                           <div className="px-4">
                              <ul className="list-disc">
                                 <li>You pick the location</li>
                                 <li>
                                    You can bring as many as 50 people. If more
                                    than 50 people, additional $5/ person.
                                 </li>
                                 <li>
                                    OVERDUE will post on our social media
                                    during, and after about the event.
                                 </li>
                                 <li>
                                    OVERDUE will include your logo on our
                                    website.
                                 </li>
                              </ul>
                           </div>
                        </Card>
                        <Card
                           variant="image"
                           sx="basis-[70vw] max-h-[508px] aspect-[381/557] mt-[-35px] md:basis-[30%] md:max-h-[428px] md:mt-0 lg:order-1 xl:basis-1/4"
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
                  <div className="mt-12 w-full md:mt-20 lg:flex lg:flex-row lg:items-start lg:gap-x-4 xl:mt-24">
                     {/* --- Schedule Example --- */}
                     <div className="mt-12 flex flex-col items-center justify-center lg:w-1/2">
                        <Card
                           variant="image"
                           sx="w-full max-w-[600px] aspect-[627/836] sm:w-[590px] lg:w-full lg:ml-0"
                        >
                           <Image
                              alt="itisOVERDUE volunteers working outside"
                              src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690417347/sponsor/sponsor_gb2taz.jpg"
                              fill
                              className="object-contain"
                           />
                        </Card>
                        <Card
                           variant="textDark"
                           sx="max-w-[600px] mt-[-200px] sm:mt-[-390px] sm:h-[390px] sm:max-lg:w-[590px] lg:h-auto lg:mt-[-250px] lg:ml-0 min-[1400px]:h-[336px] min-[1400px]:mt-[-336px]"
                        >
                           <h3 className="text-xl sm:text-2xl">
                              Schedule Example
                           </h3>
                           <ul className="list-none text-sm sm:text-base">
                              <li className="py-2">9:00AM: OVERDUE setup</li>
                              <li className="py-2">
                                 9:45AM - 10:00AM: Team meet and greet
                              </li>
                              <li className="py-2">
                                 10:00AM - 10:10AM: Safety talk and quick
                                 training
                              </li>
                              <li className="py-2">
                                 10:10AM - 12:00PM: Clean up, sort trash @
                                 Venice Beach
                              </li>
                              <li className="py-2">
                                 12:00PM - 12:20PM: Final sorting for
                                 recyclables &amp; Report
                              </li>
                              <li className="py-2">
                                 12:20PM: Data collection in detail using
                                 Litteratti app (optional)
                              </li>
                           </ul>
                        </Card>
                     </div>
                     {/* --- Good To Know --- */}
                     <div className="mt-12 flex flex-col items-center justify-center lg:w-1/2">
                        <Card
                           variant="image"
                           sx="w-full max-w-[600px] aspect-[627/836] sm:w-[590px] lg:w-full lg:mr-0"
                        >
                           <Image
                              alt="itisOVERDUE volunteers working outside"
                              src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690431157/sponsor/sponsor_ax4esc.jpg"
                              fill
                              className="object-contain"
                           />
                        </Card>
                        <Card
                           variant="textDark"
                           sx="max-w-[600px] mt-[-200px] sm:mt-[-390px] sm:h-[390px] sm:max-lg:w-[590px] lg:h-auto lg:min-h-[250px] lg:mt-[-250px] lg:mr-0 min-[1400px]:h-[336px] min-[1400px]:mt-[-336px]"
                        >
                           <h3 className="text-xl sm:text-2xl">Good To Know</h3>
                           <p className="py-4 text-sm sm:text-base">
                              <b>We will bring:</b> canopy, tarp, trash bags, 40
                              grabbers, gloves, buckets, water cooler, foldable
                              table, shifters for microplastics, itisOVERDUE
                              banners, carts, scale, etc.
                           </p>
                           <p className="text-sm sm:text-base">
                              (If you have branded supplies let us know.)
                           </p>
                        </Card>
                     </div>
                  </div>
                  {/* --- For the Participants --- */}
                  <div className="relative mt-12 w-full md:mt-20 xl:mt-24">
                     <Card
                        variant="image"
                        sx="w-full h-[90vw] min-h-[416px] max-h-[576px] lg:h-[656px] lg:max-h-[656px] aspect-[1236/656]"
                     >
                        <Image
                           alt="itisOVERDUE team gathered outside"
                           src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690480845/sponsor/sponsor_sc9ez1.jpg"
                           fill
                           className="scale-100 object-cover"
                        />
                     </Card>
                     <Card
                        variant="textDark"
                        sx="mt-[-150px] sm:mt-[-200px] lg:w-[65%] lg:h-[656px] lg:mt-[-656px] lg:ml-0 lg:rounded-l-3xl lg:rounded-r-none xl:w-[55%] min-[1400px]:w-[45%]"
                     >
                        <h3 className="text-xl sm:text-2xl">
                           For the Participants
                        </h3>
                        <p className="py-2 text-sm font-bold sm:text-base">
                           Appropriate Attire:
                        </p>
                        <p className="py-2 text-sm sm:text-base">
                           Wear bright colors and close-toed shoes
                        </p>
                        <p className="py-2 text-sm font-bold sm:text-base">
                           Gear:
                        </p>
                        <p className="py-2 text-sm sm:text-base">
                           BYO water bottle (Please do not bring single use
                           plastic bottled drinks)
                        </p>
                        <p className="py-2 text-sm font-bold sm:text-base">
                           Liability:
                        </p>
                        <p className="py-2 text-sm sm:text-base">
                           Since this will be a private event for a sponsorship,
                           your business will be responsible for any
                           liabilities.
                        </p>
                        <p className="py-2 text-sm font-bold sm:text-base">
                           Photo/video release:
                        </p>
                        <p className="py-2 text-sm sm:text-base">
                           We will request all participants to e-sign on-site
                           upon arrival.
                        </p>
                        <p className="py-2 text-sm font-bold sm:text-base">
                           Cancellation/ Rescheduling (due to extreme weather):
                        </p>
                        <p className="py-2 text-sm sm:text-base">
                           It will be up to you, so if you need to cancel or
                           reschedule, please let us know at least 12 hours in
                           advance.
                        </p>
                     </Card>
                  </div>
               </div>
            </section>

            {/* --- Let's Do This --- */}
            <section className="mt-24">
               <div className="flex flex-col items-center justify-center">
                  <SectionSubheader
                     header="Let's Do This"
                     sx="w-full"
                     headerSx="text-center"
                     borderSx="md:mx-auto"
                  />
                  <Card
                     variant="image"
                     sx="w-[70vw] aspect-[962/646] max-w-[646px] mt-8 sm:mt-12"
                  >
                     <Image
                        alt="itisOVERDUE team gathered outside"
                        src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690498715/sponsor/sponsor_zbhkww.jpg"
                        fill
                        className="scale-110 object-cover md:scale-100"
                     />
                  </Card>
                  <Card
                     variant="text"
                     sx="w-full mt-[-30px] md:mt-[-60px] lg:w-[440px] lg:mt-[-90px] shadow-[10px_12px_2px_0px_rgba(0,0,0,0.8)]"
                  >
                     <div className="mx-auto w-fit text-darker-grey">
                        <div className="flex items-center">
                           <div className="mr-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary sm:mr-4 sm:h-12 sm:w-12 lg:mr-10">
                              <EnvelopeIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                           </div>
                           <span className="sm:text-lg">
                              admin@itisoverdue.org
                           </span>
                        </div>
                        <div className="my-2 flex items-center sm:my-4">
                           <div className="mr-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary sm:mr-4 sm:h-12 sm:w-12 lg:mr-10">
                              <AtSymbolIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                           </div>
                           <span className="sm:text-lg">@itisoverdue</span>
                        </div>
                        <div className="flex items-center">
                           <div className="mr-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary sm:mr-4 sm:h-12 sm:w-12 lg:mr-10">
                              <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                           </div>
                           <span className="sm:text-lg">(818) 854-5273</span>
                        </div>
                     </div>
                  </Card>
                  <div className="mt-12 sm:mt-16">
                     <Button
                        href="https://docs.google.com/forms/d/e/1FAIpQLSepzdvzdtVuukRfvJOAFOVyJQOK6JHnLa8Pt5RqwoAX96gTYw/viewform?usp=sharing"
                        variant="primary"
                        size="xl"
                     >
                        Become a Sponsor
                     </Button>
                  </div>
               </div>
            </section>
         </FullBleedContainer>
      </div>
   )
}

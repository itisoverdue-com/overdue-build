"use client"
import { useRef } from "react"
import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Image from "next/image"
import Button from "@/components/shared/Button"
import {
   ArrowDownCircleIcon,
   UserCircleIcon,
} from "@heroicons/react/24/outline"

const positions = [
   "App Developer",
   "Chapter Leader",
   "Community Outreach",
   "Data Analysis",
   "Data Entry",
   "Educational Coordinator",
   "Grant Writer",
   "Graphic Design",
   "International Outreach",
   "Marketing Assistant",
   "Website Maintenance",
   "Website Content Creator",
]
export default function Join() {
   const rolesSection = useRef()
   const applySection = useRef()
   const scrollDown = (ref) => {
      window.scrollTo({
         top: ref.current.offsetTop,
         behavior: "smooth",
      })
   }
   return (
      <div>
         <PageHero
            route="join"
            header="Join Our Team"
            backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441392/backgrounds/volunteer_jo6rbb.jpg"
         />
         <FullBleedContainer
            sx="bg-background"
            childSx="py-20 lg:py-32 flex flex-col justify-center items-center"
         >
            {/* Image, Card to Apply Now */}
            <section className="relative w-full">
               {/* Image */}
               <div className="aspect-square  h-auto rounded-3xl overflow-hidden relative mx-auto w-full md:aspect-video lg:w-10/12 lg:ml-auto ">
                  <Image
                     src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690058756/join/IMG_8016_1_cnwb8t.jpg"
                     alt="overdue-team"
                     fill
                     style={{ objectFit: "cover" }}
                     sizes="80%"
                  />
               </div>

               {/* Card to Apply */}
               <div className="absolute  bg-white rounded-3xl shadow-lg z-10 flex flex-col space-y-3 top-2/3 p-5 w-11/12 left-1/2 -translate-x-1/2 md:w-3/4 lg:top-auto lg:left-0 lg:-translate-x-0 lg:space-y-6 lg:p-10 lg:w-1/2 lg:-bottom-10">
                  {/* Card Header */}
                  <h3 className="text-xl lg:text-4xl font-semibold text-start">
                     Join a passionate team that cares about the environment!
                  </h3>

                  {/* Card Subheader */}
                  <h4 className="text-base lg:text-2xl font-normal">
                     Embark on a rewarding journey with a dedicated team that
                     shares your passion for the environment and making a
                     positive impact.
                  </h4>

                  {/* Apply Now, See Roles */}
                  <div className="flex space-y-3 lg:flex-row flex-col lg:space-y-0 lg:space-x-3">
                     <Button
                        onClick={() => scrollDown(applySection)}
                        size="lg"
                        variant="primary"
                        fullWidth
                     >
                        <span>Apply Now</span>{" "}
                        <ArrowDownCircleIcon className="w-6 h-6 ml-1.5" />
                     </Button>
                     <Button
                        onClick={() => scrollDown(rolesSection)}
                        size="lg"
                        variant="dark"
                        fullWidth
                     >
                        <span>View Roles</span>{" "}
                        <UserCircleIcon className="w-6 h-6 ml-1.5" />
                     </Button>
                  </div>
               </div>
            </section>

            {/* Roles */}
            <section className="mt-64 md:mt-44 lg:mt-32 w-full">
               <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-lg mx-auto pt-10 px-10 pb-2 flex flex-col space-y-8 md:space-y-10">
                  <h4 className="text-center font-bold tracking-wide ">
                     Available Positions
                  </h4>

                  {/* Grid of Positions */}
                  <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-3 lg:gap-y-5">
                     {positions.map((item) => (
                        <li
                           key={item}
                           onClick={() => scrollDown(applySection)}
                           className="text-center hover:underline hover:cursor-pointer lg:text-start lg:text-lg"
                        >
                           {item}
                        </li>
                     ))}
                  </ul>
                  <p className="text-sm lg:text-base text-center">
                     + Any creatives and those passionate about the environment
                  </p>

                  {/* Ref for Scroll */}
                  <div
                     ref={rolesSection}
                     className="bg-transparent text-transparent"
                  />
               </div>
            </section>

            {/* Apply Card */}
            <div className="mt-12 md:mt-14 lg:mt-28 bg-darker-grey text-white z-[1]  pt-6 pb-3 px-8 sm:pt-8 sm:pb-4 sm:px-14 shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] text-left leading-8 overflow-hidden rounded-3xl md:text-lg md:leading-10 flex flex-col space-y-3 md:space-y-6 md:w-2/3 md:text-start lg:w-1/3">
               <h4>
                  Ready to join <span className="text-primary">OVERDUE</span>?
               </h4>
               <p className="font-medium text-lg md:text-xl">
                  We believe that everyone has a role to play in keeping our
                  communities clean!
               </p>
               <Button
                  variant={"primary"}
                  href="/"
                  target="_blank"
                  fullWidth
                  size="lg"
               >
                  Click Here to Apply
               </Button>

               {/* Ref for Scroll */}
               <div
                  ref={applySection}
                  className="bg-transparent text-transparent"
               />
            </div>
         </FullBleedContainer>
      </div>
   )
}

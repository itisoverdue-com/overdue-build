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
               <div className="aspect-video h-auto w-10/12 rounded-3xl overflow-hidden relative ml-auto">
                  <Image
                     src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690058756/join/IMG_8016_1_cnwb8t.jpg"
                     alt="overdue-team"
                     fill
                     style={{ objectFit: "cover" }}
                     sizes="80%"
                  />
               </div>

               {/* Card to Apply */}
               <div className="absolute -bottom-10 bg-white rounded-3xl shadow-lg p-10 w-1/2 z-10 flex flex-col space-y-6">
                  {/* Card Header */}
                  <h3 className="text-4xl font-semibold text-start">
                     Join a passionate team that cares about the environment!
                  </h3>

                  {/* Card Subheader */}
                  <h4 className="font-normal">
                     Embark on a rewarding journey with a dedicated team that
                     shares your passion for the environment and making a
                     positive impact.
                  </h4>

                  {/* Apply Now, See Roles */}
                  <div className="flex space-x-3">
                     <Button
                        onClick={() => scrollDown(applySection)}
                        size="xl"
                        variant="primary"
                        fullWidth
                     >
                        <span>Apply Now</span>{" "}
                        <ArrowDownCircleIcon className="w-6 h-6 ml-1.5" />
                     </Button>
                     <Button
                        onClick={() => scrollDown(rolesSection)}
                        size="xl"
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
            <section className="mt-32 w-full">
               <div className="w-1/2 bg-white rounded-3xl shadow-lg mx-auto pt-10 px-10 pb-2 flex flex-col space-y-10">
                  <h4 className="text-center font-bold tracking-wide ">
                     Available Positions
                  </h4>

                  {/* Grid of Positions */}
                  <ul className="grid grid-cols-3 gap-y-5">
                     {positions.map((item) => (
                        <li
                           key={item}
                           onClick={() => scrollDown(applySection)}
                           className="text-lg hover:underline hover:cursor-pointer"
                        >
                           {item}
                        </li>
                     ))}
                  </ul>
                  <p className="text-center">
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
            <div className="mt-28 bg-darker-grey text-white z-[1] w-1/3 pt-6 pb-3 px-8 sm:pt-8 sm:pb-4 sm:px-14 shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] text-left leading-8 overflow-hidden rounded-3xl md:text-lg md:leading-10 flex flex-col space-y-6">
               <h4>
                  Ready to join <span className="text-primary">OVERDUE</span>?
               </h4>
               <p className="font-medium text-xl">
                  We believe that everyone has a role to play in keeping our
                  communities clean!
               </p>
               <Button
                  variant={"primary"}
                  href="/"
                  target="_blank"
                  fullWidth
                  size="xl"
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

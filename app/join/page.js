"use client"
import { useRef } from "react"
import PageHero from "@/components/shared/PageHero"
import Button from "@/components/shared/Button"
import Card from "@/components/shared/Card"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import { UserCircleIcon, ClipboardIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

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
            sx="bg-background dark:bg-darkest-grey"
            childSx="py-20 lg:py-32 flex flex-col justify-center items-center"
         >
            {/* Image, Card to Apply Now */}
            <section className="relative mb-40 w-full md:mb-20 lg:mb-10 lg:h-[70vh]">
               {/* Image */}
               <div className="relative mx-auto aspect-square h-auto w-full overflow-hidden rounded-3xl  md:aspect-video lg:ml-auto lg:w-10/12 ">
                  <Image
                     src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690058756/join/IMG_8016_1_cnwb8t.jpg"
                     alt="overdue-team"
                     fill
                     style={{ objectFit: "cover" }}
                     sizes="80%"
                  />
               </div>

               {/* Card to Apply */}
               <div className="absolute  -bottom-40 left-1/2 z-10 flex w-11/12 -translate-x-1/2 flex-col space-y-3 rounded-3xl bg-white p-5 shadow-lg md:-bottom-20 md:w-3/4 lg:-bottom-10 lg:left-0 lg:w-1/2 lg:-translate-x-0 lg:space-y-6 lg:p-10 ">
                  {/* Card Header */}
                  <h3 className="text-start text-xl font-semibold lg:text-4xl">
                     Join a passionate team that cares about the environment!
                  </h3>

                  {/* Card Subheader */}
                  <h4 className="text-base font-normal lg:text-2xl">
                     Embark on a rewarding journey with a dedicated team that
                     shares your passion for the environment and making a
                     positive impact.
                  </h4>

                  {/* Apply Now, See Roles */}
                  <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0">
                     <Button
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc0Z5pflTL4IqI8AECPfMcTc6g9doGUrgr3ZUbp63BR-knRZA/viewform?usp=sharing"
                        target="_blank"
                        size="lg"
                        variant="primary"
                        fullWidth
                     >
                        <span>Apply Now</span>{" "}
                        <ClipboardIcon className="ml-1.5 h-6 w-6" />
                     </Button>
                     <Button
                        onClick={() => scrollDown(rolesSection)}
                        size="lg"
                        variant="dark"
                        fullWidth
                     >
                        <span>View Roles</span>{" "}
                        <UserCircleIcon className="ml-1.5 h-6 w-6" />
                     </Button>
                  </div>
               </div>
            </section>

            {/* Roles */}
            <section className="mt-12 w-full md:mt-14 lg:mt-28">
               <div className="mx-auto flex w-full flex-col space-y-8 rounded-3xl bg-white px-10 pb-2 pt-10 shadow-lg md:space-y-10 lg:w-1/2">
                  <h4 className="text-center font-bold tracking-wide ">
                     Available Positions
                  </h4>

                  {/* Grid of Positions */}
                  <ul className="grid gap-y-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-5">
                     {positions.map((item) => (
                        <li
                           key={item}
                           onClick={() => scrollDown(applySection)}
                           className="text-center hover:cursor-pointer hover:underline lg:text-start lg:text-lg"
                        >
                           {item}
                        </li>
                     ))}
                  </ul>
                  <p className="text-center text-sm lg:text-base">
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
            <Card sx="py-6 px-8 mt-12 md:mt-14 lg:mt-28 bg-darker-grey text-white overflow-hidden rounded-3xl flex flex-col space-y-3 md:space-y-6 md:w-2/3 md:text-start lg:w-1/3">
               <h4>
                  Ready to join <span className="text-primary">OVERDUE</span>?
               </h4>
               <p className="text-lg font-medium md:text-xl">
                  We believe that everyone has a role to play in keeping our
                  communities clean!
               </p>
               <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0Z5pflTL4IqI8AECPfMcTc6g9doGUrgr3ZUbp63BR-knRZA/viewform?usp=sharing"
                  size="lg"
                  variant="primary"
                  target="_blank"
                  fullWidth
               >
                  <span>Click here to Apply Now!</span>{" "}
                  <ClipboardIcon className="ml-1.5 h-6 w-6" />
               </Button>
            </Card>
         </FullBleedContainer>
      </div>
   )
}

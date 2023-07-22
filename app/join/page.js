import PageHero from "@/components/shared/PageHero"
import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Image from "next/image"
import Button from "@/components/shared/Button"
import {
   ArrowDownCircleIcon,
   UserCircleIcon,
} from "@heroicons/react/24/outline"

export default function Join() {
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
            <div className="relative  w-full">
               {/* Image */}
               <div className="aspect-video h-auto w-10/12 rounded-3xl overflow-hidden relative ml-auto">
                  <Image
                     src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1690058756/join/IMG_8016_1_cnwb8t.jpg"
                     alt="overdue-team"
                     fill
                     style={{ objectFit: "cover" }}
                  />
               </div>

               {/* Card to Apply */}
               <div className="absolute -bottom-10 bg-white rounded-3xl shadow-xl p-10 w-1/2 z-10 flex flex-col space-y-6">
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
                        href="#about"
                        size="xl"
                        variant="primary"
                        fullWidth
                     >
                        <span>Apply Now</span>{" "}
                        <ArrowDownCircleIcon className="w-6 h-6 ml-1" />
                     </Button>
                     <Button href="#roles" size="xl" variant="dark" fullWidth>
                        <span>View Roles</span>{" "}
                        <UserCircleIcon className="w-6 h-6 ml-1" />
                     </Button>
                  </div>
               </div>
            </div>
         </FullBleedContainer>
      </div>
   )
}

import Button from "@/components/shared/Button"
import { HomeIcon } from "@heroicons/react/24/outline"

import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"

export default function NotFound() {
   return (
      <FullBleedContainer
         imgSx="scale-[1.02] brightness-[.5]"
         childSx="py-20 lg:py-32"
         backgroundImageSrc="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441392/landing/hero_yntaig.jpg"
      >
         <section className="flex flex-col items-center justify-center px-4 py-0 text-center text-white">
            <h3 className="flex items-center gap-x-2 text-6xl font-light">
               Oops!
            </h3>
            <p className="mt-16 text-xl font-light md:mt-24 xl:mt-32">
               That page doesn&apos;t exist. Click a link below to get back to
               cleaning up 🌎!
            </p>
            <p className="mt-2 text-sm">(Error Code 404)</p>
            <ul className="mt-16 flex flex-col gap-y-6 md:mt-24 md:w-[620px] md:flex-row md:justify-between xl:mt-32">
               <li>
                  <Button
                     variant="outline"
                     href="/"
                     size="lg"
                     sx="flex justify-center items-center gap-x-1"
                  >
                     <HomeIcon className="h-4 w-4" />
                     Home
                  </Button>
               </li>
               <li>
                  <Button
                     variant="outline"
                     href="/about"
                     size="lg"
                     sx="flex justify-center"
                  >
                     About
                  </Button>
               </li>
               <li>
                  <Button
                     variant="outline"
                     href="/blog"
                     size="lg"
                     sx="flex justify-center"
                  >
                     Blog
                  </Button>
               </li>
               <li>
                  <Button
                     variant="outline"
                     href="/events"
                     size="lg"
                     sx="flex justify-center"
                  >
                     Events
                  </Button>
               </li>
            </ul>
         </section>
      </FullBleedContainer>
   )
}

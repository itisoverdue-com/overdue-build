import Image from "next/image"
import { usePathname } from "next/navigation"

import Card from "@/components/shared/Card"
import Button from "@/components/shared/Button"

export default function CleanupEvents() {
   const pathname = usePathname()
   return (
      <div className="mt-8 md:flex md:flex-wrap lg:flex-col">
         <Card
            variant="text"
            sx="md:order-1 md:w-full md:max-w-full lg:order-2 lg:w-2/3 lg:mr-2 lg:mt-[-500px] lg:max-w-[800px]"
         >
            <h3 className="text-xl sm:text-2xl">Cleanup Events</h3>
            {pathname === "/" ? (
               <p>
                  We are working to bring communities together by organizing
                  neighborhood beach, trail, and river trash cleanups.
               </p>
            ) : (
               <>
                  <p className="my-4">
                     OVERDUE is an L.A. based non-profit grassroots group of
                     volunteers. We are working to bring communities together by
                     organizing daily trash pickups, beach and river cleanups
                     and hiking events.
                  </p>
                  <p>
                     We believe that by cleaning up our direct surroundings, we
                     create a stronger and happier community to live in. Our
                     larger mission is to inspire and educate communities to
                     take action for a better tomorrow.
                  </p>
               </>
            )}
         </Card>
         <Card
            variant="image"
            sx="w-[75vw] max-w-[400px] aspect-[525/700] mt-[-100px] sm:mt-[-180px] md:order-2 md:w-3/5 lg:order-1 lg:w-[400px] lg:mt-0 lg:ml-8 xl:ml-12"
         >
            <Image
               alt="text"
               src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/events/primaryevent_tum70q.jpg"
               fill
               style={{ objectFit: "cover" }}
            />
         </Card>
         <div className="flex items-center justify-center mx-auto mt-8 md:order-3 md:w-2/5 lg:w-2/3 lg:max-w-[800px] lg:mr-0 lg:mt-12 xl:mt-16">
            <Button variant="primary" size="xl" href="/events">
               Check Events
            </Button>
         </div>
      </div>
   )
}

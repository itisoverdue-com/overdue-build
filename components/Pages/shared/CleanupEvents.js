import Image from "next/image"
import { usePathname } from "next/navigation"

import Card from "@/components/shared/Card"

export default function CleanupEvents({ loc }) {
   const pathname = usePathname()
   console.log("pathname: ", pathname)
   return (
      <div>
         <Card variant="image" sx="w-[75vw] aspect-[525/700]">
            <Image
               alt="text"
               src="https://res.cloudinary.com/di7ejl8jx/image/upload/v1688441387/events/primaryevent_tum70q.jpg"
               fill
               style={{ objectFit: "cover" }}
            />
         </Card>
         <Card variant="text">
            <h3>Cleanup Events</h3>
            <p>
               {pathname === "/"
                  ? "We are working to bring communities together by organizing neighborhood beach, trail, and river trash cleanups."
                  : "OVERDUE is an L.A. based non-profit grassroots group of volunteers. We are working to bring communities together by organizing daily trash pickups, beach and river cleanups and hiking events. We believe that by cleaning up our direct surroundings, we create a stronger and happier community to live in. Our larger mission is to inspire and educate communities to take action for a better tomorrow."}
            </p>
         </Card>
      </div>
   )
}

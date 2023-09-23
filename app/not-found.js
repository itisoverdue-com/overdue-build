import Link from "next/link"
import {
   ExclamationCircleIcon,
   ArrowLongLeftIcon,
} from "@heroicons/react/24/outline"

import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"

export default function NotFound() {
   return (
      <FullBleedContainer
         sx="bg-background dark:bg-darkest-grey"
         childSx="py-20 lg:py-32"
      >
         <section>
            <div className="flex flex-col items-center justify-center py-12 text-center">
               <h3 className="flex items-center gap-x-2">
                  <ExclamationCircleIcon className="h-6 w-6" />
                  404: Not Found
               </h3>
               <p className="pt-4">That page doesn&apos;t exist!</p>
               <div className="relative mx-auto mt-8 flex items-center justify-center dark:text-white md:order-3 md:w-2/5 lg:mt-12 lg:w-2/3 lg:max-w-[800px] xl:mt-16">
                  <Link href="/" className="flex gap-x-2">
                     <ArrowLongLeftIcon className="h-6 w-6" />
                     Return Home
                  </Link>
               </div>
            </div>
         </section>
      </FullBleedContainer>
   )
}

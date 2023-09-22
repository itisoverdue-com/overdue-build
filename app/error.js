"use client"

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

import FullBleedContainer from "@/components/Layout/Container/FullBleedContainer"
import Button from "@/components/shared/Button"

export default function Error({ error, reset }) {
   return (
      <FullBleedContainer
         sx="bg-background dark:bg-darkest-grey"
         childSx="py-20 lg:py-32"
      >
         <section>
            <div className="flex flex-col items-center justify-center py-12 text-center">
               <h3 className="flex items-center gap-x-2">
                  <ExclamationTriangleIcon className="h-6 w-6" />
                  There was a problem
               </h3>
               <p className="pt-4">
                  {error.message ? error.message : "An unknown error occurred."}
               </p>
               <div className="relative mx-auto mt-8 flex items-center justify-center md:order-3 md:w-2/5 lg:mt-12 lg:w-2/3 lg:max-w-[800px] xl:mt-16">
                  <Button
                     variant="primary"
                     darkVariant="grey"
                     size="xl"
                     onClick={() => reset()}
                  >
                     Try again
                  </Button>
               </div>
            </div>
         </section>
      </FullBleedContainer>
   )
}

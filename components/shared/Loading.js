import { GlobeAltIcon } from "@heroicons/react/24/outline"

export default function Loading() {
   return (
      <div className="mx-auto w-1/2 py-36 text-center text-light-grey md:w-1/4 lg:w-1/6">
         <GlobeAltIcon className="mx-auto inline-block animate-pulse dark:text-white" />
         <h3 className="mt-3 text-4xl dark:text-white">Loading...</h3>
      </div>
   )
}

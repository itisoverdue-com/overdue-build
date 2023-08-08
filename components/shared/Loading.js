import { GlobeAltIcon } from "@heroicons/react/24/outline"

export default function Loading() {
   return (
      <div className="w-1/2 md:w-1/4 lg:w-1/6 mx-auto text-light-grey py-36 text-center">
         <GlobeAltIcon className="animate-pulse mx-auto inline-block" />
         <h3 className="text-4xl mt-3">Loading...</h3>
      </div>
   )
}

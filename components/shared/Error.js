import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

export default function Error() {
   return (
      <div className=" mx-auto py-36 text-center text-light-grey lg:w-1/2">
         <ExclamationTriangleIcon className="mx-auto inline-block w-1/4 md:w-1/6 lg:w-1/4" />
         <h3 className="mt-3 text-2xl md:text-4xl">
            Oops, something went wrong.
         </h3>
      </div>
   )
}

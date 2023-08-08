import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"

export default function Error() {
   return (
      <div className=" lg:w-1/2 mx-auto text-light-grey py-36 text-center">
         <ExclamationTriangleIcon className="mx-auto inline-block w-1/4 md:w-1/6 lg:w-1/4" />
         <h3 className="text-2xl md:text-4xl mt-3">
            Oops, something went wrong.
         </h3>
      </div>
   )
}

import Link from "next/link"
import FullBleedContainer from "../Layout/Container/FullBleedContainer"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

export default function PageHero({ page, backgroundImageSrc = "" }) {
   return (
      <FullBleedContainer
         sx="h-[40vh] md:h-[50vh] bg-black bg-opacity-40"
         backgroundImageSrc={`${backgroundImageSrc}`}
         childSx="flex justify-center items-center h-full relative"
      >
         {/* Header w/ underline */}
         <h1>
            {page}
            <span className="mt-2 block w-1/3 border-t-8 border-primary rounded-2xl mx-auto" />
         </h1>

         {/* Breadcrumbs: Home --> {page} */}
         <div className="absolute left-3 -bottom-6 flex item-center space-x-3 text-white bg-darker-grey px-5 py-4 rounded-xl font-medium shadow-md">
            <Link
               href="/"
               className="hover:text-primary transition-colors duration-200"
            >
               Home
            </Link>
            <span>
               <ArrowLongRightIcon className="w-6 h-6 " />
            </span>
            <Link href={`/${page}`} className="text-primary capitalize">
               {page}
            </Link>
         </div>
      </FullBleedContainer>
   )
}
